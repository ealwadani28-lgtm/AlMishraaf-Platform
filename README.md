# AlMishraaf-Platform

بِسْمِ الله — منصـة المشـراف العقـارية

AlMishraaf-Platform is a small frontend web project (Arabic, RTL) for "وكالة المشراف للتطوير العقاري" — a marketing and property development landing site and portfolio built with React and a file-based routing setup (TanStack Router). The repository contains the UI source code and design system styles used to render the agency's public pages.

---

## Key information

- Primary language: TypeScript + JSX/TSX
- Direction: RTL (Arabic-first UI)
- Main entry: src/ (file-based routes under src/routes)

### Notable files

- src/routes/mishraaf.tsx — Main page component with sections (Hero, Projects, Services, Contact, Footer).
- src/styles.css — Project-wide CSS and design system (RTL-aware, Tailwind-looking utilities).
- src/routeTree.gen.ts — Generated route tree (TanStack Router output).

---

## Features

- Arabic-first, right-to-left responsive landing pages
- Design system scoped under `.mishraaf-scope`
- Interactive UI components (project cards, contact form, theme toggle)
- Componentized React + TypeScript code (single-file page and subcomponents)

---

## Tech / Stack

- Language: TypeScript + React (TSX files)
- Routing: TanStack Router (file-based routes — generated route tree present)
- Styling: Plain CSS with Tailwind-like tokens and utilities (styles.css)

---

## How to run (recommended steps)

I couldn't find a package.json or build manifest in the repository root. If this repository is a frontend project, follow these general steps locally (common for Vite / Create React App / Next.js projects):

1. Install Node.js (recommended >= 16 or 18) and a package manager (npm, yarn or pnpm).
2. From the project root:

```bash
# install dependencies (if package.json is present)
npm install

# start the dev server (typical scripts — adjust to your setup)
npm run dev
# or
npm run start
# build for production
npm run build
```

If you don't have package.json yet, you can initialize the project and install packages typically used by this codebase:

```bash
# create package.json
npm init -y

# example packages (adjust versions as needed)
npm install react react-dom @tanstack/react-router
# optional tooling (Vite)
npm install -D vite @vitejs/plugin-react typescript tailwindcss postcss autoprefixer
```

Notes:
- The project uses TypeScript (.tsx files). Make sure tsconfig.json exists or create one when you set up the project.
- styles.css references Tailwind-like imports; if you use Tailwind or a compatible pipeline, configure it accordingly.

---

## Project structure (top-level)

```
README.md          # this file
src/               # source: routes, generated route tree, styles
  routeTree.gen.ts  # generated route map by TanStack Router
  routes/           # file-based route components (mishraaf.tsx etc.)
  styles.css        # global CSS / design system
```

---

## Development notes & suggestions

- Add a package.json with proper scripts (dev, build, start) so the project is runnable by others.
- Add a tsconfig.json if you plan to keep TypeScript.
- Add a LICENSE file (MIT or preferred license) to make reuse and contributions clear.
- Consider moving large generated files into a `.gitignore` or documenting how they are generated if they are produced at build-time.

---

## Contributing

If you want others to contribute, add CONTRIBUTING.md with guidelines. For now, open issues or pull requests with clear titles and descriptions.

---

## License

No license specified in the repository. Add a LICENSE file to declare permissions.

---

## Contact

Repository owner: @ealwadani28-lgtm

---


---

# Arabic — الملف التعريفي (ملخّص عربي مختصر)

## منصـة المشـراف العقـارية

منصة واجهة مستخدم عربية (RTL) لعرض محفظة وتسويق عقاري لوكالة "المشراف". المشروع مبني بلغة TypeScript و React مع نظام توجيه ملفّي (TanStack Router) ونظام تصميم مُضمّن داخل styles.css.

### الملفات الأساسية

- src/routes/mishraaf.tsx — الصفحة الرئيسية ومكوّناتها.
- src/styles.css — أنماط التصميم، دعم RTL، أدوات مساعدة.
- src/routeTree.gen.ts — خريطة المسارات المولّدة.

### تشغيل المشروع

لا يوجد ملف package.json في المستودع. اتبع خطوات الإعداد العامة أعلاه لإنشاء package.json وتثبيت الحزم اللازمة (React، TanStack Router، أدوات البناء مثل Vite).


---

شكراً — قمت بتحديث README.md ليكون احترافيًا ومزدوج اللغة (إنجليزية/عربية). إذا تريد، أستطيع أيضًا:
- إضافة package.json مع إعداد Vite وملفات التكوين الأساسية تلقائياً، أو
- إرشادك خطوة بخطوة (أنا سأقوم بالعمل بدلًا عنك) لإنشاء البنيات الضرورية وتشغيل المشروع محليًا.
