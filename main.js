// Lost & Found Kenya - Main JavaScript
// Language translations
const translations = {
    en: {
        heroTitle: "Find Your Lost Items",
        heroSubtitle: "Connect with finders across Kenya. Secure M-Pesa payments. Get your lost ID, phone, or wallet back safely.",
        searchBtn: "Search",
        postFoundBtn: "Post Found Item",
        postLostBtn: "Post Lost Item",
        recentItemsTitle: "Recently Found Items",
        recentItemsSubtitle: "Check out the latest items found by our community. Help reunite these items with their owners.",
        categoriesTitle: "Browse by Category",
        categoriesSubtitle: "Find what you're looking for faster by browsing specific categories",
        categoryID: "ID Cards",
        categoryIDDesc: "National IDs, Student IDs",
        categoryPhone: "Phones",
        categoryPhoneDesc: "Mobile phones, tablets",
        categoryWallet: "Wallets",
        categoryWalletDesc: "Purses, wallets, bags",
        categoryDocument: "Documents",
        categoryDocumentDesc: "Certificates, passports",
        categoryElectronics: "Electronics",
        categoryElectronicsDesc: "Laptops, cameras",
        categoryOther: "Other",
        categoryOtherDesc: "Keys, jewelry, etc.",
        successStoriesTitle: "Success Stories",
        successStoriesSubtitle: "Real stories from people who found their lost items",
        story1: "I lost my national ID at a matatu stage. Someone found it and posted here. Paid Ksh 20 and got it back the same day!",
        story2: "Found a wallet with cash and cards. Posted it here and the owner contacted me within 2 hours. Great service!",
        story3: "My phone fell out of my pocket in a boda boda. Someone found it and I got it back through this platform.",
        statsTitle: "Our Impact",
        statsSubtitle: "Helping Kenyans find their lost items every day",
        itemsFoundLabel: "Items Found",
        happyUsersLabel: "Happy Users",
        successRateLabel: "Success Rate",
        totalRewardsLabel: "Rewards Paid",
        footerDesc: "Connecting finders with owners across Kenya. Secure, reliable, and community-driven."
    },
    sw: {
        heroTitle: "Pata Vitu Vyako Vilivyopotea",
        heroSubtitle: "Ungana na watu waliopata vitu Kenya. Malipo salama kwa M-Pesa. Pata kitambulisho, simu au pochi yako.",
        searchBtn: "Tafuta",
        postFoundBtn: "Tuma Kitu Ulichopata",
        postLostBtn: "Tuma Kitu Ulichopoteza",
        recentItemsTitle: "Vitu Vya Karibuni Vilivyopatikana",
        recentItemsSubtitle: "Angalia vitu vya karibuni vilivyopatikana na jamii yetu. Saidia kurudisha vitu hivi kwa wenyewe.",
        categoriesTitle: "Vinjari kwa Kategoria",
        categoriesSubtitle: "Pata kile unachotafuta haraka kwa kuvinjari kategoria mahususi",
        categoryID: "Vitambulisho",
        categoryIDDesc: "Vitambulisho vya taifa, wanafunzi",
        categoryPhone: "Simu",
        categoryPhoneDesc: "Simu, vitabu",
        categoryWallet: "Mpochi",
        categoryWalletDesc: "Mpochi, mifuko",
        categoryDocument: "Hati",
        categoryDocumentDesc: "Cheti, pasipoti",
        categoryElectronics: "Elektronic",
        categoryElectronicsDesc: "Kamputa, kamera",
        categoryOther: "Nyingine",
        categoryOtherDesc: "Funguo, maridia",
        successStoriesTitle: "Hadithi za Mafanikio",
        successStoriesSubtitle: "Hadithi halisi za watu walopata vitu vyao vilivyopotea",
        story1: "Nilipoteza kitambulisho changu cha taifa kwanza. Mtu alikipata na kukituma hapa. Nililipa Ksh 20 nikakipata siku hiyo!",
        story2: "Nilipata pochi yenye pesa na kadi. Niliituma hapa na mmiliki alinipigia ndani ya masaa 2. Huduma nzuri!",
        story3: "Simu yangu ilianguka kutoka mfukoni kwenye boda boda. Mtu aliipata na nimeirudisha kupitia jukwaa hili.",
        statsTitle: "Mchango Wetu",
        statsSubtitle: "Kuwasaidia Wakenya kupata vitu vyao vilivyopotea kila siku",
        itemsFoundLabel: "Vitu Vilivyopatikana",
        happyUsersLabel: "Watumiaji Wenye Furaha",
        successRateLabel: "Kiwango cha Mafanikio",
        totalRewardsLabel: "Zawadi Zilizolipwa",
        footerDesc: "Kuunganisha watu waliopata na wenyewe Kenya. Salama, ya kuaminika, na inayoweka jamii."
    }
};

