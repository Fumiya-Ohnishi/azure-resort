# AZURE RESORT & SPA — ポートフォリオサイト

高級リゾートホテルの予約促進LP。React + TypeScript + Vite + FSD（Feature-Sliced Design）で構築。

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開く。

## 技術スタック

- **React 18** + **TypeScript**
- **Vite** (ビルドツール)
- **CSS Modules** (スタイリング / Tailwind不使用)
- **FSD** (Feature-Sliced Design アーキテクチャ)
- 外部UIライブラリ一切不使用

## FSD 構成

```
src/
  app/           # アプリ初期化・RouterProvider
  pages/         # ページコンポーネント（home / booking / complete）
  widgets/       # 大きなUIブロック（hero, rooms, plans, など）
  features/      # ユーザー操作を伴う機能（空室カレンダー・予約フォーム）
  entities/      # ドメインモデル（room, plan）
  shared/        # 共通UI・汎用ライブラリ・テーマ設定
```

## ページ遷移フロー

1. **トップ (LP)** — 空室カレンダーで日付を選択
2. **予約ページ** — 客室・プラン・宿泊数・ゲスト情報を入力（2ステップ）
3. **完了ページ** — 予約番号の表示（ダミー、DB不要）
