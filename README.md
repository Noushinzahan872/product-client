#  Bagify product  System

A full-stack **Bagify Management System** built with **Next.js 15**, **NextAuth.js** for authentication, and a database for persistent storage.  
The platform provides a simple interface to manage shoes, track details, and access a protected dashboard with analytics.

🔗 **Live Demo:** [bagify](https://product-client.vercel.app)

---

## 🚀 Features

- 🔑 Authentication with **NextAuth.js** (Login & Register)  
- 👤 Protected Dashboard with role-based access  
- 📊 Dashboard analytics using **Recharts**  
- 📦 Bag product  (add, view, details)  
- 🎨 Styled with **Tailwind CSS + DaisyUI**  
- 🌐 Responsive & modern UI  

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 19, Tailwind CSS, DaisyUI  
- **Authentication:** NextAuth.js  
- **Forms:** React Hook Form  
- **Charts:** Recharts  
- **UI Enhancements:** React Icons, React Hot Toast, Swiper.js  
- **HTTP Requests:** Axios  


## Secrets In Env File:
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

DATABASE_URL=your_database_connection_string

NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000


Development for Local And Install Process
npm run dev
npm run build
npm start

**Routing In This Project**
   
src/
├── app/
│ ├── (authpage)/
│ │ ├── login/
│ │ └── register/
│ ├── about/
│ ├── contact/
│ ├── products/
│ ├── dashboard/
│ │ ├── home/
│ │ ├── profile/
│ │ ├── product/
│ │ └── add-product/
│ ├── layout.js
│ └── page.js
├── middleware.js
├── provider.js

npm install next-auth
## Used NextAuth for Next.js Authentication

## *Future Improvements*
Role-Based Access Control: Separate roles for Admin, Manager, and User.
Inventory & Stock Management: Track product quantities and low-stock alerts.
Order & Customer Management: Add order placement, history, and customer management.
Search & Filter: Advanced search and filtering by size, price, and availability.
Mobile App Integration: Extend functionality to a React Native app.
Analytics Dashboard: Detailed charts and reports for sales and user activity.
Email Notifications: Send confirmation emails for registration and order updates.
Performance Optimization: Implement caching and optimize database queries.
Dark/Light Mode Preferences: Save and sync user preferences across sessions.
