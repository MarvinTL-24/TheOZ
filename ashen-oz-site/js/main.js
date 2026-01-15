// main.js - Funcionalidades básicas para The Ashen OZ

document.addEventListener('DOMContentLoaded', function() {
    console.log('The Ashen OZ - Site carregado');
    
    // Menu mobile toggle (para versão responsiva futura)
    const initMobileMenu = () => {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                menuBtn.innerHTML = mobileMenu.classList.contains('hidden') 
                    ? '☰' 
                    : '✕';
            });
        }
    };
    
    // Efeito de scroll para header
    const initScrollEffects = () => {
        const header = document.querySelector('header');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Adicionar sombra quando scrollar
            if (currentScroll > 50) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
            
            // Esconder/mostrar header no scroll
            if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
        });
    };
    
    // Animações de entrada para elementos
    const initScrollAnimations = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observar elementos com a classe 'scroll-animate'
        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
        });
    };
    
    // Efeito de digitação para elementos com classe 'typewriter'
    const initTypewriterEffect = () => {
        const typewriterElements = document.querySelectorAll('.typewriter');
        
        typewriterElements.forEach(el => {
            const text = el.textContent;
            el.textContent = '';
            el.style.width = '0';
            
            setTimeout(() => {
                let i = 0;
                const speed = 50; // velocidade em ms
                
                const typeWriter = () => {
                    if (i < text.length) {
                        el.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, speed);
                    }
                };
                
                typeWriter();
            }, 500);
        });
    };
    
    // Formulário de contato básico
    const initContactForm = () => {
        const contactForm = document.getElementById('contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Validação básica
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                if (!email || !message) {
                    alert('Por favor, preencha todos os campos obrigatórios.');
                    return;
                }
                
                // Simular envio
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;
                
                // Simular delay de rede
                setTimeout(() => {
                    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            });
        }
    };
    
    // Inicializar todas as funcionalidades
    initMobileMenu();
    initScrollEffects();
    initScrollAnimations();
    initTypewriterEffect();
    initContactForm();
    
    // Adicionar classe CSS para animação de fade-in
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
        }
        
        .scroll-animate {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
});