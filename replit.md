# CINT Lab Academic Website

## Overview

This is a modern, responsive academic website for CINT Lab (Center for Interdisciplinary Research) at IISc Bangalore. The application is built as a single-page application with horizontal scrolling sections, showcasing the lab's research, team, publications, and news. The design is inspired by MIT CSAIL's website and focuses on academic presentation with accessibility and mobile responsiveness.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom academic color scheme
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with `/api` prefix
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload with Vite middleware integration

### Key Design Decisions

1. **Horizontal Scrolling Interface**: Implements a unique horizontal scrolling design for desktop with fallback to vertical scrolling on mobile devices
2. **Academic Color Scheme**: Custom CSS variables for academic brown, forest green, and sandy brown colors
3. **Accessibility First**: Proper ARIA labels, semantic HTML, and screen reader support
4. **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
5. **Component-Based Architecture**: Modular React components for each section (Hero, About, Lab, Team, Publications, News)

## Key Components

### UI Components
- **Navigation**: Sticky header with responsive mobile hamburger menu
- **Section Components**: Modular sections for different content areas
- **Custom Hooks**: `useHorizontalScroll` for managing section navigation
- **shadcn/ui Components**: Comprehensive UI component library with Radix UI primitives

### Data Management
- **Static Data**: Lab information stored in `@/data/lab-data.ts`
- **TypeScript Interfaces**: Strong typing for team members, publications, news items, and events
- **Query Client**: TanStack Query for potential future API integration

### Layout System
- **Horizontal Container**: Desktop users experience horizontal scrolling between sections
- **Mobile Responsive**: Automatic fallback to vertical scrolling on mobile devices
- **Section Snapping**: Smooth scrolling between defined sections

## Data Flow

1. **Static Content Rendering**: Components consume data from the lab-data file
2. **Navigation State**: `useHorizontalScroll` hook manages current section state
3. **Responsive Behavior**: `useIsMobile` hook determines scrolling behavior
4. **Section Navigation**: Click handlers and scroll detection update current section
5. **Component Rendering**: Each section renders independently with its own data

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Libraries**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Forms**: React Hook Form, Hookform resolvers
- **Icons**: Lucide React for consistent iconography
- **Build Tools**: Vite, TypeScript, PostCSS

### Development Dependencies
- **Database**: Drizzle ORM configured for PostgreSQL (ready for future use)
- **Session Storage**: PostgreSQL session store (connect-pg-simple)
- **Development**: tsx for TypeScript execution, esbuild for production builds

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds the React application to `dist/public`
2. **Backend Build**: esbuild bundles the Express server to `dist/index.js`
3. **Static Assets**: Images and other assets served from the built frontend

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves built static files with Express
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Scripts
- `npm run dev`: Development mode with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Database schema migration with Drizzle

### Deployment Considerations
- **Database Setup**: Requires PostgreSQL database with proper connection string
- **Static File Serving**: Express serves built Vite assets in production
- **Environment Variables**: DATABASE_URL required for database operations
- **Process Management**: Suitable for deployment on platforms supporting Node.js applications

The application is designed to be easily deployable on platforms like Railway, Vercel, or traditional VPS hosting with minimal configuration changes.