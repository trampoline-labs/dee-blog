interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <header>Site Layout</header>
      <main>{children}</main>
    </>
  );
}
