import localFont from "next/font/local";

export const comicStrip = localFont({
  src: "./ComicStrip.ttf", // because ComicStrip.ttf is in the same folder as fonts.ts
  weight: "400",
  style: "normal",
  variable: "--font-comicstrip",
});
