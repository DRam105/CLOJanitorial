import { Inter, Poppins } from "next/font/google";

/** Body font — highly readable sans. Exposed as --font-inter. */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/** Heading font — geometric, confident sans. Exposed as --font-poppins. */
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});
