import MainNav from "@/components/navbar";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="p-4">
      <header>
        <MainNav />
      </header>
      <main>{children}</main>
    </div>
  );
}
