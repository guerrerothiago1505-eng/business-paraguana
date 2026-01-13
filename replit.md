# Business Paraguaná

## Overview
A React-based consultation and services web application for Business Paraguaná. Built with React 19, TypeScript, Vite, and Tailwind CSS.

## Project Structure
```
├── App.tsx              # Main application component with routing
├── index.tsx            # React entry point
├── index.html           # HTML template with Tailwind config
├── index.css            # Custom CSS styles
├── types.ts             # TypeScript type definitions
├── vite.config.ts       # Vite configuration
├── components/          # Reusable UI components
│   └── Logo.tsx
├── screens/             # Application screens
│   ├── WelcomeScreen.tsx
│   ├── LoginScreen.tsx
│   ├── RegistrationFlow.tsx
│   ├── HomeScreen.tsx
│   ├── ProfileScreen.tsx
│   ├── RequestsScreen.tsx
│   ├── ChatScreen.tsx
│   ├── RealEstateScreen.tsx
│   ├── ServicesScreen.tsx
│   ├── BusinessToolsScreen.tsx
│   ├── FavoritesScreen.tsx
│   ├── PostPropertyScreen.tsx
│   ├── PostVehicleScreen.tsx
│   ├── ListingDetailScreen.tsx
│   ├── RequestDetailScreen.tsx
│   └── ServiceFormScreen.tsx
```

## Tech Stack
- React 19.2.3
- TypeScript 5.8
- Vite 6.2
- Tailwind CSS (via CDN)

## Development
- Dev server runs on port 5000
- Command: `npm run dev`

## Environment Variables
- `GEMINI_API_KEY` - Optional Gemini AI API key (from .env.local)

## Deployment
- Build command: `npm run build`
- Output directory: `dist`
