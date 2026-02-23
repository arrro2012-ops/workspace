import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* 콘텐츠 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">BH Webapp</h3>
            <p className="text-sm text-muted-foreground">
              Next.js 기반 웹 애플리케이션 스타터 킷입니다.
            </p>
          </div>

          {/* 제품 링크 */}
          <div>
            <h3 className="font-semibold mb-4">제품</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/components" className="text-muted-foreground hover:text-foreground transition-colors">
                  컴포넌트
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  대시보드
                </Link>
              </li>
            </ul>
          </div>

          {/* 리소스 링크 */}
          <div>
            <h3 className="font-semibold mb-4">리소스</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/forms" className="text-muted-foreground hover:text-foreground transition-colors">
                  폼 예제
                </Link>
              </li>
              <li>
                <a href="https://nextjs.org" className="text-muted-foreground hover:text-foreground transition-colors">
                  Next.js 문서
                </a>
              </li>
              <li>
                <a href="https://ui.shadcn.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  shadcn/ui
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator />

        {/* 저작권 */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BH Webapp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
