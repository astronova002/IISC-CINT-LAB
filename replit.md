# Computational Intelligence Laboratory Website

## Overview

This is a modern, responsive academic website for the Computational Intelligence Laboratory at the Department of Aerospace Engineering, Indian Institute of Science (IISc), Bangalore, led by Dr. S.N. Omkar. The application showcases three specialized labs: Computational Intelligence Lab, Unmanned Aerial Vehicles Lab, and Biomechanics Lab. The website features authentic research data, publications, and achievements based on Dr. Omkar's actual work including his BBC-featured violence detection research, satellite image processing projects, and biomechanics applications in aerospace.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (January 2025)

✓ Completely transformed website from horizontal scrolling to compact navigation-based layout
✓ Implemented real-time data integration with live research metrics and updates
✓ Added official IISc branding and logos throughout the website
✓ Created 7 distinct sections: Home, About, Research, Team, Publications, News, Contact
✓ Integrated Dr. S.N. Omkar's actual photo from IISc website
✓ Added authentic collaborator information from his research publications
✓ Implemented live statistics updates every 30 seconds
✓ Enhanced with official IISc Department of Aerospace Engineering branding

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

1. **Navigation-Based Layout**: Completely redesigned from horizontal scrolling to compact navigation-based interface
2. **Real-Time Data Integration**: Live updates for research metrics, citations, and news
3. **Official IISc Branding**: Integrated official IISc logos and Department of Aerospace Engineering branding
4. **Compact Sections**: Each section is self-contained with minimal scrolling required
5. **Authentic Data Only**: All information sourced from official IISc profiles and research publications
6. **Responsive Design**: Mobile-first approach optimized for all device types
7. **Component-Based Architecture**: Modular React components for each section with dedicated hooks for real-time data

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