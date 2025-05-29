        document.addEventListener('DOMContentLoaded', function () {
            const burgerBtn = document.getElementById('burgerBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            const overlay = document.getElementById('overlay');
            const burgerIconWrapper = document.querySelector('.burger-icon-wrapper'); // Get the wrapper

            function toggleMenu() {
                const isOpen = mobileMenu.classList.contains('open');
                mobileMenu.classList.toggle('open');
                burgerBtn.classList.toggle('open'); 
                
                if (!isOpen) { 
                    overlay.classList.add('active');
                    document.body.style.overflow = 'hidden'; 
                    // Make burger icon fixed when menu is open to stay on top
                    burgerIconWrapper.style.position = 'fixed';
                    burgerIconWrapper.style.top = '1rem'; /* Adjust as per your header padding */
                    burgerIconWrapper.style.right = '5%'; /* Adjust to align with container or preference */

                } else { 
                    overlay.classList.remove('active');
                    document.body.style.overflow = ''; 
                    // Revert burger icon position when menu is closed
                    burgerIconWrapper.style.position = 'relative';
                    burgerIconWrapper.style.top = 'auto';
                    burgerIconWrapper.style.right = 'auto';
                }
            }

            burgerBtn.addEventListener('click', toggleMenu);
            overlay.addEventListener('click', toggleMenu); 

            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (mobileMenu.classList.contains('open')) {
                        toggleMenu();
                    }
                });
            });
            
            document.getElementById('currentYear').textContent = new Date().getFullYear();
        });