# niconico-yasai — Codex Agent Guide

## プロジェクト概要

ハノイ向け野菜注文管理シングルページアプリ。  
Firebase Firestore でデータ管理、Sakura Internet + GitHub Pages にデプロイ。

## リポジトリ構造

```
niconico-yasai/
├── index.html        # メインアプリ HTML（ユーザー画面 + 管理画面を同一DOM内に持つ）
├── main.js           # 全ロジック（約3,600行）。バージョン管理は ?v=N クエリで行う
├── admin/
│   └── index.html   # 管理者専用エントリポイント。main.js を読み込む
├── owner/
│   └── index.html   # オーナー専用画面
├── firestore.rules   # Firestore セキュリティルール（要 Firebase CLI でデプロイ）
├── firebase.json     # Firebase プロジェクト設定
├── package.json      # Jest テスト設定
└── tests/
    ├── utils.test.js  # 純粋ユーティリティ関数のテスト
    └── order.test.js  # 注文処理ロジックのテスト
```

## テストの実行

```bash
npm install
npm test
```

- テストフレームワーク: **Jest 29 + jsdom**
- テスト対象: `tests/` ディレクトリ内の `*.test.js`
- **注意**: `main.js` はブラウザ環境 + Firebase SDK 依存のため直接 require できない。  
  テストはロジックを `tests/` 内で再定義して単体テストする方式を採用。

## main.js の主要構成

| 関数 / 変数 | 役割 |
|---|---|
| `PRODUCTS` | 商品リスト（配列） |
| `ORDERS` | 注文リスト（配列）。localStorage + Firestore で永続化 |
| `initApp()` | アプリ初期化。DOMContentLoaded で呼び出し |
| `openAdmin()` | 管理画面を開く。Firebase メール認証後に loadFromFirebase を呼ぶ |
| `loadFromFirebase(cb)` | Firestore から全データ取得してコールバック |
| `startFbPolling()` | 10秒ごとに Firestore をポーリングして差分反映 |
| `fbSaveOrder(o)` | 注文を Firestore に保存 |
| `renderAdminOrders2()` | 管理画面の注文リストを再描画 |
| `placeOrder()` | 顧客が注文確定 |
| `_localOrderChanges` | `{no: timestamp}` — 直近2分のステータス変更を保護 |
| `_localProductChanges` | `{id: timestamp}` — 直近5分の商品変更を保護（localStorage永続） |

## Firebase 認証フロー

- **一般ユーザー**: 匿名認証 (`signInAnonymously`)
- **管理者**: `localStorage.nny_admin_email` + `localStorage.nny_admin_fb_pwd` でメール認証  
  → 管理画面 設定 > Firebase > 「管理者Firebase認証」で設定可能

## Firestore セキュリティルール概要

| コレクション | read | write |
|---|---|---|
| `products` | 全員 | 認証済み |
| `orders` | メール認証のみ | 匿名含む認証済み（create）/ メール認証（update/delete） |
| `chats` | メール認証のみ | 匿名含む認証済み（create）/ メール認証（update/delete） |
| `settings` | メール認証のみ | メール認証のみ |

## デプロイ

`main` ブランチへの push で自動デプロイ:
1. **Sakura Internet FTP** (`https://hanoi-order.niconicoyasai.jp/`)
2. **GitHub Pages** (`https://sigpart.github.io/niconico-yasai/`)

JSバージョンを上げる場合は `index.html` と `admin/index.html` の `?v=N` を更新すること。

## コーディング規約

- ES5 互換（`var`、`function` 宣言）。`const`/`let`/アロー関数は使わない
- コメントは最小限。WHYが非自明な場合のみ
- HTML エスケープは必ず `escHtml()` を通す
- Firestore への書き込みは `fbSaveOrder()` / `fbSaveProduct()` 経由

## テスト追加ガイドライン

新しいテストは `tests/` 配下に `*.test.js` で追加。  
ブラウザ/Firebase依存のコードはテスト内でスタブ/再定義して単体テストする。

```js
// 例: main.js の純粋関数をテスト内で再定義
function myFunc(x) { return x * 2; }
test('倍になる', () => { expect(myFunc(3)).toBe(6); });
```
