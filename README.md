# 📦 Inventory Dashboard

A modern, full-stack inventory management system built with **NestJS**, **MongoDB**, and **React (Vite + Mantine UI)**. This project demonstrates a scalable architecture with a focus on separation of concerns, type safety, and a clean user interface.

![Inventory Dashboard](https://placehold.co/800x400/0d3131/ffffff?text=Inventory+Dashboard+Preview)

---

## 🚀 Features

- **Inventory Management:** Create, read, update, and delete (CRUD) inventory items.
- **Real-time Search:** Filter items instantly by name or SKU.
- **Visual Status:** Automatic status badges (In Stock / Low Stock / Out of Stock) based on quantity.
- **Modern UI:** Responsive design using Mantine UI with a custom Deep Teal & Cool Gray theme.
- **Validation:** Strong data validation on both frontend (Formik/Mantine) and backend (Class Validator).
- **Dockerized:** Fully containerized setup for both frontend and backend.
- **Seeding:** Automated database seeding script for quick development setup.

---

## 🛠️ Tech Stack

### **Backend**
- **Framework:** [NestJS](https://nestjs.com/) (Node.js/TypeScript)
- **Database:** MongoDB (via Mongoose)
- **Validation:** `class-validator` & `class-transformer`
- **Environment:** `@nestjs/config` for .env management
- **Containerization:** Docker & Docker Compose (ready)

### **Frontend**
- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** TypeScript
- **UI Library:** [Mantine v7](https://mantine.dev/)
- **State Management:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Forms:** Mantine Form
- **HTTP Client:** Axios
- **Routing:** React Router DOM

---

## 📂 Project Structure

The project follows a monorepo-style structure with separate `backend` and `frontend` directories.

```
inventory-dashboard/
├── backend/                # NestJS Application
│   ├── src/
│   │   ├── inventory/      # Inventory Feature Module (Controller, Service, Schema)
│   │   ├── config/         # Database & App Config
│   │   └── main.ts         # Entry Point
│   ├── scripts/            # Utility scripts (e.g., seed.ts)
│   ├── Dockerfile
│   └── .env                # Environment variables
│
└── frontend/               # React Application
    ├── src/
    │   ├── features/       # Feature-based modules (Inventory, etc.)
    │   ├── shared/         # Reusable components (UI, Layout, Hooks)
    │   ├── pages/          # Route components
    │   └── theme.ts        # Mantine Theme Configuration
    ├── Dockerfile
    └── .env                # Environment variables
```

---

## 🏁 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)
- Docker (Optional)

### 1. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure Environment
# Create .env.local for local development
echo "MONGODB_URI=mongodb://localhost:27017/inventory-dashboard" > .env.local

# Run Database Seeder (Optional)
npm run seed

# Start Server
npm run start:dev
```
*Backend runs on: `http://localhost:3000`*

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Configure Environment
# Create .env.local
echo "VITE_API_URL=http://localhost:3000" > .env.local

# Start Dev Server
npm run dev
```
*Frontend runs on: `http://localhost:5173`*

---

## 🐳 Running with Docker

### Backend
```bash
cd backend
docker build -t inventory-backend .
docker run -p 3000:3000 --env-file .env.local inventory-backend
```

### Frontend
```bash
cd frontend
docker build -t inventory-frontend .
docker run -p 8080:80 inventory-frontend
```

---

## 🎨 Theme Colors

The application uses a custom color palette:

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Deep Teal** | `#0D3131` | Primary Brand, Sidebar, Buttons |
| **Light Mint** | `#E6F9F6` | Active Menu Backgrounds |
| **Cool Gray** | `#8898AA` | Secondary Text, Headers |
| **Status Red** | `#E03131` | Low/Out of Stock Badges |
| **Status Green** | `#2F9E44` | In Stock Badges |

---

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/items` | Get all inventory items (supports `?search=`) |
| `GET` | `/items/:id` | Get single item details |
| `POST` | `/items` | Create new inventory item |
| `PATCH` | `/items/:id` | Update existing item |
| `DELETE` | `/items/:id` | Delete item |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
