# 問題5：実践的なサイドナビゲーション

### 問題文

管理画面を想定して、サイドナビゲーションを`NavLink`で作成してください。

### 条件

以下のページを作成する。

```text
/dashboard
/users
/settings
```

ナビゲーションは以下のようにする。

```text
Dashboard
Users
Settings
```

さらに、

* 現在のページは`bg-blue-500 text-white`
* 非アクティブなページは`text-gray-500`
* すべてのリンクに`px-4 py-2`を設定
* `NavLink`の`isActive`を使用
* ナビゲーションは`Navigation.tsx`に分離
* ページコンポーネントも分離する