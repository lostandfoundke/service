# Lost Identity & Items Finder Kenya - Design Guide

## Design Philosophy

### Color Palette
- **Primary Green**: #00A651 (Safaricom M-Pesa green - trust and reliability)
- **Accent Orange**: #FF6B35 (warmth and urgency for lost items)
- **Neutral Gray**: #2D3748 (professional text and UI elements)
- **Background**: #F7FAFC (clean, minimal background)
- **Success**: #38A169 (successful payments and found items)
- **Warning**: #D69E2E (pending items and alerts)

### Typography
- **Display Font**: "Inter" - modern, clean sans-serif for headings
- **Body Font**: "Inter" - consistent typography throughout
- **Swahili Text**: Same fonts with proper Unicode support
- **Font Sizes**: Mobile-optimized with clear hierarchy

### Visual Language
- **Trust & Security**: Clean interfaces with clear payment flows
- **Accessibility**: High contrast ratios (4.5:1 minimum)
- **Cultural Relevance**: Kenyan colors and Swahili language support
- **Mobile-First**: Touch-friendly interfaces for smartphone users

## Visual Effects & Styling

### Used Libraries
- **Anime.js**: Smooth micro-interactions and form animations
- **ECharts.js**: Analytics dashboard visualizations
- **Splide**: Image carousels for item galleries
- **p5.js**: Background particle effects and visual elements
- **Matter.js**: Physics-based animations for success states

### Animation Effects
- **Search Bar**: Focus animations with expanding border
- **Payment Flow**: Step-by-step progress indicators
- **Item Cards**: Hover effects with subtle lift and shadow
- **Success States**: Confetti animations for completed payments
- **Loading States**: Skeleton screens and progress bars

### Header Background Effect
- **Gradient Flow**: Subtle animated gradient using CSS and Anime.js
- **Particle System**: Floating particles representing connections between users
- **Color Cycling**: Gentle color transitions matching the brand palette

### Interactive Elements
- **Button Hover**: Scale and shadow effects with smooth transitions
- **Form Validation**: Real-time feedback with color and icon changes
- **Search Results**: Staggered animation for item appearance
- **Payment Modal**: Slide-in animation with backdrop blur

## Swahili Integration

### Language Toggle
- **English**: "Lost & Found Items Kenya"
- **Swahili**: "Vitu Vilivyopotea na Kupatikana Kenya"
- **Toggle Position**: Top-right corner with flag icons

### Key Translations
- **Search Placeholder**: "Tafuta kitambulisho au kitu chako..."
- **Post Found Item**: "Tuma Kitu Ulichopata"
- **Post Lost Item**: "Tuma Kitu Ulichopoteza"
- **Unlock Details**: "Fungua Maelezo (Ksh. 20)"
- **Payment Success**: "Malipo Yamekamilika!"

### Cultural Design Elements
- **Kenyan Flag Colors**: Subtle integration in UI elements
- **Local Icons**: Mobile phone, matatu, and market imagery
- **Community Focus**: Emphasis on helping others and community trust

## Layout & Structure

### Mobile-First Grid System
- **Container**: Max-width with centered content
- **Spacing**: 8px base unit for consistent rhythm
- **Breakpoints**: 640px (sm), 768px (md), 1024px (lg)
- **Touch Targets**: Minimum 44px for all interactive elements

### Component Hierarchy
1. **Hero Section**: Search bar with animated background
2. **Quick Actions**: Post found/lost item buttons
3. **Recent Items**: Horizontal scrolling cards
4. **Categories**: Grid of item types with icons
5. **Success Stories**: Testimonials with photos

### Navigation
- **Bottom Tab Bar**: Home, Search, Post, Profile
- **Sticky Header**: Search bar always accessible
- **Breadcrumbs**: Clear navigation path for multi-step flows

## Content Strategy

### Sample Data Categories
- **ID Cards**: National ID, Student ID, Work permits
- **Electronics**: Phones, laptops, cameras, chargers
- **Documents**: Certificates, passports, bank cards
- **Personal Items**: Wallets, keys, jewelry, bags
- **Vehicles**: Logbooks, number plates, car keys

### User-Generated Content
- **Photo Requirements**: Clear, well-lit images
- **Description Guidelines**: Location found, date, distinguishing features
- **Contact Preferences**: Phone only, email only, or both
- **Privacy Levels**: Public, registered users only, or payment unlock

## Trust & Security Features

### Visual Trust Indicators
- **Verification Badges**: For confirmed users and items
- **Payment Security**: SSL badges and secure payment icons
- **Community Ratings**: Star ratings for successful transactions
- **Report System**: Clear reporting mechanisms for suspicious content

### Accessibility Features
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Keyboard Navigation**: Full keyboard accessibility
- **High Contrast Mode**: Alternative color scheme option
- **Text Scaling**: Responsive text sizing for readability