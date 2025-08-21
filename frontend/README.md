# Coffee Shop - Integrated Frontend

A complete coffee shop frontend application that integrates a beautiful landing page with a functional coffee shop ordering system.

## 🚀 Features

### Landing Page
- **Hero Section**: Eye-catching hero with animated coffee cup
- **Services Section**: Showcase of coffee shop services
- **Special Offers Banner**: Promotional content with countdown timer
- **App Download Section**: Mobile app promotion
- **Testimonials**: Customer reviews and feedback
- **Responsive Design**: Works perfectly on all devices

### Coffee Shop Application
- **User Authentication**: Login, Register, Forgot Password
- **Product Catalog**: Browse coffee products and menu
- **Shopping Cart**: Add, remove, and manage cart items
- **Order Management**: View order history and details
- **User Profile**: Manage user information and addresses
- **Responsive Navigation**: Mobile-friendly navigation

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Context API** for state management
- **AOS (Animate On Scroll)** for animations
- **React Icons** for icons

## 📁 Project Structure

```
src/
├── components/
│   ├── landing/          # Landing page components
│   ├── layout/           # Layout components
│   ├── shared/           # Shared components
│   └── auth/             # Authentication components
├── hooks/
│   ├── context/          # Context providers
│   └── provider/         # Provider wrappers
├── pages/                # Page components
├── types/                # TypeScript type definitions
├── constants/            # Application constants
├── service/              # API services
└── utils/                # Utility functions
```

## 🎨 Design System

The application uses a custom coffee-themed design system:

- **Primary Color**: #854d3d (Coffee Brown)
- **Secondary Color**: #4a1e1b (Dark Brown)
- **Brand Dark**: #270c03 (Very Dark Brown)
- **Light**: #f5f5f5 (Light Gray)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd coffee-shop-integrated
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages

### Landing Page (`/`)
- Beautiful hero section with coffee animation
- Services showcase
- Special offers banner
- App download section
- Customer testimonials

### Authentication Pages
- `/login` - User login
- `/register` - User registration
- `/forgot-password` - Password recovery
- `/reset-password` - Password reset

### Coffee Shop Pages
- `/shop` - Main shop page
- `/products` - Product catalog
- `/orders` - Order history
- `/orders/:id` - Order details
- `/profile` - User profile

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_GOOGLE_OAUTH_CLIENT_ID=your-google-oauth-client-id
VITE_MAPBOX_ACCESS_TOKEN=your-mapbox-access-token
VITE_API_BASE_URL=your-api-base-url
```

### Customization
- Update colors in `tailwind.config.js`
- Modify constants in `src/constants/constants.ts`
- Add new routes in `src/Router.tsx`

## 🎯 Key Features

### Landing Page Integration
- Seamless integration between landing page and shop
- Consistent design language throughout
- Smooth navigation between sections

### State Management
- Context-based state management
- User authentication state
- Shopping cart state
- Product catalog state
- Modal management

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions

## 🔒 Authentication

The application includes a complete authentication system:
- User registration and login
- Password recovery
- Google OAuth integration (ready to configure)
- Protected routes
- User session management

## 🛒 Shopping Features

- Product browsing and search
- Shopping cart functionality
- Order management
- Delivery options
- Payment integration ready

## 📱 Mobile App Ready

The landing page includes sections for:
- App Store download
- Google Play download
- App features showcase
- Mobile-specific benefits

## 🎨 Customization

### Adding New Products
1. Update product data in `src/data/`
2. Add product images to `public/images/`
3. Update product types in `src/types/`

### Styling Changes
1. Modify Tailwind classes in components
2. Update color scheme in `tailwind.config.js`
3. Add custom CSS in `src/index.css`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your repository to Vercel
2. Set environment variables
3. Deploy automatically

### Deploy to Netlify
1. Build the project
2. Upload the `dist` folder
3. Configure redirects for SPA

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Coffee shop design inspiration from the original sssss folder
- Functional components from the coffee-shop-master folder
- Icons from React Icons
- Animations from AOS library

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Enjoy your coffee! ☕**
