/**
 * main.js からピュアなユーティリティ関数を抽出してテスト
 * ブラウザ/Firebase に依存しない純粋関数のみ対象
 */

// ---- テスト対象の関数をここで再定義 ----
// main.js はブラウザ環境前提なので、テスト用にロジックを抜き出す

/** vnd(): 価格を VND 形式にフォーマット */
function vnd(n) {
  if (typeof n !== 'number' || isNaN(n)) return '0₫';
  return n.toLocaleString('vi-VN') + '₫';
}

/** escHtml(): XSS対策のHTMLエスケープ */
function escHtml(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** 注文番号の形式チェック */
function isValidOrderNo(no) {
  return /^#NNY-[A-Z0-9]{4}\d{3}$/.test(no);
}

/** isValidOrder(): Firestoreルールと同等のバリデーション */
function isValidOrder(data) {
  return (
    data &&
    typeof data.name === 'string' &&
    data.name.length > 0 &&
    data.name.length <= 100 &&
    typeof data.tot === 'number' &&
    data.tot >= 0 &&
    data.tot <= 50000000
  );
}

// ---- テスト ----

describe('vnd()', () => {
  test('正の整数をフォーマットする', () => {
    expect(vnd(100000)).toMatch(/100/);
    expect(vnd(100000)).toContain('₫');
  });

  test('0を返す', () => {
    expect(vnd(0)).toBe('0₫');
  });

  test('NaNは0を返す', () => {
    expect(vnd(NaN)).toBe('0₫');
  });

  test('文字列は0を返す', () => {
    expect(vnd('abc')).toBe('0₫');
  });
});

describe('escHtml()', () => {
  test('< > & をエスケープする', () => {
    expect(escHtml('<script>alert(1)</script>')).toBe('&lt;script&gt;alert(1)&lt;/script&gt;');
  });

  test('" をエスケープする', () => {
    expect(escHtml('"hello"')).toBe('&quot;hello&quot;');
  });

  test("' をエスケープする", () => {
    expect(escHtml("it's")).toBe('it&#39;s');
  });

  test('nullは空文字を返す', () => {
    expect(escHtml(null)).toBe('');
    expect(escHtml(undefined)).toBe('');
    expect(escHtml('')).toBe('');
  });

  test('& をエスケープする', () => {
    expect(escHtml('a & b')).toBe('a &amp; b');
  });
});

describe('isValidOrder()', () => {
  test('有効な注文データ', () => {
    expect(isValidOrder({ name: '田中太郎', tot: 150000 })).toBe(true);
  });

  test('nameが空はNG', () => {
    expect(isValidOrder({ name: '', tot: 150000 })).toBe(false);
  });

  test('nameが100文字超はNG', () => {
    expect(isValidOrder({ name: 'a'.repeat(101), tot: 150000 })).toBe(false);
  });

  test('totが負数はNG', () => {
    expect(isValidOrder({ name: '田中', tot: -1 })).toBe(false);
  });

  test('totが5000万超はNG', () => {
    expect(isValidOrder({ name: '田中', tot: 50000001 })).toBe(false);
  });

  test('totが0はOK', () => {
    expect(isValidOrder({ name: '田中', tot: 0 })).toBe(true);
  });

  test('nullはNG', () => {
    expect(isValidOrder(null)).toBeFalsy();
  });
});

describe('isValidOrderNo()', () => {
  test('正しい形式の注文番号', () => {
    // 実際に生成される形式: #NNY-[A-Z0-9]{4}[0-9]{3}
    // 例: #NNY-ABCD123
    expect(isValidOrderNo('#NNY-ABCD123')).toBe(true);
    expect(isValidOrderNo('#NNY-1A2B456')).toBe(true);
  });

  test('不正な形式', () => {
    expect(isValidOrderNo('NNY-ABCD123')).toBe(false); // #なし
    expect(isValidOrderNo('#NNY-abcd123')).toBe(false); // 小文字
    expect(isValidOrderNo('#NNY-ABC123')).toBe(false);  // 4文字未満
  });
});
