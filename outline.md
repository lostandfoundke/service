# Lost Identity & Items Finder Kenya - Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html              # Main landing page with search
├── post-item.html          # Form to post found/lost items
├── search-results.html     # Search results page
├── item-details.html       # Detailed item view with payment
├── admin-dashboard.html    # Admin interface
├── main.js                 # Core JavaScript functionality
├── resources/              # Images and assets
│   ├── hero-community.png  # Community hero image
│   ├── hero-tech.png       # Technology illustration
│   └── mpesa-payment.png   # Payment concept image
├── interaction.md          # Interaction design document
├── design.md              # Design style guide
└── outline.md             # This file
```

## Page Breakdown

### 1. index.html - Main Landing Page
**Purpose**: Primary entry point with search functionality
**Sections**:
- Navigation bar with language toggle (EN/SW)
- Hero section with community image and search bar
- Quick action buttons (Post Found Item, Post Lost Item)
- Featured recent items carousel
- Item categories grid (ID Cards, Phones, Wallets, Documents)
- Success stories testimonials
- Footer with contact info

**Interactive Elements**:
- Smart search bar with auto-suggestions
- Animated hero background with particles
- Infinite scroll for recent items
- Category filter buttons

### 2. post-item.html - Post Item Form
**Purpose**: Multi-step form to report found/lost items
**Sections**:
- Progress indicator (Step 1-4)
- Step 1: Item type selection (radio buttons with icons)
- Step 2: Item details (form fields with validation)
- Step 3: Contact information and privacy settings
- Step 4: Photo upload with preview
- Success confirmation page

**Interactive Elements**:
- Form validation with real-time feedback
- Image upload with drag-and-drop
- Location picker with map integration
- Privacy level selector (Public/Registered/Paid)

### 3. search-results.html - Search Results
**Purpose**: Display matching items with blurred details
**Sections**:
- Search query display and filters
- Results grid with item cards
- Each card shows: photo, partial info, location, date
- "Unlock Details" button on each card
- Pagination or infinite scroll

**Interactive Elements**:
- Filter sidebar (category, location, date)
- Sort options (newest, relevance, distance)
- Quick preview modal on hover
- Payment modal trigger

### 4. item-details.html - Item Details & Payment
**Purpose**: Show full details after payment
**Sections**:
- Item photo gallery
- Complete item information
- Finder contact details (after payment)
- M-Pesa payment interface
- Success state with contact reveal
- Report inappropriate content option

**Interactive Elements**:
- M-Pesa payment flow simulation
- Contact information reveal animation
- Success celebration effects
- Share and save options

### 5. admin-dashboard.html - Admin Interface
**Purpose**: Manage items, payments, and users
**Sections**:
- Statistics dashboard with charts
- Items moderation queue
- Payment tracking table
- User management
- System settings

**Interactive Elements**:
- Real-time statistics updates
- Bulk actions for item approval
- Payment status tracking
- Admin user authentication

## Core Functionality (main.js)

### Search System
- Fuzzy search algorithm for names and IDs
- Category and location filtering
- Recent searches storage
- Search suggestions

### Payment Integration
- M-Pesa payment simulation
- Payment status tracking
- Success/failure handling
- Transaction history

### Item Management
- CRUD operations for items
- Image upload and compression
- Location geocoding
- Privacy level enforcement

### User System
- Basic authentication simulation
- User preferences storage
- Language switching
- Contact information protection

### Admin Features
- Item moderation workflow
- Payment verification
- User management
- System analytics

## Data Structure

### Items Database (Local Storage)
```javascript
{
  id: "unique-id",
  type: "id-card|phone|wallet|document|other",
  status: "found|lost",
  title: "Item title",
  description: "Detailed description",
  location: "Where found/lost",
  contact: {
    phone: "07XXXXXXXX",
    email: "user@email.com",
    privacy: "public|registered|paid"
  },
  images: ["url1", "url2"],
  datePosted: "2025-01-24",
  isVerified: boolean,
  isClaimed: boolean,
  reward: number // optional
}
```

### Payment Records
```javascript
{
  id: "payment-id",
  itemId: "item-id",
  amount: 20,
  phoneNumber: "07XXXXXXXX",
  status: "pending|success|failed",
  timestamp: "2025-01-24T10:30:00Z"
}
```

## Technical Implementation

### Libraries Used
- **Anime.js**: Smooth animations and transitions
- **ECharts.js**: Admin dashboard charts
- **Splide**: Image carousels and galleries
- **p5.js**: Background particle effects
- **Matter.js**: Physics-based success animations

### Responsive Design
- Mobile-first approach
- Touch-friendly interfaces
- Swipe gestures for mobile
- Progressive web app features

### Performance Optimizations
- Lazy loading for images
- Local storage for user data
- Debounced search input
- Optimized animations

## Swahili Integration
- Language toggle in navigation
- Translated UI elements
- Localized date/time formats
- Cultural context in design