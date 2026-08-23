import { SiteNavigation } from "@/components/navigation/SiteNavigation";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="site-shell">
      <SiteNavigation />
      {children}
    </div>
  );
}
