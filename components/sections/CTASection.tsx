import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            지금 시작하세요
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            완전히 새로운 프로젝트를 구축할 준비가 되셨나요?
            이 스타터 킷으로 오늘 시작하세요.
          </p>

          <div className="flex flex-col gap-2 min-[400px]:flex-row w-full max-w-sm">
            <Input
              type="email"
              placeholder="이메일을 입력하세요"
              className="flex-1"
            />
            <Button type="submit">구독하기</Button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            스팸은 보내지 않습니다. 언제든지 구독을 취소할 수 있습니다.
          </p>

          <div className="flex gap-4 mt-8">
            <Link href="/components">
              <Button variant="outline">문서</Button>
            </Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">GitHub</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
