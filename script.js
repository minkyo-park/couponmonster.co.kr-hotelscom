// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    
    // Load content based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'index.html' || currentPage === '') {
        loadTopRatedHotels();
        loadRecentReviews();
        loadPopularDestinations();
    } else if (currentPage === 'price-comparison.html') {
        initPriceComparison();
    } else if (currentPage === 'faq.html') {
        initFAQ();
        initFilters();
    }
    
    initNewsletter();
    initAllButtons();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Sample Data



// Load Featured Coupons
function loadFeaturedCoupons() {
    // Coupons are now directly in HTML, no need to load dynamically
    return;
}



// Initialize Coupon Buttons
function initCouponButtons() {
    const couponCards = document.querySelectorAll('.coupon-card');
    couponCards.forEach(card => {
        const copyBtn = card.querySelector('.btn-copy');
        const useBtn = card.querySelector('.btn-use');
        
        if (copyBtn) {
            copyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const code = copyBtn.textContent.replace('쿠폰 복사', '').trim();
                copyCouponCode(code);
            });
        }
        
        if (useBtn) {
            useBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const code = useBtn.textContent.replace('사용하기', '').trim();
                useCoupon(code);
            });
        }
    });
}

// Initialize Event Buttons
function initEventButtons() {
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        const detailBtn = card.querySelector('.btn-primary');
        if (detailBtn) {
            detailBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showEventDetails(card);
            });
        }
    });
}

// Load Current Events
function loadCurrentEvents() {
    // Events are now directly in HTML, no need to load dynamically
    return;
}

// Load Blog Posts

// Load Popular Posts
function loadPopularPosts() {
    const container = document.getElementById('popular-posts-grid');
    if (!container) return;
    
    const popularPosts = sampleBlogPosts
        .sort((a, b) => b.views - a.views)
        .slice(0, 6);
    
    container.innerHTML = popularPosts.map((post, index) => `
        <div class="popular-post-card">
            <img src="${post.image}" alt="${post.title}" class="popular-post-image">
            <div class="popular-post-content">
                <span class="popular-post-rank">#${index + 1}</span>
                <h3 class="popular-post-title">${post.title}</h3>
                <p class="popular-post-excerpt">${post.excerpt}</p>
                <div class="popular-post-meta">
                    <span class="author">${post.author}</span>
                    <span class="date">${post.date}</span>
                    <span class="popular-post-views">조회 ${post.views}</span>
                </div>
                <a href="blog-post.html" class="btn btn-outline">자세히 보기</a>
            </div>
        </div>
    `).join('');
}

// Load Top Rated Hotels
function loadTopRatedHotels() {
    const container = document.getElementById('top-rated-grid');
    if (!container) return;
    
    const topHotels = [
        { name: '그랜드 하얏트 서울', rating: 4.8, price: 250000, location: '서울' },
        { name: '파크 하얏트 서울', rating: 4.7, price: 300000, location: '서울' },
        { name: '롯데호텔 서울', rating: 4.6, price: 200000, location: '서울' }
    ];
    
    container.innerHTML = topHotels.map(hotel => `
        <div class="hotel-card">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop" alt="${hotel.name}" class="hotel-img">
            <div class="hotel-info">
                <h3>${hotel.name}</h3>
                <div class="hotel-rating">⭐ ${hotel.rating}</div>
                <p class="price">₩${hotel.price.toLocaleString()}</p>
                <p class="location">${hotel.location}</p>
            </div>
        </div>
    `).join('');
}

