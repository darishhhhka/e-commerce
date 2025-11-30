import "./globals.css";
import Header from "./components/Header/Header";
import { ReduxProvider } from "./src/store";

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
      </body>
    </html>
  );
}
