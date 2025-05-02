# NestJS デザインパターン学習用アプリ

このプロジェクトは、NestJS を使って以下の GoF デザインパターンの動作を学ぶためのサンプルです。

---

## ✅ 含まれているパターン（★★★ 頻出・必須レベル）

- **Singleton**：インスタンスを1つに制限
- **Factory Method** / **Abstract Factory**：オブジェクト生成の委譲
- **Strategy**：アルゴリズムの切り替え
- **Observer**：イベント通知
- **Template Method**：処理の共通化とカスタマイズ
- **Decorator**：機能の柔軟な追加
- **Builder**：複雑なオブジェクトの構築手順を分離
- **Adapter**：互換性のないインタフェースの橋渡し
- **Bridge**：抽象と実装の分離
- **Proxy**：アクセス制御や遅延処理の代理
- **Command**：操作をオブジェクトとして扱う
- **State**：状態に応じて振る舞いを変化
- **Composite**：ツリー構造でのオブジェクト操作
- **Chain of Responsibility**：処理を責任のある複数オブジェクトに委譲

---

## 🚀 起動方法

### 1. リポジトリをクローン or ZIP を解凍

```bash
cd nest-patterns-sample
```

### 2. 依存パッケージをインストール

```bash
npm install
```

> ※ `@nestjs/platform-express@10.x` が必要です。NestJS 10 系で統一されています。

### 3. 開発モードで起動

```bash
npm run start:dev
```

---

## 🔍 動作確認

以下のエンドポイントにアクセスして、各パターンの挙動を確認できます：

| パターン                | エンドポイント          | 説明                                             |
|-------------------------|-------------------------|--------------------------------------------------|
| Singleton               | `GET /singleton`        | ログ出力（Singleton）                            |
| Factory                 | `GET /factory`          | Windows ボタン生成                               |
| Strategy                | `GET /strategy`         | PayPal で支払い処理                              |
| Observer                | `GET /observer`         | 観察者にイベント通知                             |
| Template Method         | `GET /template`         | 日課ルーティン実行                               |
| Decorator               | `GET /decorator`        | コーヒーにミルク追加                             |
| Builder                 | `GET /builder`          | ビルダーパターンでコーヒーを構築                |
| Adapter                 | `GET /adapter`          | 既存API（英語）を日本語に変換                    |
| Bridge                  | `GET /bridge`           | リモコンからTVを操作（抽象/実装分離）           |
| Proxy                   | `GET /proxy`            | 遅延初期化でデータを取得                         |
| Command                 | `GET /command`          | コマンドをオブジェクト化し、呼び出しを実行      |
| State                   | `GET /state`            | 状態に応じて異なる振る舞いを切り替え            |
| Composite               | `GET /composite`        | 複数のオブジェクトをツリー構造で一括操作        |
| Chain of Responsibility | `GET /chain?type=auth`  | 処理を順に渡して最適なオブジェクトが処理を担当  |

```bash
curl http://localhost:3000/state
# 出力: 電源オンの処理 または 電源オフの処理
```

---

## 📁 ディレクトリ構成（src）

```
nest-patterns-sample/
├── node_modules/
├── src/
│   ├── adapter/
│   ├── bridge/
│   ├── builder/
│   ├── chain/
│   ├── command/
│   ├── composite/
│   ├── decorator/
│   ├── factory/
│   ├── observer/
│   ├── proxy/
│   ├── singleton/
│   ├── state/
│   ├── strategy/
│   ├── template/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

---

## 🧠 補足

- 各サービスは NestJS の DI により Singleton として提供されています。
- 学習用に簡易的な実装を採用しており、今後拡張も容易です。