// Load Recent Reviews
function loadRecentReviews() {
    const container = document.getElementById('recent-reviews');
    if (!container) return;
    
    const reviews = [
        { hotel: '그랜드 하얏트 서울', rating: 5, author: '김여행', date: '2025-01-10', content: '정말 훌륭한 호텔이었습니다. 서비스도 좋고 시설도 깔끔했어요.' },
        { hotel: '파크 하얏트 서울', rating: 4, author: '이관광', date: '2025-01-08', content: '위치가 좋고 조식도 맛있었습니다. 다음에도 이용하고 싶어요.' },
        { hotel: '롯데호텔 서울', rating: 5, author: '박출장', date: '2025-01-05', content: '비즈니스 출장에 최적화된 호텔입니다. 와이파이도 빠르고 편의시설도 잘 갖춰져 있어요.' }
    ];
    
    container.innerHTML = reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <h4>${review.hotel}</h4>
                <div class="review-rating">${'⭐'.repeat(review.rating)}</div>
            </div>
            <p class="review-content">${review.content}</p>
            <div class="review-meta">
                <span class="review-author">${review.author}</span>
                <span class="review-date">${review.date}</span>
            </div>
        </div>
    `).join('');
}

// Load Popular Destinations
function loadPopularDestinations() {
    const container = document.getElementById('popular-destinations');
    if (!container) return;
    
    const destinations = [
        { name: '서울', price: 150000, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=200&h=150&fit=crop' },
        { name: '부산', price: 120000, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=200&h=150&fit=crop' },
        { name: '제주', price: 180000, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=200&h=150&fit=crop' }
    ];
    
    container.innerHTML = destinations.map(dest => `
        <div class="destination-card">
            <img src="${dest.image}" alt="${dest.name}" class="destination-image">
            <div class="destination-info">
                <h3>${dest.name}</h3>
                <p class="destination-price">₩${dest.price.toLocaleString()}</p>
            </div>
        </div>
    `).join('');
}

// FAQ Functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        
        if (question && answer && toggle) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherToggle = otherItem.querySelector('.faq-toggle');
                        if (otherToggle) otherToggle.textContent = '+';
                    }
                });
                
                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                    toggle.textContent = '+';
                } else {
                    item.classList.add('active');
                    toggle.textContent = '-';
                }
            });
        }
    });
    
    // FAQ Search
    const searchInput = document.getElementById('faq-search-input');
    const searchBtn = document.getElementById('faq-search-btn');
    
    if (searchInput && searchBtn) {
        const searchFAQ = () => {
            const searchTerm = searchInput.value.toLowerCase();
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question h3');
                const answer = item.querySelector('.faq-answer');
                
                if (question && answer) {
                    const questionText = question.textContent.toLowerCase();
                    const answerText = answer.textContent.toLowerCase();
                    
                    if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        };
        
        searchBtn.addEventListener('click', searchFAQ);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') searchFAQ();
        });
    }
}

// Price Comparison
function initPriceComparison() {
    const form = document.getElementById('price-comparison-form');
    const resultsContainer = document.getElementById('comparison-results');
    
    if (form && resultsContainer) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const destination = document.getElementById('destination').value;
            const checkIn = document.getElementById('check-in').value;
            const checkOut = document.getElementById('check-out').value;
            const guests = document.getElementById('guests').value;
            
            // Simulate price comparison results
            const results = [
                { site: '호텔스닷컴', price: 150000, discount: '20% 할인' },
                { site: '아고다', price: 180000, discount: '10% 할인' },
                { site: '부킹닷컴', price: 170000, discount: '15% 할인' }
            ];
            
            resultsContainer.innerHTML = `
                <div class="comparison-results-header">
                    <h3>${destination} 검색 결과</h3>
                    <p>체크인: ${checkIn} | 체크아웃: ${checkOut} | 인원: ${guests}명</p>
                </div>
                <div class="results-list">
                    ${results.map(result => `
                        <div class="result-item">
                            <div class="result-site">${result.site}</div>
                            <div class="result-price">₩${result.price.toLocaleString()}</div>
                            <div class="result-discount">${result.discount}</div>
                            <button class="btn btn-primary">예약하기</button>
                        </div>
                    `).join('')}
                </div>
            `;
        });
    }
}

// Newsletter Subscription
function initNewsletter() {
    const forms = document.querySelectorAll('.newsletter-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            
            if (email) {
                alert('구독이 완료되었습니다! 새로운 할인 정보를 이메일로 받아보세요.');
                form.reset();
            }
        });
    });
}

// Filter Functionality
function initFilters() {
    // Coupon filters
    const couponFilters = document.querySelectorAll('.filter-btn[data-category]');
    couponFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            couponFilters.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            filterCoupons(category);
        });
    });
    
    // Event filters
    const eventFilters = document.querySelectorAll('.filter-btn[data-category]');
    eventFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            eventFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            filterEvents(category);
        });
    });
    
    // FAQ filters
    const faqFilters = document.querySelectorAll('.tab-btn[data-category]');
    faqFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            faqFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            filterFAQ(category);
        });
    });
    
    // Blog filters
    const blogFilters = document.querySelectorAll('.filter-btn[data-category]');
    blogFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            blogFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            filterBlogPosts(category);
        });
    });
}

// Filter Coupons

// Filter Events

// Filter FAQ
function filterFAQ(category) {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const itemCategory = item.dataset.category || 'general';
        
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Filter Blog Posts
function filterBlogPosts(category) {
    const filteredPosts = category === 'all' ? sampleBlogPosts : sampleBlogPosts.filter(post => post.category === category);
    
    const container = document.getElementById('blog-grid');
    if (container) {
        container.innerHTML = filteredPosts.map(post => `
            <div class="blog-card">
                <img src="${post.image}" alt="${post.title}" class="blog-image">
                <div class="blog-content">
                    <span class="blog-category">${post.category}</span>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <div class="blog-meta">
                        <span class="author">${post.author}</span>
                        <span class="date">${post.date}</span>
                        <span class="views">조회 ${post.views}</span>
                    </div>
                    <a href="blog-post.html" class="btn btn-outline">자세히 보기</a>
                </div>
            </div>
        `).join('');
    }
}

// Open Event Link
function openEventLink() {
    const eventLinks = [
        'http://app.ac/zqGXya283',
        'http://app.ac/7qGXya263', 
        'http://app.ac/kE6LvZS63',
        'http://app.ac/CjMfxBa13',
        'http://app.ac/z3reN4J63',
        'http://app.ac/ttpiHQM73',
        'http://app.ac/UtpiHQM73'
    ];
    const linkIndex = Math.floor(Math.random() * eventLinks.length);
    window.open(eventLinks[linkIndex], '_blank');
}

// Copy Coupon Code
function copyCouponCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        alert(`쿠폰 코드 "${code}"가 클립보드에 복사되었습니다!`);
        // 복사 후 제공된 링크로 이동 (쿠폰별로 다른 링크 사용)
        const couponLinks = [
            'http://app.ac/zqGXya283',
            'http://app.ac/7qGXya263', 
            'http://app.ac/kE6LvZS63',
            'http://app.ac/CjMfxBa13',
            'http://app.ac/z3reN4J63',
            'http://app.ac/ttpiHQM73',
            'http://app.ac/UtpiHQM73'
        ];
        const linkIndex = (code.length + code.charCodeAt(0)) % couponLinks.length;
        window.open(couponLinks[linkIndex], '_blank');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert(`쿠폰 코드 "${code}"가 클립보드에 복사되었습니다!`);
        // 복사 후 제공된 링크로 이동
        const couponLinks = [
            'http://app.ac/zqGXya283',
            'http://app.ac/7qGXya263', 
            'http://app.ac/kE6LvZS63',
            'http://app.ac/CjMfxBa13',
            'http://app.ac/z3reN4J63',
            'http://app.ac/ttpiHQM73',
            'http://app.ac/UtpiHQM73'
        ];
        const linkIndex = (code.length + code.charCodeAt(0)) % couponLinks.length;
        window.open(couponLinks[linkIndex], '_blank');
    });
}

// Use Coupon
function useCoupon(code) {
    // Redirect to affiliate links after copying coupon
    const couponLinks = [
        'http://app.ac/zqGXya283',
        'http://app.ac/7qGXya263', 
        'http://app.ac/kE6LvZS63',
        'http://app.ac/CjMfxBa13',
        'http://app.ac/z3reN4J63',
        'http://app.ac/ttpiHQM73',
        'http://app.ac/UtpiHQM73'
    ];
    const linkIndex = (code.length + code.charCodeAt(0)) % couponLinks.length;
    window.open(couponLinks[linkIndex], '_blank');
}

// Initialize All Buttons
function initAllButtons() {
    // Load More Buttons
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            loadMoreCoupons();
        });
    }
    
    const loadMorePosts = document.getElementById('load-more-posts');
    if (loadMorePosts) {
        loadMorePosts.addEventListener('click', () => {
            loadMoreBlogPosts();
        });
    }
    
    
    // Event Detail Buttons
    const eventDetailBtns = document.querySelectorAll('.event-actions .btn-primary');
    eventDetailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showEventDetails(btn.closest('.event-card'));
        });
    });
    
    // Blog Detail Buttons
    const blogDetailBtns = document.querySelectorAll('.blog-card .btn-outline');
    blogDetailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showBlogDetails(btn.closest('.blog-card'));
        });
    });
    
    // Hotel Detail Buttons
    const hotelDetailBtns = document.querySelectorAll('.hotel-card');
    hotelDetailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showHotelDetails(btn);
        });
    });
    
    // Review Detail Buttons
    const reviewDetailBtns = document.querySelectorAll('.review-item');
    reviewDetailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showReviewDetails(btn);
        });
    });
    
    // Destination Detail Buttons
    const destinationBtns = document.querySelectorAll('.destination-card');
    destinationBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showDestinationDetails(btn);
        });
    });
    
    // Social Share Buttons
    const shareBtns = document.querySelectorAll('.share-btn');
    shareBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            handleSocialShare(btn);
        });
    });
    
    // Alert Buttons
    const alertBtns = document.querySelectorAll('.alert-option input[type="checkbox"]');
    alertBtns.forEach(btn => {
        btn.addEventListener('change', () => {
            updateAlertSettings();
        });
    });
    
    const alertSubmitBtn = document.querySelector('.alert-form button[type="submit"]');
    if (alertSubmitBtn) {
        alertSubmitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            submitPriceAlert();
        });
    }
}

// Load More Functions
function loadMoreCoupons() {
    console.log('Loading more coupons...');
    // Add more coupons to the grid
    const container = document.getElementById('featured-coupons') || document.getElementById('coupons-grid');
    if (container) {
        const additionalCoupons = [
            {
                id: 7,
                code: 'SUMMER25',
                discount: '25% 할인',
                title: '여름 특가 25% 할인',
                description: '여름 휴가를 위한 특별 할인',
                validity: '2025년 8월 31일까지',
                category: 'hotel',
                minAmount: 80000,
                isActive: true
            },
            {
                id: 8,
                code: 'FAMILY30',
                discount: '30% 할인',
                title: '가족 여행 30% 할인',
                description: '가족 단위 여행 시 특별 할인',
                validity: '2025년 6월 30일까지',
                category: 'package',
                minAmount: 300000,
                isActive: true
            }
        ];
        
        additionalCoupons.forEach(coupon => {
            const couponElement = createCouponElement(coupon);
            container.appendChild(couponElement);
        });
    }
}

function loadMoreBlogPosts() {
    console.log('Loading more blog posts...');
    // Add more blog posts to the grid
    const container = document.getElementById('blog-grid');
    if (container) {
        const additionalPosts = [
            {
                id: 7,
                title: '여름 휴가 준비 완벽 가이드',
                excerpt: '여름 휴가를 위한 모든 준비사항을 정리했습니다.',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
                author: '관리자',
                date: '2025-01-12',
                views: 567,
                category: 'guides',
                featured: false
            },
            {
                id: 8,
                title: '호텔 예약 시 주의사항',
                excerpt: '호텔 예약할 때 놓치기 쉬운 중요한 포인트들',
                image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop',
                author: '관리자',
                date: '2025-01-10',
                views: 432,
                category: 'tips',
                featured: false
            }
        ];
        
        additionalPosts.forEach(post => {
            const postElement = createBlogPostElement(post);
            container.appendChild(postElement);
        });
    }
}


// Create Element Functions
function createCouponElement(coupon) {
    const div = document.createElement('div');
    div.className = 'coupon-card';
    div.innerHTML = `
        <div class="coupon-header">
            <span class="coupon-code">${coupon.code}</span>
            <span class="coupon-discount">${coupon.discount}</span>
        </div>
        <h3 class="coupon-title">${coupon.title}</h3>
        <p class="coupon-description">${coupon.description}</p>
        <p class="coupon-validity">유효기간: ${coupon.validity}</p>
        <div class="coupon-actions">
            <button class="btn-copy" onclick="copyCouponCode('${coupon.code}')">쿠폰 복사</button>
            <button class="btn-use" onclick="useCoupon('${coupon.code}')">사용하기</button>
        </div>
    `;
    return div;
}

function createBlogPostElement(post) {
    const div = document.createElement('div');
    div.className = 'blog-card';
    div.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="blog-image">
        <div class="blog-content">
            <span class="blog-category">${post.category}</span>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="blog-meta">
                <span class="author">${post.author}</span>
                <span class="date">${post.date}</span>
                <span class="views">조회 ${post.views}</span>
            </div>
            <a href="blog-post.html" class="btn btn-outline">자세히 보기</a>
        </div>
    `;
    return div;
}

