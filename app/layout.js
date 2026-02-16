import "./globals.css";

export const metadata = {
  title: "Smart Bookmarks - Save Your Favorite Links",
  description: "A simple and smart way to save and organize your bookmarks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
