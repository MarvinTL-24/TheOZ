// main.js - Sistema modular para The Ashen OZ
const AshenOZ = {
    // Dados compartilhados
    galleryData: [
        // Imagens 1-10
        { id: 1, title: "Key Visual - Main Poster", category: "concept", imageUrl: "assets/images/gallery/1.webp" },
        { id: 2, title: "Dorothy in Orphanage", category: "character", imageUrl: "assets/images/gallery/2.webp" },
        { id: 3, title: "Whispering Forest", category: "environment", imageUrl: "assets/images/gallery/3.webp" },
        { id: 4, title: "Emerald City Ruins", category: "environment", imageUrl: "assets/images/gallery/4.webp" },
        { id: 5, title: "Chained Attack Combo", category: "gameplay", imageUrl: "assets/images/gallery/5.webp" },
        { id: 6, title: "Boss Encounter - Phase 1", category: "gameplay", imageUrl: "assets/images/gallery/6.webp" },
        { id: 7, title: "Ashen Dice - Phantom Face", category: "concept", imageUrl: "assets/images/gallery/7.webp" },
        { id: 8, title: "Combat Room Layout", category: "gameplay", imageUrl: "assets/images/gallery/8.webp" },
        { id: 9, title: "Exploration Room", category: "environment", imageUrl: "assets/images/gallery/9.webp" },
        { id: 10, title: "Event Room Dialogue", category: "ui", imageUrl: "assets/images/gallery/10.webp" },

        // Imagens 11-20
        { id: 11, title: "Mini-Boss Room - Design", category: "environment", imageUrl: "assets/images/gallery/11.webp" },
        { id: 12, title: "Boss Room - Entrance", category: "gameplay", imageUrl: "assets/images/gallery/12.webp" },
        { id: 13, title: "Combat Mechanics - Basic Attack", category: "gameplay", imageUrl: "assets/images/gallery/13.webp" },
        { id: 14, title: "Chained Move - Dreamcatcher", category: "gameplay", imageUrl: "assets/images/gallery/14.webp" },
        { id: 15, title: "Region Entry", category: "environment", imageUrl: "assets/images/gallery/15.webp" },
        { id: 16, title: "Dorothy Age 7 Concept", category: "character", imageUrl: "assets/images/gallery/16.webp" },
        { id: 17, title: "The Seat - Rest Area", category: "environment", imageUrl: "assets/images/gallery/17.webp" },
        { id: 18, title: "Witch's Umbrella Design", category: "concept", imageUrl: "assets/images/gallery/18.webp" },
        { id: 19, title: "Blood Shoes Movement", category: "gameplay", imageUrl: "assets/images/gallery/19.webp" },
         { id: 20, title: "Weapon Switching UI", category:"ui", imageUrl:"assets/images/gallery/20.webp" },
            // Imagens 21-30
        { id: 21, title: "Scarecrow's Scythe", category: "concept", imageUrl: "assets/images/gallery/21.webp" },
        { id: 22, title: "Tin Man's Hammer", category: "concept", imageUrl: "assets/images/gallery/22.webp" },
        { id: 23, title: "Lion's Claws", category: "concept", imageUrl: "assets/images/gallery/23.webp" },
        { id: 24, title: "Hurricane Dice Face", category: "concept", imageUrl: "assets/images/gallery/24.webp" },
        { id: 25, title: "Ashfire Dice Face", category: "concept", imageUrl: "assets/images/gallery/25.webp" },
        { id: 26, title: "Frostveil Dice Face", category: "concept", imageUrl: "assets/images/gallery/26.webp" },
        { id: 27, title: "Null Dice Face", category: "concept", imageUrl: "assets/images/gallery/27.webp" },
        { id: 28, title: "Phantom Dice Face", category: "concept", imageUrl: "assets/images/gallery/28.webp" },
        { id: 29, title: "Thunderveil Dice Face", category: "concept", imageUrl: "assets/images/gallery/29.webp" },
        { id: 30, title: "Combat Flow Visual", category: "gameplay", imageUrl: "assets/images/gallery/30.webp" },
            
        // Imagens 31-40
        { id: 31, title: "Map Exploration", category: "gameplay", imageUrl: "assets/images/gallery/31.webp" },
        { id: 32, title: "Enemy Designs - Set 1", category: "concept", imageUrl: "assets/images/gallery/32.webp" },
        { id: 33, title: "Enemy Designs - Set 2", category: "concept", imageUrl: "assets/images/gallery/33.webp" },
        { id: 34, title: "Boss Design - Concept", category: "concept", imageUrl: "assets/images/gallery/34.webp" },
        { id: 35, title: "UI Layout - Combat", category: "ui", imageUrl: "assets/images/gallery/35.webp" },
        { id: 36, title: "UI Layout - Inventory", category: "ui", imageUrl: "assets/images/gallery/36.webp" },
        { id: 37, title: "Particle Effects - Combat", category: "gameplay", imageUrl: "assets/images/gallery/37.webp" },
        { id: 38, title: "Lighting Studies", category: "concept", imageUrl:"assets/images/gallery/38.webp" },
        { id: 39, title: "Color Palette", category: "concept", imageUrl: "assets/images/gallery/39.webp" },
        { id: 40, title: "Character Expressions", category: "character", imageUrl: "assets/images/gallery/40.webp" },
            
        // Imagens 41-50
        { id: 41, title: "Environment Mood - Rain", category: "environment", imageUrl: "assets/images/gallery/41.webp" },
        { id: 42, title: "Environment Mood - Storm", category: "environment", imageUrl: "assets/images/gallery/42.webp" },
        { id: 43, title: "Environment Mood - Ruins", category: "environment", imageUrl: "assets/images/gallery/43.webp" },
        { id: 44, title: "Promotional Art 1", category: "concept", imageUrl: "assets/images/gallery/44.webp" },
        { id: 45, title: "Promotional Art 2", category: "concept", imageUrl: "assets/images/gallery/45.webp" },
        { id: 46, title: "Development Progress", category: "concept", imageUrl:"assets/images/gallery/46.webp" },
        { id: 47, title: "Title Screen Concept", category: "ui", imageUrl:"assets/images/gallery/47.webp" },
        {id: 48, title: "Character Interaction UI", category: "ui", imageUrl:"assets/images/gallery/48.webp" },
        { id: 49, title: "Environment - Swamp Area", category: "environment", imageUrl:"assets/images/gallery/49.webp" },
        { id: 50, title: "Environment - Deserted Village", category: "environment", imageUrl:"assets/images/gallery/50.webp" },

        // Imagens 50-57
        {id: 51, title: "Character - Mysterious Stranger", category: "character", imageUrl:"assets/images/gallery/51.webp" },
        { id: 52, title: "Character - Village Elder", category: "character", imageUrl:"assets/images/gallery/52.webp" },
        { id: 53, title: "Gameplay - Stealth Mechanics", category: "gameplay", imageUrl:"assets/images/gallery/53.webp" },
        { id: 54, title: "Gameplay - Puzzle Room", category: "gameplay", imageUrl:"assets/images/gallery/54.webp" },
        { id: 55, title: "Concept - Dark Forest Path", category: "concept", imageUrl:"assets/images/gallery/55.webp" },
        { id: 56, title: "Concept - Abandoned Castle", category: "concept", imageUrl:"assets/images/gallery/56.webp" },
        { id: 57, title: "UI - Skill Tree", category: "ui", imageUrl:"assets/images/gallery/57.webp" }
    ],

    // Sistema de componentes
    components: {
        // Componente: Galeria
        gallery: function(containerId, options = {}) {
            const container = document.getElementById(containerId);
            if (!container) return;
            
            const { filter = 'all', limit = null, columns = 4 } = options;
            const filteredData = filter === 'all' 
                ? this.galleryData 
                : this.galleryData.filter(item => item.category === filter);
            
            const limitedData = limit ? filteredData.slice(0, limit) : filteredData;
            
            let gridClass = 'grid gap-6 ';
            switch(columns) {
                case 1: gridClass += 'grid-cols-1'; break;
                case 2: gridClass += 'grid-cols-1 md:grid-cols-2'; break;
                case 3: gridClass += 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'; break;
                default: gridClass += 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'; break;
            }
            
            container.innerHTML = `
                <div class="${gridClass}">
                    ${limitedData.map(item => `
                        <div class="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden hover:border-amber-500 transition-all duration-300 group">
                            <a href="${item.imageUrl}" class="block relative overflow-hidden" data-lightbox="gallery" data-title="${item.title}">
                                <div class="aspect-video bg-gradient-to-br from-gray-800 to-black relative">
                                    <img src="${item.imageUrl}" 
                                         alt="${item.title}" 
                                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                         onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"300\" viewBox=\"0 0 400 300\"><rect width=\"400\" height=\"300\" fill=\"%231a1a1a\"/><text x=\"200\" y=\"150\" font-family=\"Arial\" font-size=\"20\" fill=\"%23d4d4d4\" text-anchor=\"middle\">${item.id}</text></svg>'">
                                    <div class="absolute top-2 left-2 bg-black/70 text-xs px-2 py-1 rounded border border-gray-600">
                                        ${item.category}
                                    </div>
                                </div>
                            </a>
                            <div class="p-4">
                                <h3 class="font-heading font-bold text-lg mb-2 text-amber-400">
                                    #${item.id} - ${item.title}
                                </h3>
                                <p class="text-gray-300 text-sm mb-3">
                                    ${item.description}
                                </p>
                                <div class="flex justify-between items-center text-xs text-gray-500">
                                    <span>ID: ${item.id}</span>
                                    <span class="px-2 py-1 bg-gray-800 rounded">${item.category}</span>
                                </div>
                                <a href="${item.imageUrl}" 
                                   data-lightbox="gallery" 
                                   data-title="${item.title}"
                                   class="mt-3 block text-center bg-gray-800 hover:bg-amber-600 text-white py-2 rounded transition-colors text-sm">
                                    View Full Image
                                </a>
                            </div>
                        </div>
                    `).join('')}
                </div>
                ${limit ? `<p class="mt-4 text-center text-gray-400">Showing ${limitedData.length} of ${filteredData.length} images</p>` : ''}
            `;
        },

        // Componente: Card de Personagem
        characterCard: function(data) {
            return `
                <div class="bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700 rounded-xl p-6 hover:border-amber-500 transition-all duration-300">
                    <div class="flex items-start mb-4">
                        <div class="text-4xl mr-4">${data.emoji || '👤'}</div>
                        <div>
                            <h3 class="font-heading text-xl font-bold text-amber-400">${data.name}</h3>
                            <p class="text-gray-400 text-sm">${data.role}</p>
                        </div>
                    </div>
                    <p class="text-gray-300 text-sm mb-4">${data.description}</p>
                    ${data.stats ? `
                        <div class="grid grid-cols-2 gap-2 mt-4">
                            ${data.stats.map(stat => `
                                <div class="bg-black/50 border border-gray-700 rounded p-2 text-center">
                                    <div class="text-xs text-gray-400">${stat.label}</div>
                                    <div class="font-bold">${stat.value}</div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            `;
        },

        // Componente: Card de Sistema
        systemCard: function(data) {
            return `
                <div class="system-card bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700 rounded-xl p-6 hover:border-${data.color}-500 transition-all duration-300">
                    <div class="text-center mb-4">
                        <div class="text-5xl mb-3">${data.icon}</div>
                        <h3 class="font-heading text-xl font-bold text-${data.color}-400">${data.title}</h3>
                    </div>
                    <p class="text-gray-300 text-sm text-center mb-4">${data.description}</p>
                    ${data.features ? `
                        <ul class="space-y-2 text-sm">
                            ${data.features.map(feature => `
                                <li class="flex items-start">
                                    <span class="text-${data.color}-400 mr-2">•</span>
                                    <span class="text-gray-300">${feature}</span>
                                </li>
                            `).join('')}
                        </ul>
                    ` : ''}
                </div>
            `;
        },

        // Componente: Timeline
        timeline: function(items) {
            return `
                <div class="relative pl-8 border-l border-gray-700">
                    ${items.map((item, index) => `
                        <div class="relative mb-8 last:mb-0">
                            <div class="absolute -left-10 w-4 h-4 rounded-full border-2 border-amber-500 bg-black"></div>
                            <h4 class="font-heading text-lg font-bold text-amber-400 mb-2">${item.title}</h4>
                            <p class="text-gray-300 text-sm">${item.description}</p>
                            ${item.date ? `<div class="text-xs text-gray-500 mt-2">${item.date}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        },

        // Componente: Tabela de Dados
        dataTable: function(headers, rows) {
            return `
                <div class="overflow-x-auto rounded-xl border border-gray-700">
                    <table class="w-full border-collapse">
                        <thead>
                            <tr class="bg-gray-900/80">
                                ${headers.map(header => `
                                    <th class="py-3 px-4 text-left font-heading font-bold text-amber-400 border-b border-gray-700">
                                        ${header}
                                    </th>
                                `).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${rows.map((row, index) => `
                                <tr class="${index % 2 === 0 ? 'bg-gray-900/30' : 'bg-gray-900/50'} hover:bg-gray-800/50 transition-colors">
                                    ${row.map(cell => `
                                        <td class="py-3 px-4 border-b border-gray-700 text-gray-300">
                                            ${cell}
                                        </td>
                                    `).join('')}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }
    },

    // Utilitários
    utils: {
        // Carregar componente em elemento específico
        loadComponent: function(componentName, targetId, data) {
            const target = document.getElementById(targetId);
            if (!target || !this.components[componentName]) return;
            
            if (typeof this.components[componentName] === 'function') {
                target.innerHTML = this.components[componentName](data);
            }
        },

        // Carregar múltiplos componentes
        loadComponents: function(components) {
            components.forEach(comp => {
                this.loadComponent(comp.name, comp.target, comp.data);
            });
        },

        // Inicializar lightbox
        initLightbox: function() {
            if (typeof lightbox !== 'undefined') {
                lightbox.option({
                    'resizeDuration': 200,
                    'wrapAround': true,
                    'albumLabel': "Image %1 of %2"
                });
            }
        },

        // Filtrar galeria
        initGalleryFilters: function() {
            document.querySelectorAll('.gallery-filter').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const filter = button.dataset.filter;
                    const galleryId = button.dataset.gallery;
                    
                    // Atualizar botões ativos
                    document.querySelectorAll(`[data-gallery="${galleryId}"]`).forEach(btn => {
                        btn.classList.remove('bg-amber-600', 'text-white');
                        btn.classList.add('bg-gray-800');
                    });
                    button.classList.remove('bg-gray-800');
                    button.classList.add('bg-amber-600', 'text-white');
                    
                    // Aplicar filtro
                    this.components.gallery(galleryId, { filter });
                    this.initLightbox();
                });
            });
        }
    },

    // Inicialização
    init: function() {
        console.log('The Ashen OZ - Sistema inicializado');
        
        // Carregar componentes baseados em data-attributes
        this.loadDataComponents();
        
        // Inicializar utilitários
        this.utils.initGalleryFilters();
        this.utils.initLightbox();
        
        // Inicializar animações
        this.initAnimations();
        
        // Inicializar menu responsivo
        this.initResponsiveMenu();
    },

    // Carregar componentes automaticamente baseados em data-attributes
    loadDataComponents: function() {
        // Componentes de galeria
        document.querySelectorAll('[data-component="gallery"]').forEach(element => {
            const galleryId = element.id;
            const options = {
                filter: element.dataset.filter || 'all',
                limit: element.dataset.limit ? parseInt(element.dataset.limit) : null,
                columns: element.dataset.columns ? parseInt(element.dataset.columns) : 4
            };
            this.components.gallery(galleryId, options);
        });

        // Outros componentes podem ser carregados aqui...
    },

    // Sistema de animações
    initAnimations: function() {
        // Scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
        });

        // Adicionar estilos CSS para animações
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
            
            .system-card {
                transition: all 0.3s ease;
            }
            
            .system-card:hover {
                transform: translateY(-5px);
            }
        `;
        document.head.appendChild(style);
    },

    // Menu responsivo
    initResponsiveMenu: function() {
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
    }
};

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => AshenOZ.init());

// Exportar para uso global (opcional)
window.AshenOZ = AshenOZ;