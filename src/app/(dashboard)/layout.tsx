import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="py-20 flex flex-row">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
