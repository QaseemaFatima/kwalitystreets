document.addEventListener('DOMContentLoaded', () => {
    
    // ---- VIDEO LOGIC (Safeguarded) ----
    try {
        const container = document.getElementById('video-container');
        if (container) {
            const videoElements = Array.from(container.querySelectorAll('video'));
            if (videoElements.length > 0) {
                let currentIndex = 0;

                videoElements.forEach((video, index) => {
                    video.addEventListener('ended', () => transitionToNextVideo());
                    video.addEventListener('error', (e) => {
                        console.warn('Video failed to load:', video.src, e);
                        transitionToNextVideo(); // skip to next if one fails
                    });
                    // Preload the next video to ensure smooth transitions without stealing initial bandwidth
                    video.addEventListener('play', () => {
                        const nextIndex = (index + 1) % videoElements.length;
                        videoElements[nextIndex].preload = 'auto';
                    });
                });

                function transitionToNextVideo() {
                    if (videoElements.length === 0) return;
                    const currentVideo = videoElements[currentIndex];
                    currentIndex = (currentIndex + 1) % videoElements.length;
                    const nextVideo = videoElements[currentIndex];
                    
                    nextVideo.currentTime = 0;
                    nextVideo.play().catch(e => console.log('Autoplay prevented on transition:', e));
                    
                    currentVideo.classList.remove('active');
                    nextVideo.classList.add('active');
                }
                
                videoElements[0].play().catch(e => console.log("Initial autoplay was prevented by browser policies."));

                // Fallback for strict mobile autoplay policies (e.g., iOS Low Power Mode)
                const playOnInteract = () => {
                    const activeVideo = videoElements.find(v => v.classList.contains('active')) || videoElements[0];
                    if (activeVideo.paused) {
                        activeVideo.play().catch(e => console.log("Autoplay still prevented on interact."));
                    }
                };
                
                document.body.addEventListener('touchstart', playOnInteract, { once: true });
                document.body.addEventListener('click', playOnInteract, { once: true });
                document.body.addEventListener('scroll', playOnInteract, { once: true });
            } else {
                // Graceful fallback if no videos are configured
                container.innerHTML = '<div style="background: #111; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #666;">Background Cinematic Mode Unavailable</div>';
            }
        }
    } catch (err) {
        console.error("Video Logic Error:", err);
    }

    // ---- HEADER LOGIC (Safeguarded) ----
    try {
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (header) {
                if (window.scrollY > 50) {
                    header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                    header.style.mixBlendMode = 'normal';
                    header.style.padding = '1.5rem 4rem';
                    header.style.transition = 'all 0.3s ease';
                } else {
                    header.style.backgroundColor = 'transparent';
                    header.style.mixBlendMode = 'difference';
                    header.style.padding = '2rem 4rem';
                }
            }
        });
    } catch (err) {
        console.error("Header Logic Error:", err);
    }

    // ---- DYNAMIC MENU LOGIC (Safeguarded) ----
    try {
        const menuContainer = document.getElementById('menu-categories-container');
        if (menuContainer) {
            let currentMenuData = null;
            try {
                let storedData = localStorage.getItem('kwalityMenuData');
                if (storedData) {
                    const parsed = JSON.parse(storedData);
                    if (parsed && typeof parsed === 'object' && Object.keys(parsed).length > 0) {
                        currentMenuData = parsed;
                    }
                }
            } catch (e) {
                console.warn("localStorage error", e);
            }
            if (!currentMenuData) {
                currentMenuData = window.defaultMenuData || {};
            }

            // 3. Render
            if (!currentMenuData || Object.keys(currentMenuData).length === 0) {
                menuContainer.innerHTML = `
                    <div style="text-align: center; padding: 4rem; color: var(--accent-color); border: 1px dashed var(--accent-color); border-radius: 8px;">
                        <h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 1rem;">Menu Temporarily Unavailable</h3>
                        <p style="font-family: var(--font-body);">We are currently updating our delicious offerings. Please check back shortly!</p>
                    </div>`;
            } else {
                let htmlStr = '';
                Object.keys(currentMenuData).forEach(category => {
                    const isActive = category === 'appetizers' ? 'active' : '';
                    htmlStr += `<div class="menu-category ${isActive}" id="${category}">`;
                    
                    if (Array.isArray(currentMenuData[category])) {
                        currentMenuData[category].forEach(item => {
                            if (item.subtitle) {
                                htmlStr += `<h3 class="category-subtitle">${item.subtitle}</h3>`;
                            } else {
                                htmlStr += `
                                    <div class="menu-item">
                                        <div class="item-header">
                                            <span class="item-name">${item.name || 'Unnamed Item'}</span>
                                            <div class="item-spacer"></div>
                                            <span class="item-price">₹${item.price || '0'}</span>
                                        </div>
                                    </div>`;
                            }
                        });
                    }
                    htmlStr += `</div>`;
                });
                
                menuContainer.innerHTML = htmlStr;

                const tabBtns = document.querySelectorAll('.tab-btn');
                const menuCategories = document.querySelectorAll('.menu-category');

                if (tabBtns && menuCategories) {
                    tabBtns.forEach(btn => {
                        btn.addEventListener('click', () => {
                            tabBtns.forEach(b => b.classList.remove('active'));
                            menuCategories.forEach(c => c.classList.remove('active'));
                            btn.classList.add('active');
                            const targetId = btn.getAttribute('data-target');
                            const targetEl = document.getElementById(targetId);
                            if(targetEl) targetEl.classList.add('active');
                        });
                    });
                }
            }
        }
    } catch (err) {
        console.error("Dynamic Menu Logic Error:", err);
    }


});
