import "./globals.css";
import localFont from "@next/font/local";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-poppins",
});

const krifon = localFont({
  src: [
    {
      path: "../../public/fonts/Krifon Regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-krifon",
});

export const metadata = {
  title: "Habitude",
  description: "Habitude, For The Greater Good",
  icons: {
    icon: "/logo_setengah.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${krifon.variable} bg-krem font-sans`}
    >
      <body>{children}</body>
    </html>
  );
}
