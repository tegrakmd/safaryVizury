import {
  LucideIcon,
  Umbrella,
  Flame,
  Waves,
  Leaf,
  Gem,
  Mountain,
  Palette,
  Home,
  Landmark,
  TreePine,
  Star,
  Droplets,
} from "lucide-react";

export interface iAppProps {
  name: string;
  title: string;
  icon: LucideIcon;
  description: string;
  id: number;
}

export const categoryItems: iAppProps[] = [
  // { id: 0, name: "All", description: "all categories.", title: "All", icon: FilterIcon },
  {
    id: 1,
    name: "beach",
    description: "This Property is close to the Beach.",
    title: "Beach",
    icon: Umbrella,
  },
  {
    id: 2,
    name: "trending",
    description: "This is a Property which is trending.",
    title: "Trending",
    icon: Flame,
  },
  {
    id: 3,
    name: "beachfront",
    description: "This is a Property is close to the beachfront",
    title: "Beachfront",
    icon: Waves,
  },
  {
    id: 4,
    name: "erathhome",
    description: "This Property is considerd a Earth Home",
    title: "Earth Home",
    icon: Leaf,
  },
  {
    id: 5,
    name: "luxe",
    description: "This Property is considerd Luxorious",
    title: "Luxe",
    icon: Gem,
  },
  {
    id: 6,
    name: "amazingView",
    description: "This property has an amazing View",
    title: "Amazing View",
    icon: Mountain,
  },
  {
    id: 7,
    name: "design",
    description: "This property puts a big focus on design ",
    title: "Design",
    icon: Palette,
  },
  {
    id: 8,
    name: "pool",
    description: "This property has an amazing Pool",
    title: "Pool",
    icon: Droplets,
  },
  {
    id: 9,
    name: "tiny",
    description: "This property is considered a tiny home",
    title: "Tiny Home",
    icon: Home,
  },
  {
    id: 10,
    name: "historic",
    description: "This Property is considered historic",
    title: "Historic Home",
    icon: Landmark,
  },
  {
    id: 11,
    name: "countryside",
    description: "This Property is located on the countryside",
    title: "Countryside",
    icon: TreePine,
  },
  {
    id: 12,
    name: "omg",
    description: "This Property has a wow factor",
    title: "Wow!",
    icon: Star,
  },
  {
    id: 13,
    name: "surfing",
    description: "This Property is located near to a surfing spot",
    title: "Surfing",
    icon: Waves,
  },
];
