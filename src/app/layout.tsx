import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import ChatBot from "../components/ChatBot";

export const metadata = {
  title: "Mall DigiDeck",
  description: "Smart Mall Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
        <ChatBot />
      </body>
    </html>
  );
}