function createReviewElement(review) {
    const div = document.createElement('div');
    div.className = 'review-item';
    div.innerHTML = `
        <div class="review-header">
            <h4>${review.hotel}</h4>
            <div class="review-rating">${'⭐'.repeat(review.rating)}</div>
        </div>
        <p class="review-content">${review.content}</p>
        <div class="review-meta">
            <span class="review-author">${review.author}</span>
            <span class="review-date">${review.date}</span>
        </div>
    `;
    return div;
}

// Detail Show Functions


function showHotelDetails(hotelCard) {
    const name = hotelCard.querySelector('h3').textContent;
    const rating = hotelCard.querySelector('.hotel-rating').textContent;
    const price = hotelCard.querySelector('.price').textContent;
    
    let detailsList = document.getElementById('hotel-details-list');
    if (!detailsList) {
        detailsList = document.createElement('div');
        detailsList.id = 'hotel-details-list';
        detailsList.className = 'details-list';
        hotelCard.parentNode.appendChild(detailsList);
    }
    
    detailsList.innerHTML = `
        <div class="detail-item">
            <h4>호텔 상세 정보</h4>
            <p><strong>호텔명:</strong> ${name}</p>
            <p><strong>평점:</strong> ${rating}</p>
            <p><strong>가격:</strong> ${price}</p>
            <p><em>자세한 정보는 호텔 리뷰 페이지에서 확인하세요.</em></p>
        </div>
    `;
}

