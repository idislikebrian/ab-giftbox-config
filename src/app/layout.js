import "./globals.css";

export const metadata = {
  title: "Artisan Barber",
  description: "blank",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
