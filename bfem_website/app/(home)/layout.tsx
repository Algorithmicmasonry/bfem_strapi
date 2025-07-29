import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { Footer, Navbar } from "@/components/Home-Page";

export const metadata: Metadata = {
  title: "Bible Faith Evangelical Ministries",
  description:
    "To passionately proclaim the gospel of Jesus Christ globally, making disciples and building vibrant communities of faith. ",
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
  return (
    <div className={`${poppins.className} antialiased`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
