import MainNav from "@/components/navbar";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>{children}</main>
    </>
  );
}