function showReviewDetails(reviewItem) {
    const hotel = reviewItem.querySelector('h4').textContent;
    const content = reviewItem.querySelector('.review-content').textContent;
    const author = reviewItem.querySelector('.review-author').textContent;
    
    let detailsList = document.getElementById('review-details-list');
    if (!detailsList) {
        detailsList = document.createElement('div');
        detailsList.id = 'review-details-list';
        detailsList.className = 'details-list';
        reviewItem.parentNode.appendChild(detailsList);
    }
    
    detailsList.innerHTML = `
        <div class="detail-item">
            <h4>리뷰 상세 정보</h4>
            <p><strong>호텔:</strong> ${hotel}</p>
            <p><strong>작성자:</strong> ${author}</p>
            <p><strong>내용:</strong> ${content}</p>
            <p><em>더 많은 리뷰는 리뷰 페이지에서 확인하세요.</em></p>
        </div>
    `;
}

function showDestinationDetails(destinationCard) {
    const name = destinationCard.querySelector('h3').textContent;
    const price = destinationCard.querySelector('.destination-price').textContent;
    
    let detailsList = document.getElementById('destination-details-list');
    if (!detailsList) {
        detailsList = document.createElement('div');
        detailsList.id = 'destination-details-list';
        detailsList.className = 'details-list';
        destinationCard.parentNode.appendChild(detailsList);
    }
    
    detailsList.innerHTML = `
        <div class="detail-item">
            <h4>목적지 상세 정보</h4>
            <p><strong>지역:</strong> ${name}</p>
            <p><strong>가격:</strong> ${price}</p>
            <p><em>자세한 정보는 가격 비교 페이지에서 확인하세요.</em></p>
        </div>
    `;
}

