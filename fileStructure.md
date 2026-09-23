theHive/
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package.json
├─ package-lock.json
├─ README.md
├─ Task.md
├─ vite.config.js
├─ public/
│  └─ assets/
├─ src/
│  ├─ AbandonedScripts.md
│  ├─ App.css
│  ├─ App.jsx
│  ├─ firebase.js
│  ├─ index.css
│  ├─ main.jsx
│  ├─ OwnerLogin.css
│  ├─ OwnerLogin.jsx
│  ├─ useMenu.js
│  ├─ Utils/
│  │  ├─ capitalizeFirstWords.js
│  │  └─ generateUniqueKey.js
│  ├─ Admin/
│  │  ├─ Admin.css
│  │  ├─ Admin.jsx
│  │  ├─ MenuManagement.css
│  │  └─ MenuManagement.jsx
│  ├─ Staff/
│  │  ├─ OrderQueue.css
│  │  ├─ OrderQueue.jsx
│  │  ├─ Staff.css
│  │  └─ Staff.jsx
│  └─ components/
│     ├─ Buttons/
│     │  ├─ button.css
│     │  ├─ Button.jsx
│     │  ├─ NavItem.css
│     │  └─ NavItem.jsx
│     ├─ Cards/
│     │  ├─ Card.jsx
│     │  ├─ CardList.jsx
│     │  ├─ CardList.module.css
│     │  ├─ CategoryCard.css
│     │  ├─ CategoryCard.jsx
│     │  ├─ ItemForm.css
│     │  ├─ ItemForm.jsx
│     │  ├─ Logo.jsx
│     │  ├─ SaveItem.css
│     │  ├─ SaveItem.jsx
│     │  ├─ card.module.css
│     │  └─ logo.css
│     ├─ Inputs/
│     │  ├─ CategoryDropDown.css
│     │  ├─ CategoryDropDown.jsx
│     │  ├─ Search.css
│     │  └─ Search.jsx
│     ├─ Modals/
│     │  ├─ EditModal.css
│     │  └─ EditModal.jsx
│     └─ Table/
│        ├─ menu.json
│        ├─ MenuTable.css
│        └─ MenuTable.jsx





# Updated
theHive/
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package.json
├─ package-lock.json
├─ README.md
├─ vite.config.js
├─ docs/
│  ├─ Task.md
│  └─ AbandonedScripts.md
├─ public/
│  └─ assets/
├─ src/
│  ├─ App.jsx
│  ├─ App.css
│  ├─ main.jsx
│  ├─ index.css
│  ├─ services/
│  │  └─ firebase.js
│  ├─ hooks/
│  │  └─ useMenu.js
│  ├─ data/
│  │  └─ menu.json
│  ├─ utils/
│  │  ├─ capitalizeFirstWords.js
│  │  └─ generateUniqueKey.js
│  ├─ components/               ← truly shared, reused across features
│  │  ├─ Button/
│  │  │  ├─ Button.jsx
│  │  │  ├─ Button.css
│  │  │  ├─ NavItem.jsx
│  │  │  └─ NavItem.css
│  │  ├─ Card/
│  │  │  ├─ Card.jsx
│  │  │  ├─ Card.css
│  │  │  ├─ CardList.jsx
│  │  │  └─ CardList.css
│  │  ├─ Logo/
│  │  │  ├─ Logo.jsx
│  │  │  └─ Logo.css
│  │  └─ Modal/
│  │     ├─ EditModal.jsx
│  │     └─ EditModal.css
│  └─ features/
│     ├─ admin/                 ← Owner Panel
│     │  ├─ Admin.jsx
│     │  ├─ Admin.css
│     │  ├─ OwnerLogin.jsx
│     │  ├─ OwnerLogin.css
│     │  └─ menu-management/
│     │     ├─ MenuManagement.jsx
│     │     ├─ MenuManagement.css
│     │     ├─ CategoryCard.jsx
│     │     ├─ CategoryCard.css
│     │     ├─ CategoryDropDown.jsx
│     │     ├─ CategoryDropDown.css
│     │     ├─ ItemForm.jsx
│     │     ├─ ItemForm.css
│     │     ├─ MenuTable.jsx
│     │     ├─ MenuTable.css
│     │     ├─ SaveItem.jsx
│     │     ├─ SaveItem.css
│     │     ├─ Search.jsx
│     │     └─ Search.css
│     ├─ staff/                 ← Staff Panel
│     │  ├─ Staff.jsx
│     │  ├─ Staff.css
│     │  ├─ OrderQueue.jsx
│     │  └─ OrderQueue.css
│     └─ customer/              ← empty for now, ready when you build it