// Current language
let currentLang = 'en';

// Sample data for recent items
const sampleItems = [
    {
        id: 1,
        type: 'id-card',
        title: 'National ID - John Mwangi',
        description: 'Found at Kenyatta Avenue bus stop',
        location: 'Nairobi CBD',
        date: '2025-01-23',
        image: 'https://images.unsplash.com/photo-1552168324-d612d77725e3?w=300&h=200&fit=crop',
        isVerified: true
    },
    {
        id: 2,
        type: 'phone',
        title: 'Samsung Galaxy S21',
        description: 'Black phone with cracked screen',
        location: 'Mombasa, Likoni',
        date: '2025-01-22',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=200&fit=crop',
        isVerified: true
    },
    {
        id: 3,
        type: 'wallet',
        title: 'Brown Leather Wallet',
        description: 'Contains ID and bank cards',
        location: 'Kisumu, Kondele',
        date: '2025-01-21',
        image: 'https://images.unsplash.com/photo-1556089774-b83b4d5fddde?w=300&h=200&fit=crop',
        isVerified: false
    },
    {
        id: 4,
        type: 'document',
        title: 'University Certificate',
        description: 'Bachelor degree certificate',
        location: 'Nakuru, CBD',
        date: '2025-01-20',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop',
        isVerified: true
    },
    {
        id: 5,
        type: 'electronics',
        title: 'Canon Camera',
        description: 'Digital camera with lens',
        location: 'Eldoret, Airport',
        date: '2025-01-19',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop',
        isVerified: true
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize language
    updateLanguage(currentLang);
    
    // Initialize particles
    initParticles();
    
    // Initialize carousel
    initCarousel();
    
    // Initialize search
    initSearch();
    
    // Initialize animations
    initAnimations();
    
    // Load recent items
    loadRecentItems();
    
    // Setup event listeners
    setupEventListeners();
}

function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Update all text elements
    Object.keys(t).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = t[key];
        }
    });
    
    // Update language toggle
    document.getElementById('currentLang').textContent = lang.toUpperCase();
}

function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    // Create particle system using p5.js
    new p5((p) => {
        let particles = [];
        
        p.setup = function() {
            const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
            canvas.parent('particleCanvas');
            
            // Create particles
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-1, 1),
                    vy: p.random(-1, 1),
                    size: p.random(2, 6),
                    opacity: p.random(0.1, 0.3)
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Update and draw particles
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
                
                // Draw particle
                p.fill(255, 255, 255, particle.opacity * 255);
                p.noStroke();
                p.circle(particle.x, particle.y, particle.size);
            });
            
            // Draw connections
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(other => {
                    const distance = p.dist(particle.x, particle.y, other.x, other.y);
                    if (distance < 100) {
                        p.stroke(255, 255, 255, (1 - distance / 100) * 50);
                        p.strokeWeight(1);
                        p.line(particle.x, particle.y, other.x, other.y);
                    }
                });
            });
        };
        
        p.windowResized = function() {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
    });
}

function initCarousel() {
    const carousel = new Splide('#recentItemsCarousel', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '1rem',
        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
        breakpoints: {
            768: {
                perPage: 2,
            },
            480: {
                perPage: 1,
            }
        }
    });
    
    carousel.mount();
}

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const suggestions = document.getElementById('searchSuggestions');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        
        if (query.length > 2) {
            showSearchSuggestions(query);
        } else {
            hideSearchSuggestions();
        }
    });
    
    searchInput.addEventListener('focus', function() {
        if (this.value.trim().length > 2) {
            showSearchSuggestions(this.value.trim());
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!suggestions.contains(e.target) && e.target !== searchInput) {
            hideSearchSuggestions();
        }
    });
}

