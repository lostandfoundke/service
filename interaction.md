# Lost Identity & Items Finder Kenya - Interaction Design

## Core User Flows

### 1. Search & Discovery Flow
**Primary Action**: User searches for lost item
- User enters name, ID number, or item description in search bar
- System displays matching results with blurred contact details
- Each result shows: item type, location found, date posted, partial ID/name
- "Unlock Details" button prominently displayed
- Clicking unlock triggers M-Pesa payment flow

### 2. M-Pesa Payment Integration
**Payment Flow**: Ksh. 20 to unlock contact details
- User clicks "Unlock Details"
- Modal opens: "Lipa na M-Pesa - Ksh. 20"
- User enters phone number
- STK Push simulation (demo mode shows success after 3 seconds)
- On success: contact details revealed, transaction recorded
- Finder gets notification of successful unlock

### 3. Post Found Item Flow
**Form Interaction**: Multi-step form with validation
- Step 1: Item type selection (ID Card, Phone, Wallet, Documents, Other)
- Step 2: Item details (name on ID, ID number, description, location found)
- Step 3: Contact information (phone/email - optional for privacy)
- Step 4: Photo upload with preview
- Success: Item posted with "Pending Verification" status

### 4. Post Lost Item Flow
**Similar to Found Item**: But marked as "Lost" instead of "Found"
- Additional field: "Reward offered" (optional)
- Items appear in separate "Lost Items" section
- Finders can browse lost items and claim they've found them

## Interactive Components

### 1. Smart Search Bar
- Auto-complete suggestions as user types
- Filters: Item type, location, date range
- Recent searches dropdown
- Voice search option (mobile)

### 2. Item Gallery Grid
- Infinite scroll of found items
- Filter by category, location, date
- Quick preview on hover/tap
- "Claim This Item" button for each item

### 3. M-Pesa Payment Widget
- Real-time payment status updates
- Retry mechanism for failed payments
- Payment history tracking
- Balance display for frequent users

### 4. Admin Dashboard
- Real-time statistics with animated counters
- Item moderation queue with approve/reject actions
- Payment tracking and payout management
- User verification system

## Multi-turn Interaction Loops

### Search → Find → Pay → Contact Loop
1. User searches for lost ID
2. Finds matching result
3. Pays Ksh. 20 via M-Pesa
4. Gets finder contact details
5. Contacts finder directly
6. Marks item as "Retrieved"
7. System rewards finder with Ksh. 10

### Post → Verify → Match Loop
1. User posts found item
2. Admin verifies post (automated for demo)
3. System matches with search queries
4. Notifies both parties when match found
5. Tracks successful connections

## Swahili Integration
- Toggle between English/Swahili
- Key terms: 
  - "Pata Kitambulisho Chako" (Find Your ID)
  - "Lipa Ksh. 20" (Pay Ksh. 20)
  - "Wasiliana na Mtunzaji" (Contact Finder)
  - "Tuma Zawadi" (Send Reward)

## Mobile-First Design
- Touch-friendly buttons (minimum 44px)
- Swipe gestures for image galleries
- Pull-to-refresh for search results
- Offline mode for viewing saved items
- Progressive web app capabilities