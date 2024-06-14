//import AuthorizedGuard from "@/features/auth/authorized-guard";
import AdminGuard from '@/features/auth/guards/admin-guard';
import { AppHeader } from '@/widgets/app-headers/app-header';

export default async function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <>
          <AppHeader variant='private'/>
          <AdminGuard>
            {children}
          </AdminGuard>
        </>
    );
}