// Social Share Functions
function handleSocialShare(btn) {
    const platform = btn.classList[1]; // facebook, twitter, kakao, link
    const url = window.location.href;
    const title = document.title;
    
    switch(platform) {
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
            break;
        case 'kakao':
            // 카카오톡 공유는 별도 SDK 필요
            alert('카카오톡 공유 기능은 카카오 SDK가 필요합니다.');
            break;
        case 'link':
            navigator.clipboard.writeText(url).then(() => {
                alert('링크가 클립보드에 복사되었습니다!');
            });
            break;
    }
}

// Alert Settings
function updateAlertSettings() {
    const emailAlert = document.querySelector('input[type="checkbox"]:checked');
    if (emailAlert) {
        console.log('알림 설정이 업데이트되었습니다.');
    }
}

function submitPriceAlert() {
    const form = document.getElementById('price-alert-form');
    if (form) {
        const formData = new FormData(form);
        const destination = formData.get('destination') || '모든 지역';
        const price = formData.get('price') || '모든 가격';
        const email = formData.get('email');
        
        if (email) {
            alert(`가격 알림이 설정되었습니다!\n\n목적지: ${destination}\n목표 가격: ${price}\n이메일: ${email}`);
            form.reset();
        } else {
            alert('이메일 주소를 입력해주세요.');
        }
    }
}

