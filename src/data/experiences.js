import casaHistorica from "@/assets/casa-historica.webp";
import catedral from "@/assets/catedral.webp";
import parque9Julio from "@/assets/parque-9-julio.jpg";
import tafiValle from "@/assets/tafi-valle.jpg";
import parapente from "@/assets/parapente.jpg";
import elCadillal from "@/assets/cadillal.webp";
import trekking from "@/assets/trekking.jpg";
import mountainBike from "@/assets/mountain-bike.jpg";
import motocross from "@/assets/motocross.jpg";
import nightlife from "@/assets/nightlife.jpg";
import teatro from "@/assets/teatro.jpg";
import plazaIndependencia from "@/assets/plaza-independencia.jpg";

export const experiences = [
  {
    id: 1,
    title: "Casa Histórica",
    category: "Historia",
    description: "Cuna de la independencia argentina",
    imageUrl: casaHistorica,
    iconName: "Home",
    size: "large" // 2x1
  },
  {
    id: 2,
    title: "Catedral Basílica",
    category: "Arquitectura",
    description: "Joya del arte colonial",
    imageUrl: catedral,
    iconName: "Church",
    size: "medium" // 1x1
  },
  {
    id: 3,
    title: "Parque 9 de Julio",
    category: "Naturaleza",
    description: "Pulmón verde de la ciudad",
    imageUrl: parque9Julio,
    iconName: "Trees",
    size: "medium" // 1x1
  },
  {
    id: 4,
    title: "Tafí del Valle",
    category: "Paisajes",
    description: "Paraíso serrano inolvidable",
    imageUrl: tafiValle,
    iconName: "Mountain",
    size: "large" // 2x1
  },
  {
    id: 5,
    title: "Loma Bola",
    category: "Aventura",
    description: "Parapente con vistas únicas",
    imageUrl: parapente,
    iconName: "Plane",
    size: "tall" // 1x2
  },
  {
    id: 6,
    title: "El Cadillal",
    category: "Naturaleza",
    description: "Aguas cristalinas y paz",
    imageUrl: elCadillal,
    iconName: "Waves",
    size: "medium" // 1x1
  },
  {
    id: 7,
    title: "Sendas de Trekking",
    category: "Aventura",
    description: "San Javier al Cristo Bendicente",
    imageUrl: trekking,
    iconName: "MapPin",
    size: "medium" // 1x1
  },
  {
    id: 8,
    title: "Mountain Bike",
    category: "Deporte",
    description: "Sendero de la Aguadita",
    imageUrl: mountainBike,
    iconName: "Bike",
    size: "medium" // 1x1
  },
  {
    id: 9,
    title: "Enduro y Motocross",
    category: "Adrenalina",
    description: "La Olla te espera",
    imageUrl: motocross,
    iconName: "Zap",
    size: "medium" // 1x1
  },
 
];

export const faqs = [
  {
    question: "¿Cuál es la mejor época para visitar Tucumán?",
    answer: "Todo el año es bueno para visitar Tucumán. Los meses de marzo a noviembre ofrecen clima más seco, ideal para actividades al aire libre."
  },
  {
    question: "¿Qué actividades de aventura puedo hacer?",
    answer: "Parapente en Loma Bola, trekking a San Javier, mountain bike, motocross, y muchas más actividades en entornos naturales únicos."
  },
  {
    question: "¿Cómo llego desde el aeropuerto al centro?",
    answer: "El aeropuerto está a 15 km del centro. Hay remises, taxis, y servicios de transfer disponibles las 24 horas."
  },
  {
    question: "¿Dónde encuentro la mejor gastronomía local?",
    answer: "En el centro histórico y Yerba Buena encontrarás los mejores restaurantes con empanadas tucumanas, locro, y dulces regionales."
  }
];

export const testimonials = [
  {
    name: "María González",
    location: "Buenos Aires",
    comment: "Tucumán me sorprendió por su riqueza histórica y paisajes increíbles.",
    avatar: "MG"
  },
  {
    name: "Carlos Rodríguez",
    location: "Córdoba",
    comment: "Las aventuras en la montaña fueron inolvidables. ¡Volveré pronto!",
    avatar: "CR"
  },
  {
    name: "Ana Martín",
    location: "Rosario",
    comment: "La calidez de su gente y la gastronomía hacen de Tucumán un destino único.",
    avatar: "AM"
  }
];