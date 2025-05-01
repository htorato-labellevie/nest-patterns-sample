# NestJS デザインパターン学習用アプリ

このプロジェクトは、NestJS を使って以下の GoF デザインパターンの動作を学ぶためのサンプルです。

## ✅ 含まれているパターン（★★★ 頻出・必須レベル）

- **Singleton**：インスタンスを1つに制限
- **Factory Method** / **Abstract Factory**：オブジェクト生成の委譲
- **Strategy**：アルゴリズムの切り替え
- **Observer**：イベント通知
- **Template Method**：処理の共通化とカスタマイズ
- **Decorator**：機能の柔軟な追加

---

## 🚀 起動方法

### 1. リポジトリをクローン or ZIP を解凍

```bash
cd nest-patterns-sample
```




###　2. 依存パッケージをインストール
```bash
npm install
```
#### ※ @nestjs/platform-express@10.x が必要です。NestJS 10 系で統一されています。


### 3. 開発モードで起動
```bash
npm run start:dev
```

### 動作確認
以下のエンドポイントにアクセスして、各パターンの挙動を確認できます：

パターン	エンドポイント	説明
Singleton	GET /singleton	ログ出力（Singleton）
Factory	GET /factory	Windows ボタン生成
Strategy	GET /strategy	PayPal で支払い処理
Observer	GET /observer	観察者にイベント通知
Template Method	GET /template	日課ルーティン実行
Decorator	GET /decorator	コーヒーにミルク追加

```bash
curl http://localhost:3000/strategy
# 出力: Paid ¥1000 with PayPal
```

### ディレクトリ構成（src）
src/
├── main.ts
├── app.module.ts
├── app.controller.ts
├── app.service.ts
├── singleton/
├── factory/
├── strategy/
├── observer/
├── template/
└── decorator/