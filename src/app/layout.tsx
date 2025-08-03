import type { Metadata } from "next";
import PushPenny from "../../public/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bomba - Multi-currency accounts for Africans",
  description:
    "Transact at home and abroad - create, send, hold and receive money in local and foreign currencies. Send money to and from Africa, instantly.",
  keywords:
    "money transfer, African fintech, currency exchange, remittance, digital banking",
  authors: [{ name: "Bomba Ltd" }],
  openGraph: {
    title: "Bomba - Multi-currency accounts for Africans",
    description:
      "Transact at home and abroad - create, send, hold and receive money in local and foreign currencies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bomba - Multi-currency accounts for Africans",
    description:
      "Transact at home and abroad - create, send, hold and receive money in local and foreign currencies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={PushPenny.className}>{children}</body>
    </html>
  );
}
