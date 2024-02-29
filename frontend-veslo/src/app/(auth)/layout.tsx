import { AppHeader } from "@/widgets/app-headers/app-header";

export default async function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        <AppHeader variant="auth"/>
        {children}  
      </>
    );
  }
  