# Finance Tracker - MoRey

A **cross‑platform** personal finance tracking application built with **React** (Web) and **React Native** (Mobile).  
Track your income, expenses, savings goals and visualize your financial health with interactive charts.

---

## 🚀 Features

- **Dashboard Overview**  
  - Total balance, monthly income vs. expenses  
  - Savings goals with progress bars  
  - Quick‑glance “spend this month” widget  

- **Transactions**  
  - Add, edit & delete income or expense entries  
  - Categorize by type (Food, Transport, Entertainment, etc.)  
  - Sort and filter (date, category, amount)  
  - Export to CSV  

- **Savings Goals**  
  - Create named goals (e.g. “Vacation”, “Emergency Fund”)  
  - Track progress (%) toward each goal  
  - Set target amount and deadline  

- **Analytics & Charts**  
  - Pie chart: spending by category  
  - Bar chart: monthly expense trends  
  - Line chart: savings over time  
  - Date‑range filtering (week, month, year)

- **Responsive Web & PWA**  
  - Mobile‑first design, adapts to desktop screens  
  - Installable as a Progressive Web App  

- **Native Mobile App**  
  - iOS & Android support  
  - Swipeable charts and bottom‑sheet modals  
  - Offline‑first with local caching  

- **User Authentication**  
  - Email/password sign‑up & login  
  - Secure session management  

- **Internationalization (i18n)**  
  - English & Polish language support  
  - Locale‑aware date & currency formats  

---

## 🔧 Tech Stack

### Frontend (Web)
- **React** + TypeScript  
- **Tailwind CSS** for utility‑first styling  
- **React Router** for client‑side navigation  
- **Recharts** for data visualization  
- **React Hook Form** + **Yup** for form state & validation  
- **PWA** enabled via Workbox

### Frontend (Mobile)
- **React Native** + TypeScript (via **Expo**)  
- **React Navigation** for screen routing  
- **React Native Paper** for UI components  
- **react-native-chart-kit** for mobile charts  

### Backend / BaaS
- **Firebase Authentication** (email & password)  
- **Firestore** for realtime cloud storage  
- **Firebase Hosting** (Web PWA deployment)  

### Tooling & CI/CD
- **Monorepo** managed with Turborepo  
- **ESLint** + **Prettier** for code quality  
- **Jest** & **React Testing Library** (Web)  
- **Cypress** (Web E2E) / **Detox** (Mobile E2E)  
- **GitHub Actions** for automated builds & tests  
- **Vercel** / **Netlify** for Web hosting  
- **Expo Application Services** for Mobile releases  

---

## 📦 Installation & Setup

1. **Clone repository**  
   ```bash
   git clone https://github.com/your‑username/finance‑tracker.git
   cd finance‑tracker
