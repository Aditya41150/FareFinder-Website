// Download button functionality
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');

    // Update this URL to point to your actual APK file
    // You can host it on GitHub Releases or any other hosting service
    const APK_URL = 'https://github.com/Aditya41150/Fare-Finder-Cabs-and-Bikes/releases/tag/v0.1.0';

    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Add a click animation
        downloadBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            downloadBtn.style.transform = '';
        }, 150);

        // Show download starting message
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = `
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Downloading...
        `;

        // Create a temporary link and trigger download
        const link = document.createElement('a');
        link.href = APK_URL;
        link.download = 'FareFinder.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset button after 2 seconds
        setTimeout(() => {
            downloadBtn.innerHTML = originalText;
        }, 2000);
    });

    // Add parallax effect to phone mockup
    const phoneScreen = document.querySelector('.phone-mockup');
    if (phoneScreen) {
        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const xPos = (clientX / innerWidth - 0.5) * 20;
            const yPos = (clientY / innerHeight - 0.5) * 20;

            phoneScreen.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg)`;
        });
    }

    // Add smooth scroll behavior
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

    // Intersection Observer for fade-in animations
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
    document.querySelectorAll('.feature-item, .screenshot-card').forEach(el => {
        observer.observe(el);
    });

    // Add keyboard navigation for download button
    downloadBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            downloadBtn.click();
        }
    });

    // Track download analytics (optional)
    downloadBtn.addEventListener('click', () => {
        // You can add analytics tracking here
        console.log('APK download initiated');

        // Example: Google Analytics
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', 'download', {
        //         'event_category': 'APK',
        //         'event_label': 'FareFinder APK'
        //     });
        // }
    });
});

// Add a subtle cursor trail effect
let cursorTrail = [];
const maxTrailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });

    if (cursorTrail.length > maxTrailLength) {
        cursorTrail.shift();
    }
});

// Performance optimization: Use requestAnimationFrame for smooth animations
let ticking = false;

function updateAnimations() {
    // Update any continuous animations here
    ticking = false;
}

document.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateAnimations);
        ticking = true;
    }
});

// Add loading state
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
