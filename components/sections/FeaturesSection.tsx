import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Palette, Code, Smartphone, Lock, Layers } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Next.js 16의 최신 기능으로 빠른 로딩 속도를 제공합니다.',
  },
  {
    icon: Palette,
    title: 'Beautiful UI',
    description: 'shadcn/ui로 만든 아름다운 컴포넌트들이 준비되어 있습니다.',
  },
  {
    icon: Code,
    title: 'TypeScript',
    description: 'Strict 모드의 TypeScript로 안전한 개발이 가능합니다.',
  },
  {
    icon: Smartphone,
    title: '반응형 디자인',
    description: 'Tailwind CSS로 모든 기기에 최적화된 디자인입니다.',
  },
  {
    icon: Lock,
    title: '보안',
    description: '최신 보안 모범 사례가 적용되어 있습니다.',
  },
  {
    icon: Layers,
    title: '확장 가능',
    description: '컴포넌트 기반 아키텍처로 쉬운 확장이 가능합니다.',
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">주요 기능</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            프로덕션 준비가 된 스타터 킷의 특징들
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
