// src/app/layout.js
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "./modules/NavBar";
export const metadata = {
  title: "Sophie Wang",
  // description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="./globals.css" />
        <link rel="stylesheet" href="https://use.typekit.net/cum1bey.css" />
      </head>
      <body className="absolute snap-y-dir w-screen h-screen">
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
