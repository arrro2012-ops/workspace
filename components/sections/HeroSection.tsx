import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Badge className="w-fit">✨ 새로운 스타터 킷</Badge>

          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            빠르게 시작하는
            <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              {' '}웹 애플리케이션
            </span>
          </h1>

          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Next.js 16, React 19, shadcn/ui로 만들어진 완벽한 스타터 킷입니다.
            레이아웃부터 폼까지 모든 것이 준비되어 있습니다.
          </p>

          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/components">
              <Button size="lg">컴포넌트 보기</Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline">대시보드 탐색</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
