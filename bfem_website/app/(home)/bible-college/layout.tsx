import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Join Our Bible College",
  description:
    "Our Evangelical School Of Ministry equips you with the deep knowlegdge of God's word needed to represent him in this ever-changing world ",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can add any other weights needed
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${poppins.className} antialiased`}>{children}</div>;
}
