import "./globals.css";
import Header from "./components/Header/Header";
import { ReduxProvider } from "./src/store";
import Footer from "./components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={coreSans}
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        {/* <div>home page</div> */}
        <ReduxProvider>{children}</ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
