import type { Metadata } from "next";
import "@/app/globals.css";
import { Poppins } from "next/font/google";


export const metadata: Metadata = {
  title: "Sermons | Grace Church",
  description: "Browse and listen to sermons from Grace Church",
}

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
        {children}
      </div>
    
  );
}


