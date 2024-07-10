import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        LeftSidebar
        {children}
        RightSidebar
      </main>
    </div>
  );
}
