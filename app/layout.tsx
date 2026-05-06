import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Sahil Sapariya - Full Stack Developer | Portfolio",
    template: "%s | Sahil Sapariya",
  },
  description:
    "Sahil Sapariya is a skilled Full Stack Developer specializing in React.js, Next.js, TypeScript, Python, Django, and Flask. Winner of DUHACKS 2.0 Hackathon. Explore my portfolio showcasing innovative web applications, industry experience, and cutting-edge projects.",
  keywords: [
    "Sahil Sapariya",
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Python Developer",
    "Django Developer",
    "Flask Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Software Engineer",
    "Ahmedabad Developer",
    "India Developer",
    "DUHACKS Winner",
    "Dharmsinh Desai University",
    "Nirmaan Yaatraa",
    "College360",
    "Elite Mode",
    "Sure Bank",
  ],
  authors: [{ name: "Sahil Sapariya" }],
  creator: "Sahil Sapariya",
  publisher: "Sahil Sapariya",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sahilsapariya.vercel.app",
    siteName: "Sahil Sapariya Portfolio",
    title: "Sahil Sapariya - Full Stack Developer | Portfolio",
    description:
      "Full Stack Developer specializing in React.js, Next.js, TypeScript, Python, Django, and Flask. Winner of DUHACKS 2.0 Hackathon. Explore innovative web applications and projects.",
    images: [
      {
        url: "/images/profile-picture.png",
        width: 1200,
        height: 630,
        alt: "Sahil Sapariya - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Sapariya - Full Stack Developer | Portfolio",
    description:
      "Full Stack Developer specializing in React.js, Next.js, TypeScript, Python, Django, and Flask. Winner of DUHACKS 2.0 Hackathon.",
    creator: "@sahil_sapariya",
    images: ["/images/profile-picture.png"],
  },
  alternates: {
    canonical: "https://sahilsapariya.com",
  },
  category: "Portfolio",
  metadataBase: new URL("https://sahilsapariya.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sahil Sapariya",
    jobTitle: "Full Stack Developer",
    url: "https://sahilsapariya.com",
    image: "https://sahilsapariya.com/images/profile-picture.png",
    sameAs: [
      "https://linkedin.com/in/sahilsapariya",
      "https://github.com/sahilsapariya",
      "https://twitter.com/sahil_sapariya",
      "https://instagram.com/_sahil_sapariya_03",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Dharmsinh Desai University",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nadiad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Python",
      "Django",
      "Flask",
      "Full Stack Development",
      "Web Development",
      "Frontend Development",
      "Backend Development",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