// Event Calendar
function initEventCalendar() {
    const prevBtn = document.getElementById('prev-month');
    const nextBtn = document.getElementById('next-month');
    const currentMonthEl = document.getElementById('current-month');
    const calendarGrid = document.getElementById('calendar-grid');
    
    if (!prevBtn || !nextBtn || !currentMonthEl || !calendarGrid) return;
    
    let currentDate = new Date();
    
    function updateCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        currentMonthEl.textContent = `${year}년 ${month + 1}월`;
        
        // Generate calendar grid
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();
        
        let calendarHTML = '';
        
        // Day headers
        const dayHeaders = ['일', '월', '화', '수', '목', '금', '토'];
        dayHeaders.forEach(day => {
            calendarHTML += `<div class="calendar-day-header">${day}</div>`;
        });
        
        // Empty cells for days before month starts
        for (let i = 0; i < startingDay; i++) {
            calendarHTML += '<div class="calendar-day empty"></div>';
        }
        
        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const currentDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const hasEvent = sampleEvents.some(event => {
                const startDate = new Date(event.startDate);
                const endDate = new Date(event.endDate);
                const checkDate = new Date(currentDateStr);
                return checkDate >= startDate && checkDate <= endDate;
            });
            
            calendarHTML += `
                <div class="calendar-day ${hasEvent ? 'has-event' : ''}" data-day="${day}" onclick="showDayEvents(${day}, ${month + 1}, ${year})">
                    ${day}
                    ${hasEvent ? '<div class="event-dot"></div>' : ''}
                </div>
            `;
        }
        
        calendarGrid.innerHTML = calendarHTML;
    }
    
    prevBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar();
    });
    
    nextBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar();
    });
    
    updateCalendar();
}

// Show Day Events
function showDayEvents(day, month, year) {
    // Create or update events list
    let eventsList = document.getElementById('day-events-list');
    if (!eventsList) {
        eventsList = document.createElement('div');
        eventsList.id = 'day-events-list';
        eventsList.className = 'day-events-list';
        
        // Find calendar container and add events list below it
        const calendarContainer = document.querySelector('.calendar-container');
        if (calendarContainer) {
            calendarContainer.appendChild(eventsList);
        }
    }
    
    // Get actual events for the day
    const currentDateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayEvents = sampleEvents.filter(event => {
        const startDate = new Date(event.startDate);
        const endDate = new Date(event.endDate);
        const checkDate = new Date(currentDateStr);
        return checkDate >= startDate && checkDate <= endDate;
    });
    
    if (dayEvents.length === 0) {
        eventsList.innerHTML = `
            <div class="day-events-header">
                <h3>${year}년 ${month}월 ${day}일 이벤트</h3>
            </div>
            <div class="day-events-content">
                <p style="text-align: center; color: #666; padding: 2rem;">이 날에는 진행중인 이벤트가 없습니다.</p>
            </div>
        `;
    } else {
        eventsList.innerHTML = `
            <div class="day-events-header">
                <h3>${year}년 ${month}월 ${day}일 이벤트 (${dayEvents.length}개)</h3>
            </div>
            <div class="day-events-content">
                ${dayEvents.map(event => `
                    <div class="day-event-item">
                        <div class="event-time">${event.badge}</div>
                        <div class="event-info">
                            <h4>${event.title}</h4>
                            <p>${event.description}</p>
                            <div class="event-code">기간: ${event.startDate} ~ ${event.endDate}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
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

// Add loading states
function showLoading(element) {
    element.innerHTML = '<div class="loading">로딩 중...</div>';
}

function hideLoading(element) {
    // Remove loading state
}

// Initialize tooltips
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = e.target.dataset.tooltip;
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}
