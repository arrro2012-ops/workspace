'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, Home, Settings, Users, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const sidebarItems = [
  { href: '/dashboard', label: '대시보드', icon: Home },
  { href: '/dashboard/analytics', label: '분석', icon: BarChart3 },
  { href: '/dashboard/users', label: '사용자', icon: Users },
  { href: '/dashboard/settings', label: '설정', icon: Settings },
];

interface DashboardSidebarProps {
  mobile?: boolean;
}

function SidebarContent() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 py-4">
      {sidebarItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
              isActive
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

export function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 데스크톱 사이드바 */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-background">
        <div className="p-6 border-b border-border">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/50 rounded-md" />
            Dashboard
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto px-3">
          <SidebarContent />
        </nav>
      </aside>

      {/* 모바일 사이드바 (Sheet) */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="fixed top-16 left-4 z-40">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="mt-6 font-bold text-lg mb-6">Dashboard</div>
            <nav onClick={() => setIsOpen(false)}>
              <SidebarContent />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
