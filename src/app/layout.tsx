import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { VehicleProvider } from "@/contexts";
import { VehicleTypeProvider } from "@/contexts/vehicleTypeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parking Pro",
  description: "Your parking system solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <VehicleTypeProvider>
          <VehicleProvider>{children}</VehicleProvider>
        </VehicleTypeProvider>
      </body>
    </html>
  );
}
