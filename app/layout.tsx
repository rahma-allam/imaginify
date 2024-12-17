import type { Metadata } from "next";
import { IBM_Plex_Sans} from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight : ["400" , "500", "600" , "700"]
});


export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary : '#624cf5'}
    }}>
      <html lang="en">
        <body
          className={`${ibmPlexSans.variable} antialiased `}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
