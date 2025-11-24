import "./globals.css";

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
        {/* <div>home page</div> */}
        {children}
      </body>
    </html>
  );
}
