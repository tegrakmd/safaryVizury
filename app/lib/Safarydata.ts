export interface SafaryProperty {
    id: string;
    title: string;
    location: string;
    rating: number;
    description: string;
    price: number;
    imageUrl: string;
    imageAlt: string;
    categories: string[];
}
// change la place des hotel que sa soit seulement les pays d'afrique() et jouter d'autres hotel mais avec des nouvelle links de photo ques des hotels toujours jusqu'à 30 hotels

export const SafaryData: SafaryProperty[] = [
    {
        id: "1",
        title: "Villa moderne avec piscine",
        location: "Le Caire, Égypte",
        rating: 4.8,
        description: "Magnifique villa avec vue panoramique sur le Nil, piscine privée et jardin luxuriant. Parfait pour des vacances en famille.",
        price: 69,
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop",
        imageAlt: "Villa moderne au Caire",
        categories: ["luxe", "pool", "amazingView"]
      
    },
    {
        id: "2",
        title: "Appartement cosy centre-ville",
        location: "Paris, France",
        rating: 4.9,
        description: "Charmant appartement au cœur de Paris, proche des monuments historiques. Décoration authentique et tout équipé.",
        price: 125,
        imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop",
        imageAlt: "Appartement parisien",
        categories: ["historic", "design", "trending"]
    },
    {
        id: "3",
        title: "Maison de plage privée",
        location: "Bali, Indonésie",
        rating: 4.7,
        description: "Maison traditionnelle face à l'océan avec accès direct à la plage. Idéal pour se détendre et profiter du coucher de soleil.",
        price: 85,
        imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=400&fit=crop",
        imageAlt: "Maison de plage à Bali",
        categories: ["beach", "beachfront", "surfing"]
    },
    {
        id: "4",
        title: "Loft industriel design",
        location: "New York, États-Unis",
        rating: 4.6,
        description: "Loft spacieux dans le quartier branché de Brooklyn. Style industriel avec grandes fenêtres et terrasse sur le toit.",
        price: 180,
        imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop",
        imageAlt: "Loft à New York",
        categories: ["design", "trending", "amazingView"]
    },
    {
        id: "5",
        title: "Chalet montagnard authentique",
        location: "Chamonix, France",
        rating: 4.9,
        description: "Chalet traditionnel au pied du Mont-Blanc. Cheminée, sauna et vue imprenable sur les Alpes. Parfait pour le ski.",
        price: 210,
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop&auto=format",
        imageAlt: "Chalet à Chamonix",
        categories: ["amazingView", "luxe", "countryside"]
    },
    {
        id: "6",
        title: "Riad traditionnel",
        location: "Marrakech, Maroc",
        rating: 4.5,
        description: "Riad authentique dans la médina avec patio intérieur, fontaine et décoration marocaine traditionnelle.",
        price: 95,
        imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&h=400&fit=crop",
        imageAlt: "Riad à Marrakech",
        categories: ["historic", "design", "luxe"]
    },
    {
        id: "7",
        title: "Penthouse vue mer",
        location: "Nice, France",
        rating: 4.8,
        description: "Penthouse luxueux sur la Promenade des Anglais avec terrasse panoramique et vue sur la Méditerranée.",
        price: 350,
        imageUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&h=400&fit=crop",
        imageAlt: "Penthouse à Nice",
        categories: ["luxe", "amazingView", "beachfront"]
    },
    {
        id: "8",
        title: "Cabane dans les arbres",
        location: "Costa Rica",
        rating: 4.7,
        description: "Expérience unique dans une cabane écologique au cœur de la forêt tropicale. Réveil au chant des oiseaux exotiques.",
        price: 120,
        imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=400&fit=crop",
        imageAlt: "Cabane dans les arbres au Costa Rica",
        categories: ["tiny", "erathhome", "countryside"]
    },
    {
        id: "9",
        title: "Ryokan traditionnel",
        location: "Kyoto, Japon",
        rating: 4.9,
        description: "Ryokan authentique avec tatamis, futons, bain thermal et jardin zen. Expérience culturelle japonaise complète.",
        price: 280,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
        imageAlt: "Ryokan à Kyoto",
        categories: ["historic", "luxe", "design"]
    },
    {
        id: "10",
        title: "Villa grecque traditionnelle",
        location: "Santorin, Grèce",
        rating: 4.8,
        description: "Villa typique des Cyclades avec vue sur la caldeira, piscine à débordement et architecture blanche traditionnelle.",
        price: 195,
        imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=400&fit=crop",
        imageAlt: "Villa à Santorin",
        categories: ["amazingView", "pool", "luxe"]
    },
    {
        id: "11",
        title: "Villa grecque traditionnelle",
        location: "Santorin, Grèce",
        rating: 4.8,
        description: "Villa typique des Cyclades avec vue sur la caldeira, piscine à débordement et architecture blanche traditionnelle.",
        price: 195,
        imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=400&fit=crop",
        imageAlt: "Villa à Santorin",
        categories: ["amazingView", "pool", "luxe"]
    },
    {
        id: "12",
        title: "Ryokan traditionnel",
        location: "Kyoto, Japon",
        rating: 4.9,
        description: "Ryokan authentique avec tatamis, futons, bain thermal et jardin zen. Expérience culturelle japonaise complète.",
        price: 280,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
        imageAlt: "Ryokan à Kyoto",
        categories: ["historic", "luxe", "design"]
    },
];