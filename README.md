# React-Router-NavLink-SidebarApp

React Routerの`NavLink`を使用して、管理画面を想定したサイドナビゲーションを実装する練習用アプリです。

## 概要

`NavLink`の`isActive`を使用して、現在表示しているページのナビゲーションリンクにアクティブスタイルを適用します。

ページコンポーネントとナビゲーションコンポーネントを分離し、React Routerのルーティングとコンポーネント設計を練習します。

## 学習内容

* `BrowserRouter`
* `Routes`
* `Route`
* `NavLink`
* `NavLink`の`isActive`
* React Routerによるページ遷移
* ナビゲーションコンポーネントの分離
* ページコンポーネントの分離
* Tailwind CSSによるアクティブスタイルの切り替え

## 問題

管理画面を想定して、サイドナビゲーションを`NavLink`で作成してください。

### 作成するページ

```text
/dashboard
/users
/settings
```

### ナビゲーション

```text
Dashboard
Users
Settings
```

## 条件

* 現在のページは`bg-blue-500 text-white`
* 非アクティブなページは`text-gray-500`
* すべてのリンクに`px-4 py-2`を設定
* `NavLink`の`isActive`を使用
* ナビゲーションを`Navigation.tsx`に分離
* ページコンポーネントをそれぞれ分離する

## ディレクトリ構成

```text
src/
├── pages/
│   ├── Dashboard.tsx
│   ├── Users.tsx
│   └── Settings.tsx
├── components/
│   └── Navigation.tsx
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## 実装イメージ

```text
App
│
├── Navigation
│   ├── Dashboard
│   ├── Users
│   └── Settings
│
└── Routes
    ├── /dashboard → Dashboard
    ├── /users     → Users
    └── /settings  → Settings
```

## ポイント

`NavLink`では`className`に関数を渡すことで、現在のURLに対応したリンクかどうかを`isActive`で判定できます。

```tsx
<NavLink
  to="/dashboard"
  className={({ isActive }) =>
    isActive
      ? "bg-blue-500 text-white px-4 py-2"
      : "text-gray-500 px-4 py-2"
  }
>
  Dashboard
</NavLink>
```

## 使用技術

* React
* TypeScript
* React Router
* Tailwind CSS
* Vite
  #+

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで表示されたURLにアクセスしてください。

## 確認項目

* `/dashboard`にアクセスするとDashboardが表示される
* `/users`にアクセスするとUsersが表示される
* `/settings`にアクセスするとSettingsが表示される
* 現在のページのリンクに`bg-blue-500 text-white`が適用される
* 非アクティブなリンクに`text-gray-500`が適用される
* すべてのリンクに`px-4 py-2`が適用される
* ナビゲーションが`Navigation.tsx`に分離されている
* ページコンポーネントが分離されている
