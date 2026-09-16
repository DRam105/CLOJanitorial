import {
  Building,
  Building2,
  Sparkles,
  Layers,
  Sofa,
  ShieldCheck,
  PanelsTopLeft,
  Droplets,
  ConciergeBell,
  HardHat,
  Leaf,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Factory,
  Landmark,
  Dumbbell,
  Church,
  Car,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the string `icon` keys stored in /lib/services.ts and /lib/industries.ts
 * to lucide-react components, so content data can stay plain/serializable.
 */
const iconMap: Record<string, LucideIcon> = {
  Building,
  Building2,
  Sparkles,
  Layers,
  Sofa,
  ShieldCheck,
  PanelsTopLeft,
  Droplets,
  ConciergeBell,
  HardHat,
  Leaf,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Factory,
  Landmark,
  Dumbbell,
  Church,
  Car,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
