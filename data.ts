
import { StylingData, GarmentDetail } from './types';

export const STYLING_DATA: StylingData = {
  name: "Rodolfo Laddaga López",
  morphology: {
    type: "Cuadrado (superior) - Rectangular (inferior)",
    objectives: [
      "Estructurar hombros",
      "Aportar volumen a piernas y pantorrillas",
      "Estilizar cuello, abdomen y pecho",
      "Aportar estatura"
    ],
    details: {
      "Cuello": "Intermedio / Ancho",
      "Hombros": "Inclinados",
      "Espalda": "Normal",
      "Talle": "Intermedio",
      "Brazos": "Largos",
      "Piernas": "Cortas",
      "Pantorrillas": "Largas"
    }
  },
  clothing: {
    formal: {
      title: "Formal Vanguardista-Minimalista",
      items: ["Traje Sastre", "Camisa de vestir", "Corbata", "Mancuernillas", "Zapato de agujeta"],
      tips: ["Botonadura central", "Fit regular", "Largo a la cadera"]
    },
    semiFormal: {
      title: "Semi-formal",
      items: ["Pantalón de vestir", "Camisa lisa", "Blazer", "Zapato de meter"],
    },
    casual: {
      title: "Casual",
      items: ["Camisa estampada", "Pantalón gabardina", "Chamarra o suéter", "Botas o tenis casuales"],
    },
    informal: {
      title: "Informal",
      items: ["Playera polo o T-shirt", "Jeans", "Chamarra", "Tenis casuales"],
    },
    collars: [
      {
        name: "Ainsley",
        description: "Cuello de puntas moderadamente abiertas. Ideal para tu estructura de cuello intermedio.",
        context: "Formal",
        imageUrl: "https://images.unsplash.com/photo-1621335370347-1c95103a9ca1?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Polo Button Down",
        description: "Clásico con botones en las puntas. Mantiene la verticalidad impecable sin corbata.",
        context: "Casual",
        imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Tennis",
        description: "Puntas rectas y juntas. Estiliza el rostro en eventos de alta formalidad.",
        context: "Formal",
        imageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  accessories: [
    {
      title: "Calzado",
      items: ["Punta cuadrada (Formal)", "Punta redonda (Casual)", "Piel mate", "Suela delgada o intermedia"],
    },
    {
      title: "Reloj",
      items: ["Tamaño intermedio o grande", "Carátula redonda o cuadrada", "Extensible de piel o acero"],
    },
    {
      title: "Lentes de Sol",
      items: ["Tonos gris o negro", "Armazón delgado o intermedio", "Forma ovalada, cuadrada o gota"],
    }
  ],
  fragrances: [
    {
      season: "Primavera / Verano",
      types: [
        { type: "Cítricas (Día)", brands: ["Hugo Boss Bottle", "Nautica Voyage", "Lacoste Challenge"] },
        { type: "Frescas (Día)", brands: ["Tommy Hilfiger", "L'Homme YSL", "DKNY Men"] }
      ]
    },
    {
      season: "Otoño / Invierno",
      types: [
        { type: "Dulces / Orientales (Noche)", brands: ["Dylan Blue Versace", "Bleu de Chanel", "Creed Aventus"] },
        { type: "Amaderadas / Secas (Noche)", brands: ["Bvlgari Man", "Burberry London", "Hermés"] }
      ]
    }
  ]
};

export const GARMENT_DETAILS: Record<string, GarmentDetail> = {
  "Traje Sastre": {
    name: "Traje Sastre",
    description: "Corte minimalista con hombros estructurados para compensar la inclinación natural.",
    types: ["Corte Italiano", "Corte Americano"],
    avoid: ["Corte Inglés"],
    colors: [{ name: "Gris Oxford", hex: "#374151" }, { name: "Azul Marino", hex: "#1e3a8a" }],
    image: "https://images.unsplash.com/photo-1594932224828-b4b059b6f679?q=80&w=800&auto=format&fit=crop"
  },
  "Camisa de vestir": {
    name: "Camisa de vestir",
    description: "Busca telas con cuerpo. El cuello debe mantenerse rígido.",
    types: ["Cuello Ainsley", "Cuello Tennis"],
    colors: [{ name: "Blanco Óptico", hex: "#ffffff" }, { name: "Azul Cielo", hex: "#e0f2fe" }],
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=800&auto=format&fit=crop"
  },
  "Corbata": {
    name: "Corbata",
    description: "Ancho intermedio. Evita estampados grandes o distractores.",
    types: ["Slim (7cm)", "Four-in-hand knot"],
    colors: [{ name: "Vino", hex: "#7f1d1d" }, { name: "Negro Mate", hex: "#000000" }],
    image: "https://images.unsplash.com/photo-1589756823851-41159040997b?q=80&w=800&auto=format&fit=crop"
  },
  "Mancuernillas": {
    name: "Mancuernillas",
    description: "Acento metálico minimalista.",
    types: ["Geométricas", "Plata Cepillada"],
    colors: [{ name: "Plata", hex: "#e5e7eb" }],
    image: "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?q=80&w=800&auto=format&fit=crop"
  },
  "Zapato de agujeta": {
    name: "Zapato de agujeta",
    description: "Punta cuadrada o semi-cuadrada. Elegancia pura.",
    types: ["Oxford", "Derby"],
    colors: [{ name: "Negro", hex: "#000000" }],
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop"
  },
  "Pantalón de vestir": {
    name: "Pantalón de vestir",
    description: "Corte recto que favorece la proporción de tus piernas.",
    types: ["Corte Recto", "Flat Front"],
    colors: [{ name: "Gris Carbón", hex: "#1f2937" }],
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop"
  },
  "Camisa lisa": {
    name: "Camisa lisa",
    description: "Algodón premium. Sin texturas.",
    types: ["Cuello Polo Button Down"],
    colors: [{ name: "Azul Pastel", hex: "#dbeafe" }],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop"
  },
  "Blazer": {
    name: "Blazer",
    description: "Estructura casual sin ser rígida. Solapas delgadas.",
    types: ["Soft Shoulder", "Dos Botones"],
    colors: [{ name: "Azul Navy", hex: "#1e3a8a" }],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
  },
  "Zapato de meter": {
    name: "Zapato de meter",
    description: "Loafers discretos.",
    types: ["Penny Loafer"],
    colors: [{ name: "Café Chocolate", hex: "#451a03" }],
    image: "https://images.unsplash.com/photo-1628156113470-362088f61592?q=80&w=800&auto=format&fit=crop"
  },
  "Camisa estampada": {
    name: "Camisa estampada",
    description: "Estampados sutiles, escala pequeña.",
    types: ["Micro-print", "Geométrico"],
    colors: [{ name: "Azul/Blanco", hex: "#f8fafc" }],
    image: "https://images.unsplash.com/photo-1604691815313-689c4029230c?q=80&w=800&auto=format&fit=crop"
  },
  "Pantalón gabardina": {
    name: "Pantalón gabardina",
    description: "Chinos clásicos. Tela resistente.",
    types: ["Slim-Straight"],
    colors: [{ name: "Khaki", hex: "#d6d3d1" }],
    image: "https://images.unsplash.com/photo-1624371414361-e6e8ea02c1e2?q=80&w=800&auto=format&fit=crop"
  },
  "Chamarra o suéter": {
    name: "Chamarra o suéter",
    description: "Líneas limpias. Sin demasiados bolsillos.",
    types: ["Harrington", "V-Neck Sweater"],
    colors: [{ name: "Gris Melange", hex: "#94a3b8" }],
    image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=800&auto=format&fit=crop"
  },
  "Botas o tenis casuales": {
    name: "Botas o tenis casuales",
    description: "Botas Chelsea o tenis de piel.",
    types: ["Chelsea Boots"],
    colors: [{ name: "Café Tabaco", hex: "#78350f" }],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
  },
  "Playera polo o T-shirt": {
    name: "Playera polo o T-shirt",
    description: "Básicos esenciales en algodón pima.",
    types: ["Polo Piqué", "Crew Neck"],
    colors: [{ name: "Negro", hex: "#000000" }, { name: "Blanco", hex: "#ffffff" }],
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop"
  },
  "Jeans": {
    name: "Jeans",
    description: "Denim oscuro sin lavados.",
    types: ["Straight Fit"],
    colors: [{ name: "Indigo", hex: "#1e1b4b" }],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop"
  },
  "Chamarra": {
    name: "Chamarra",
    description: "Corte bomber o denim jacket oscura.",
    types: ["Bomber Minimal"],
    colors: [{ name: "Negro", hex: "#000000" }],
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop"
  },
  "Tenis casuales": {
    name: "Tenis casuales",
    description: "Totalmente blancos y limpios.",
    types: ["Minimal Leather Sneakers"],
    colors: [{ name: "Blanco", hex: "#ffffff" }],
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop"
  }
};
