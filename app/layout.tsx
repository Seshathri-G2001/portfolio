import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Seshathri G. — Full Stack Developer",
    description: "Full Stack Developer with 3+ years of experience building production applications with PHP, Laravel, React.js, MySQL, WordPress, and WooCommerce.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
