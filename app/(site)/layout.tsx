import MainNav from "@/components/navbar";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <section className="py-4 md:py-6 px-5 md:px-10">
      <header>
        <MainNav />
      </header>
      <main>{children}</main>
    </section>
  );
}
