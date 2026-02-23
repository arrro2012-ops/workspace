'use client';

import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { PageHeader } from '@/components/common/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';

const stats = [
  { label: '총 사용자', value: '1,234', change: '+12%' },
  { label: '매출', value: '$45,231.89', change: '+2.5%' },
  { label: '주문', value: '456', change: '+8%' },
  { label: '방문자', value: '12,543', change: '-3%' },
];

const recentOrders = [
  {
    id: '1001',
    customer: '홍길동',
    email: 'hong@example.com',
    status: '배송중',
    amount: '$234.00',
  },
  {
    id: '1002',
    customer: '김영희',
    email: 'kim@example.com',
    status: '완료',
    amount: '$456.00',
  },
  {
    id: '1003',
    customer: '이수진',
    email: 'lee@example.com',
    status: '처리중',
    amount: '$123.00',
  },
  {
    id: '1004',
    customer: '박민준',
    email: 'park@example.com',
    status: '배송완료',
    amount: '$789.00',
  },
  {
    id: '1005',
    customer: '정다은',
    email: 'jung@example.com',
    status: '취소됨',
    amount: '$234.00',
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case '배송중':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case '완료':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case '처리중':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case '배송완료':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    case '취소됨':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <DashboardSidebar />

      <div className="flex-1">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <PageHeader title="대시보드" description="주요 지표 및 최근 주문 현황" />

          {/* 통계 카드 */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stat.value}</span>
                    <Badge variant="secondary" className="ml-auto">
                      {stat.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 최근 주문 테이블 */}
          <Card>
            <CardHeader>
              <CardTitle>최근 주문</CardTitle>
              <CardDescription>
                최근 5개의 주문 현황입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>주문 ID</TableHead>
                      <TableHead>고객</TableHead>
                      <TableHead>상태</TableHead>
                      <TableHead className="text-right">금액</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`https://avatar.vercel.sh/${order.email}`} />
                              <AvatarFallback>
                                {order.customer
                                  .split(' ')
                                  .map((n) => n[0])
                                  .join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{order.customer}</p>
                              <p className="text-xs text-muted-foreground">{order.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {order.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
