# 🚐 CamperRental

**CamperRental** is a modern web application designed for premium campervan rentals. Built with
**Next.js 14**, it offers a seamless experience for road-trip enthusiasts to discover, filter, and
book their perfect mobile home. The project focuses on high performance, clean code architecture,
and a superior user experience across all devices.

---

## 🚀 Key Features

- 🏠 **Home Page**: Engaging landing page with a clear call-to-action to start exploring.
- 🚐 **Interactive Catalog**: A comprehensive list of available campers with server-side filtering.
- 🔍 **Advanced Filtering**: Filter by location, vehicle type, engine, and transmission.
- 🔄 **Infinite Scrolling**: Optimized "Load More" pagination (fetching 4 cards per request) using
  **TanStack Query**.
- 📸 **Detailed Product Pages**: Full camper specifications, interactive image galleries with
  thumbnails, and user reviews.
- ⭐ **Review System**: Five-star rating visualization for genuine user feedback.
- 📅 **Booking System**: Integrated booking form with real-time validation and success
  notifications.
- 📱 **Mobile-First Design**: Fully responsive layout ensuring a perfect experience on smartphones,
  tablets, and desktops.

---

## 🛠 Technical Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest) (React Query)
- **Styling**: CSS Modules (with **Mobile-First** methodology)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **API Client**: Axios
- **UI Components**: Swiper (Gallery), React Icons, React Hot Toast (Notifications)

---

## 🏗 Architecture & Technical Decisions

### Next.js 14 & SEO

Leveraging the **App Router** for optimized routing and **Server Components** to handle metadata
generation. This ensures high SEO rankings and fast initial page loads.

### TanStack Query & `useInfiniteQuery`

To handle the "Load More" functionality, we implemented `useInfiniteQuery`. This choice ensures:

- Efficient caching of fetched data.
- Automatic handling of pagination states (loading, fetching next page).
- Seamless synchronization between filters and paginated results.

### Mobile-First CSS

The styling architecture prioritizes mobile devices. Styles are written for smaller screens by
default, and complex layouts for desktops are added via `@media (min-width: 1440px)` queries. This
reduces CSS complexity and improves performance on mobile hardware.

### Semantic HTML

The project strictly follows semantic markup (`<main>`, `<article>`, `<section>`, `<nav>`,
`<aside>`) to ensure accessibility (A11y) and better indexing by search engines.

---

## 📄 Pages

- `/` — **Home Page**: Introduction to the service and the primary "View Now" entry point.
- `/catalog` — **Catalog**: Features the filter sidebar and the infinite list of camper cards.
- `/catalog/[id]` — **Camper Details**: A deep dive into a specific vehicle, opened in a new tab for
  user convenience.

---

## ⚙️ Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/camper-rental.git
    cd camper-rental
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables:** Create a `.env.local` file in the root directory:

    ```env
    NEXT_PUBLIC_API_BASE_URL=https://campers-api.goit.study
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your
    browser.

---

## 📂 Project Structure

```text
traveltrucks/
├── .next/
├── app/
│   ├── catalog/
│   │   ├── (main)/             # Main catalog view with Parallel Routes
│   │   │   ├── @sidebar/       # Independent Sidebar slot for filtering
│   │   │   │   ├── default.tsx
│   │   │   │   └── Sidebar.module.css
│   │   │   ├── Catalog.client.tsx
│   │   │   ├── CatalogClient.module.css
│   │   │   ├── layout.tsx      # Catalog-specific layout setup
│   │   │   ├── LayoutCatalog.module.css
│   │   │   └── page.tsx        # Main catalog display logic
│   │   │
│   │   ├── [id]/               # Dynamic camper details page
│   │   │   ├── CardDetails.client.tsx
│   │   │   ├── CardDetails.module.css
│   │   │   ├── error.tsx
│   │   │   └── page.tsx
│   │   └── error.tsx
│   │
│   ├── globals.css             # Global styles and design tokens
│   ├── layout.tsx              # Root layout with Header and Providers
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.module.css
│   └── page.tsx
│
├── components/                 # Atomic-style UI components
│   ├── BookingForm/            # Booking submission logic
│   ├── CamperCard/
│   ├── CamperGallery/          # Swiper-based image gallery
│   ├── Header/
│   ├── ReviewCard/
│   ├── ReviewsList/
│   ├── TanStackProvider/
│   ├── VehicleDetails/         # Camper specs and features
│   └── common/                 # Reusable helpers (e.g., Sprite Icons)
│
├── lib/
│   └── api/                    # Axios instances and API services
│
├── node_modules/
│
├── public/                     # Static assets (SVG sprites, hero banners)
│   ├── icons/
│   │   └── sprite.svg
│   ├── favicon.ico
│   ├── hero-baner.png
│   └── hero-baner@2x.png
│
├── types/                      # Centralized TypeScript interfaces
│   ├── camper.ts
│   ├── filters.ts
│   ├── galleryItem.ts
│   └── review.ts
│
├── .env
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md                   # Project documentation
├── swiper.d.ts
└── tsconfig.json
```

---

## 👤 Author & Links

- **Developer**: [Your Name]
- **Live Demo**: [View Project on Vercel](https://your-link.vercel.app)
- **Repository**:
  [GitHub Link](https://www.google.com/search?q=https://github.com/ulasem/traveltrucks)
