'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PageHeader } from '@/components/common/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

// 로그인 폼 스키마
const loginSchema = z.object({
  email: z.string().email('유효한 이메일을 입력하세요'),
  password: z.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

// 회원가입 폼 스키마
const signupSchema = z
  .object({
    name: z.string().min(2, '이름은 최소 2자 이상이어야 합니다'),
    email: z.string().email('유효한 이메일을 입력하세요'),
    password: z.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword'],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

// 문의 폼 스키마
const contactSchema = z.object({
  name: z.string().min(2, '이름은 최소 2자 이상이어야 합니다'),
  email: z.string().email('유효한 이메일을 입력하세요'),
  subject: z.string().min(5, '제목은 최소 5자 이상이어야 합니다'),
  message: z.string().min(10, '메시지는 최소 10자 이상이어야 합니다'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('로그인:', data);
    alert('로그인 성공!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="login-email">이메일</Label>
        <Input
          id="login-email"
          type="email"
          placeholder="you@example.com"
          {...register('email')}
          className="mt-2"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="login-password">비밀번호</Label>
        <Input
          id="login-password"
          type="password"
          placeholder="••••••••"
          {...register('password')}
          className="mt-2"
        />
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? '처리 중...' : '로그인'}
      </Button>
    </form>
  );
}

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('회원가입:', data);
    alert('회원가입 성공!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="signup-name">이름</Label>
        <Input
          id="signup-name"
          type="text"
          placeholder="홍길동"
          {...register('name')}
          className="mt-2"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="signup-email">이메일</Label>
        <Input
          id="signup-email"
          type="email"
          placeholder="you@example.com"
          {...register('email')}
          className="mt-2"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="signup-password">비밀번호</Label>
        <Input
          id="signup-password"
          type="password"
          placeholder="••••••••"
          {...register('password')}
          className="mt-2"
        />
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="signup-confirm">비밀번호 확인</Label>
        <Input
          id="signup-confirm"
          type="password"
          placeholder="••••••••"
          {...register('confirmPassword')}
          className="mt-2"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500 mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? '처리 중...' : '회원가입'}
      </Button>
    </form>
  );
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('문의:', data);
    alert('문의가 전송되었습니다!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="contact-name">이름</Label>
        <Input
          id="contact-name"
          type="text"
          placeholder="홍길동"
          {...register('name')}
          className="mt-2"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-email">이메일</Label>
        <Input
          id="contact-email"
          type="email"
          placeholder="you@example.com"
          {...register('email')}
          className="mt-2"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-subject">제목</Label>
        <Input
          id="contact-subject"
          type="text"
          placeholder="문의 제목"
          {...register('subject')}
          className="mt-2"
        />
        {errors.subject && (
          <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-message">메시지</Label>
        <Textarea
          id="contact-message"
          placeholder="자세한 내용을 입력하세요"
          {...register('message')}
          rows={5}
          className="mt-2"
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? '전송 중...' : '전송'}
      </Button>
    </form>
  );
}

export default function FormsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="폼 예제"
        description="React Hook Form + Zod를 사용한 폼 검증 예제"
      />

      <div className="grid gap-8 md:grid-cols-3">
        {/* 로그인 폼 */}
        <Card>
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardDescription>
              계정에 로그인하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>

        {/* 회원가입 폼 */}
        <Card>
          <CardHeader>
            <CardTitle>회원가입</CardTitle>
            <CardDescription>
              새로운 계정을 생성하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignupForm />
          </CardContent>
        </Card>

        {/* 문의 폼 */}
        <Card>
          <CardHeader>
            <CardTitle>문의하기</CardTitle>
            <CardDescription>
              우리에게 문의하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>

      {/* 폼 검증 설명 */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>폼 검증 규칙</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">로그인</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>이메일: 유효한 이메일 형식</li>
              <li>비밀번호: 최소 6자</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-2">회원가입</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>이름: 최소 2자</li>
              <li>이메일: 유효한 이메일 형식</li>
              <li>비밀번호: 최소 6자</li>
              <li>비밀번호 확인: 비밀번호와 일치</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-2">문의하기</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>이름: 최소 2자</li>
              <li>이메일: 유효한 이메일 형식</li>
              <li>제목: 최소 5자</li>
              <li>메시지: 최소 10자</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
