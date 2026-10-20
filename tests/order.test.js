/**
 * 注文処理ロジックのテスト
 * ORDERS 配列の操作、ステータス遷移などを検証
 */

// ---- 注文ステータス定義 ----
const STATUS = {
  NEW: 'new',
  PENDING_PAYMENT: 'pending_payment',
  DONE: 'done',
  CANCELLED: 'cancelled',
};

/** ステータスに応じた表示テキストを返す（main.js の renderCard ロジックを抜粋） */
function getStatusText(status, lang = 'ja') {
  if (status === STATUS.DONE) return lang === 'vi' ? '✅ Hoàn thành' : '✅ 完了';
  if (status === STATUS.PENDING_PAYMENT) return lang === 'vi' ? '⏳ Chờ thanh toán' : '⏳ 入金待ち';
  if (status === STATUS.CANCELLED) return lang === 'vi' ? '❌ Đã hủy' : '❌ キャンセル';
  return lang === 'vi' ? '🆕 Mới' : '🆕 新規';
}

/** 注文のソート（新しい順）*/
function sortOrders(orders) {
  return [].concat(orders).sort((a, b) => (a.ts < b.ts ? 1 : -1));
}

/** pending/done/cancelled に分類 */
function classifyOrders(orders) {
  const sorted = sortOrders(orders);
  return {
    pending: sorted.filter(o => o.status !== STATUS.DONE && o.status !== STATUS.CANCELLED),
    done: sorted.filter(o => o.status === STATUS.DONE),
    cancelled: sorted.filter(o => o.status === STATUS.CANCELLED),
  };
}

/** _localOrderChanges による保護ロジック */
function mergeFirestoreOrder(fbOrder, localOrder, localChanges) {
  const o = Object.assign({}, fbOrder);
  if (!localOrder) return o;
  const age = localChanges[o.no] ? Date.now() - localChanges[o.no] : Infinity;
  if (localOrder.status && age < 120000) o.status = localOrder.status;
  if (localOrder.screenshotUrl) o.screenshotUrl = localOrder.screenshotUrl;
  return o;
}

// ---- テスト ----

describe('getStatusText()', () => {
  test('新規注文', () => {
    expect(getStatusText(STATUS.NEW, 'ja')).toBe('🆕 新規');
    expect(getStatusText(STATUS.NEW, 'vi')).toBe('🆕 Mới');
  });

  test('入金待ち', () => {
    expect(getStatusText(STATUS.PENDING_PAYMENT, 'ja')).toBe('⏳ 入金待ち');
  });

  test('完了', () => {
    expect(getStatusText(STATUS.DONE, 'ja')).toBe('✅ 完了');
  });

  test('キャンセル', () => {
    expect(getStatusText(STATUS.CANCELLED, 'ja')).toBe('❌ キャンセル');
  });
});

describe('sortOrders()', () => {
  const orders = [
    { no: '#NNY-AAA111', ts: '2026/01/01 10:00', status: STATUS.NEW },
    { no: '#NNY-BBB222', ts: '2026/01/03 15:00', status: STATUS.DONE },
    { no: '#NNY-CCC333', ts: '2026/01/02 12:00', status: STATUS.PENDING_PAYMENT },
  ];

  test('新しい順にソートされる', () => {
    const sorted = sortOrders(orders);
    expect(sorted[0].no).toBe('#NNY-BBB222');
    expect(sorted[1].no).toBe('#NNY-CCC333');
    expect(sorted[2].no).toBe('#NNY-AAA111');
  });

  test('元の配列は変更されない', () => {
    const copy = [...orders];
    sortOrders(orders);
    expect(orders[0].no).toBe(copy[0].no);
  });
});

describe('classifyOrders()', () => {
  const orders = [
    { no: '#NNY-A', ts: '2026/01/01', status: STATUS.NEW },
    { no: '#NNY-B', ts: '2026/01/02', status: STATUS.DONE },
    { no: '#NNY-C', ts: '2026/01/03', status: STATUS.CANCELLED },
    { no: '#NNY-D', ts: '2026/01/04', status: STATUS.PENDING_PAYMENT },
  ];

  test('pending: new と pending_payment が含まれる', () => {
    const { pending } = classifyOrders(orders);
    expect(pending.length).toBe(2);
    expect(pending.find(o => o.no === '#NNY-A')).toBeTruthy();
    expect(pending.find(o => o.no === '#NNY-D')).toBeTruthy();
  });

  test('done: 完了のみ', () => {
    const { done } = classifyOrders(orders);
    expect(done.length).toBe(1);
    expect(done[0].no).toBe('#NNY-B');
  });

  test('cancelled: キャンセルのみ', () => {
    const { cancelled } = classifyOrders(orders);
    expect(cancelled.length).toBe(1);
    expect(cancelled[0].no).toBe('#NNY-C');
  });
});

describe('mergeFirestoreOrder() - ローカル変更保護', () => {
  const fbOrder = { no: '#NNY-X', status: STATUS.NEW, tot: 100000 };
  const localOrder = { no: '#NNY-X', status: STATUS.DONE, tot: 100000 };

  test('2分以内の変更はローカルステータスを保持', () => {
    const localChanges = { '#NNY-X': Date.now() - 30000 }; // 30秒前
    const result = mergeFirestoreOrder(fbOrder, localOrder, localChanges);
    expect(result.status).toBe(STATUS.DONE);
  });

  test('2分超過後はFirestoreのステータスを採用', () => {
    const localChanges = { '#NNY-X': Date.now() - 130000 }; // 2分10秒前
    const result = mergeFirestoreOrder(fbOrder, localOrder, localChanges);
    expect(result.status).toBe(STATUS.NEW);
  });

  test('ローカル変更なしはFirestoreをそのまま使用', () => {
    const result = mergeFirestoreOrder(fbOrder, localOrder, {});
    expect(result.status).toBe(STATUS.NEW);
  });

  test('ローカル注文が存在しない場合はFirestoreをそのまま返す', () => {
    const result = mergeFirestoreOrder(fbOrder, null, {});
    expect(result.status).toBe(STATUS.NEW);
    expect(result.tot).toBe(100000);
  });
});
