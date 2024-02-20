import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import Scripts from "@/components/scripts";
import { Toaster } from "@/components/ui/toaster";
import { validateEnvVars } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { Metadata } from "next/types";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const title = "Lukas Krimphove";
  const description =
    "I‘m working as a software engineer and consultant and love to do all kinds of tech projects in my spare time. I'm always up for a coding adventure and I love to share those adventures with you.";

  const images = "";
  const url = "https://www.krimphove.site";
  const keywords = [
    "lukas",
    "krimphove",
    "lukas krimphove",
    "munich",
    "germany",
    "software",
    "engineer",
    "engineering",
    "developer",
    "programming",
    "cloud",
    "data science",
    "aws",
    "sap",
    "python",
    "javascript",
    "flutter",
  ];

  const metadata: Metadata = {
    metadataBase: new URL(url),
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: title,
      images,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
      creator: "@lukaskrimphove",
      site: "@lukaskrimphove",
    },
  };

  return metadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  validateEnvVars();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container flex min-h-screen flex-col pt-2 max-w-4xl mx-auto">
          <Providers>
            <Scripts />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </Providers>
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