function showSearchSuggestions(query) {
    const suggestions = document.getElementById('searchSuggestions');
    const suggestionsList = document.getElementById('suggestionsList');
    
    // Generate sample suggestions
    const sampleSuggestions = [
        `National ID - ${query}`,
        `Phone - ${query}`,
        `Wallet found in ${query}`,
        `${query} certificate`,
        `Lost ${query} in Nairobi`
    ];
    
    suggestionsList.innerHTML = sampleSuggestions.map(suggestion => `
        <div class="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors" onclick="selectSuggestion('${suggestion}')">
            <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span class="text-gray-700">${suggestion}</span>
            </div>
        </div>
    `).join('');
    
    suggestions.classList.remove('hidden');
}

function hideSearchSuggestions() {
    const suggestions = document.getElementById('searchSuggestions');
    suggestions.classList.add('hidden');
}

function selectSuggestion(suggestion) {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = suggestion;
    hideSearchSuggestions();
    performSearch();
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query) {
        // Store search query and redirect to results page
        localStorage.setItem('searchQuery', query);
        window.location.href = 'search-results.html?q=' + encodeURIComponent(query);
    }
}

function searchByCategory(category) {
    window.location.href = 'search-results.html?category=' + category;
}

function loadRecentItems() {
    const carouselList = document.getElementById('recentItemsList');
    if (!carouselList) return;
    
    carouselList.innerHTML = sampleItems.map(item => `
        <li class="splide__slide">
            <div class="item-card rounded-xl p-4 shadow-lg">
                <div class="relative mb-4">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-40 object-cover rounded-lg">
                    ${item.isVerified ? '<div class="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Verified</div>' : ''}
                </div>
                <h3 class="font-semibold text-gray-800 mb-2">${item.title}</h3>
                <p class="text-gray-600 text-sm mb-3">${item.description}</p>
                <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        ${item.location}
                    </span>
                    <span>${formatDate(item.date)}</span>
                </div>
                <button onclick="viewItemDetails(${item.id})" class="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    View Details
                </button>
            </div>
        </li>
    `).join('');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-KE', { 
        month: 'short', 
        day: 'numeric' 
    });
}

function viewItemDetails(itemId) {
    window.location.href = `item-details.html?id=${itemId}`;
}

function initAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.item-card, .category-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Animate stats counters
    animateCounters();
}

function animateCounters() {
    const counters = [
        { element: document.getElementById('itemsFound'), target: 2847 },
        { element: document.getElementById('happyUsers'), target: 1923 },
        { element: document.getElementById('successRate'), target: 98.5, suffix: '%' },
        { element: document.getElementById('totalRewards'), target: 15680, prefix: 'Ksh ', format: true }
    ];
    
    counters.forEach(counter => {
        if (!counter.element) return;
        
        anime({
            targets: { count: 0 },
            count: counter.target,
            duration: 2000,
            easing: 'easeOutExpo',
            update: function(anim) {
                const value = Math.floor(anim.animatables[0].target.count);
                let displayValue = value;
                
                if (counter.format) {
                    displayValue = value.toLocaleString();
                }
                
                counter.element.textContent = (counter.prefix || '') + displayValue + (counter.suffix || '');
            }
        });
    });
}

function setupEventListeners() {
    // Language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'en' ? 'sw' : 'en';
            updateLanguage(currentLang);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add click handlers for mobile navigation
    setupMobileNavigation();
}

function setupMobileNavigation() {
    // Add padding to body for bottom navigation
    document.body.style.paddingBottom = '70px';
}

// Utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: 300,
            opacity: 0,
            duration: 300,
            easing: 'easeInQuart',
            complete: () => {
                document.body.removeChild(notification);
            }
        });
    }, 3000);
}

// Export functions for global access
window.performSearch = performSearch;
window.searchByCategory = searchByCategory;
window.viewItemDetails = viewItemDetails;
window.showNotification = showNotification;