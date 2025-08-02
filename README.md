# Conoce Tucumán - Landing Page

Una landing page responsive con diseño minimalista y layout "bento" para promocionar el turismo en Tucumán, Argentina.

## 🚀 Inicio rápido

### Requisitos
- Node.js 18+ 
- npm o yarn

### Instalación y ejecución

```bash
# Clona el repositorio
git clone <URL_DEL_REPOSITORIO>

# Navega al directorio
cd conoce-tucuman

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:8080`

## 🎨 Características del diseño

- **Diseño minimalista**: Paleta blanco/negro con acentos grises
- **Layout Bento**: Grid fluido con cajas de diferentes tamaños
- **Responsive**: Optimizado para mobile, tablet y desktop
- **Animaciones suaves**: Transiciones de 200ms con hover effects
- **Tipografía moderna**: Inter font family
- **SEO optimizado**: Meta tags completos

## 🏗️ Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.tsx          # Navegación sticky
│   ├── Hero.tsx            # Sección hero con imagen
│   ├── BentoGrid.tsx       # Grid de experiencias
│   ├── BentoCard.tsx       # Tarjeta individual
│   ├── PlanSection.tsx     # CTA para el bot
│   ├── FAQSection.tsx      # FAQ + testimonios
│   ├── ChatBotSection.tsx  # Integración del bot
│   └── Footer.tsx          # Footer completo
├── data/
│   └── experiences.js      # Mock data y testimonios
├── assets/
│   └── *.jpg              # Imágenes generadas
└── pages/
    └── Index.tsx          # Página principal
```

## 🤖 Integración ChatBot

El proyecto incluye la integración con Chatbase usando el script proporcionado. El bot se carga automáticamente en la sección correspondiente.

## 🚀 Stack tecnológico

- **React 18** - Framework principal
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Lucide React** - Iconografía
- **Vite** - Build tool
- **shadcn/ui** - Componentes base

## 📱 Secciones incluidas

1. **Navbar**: Navegación sticky con enlaces ancla
2. **Hero**: Vista aérea con CTAs principales
3. **Experiencias**: Grid bento con 12 experiencias
4. **Plan ideal**: Promoción del asistente IA
5. **FAQ + Testimonios**: Preguntas frecuentes y reseñas
6. **ChatBot**: Integración del asistente 24/7
7. **Footer**: Enlaces, redes sociales y créditos

## 🌟 Experiencias incluidas

- Historia: Casa Histórica, Catedral, Plaza Independencia
- Naturaleza: Parque 9 de Julio, Tafí del Valle, El Cadillal
- Aventura: Parapente, Trekking, Mountain Bike, Motocross
- Cultura: Teatro San Martín, Vida Nocturna

---

**Desarrollado por Koi Studio** 💚
