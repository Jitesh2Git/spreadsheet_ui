# 🧾 React Spreadsheet UI

This project is a static React prototype of a spreadsheet interface.

- ✅ Pixel-close UI matches Figma specification
- ✅ All buttons, tabs, and interactive elements **log to console or reflect UI state change**
- ✅ Navigation with **arrow keys across cells**
- ✅ `npm run lint` and `npm run type-check` **pass with no errors**

## 🔗 Live Preview

[https://spreadsheet-ui.netlify.app](https://spreadsheet-ui.netlify.app/)

---

## 🛠️ Tech Stack

- ⚛️ React 18 (Vite)
- 🟦 TypeScript
- 💨 Tailwind CSS
- 🧱 Custom Table Component (no external table library used)
- 🧪 ESLint + Prettier

---

## 📂 Project Structure (Simplified)

```
spreadsheet_app/
├── public/
├── src/
│   ├── assets/                      # Icons and image assets
│   │   ├── icons/
│   │   │   ├── arrow-sync.png
│   │   │   ├── link.png
│   │   │   ├── arrow-split.png
│   │   │   └── arrow-split-gray.png
│   │   └── ...
│   ├── components/                 # UI components
│   │   ├── Header.tsx              # Top navigation bar with breadcrumbs
│   │   ├── Footer.tsx              # Bottom tab navigation
│   │   ├── ToolBar.tsx             # Filter/search actions toolbar
│   │   ├── TableGrid.tsx           # Main grid/table component
│   │   ├── Head1.tsx               # First header row with grouped column titles
│   │   ├── Head2.tsx               # Second header row with individual column headers
│   │   └── TableBody.tsx           # Table body rendering the grid rows
│   └── App.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── README.md                       # Project documentation
```

---

## ▶️ Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/Jitesh2Git/spreadsheet_ui.git
cd spreadsheet-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

App will run at: [http://localhost:3000](http://localhost:3000)

---

## ✅ Available Scripts

```bash
npm run dev           # Start local dev server
npm run lint          # Lint the codebase (ESLint)
npm run type-check    # Run TypeScript type checks
```
