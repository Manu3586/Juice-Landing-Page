
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    navbar.classList.remove('active');
}

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalFeatures = document.getElementById('modalFeatures');

const productData = {
    orange: {
        title: 'Orange Burst',
        description: 'A refreshing blend of fresh oranges with a burst of citrus energy. Perfect for morning boost and packed with vitamin C.',
        image: 'orange.png',
        features: ['High Vitamin C', 'Fresh Pressed', 'No Added Sugar', 'Energy Boost']
    },
    berry: {
        title: 'Berry Blend',
        description: 'Antioxidant-rich combination of strawberries, blueberries, and cherries. Health in every sip with amazing taste.',
        image: 'craneberry.png',
        features: ['Rich Antioxidants', 'Heart Healthy', 'Premium Berries', 'Anti-inflammatory']
    },
    tropical: {
        title: 'Tropical Paradise',
        description: 'Exotic blend of mango, pineapple, and passion fruit. Transport yourself to paradise with every sip.',
        image: 'pineapple.png',
        features: ['Tropical Fruits', 'Vitamin Rich', 'Energy Boost', 'Immune Support']
    }
};

function openModal(productType) {
    const product = productData[productType];
    if (product) {
        modalImage.src = product.image;
        modalTitle.textContent = product.title;
        modalDescription.textContent = product.description;
        
        modalFeatures.innerHTML = '';
        product.features.forEach(feature => {
            const span = document.createElement('span');
            span.className = 'modal-feature';
            span.textContent = feature;
            span.style.cssText = 'background: #ff6b35; color: white; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem; margin: 0.2rem; display: inline-block;';
            modalFeatures.appendChild(span);
        });
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email) {
        // Simulate form submission
        alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email} soon!`);
        
        // Reset form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all required fields.');
    }
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0,0,0,0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && window.innerWidth > 768) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
});

document.querySelector('.logo').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});