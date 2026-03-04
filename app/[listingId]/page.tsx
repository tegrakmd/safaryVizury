"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HearButton } from "@app/components/ui/HeartButton";
import { SafaryData } from "@app/lib/Safarydata";
import {
  AirVent,
  Calendar,
  Car,
  Coffee,
  FileQuestionIcon,
  MapPin,
  Shield,
  Sparkles,
  Star,
  Tv,
  Users,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// Images supplémentaires pour la galerie
const additionalImages = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&h=400&fit=crop",
];

export default function ListingPage(props: {
  params: Promise<{ listingId: string }>;
}) {
  const [params, setParams] = useState<{ listingId: string } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Simulation de la résolution des params
  React.useEffect(() => {
    props.params.then(setParams);
  }, [props.params]);

  if (!params) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Chargement...
      </div>
    );
  }

  const SafaryProperty = SafaryData.find(
    (property) => property.id === params.listingId
  );

  // Gestion d'erreur si la propriété n'est pas trouvée
  if (!SafaryProperty) {
    return (
      <section className="w-full  pt-4 border-b border-dashed bg-background/80   font-inter">
        <div className="w-full md:border-x no-scrollbar overflow-hidden border-dashed relative mx-auto max-w-[1500px]  px-3 md:px-6 border-(--stripes-color) bg-[repeating-linear-gradient(-45deg,var(--stripes-color),var(--stripes-color)_1px,transparent_1px,transparent_6px)] [--stripes-color:var(--color-gray-200)] dark:[--stripes-color:var(--color-border)]">
          <div className="w-full h-dvh flex flex-col items-center justify-center py-8 border-x  gap-x-10 md:overflow-x-auto overflow-x-scroll no-scrollbar border-dashed scroll-smooth px-3 bg-background">
            <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
              <FileQuestionIcon className="size-10 text-blue-500" />
            </div>
            <h2 className="mt-6 text-xl font-semibold">No find page</h2>
            <p className="mt-2 text-center text-sm leading-6 text-muted-foreground">
              Le propriété n&apos;est pas trouvée
            </p>
          </div>
        </div>
      </section>
    );
  }

  const allImages = [SafaryProperty.imageUrl, ...additionalImages];
  const amenities = [
    { icon: Wifi, label: "WiFi" },
    { icon: Car, label: "Parking gratuit" },
    { icon: Coffee, label: "Machine à café" },
    { icon: Utensils, label: "Cuisine équipée" },
    { icon: Waves, label: "Piscine" },
    { icon: Sparkles, label: "Jacuzzi" },
    { icon: Tv, label: "TV" },
    { icon: AirVent, label: "Climatisation" },
    { icon: Shield, label: "Sécurisé" },
  ];

  return (
    <section className="w-full relative font-body border-dashed">
      {/* Header avec navigation */}
      <div className="w-full  relative mx-auto max-w-6xl  px-3 md:px-6 ">
        <div className="py-6 px-3 pt-20 md:pt-30  bg-background">
          <div className="flex items-center mb-4">
            <span className="text-sm md:text-4xl font-bold">
              {SafaryProperty.location}
            </span>
          </div>
          {/* Galerie d'images */}
          <div className="mb-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-100">
              <div className="md:col-span-2 relative overflow-hidden rounded-l-xl">
                <Image
                  src={allImages[currentImageIndex]}
                  alt={SafaryProperty.imageAlt}
                  fill
                  className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) => (prev + 1) % allImages.length
                    )
                  }
                />
                <HearButton />
              </div>
              <div className="grid">
                <div className="grid grid-cols-2 gap-2 ">
                  {allImages.slice(1, 3).map((image, index) => (
                    <div key={index} className="relative overflow-hidden ">
                      <Image
                        src={image}
                        alt={`Image ${index + 2}`}
                        fill
                        className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setCurrentImageIndex(index + 1)}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {allImages.slice(3, 5).map((image, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-br-xl">
                      <Image
                        src={image}
                        alt={`Image ${index + 4}`}
                        fill
                        className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setCurrentImageIndex(index + 3)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* Informations principales */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold  mb-2">
                      {SafaryProperty.title}
                    </h1>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">
                          {SafaryProperty.rating}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{SafaryProperty.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Catégories */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {SafaryProperty.categories.map((category, index) => (
                    <Badge key={index} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold mb-4">
                  À propos de ce logement
                </h2>
                <p className=" leading-relaxed mb-6 text-gray-600">
                  {SafaryProperty.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Type de logement :</strong> Villa entière
                  </div>
                  <div>
                    <strong>Voyageurs :</strong> Jusqu&apos;à 6 personnes
                  </div>
                  <div>
                    <strong>Chambres :</strong> 3 chambres
                  </div>
                  <div>
                    <strong>Salles de bain :</strong> 2 salles de bain
                  </div>
                </div>
              </div>

              {/* Équipements */}
              <div className="border-t pt-8">
                <h2 className="text-2xl  mb-6">Ce que propose ce logement</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-foreground">
                      <amenity.icon className="size-5 " />
                      <span className="">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendrier */}
              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold mb-6">Disponibilité</h2>
                <div className="border rounded-lg p-6 ">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <Calendar className="h-5 w-5 " />
                    <span className="text-lg font-medium">
                      Calendrier de disponibilité
                    </span>
                  </div>
                  <p className=" text-center">
                    Sélectionnez vos dates pour voir les disponibilités et les
                    prix
                  </p>
                  <div className="mt-4 flex justify-center">
                    <Button variant="outline" size="lg">
                      <Calendar className="h-4 w-4 mr-2" />
                      Voir le calendrier
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar de réservation */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-blue-500/20 border-none">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold">
                        €{SafaryProperty.price}
                      </span>
                      <span className="text-gray-600"> / nuit</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium">
                        {SafaryProperty.rating}
                      </span>
                      <span className="text-gray-500 ml-1">(24 avis)</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-2 border rounded-lg">
                      <div className="p-3 border-r">
                        <label className="text-xs font-medium text-gray-600">
                          ARRIVÉE
                        </label>
                        <input
                          type="date"
                          className="w-full border-none outline-none text-sm font-medium"
                          placeholder="Ajouter une date"
                        />
                      </div>
                      <div className="p-3">
                        <label className="text-xs font-medium text-gray-600">
                          DÉPART
                        </label>
                        <input
                          type="date"
                          className="w-full border-none outline-none text-sm font-medium"
                          placeholder="Ajouter une date"
                        />
                      </div>
                    </div>
                    <div className="border rounded-lg p-3">
                      <label className="text-xs font-medium text-gray-600">
                        VOYAGEURS
                      </label>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm font-medium">1 voyageur</span>
                        <Button variant="ghost" size="sm">
                          <Users className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full cursor-pointer font-medium py-3 text-lg rounded-lg">
                    Réserver
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
