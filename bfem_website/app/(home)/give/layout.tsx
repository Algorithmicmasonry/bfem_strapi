import "@/app/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: " Give to Bible Faith Evangelical Ministries",
  description:
    "Give to support the mission of passinately proclaiming the gospel of Jesus Christ globally, making disciples and building vibrant communities of faith. ",
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
