'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package2 } from "lucide-react";
import { ROUTES } from "@/shared/constants/routes";

export function MainNav() {
  const pathname = usePathname();
  
  return <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <div className="flex items-center gap-2 text-lg font-semibold md:text-base">
            <Package2 className="h-6 w-6" />
          </div>
          <Link
            href="/orders"
            className={`${pathname.startsWith(ROUTES.ORDERS) ? 'text-foreground' : 'text-muted-foreground' } transition-colors hover:text-foreground`}
          >
            Заявки
          </Link>
          <Link
            href="/report"
            className={`${pathname.startsWith(ROUTES.REPORT) ? 'text-foreground' : 'text-muted-foreground' } transition-colors hover:text-foreground`}
          >
            Отчеты
          </Link>
          <Link
            href="/admin"
            className={`${pathname.startsWith(ROUTES.ADMIN) ? 'text-foreground' : 'text-muted-foreground' } transition-colors hover:text-foreground`}
          >
            Admin panel
          </Link>        
      </nav>
}
