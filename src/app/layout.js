import { Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "./PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Techviz",
  description: "Techviz's website, UIET Panjab University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <PageTransition>{children}</PageTransition>
        <script
          defer
          async
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          defer
          async
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        ></script>
      </body>
    </html>
  );
}
