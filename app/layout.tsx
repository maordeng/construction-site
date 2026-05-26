import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "מאור דוד הנדסה",
  description: "ניהול ופיקוח בנייה",
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}