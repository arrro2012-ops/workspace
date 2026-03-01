'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function ComponentsPage() {
  const [checked, setChecked] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="컴포넌트 쇼케이스"
        description="shadcn/ui로 만든 모든 컴포넌트들을 확인해보세요"
      />

      <Tabs defaultValue="buttons" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="buttons">버튼</TabsTrigger>
          <TabsTrigger value="forms">폼</TabsTrigger>
          <TabsTrigger value="display">표시</TabsTrigger>
          <TabsTrigger value="feedback">피드백</TabsTrigger>
        </TabsList>

        {/* 버튼 탭 */}
        <TabsContent value="buttons" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>버튼 변형</CardTitle>
              <CardDescription>
                다양한 스타일의 버튼 컴포넌트들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <p className="text-sm font-medium mb-4">Default</p>
                <div className="flex flex-wrap gap-2">
                  <Button>기본</Button>
                  <Button disabled>비활성화</Button>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm font-medium mb-4">Secondary</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="secondary" disabled>
                    비활성화
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm font-medium mb-4">Destructive</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="destructive">삭제</Button>
                  <Button variant="destructive" disabled>
                    비활성화
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm font-medium mb-4">Outline & Ghost</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm font-medium mb-4">크기</p>
                <div className="flex flex-wrap gap-2 items-center">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">→</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 폼 탭 */}
        <TabsContent value="forms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>폼 컴포넌트</CardTitle>
              <CardDescription>
                폼 작성에 필요한 모든 컴포넌트들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <Label htmlFor="input">Input</Label>
                <Input
                  id="input"
                  type="text"
                  placeholder="텍스트를 입력하세요"
                  className="mt-2"
                />
              </div>

              <Separator />

              <div>
                <Label htmlFor="textarea">Textarea</Label>
                <Textarea
                  id="textarea"
                  placeholder="여러 줄 텍스트를 입력하세요"
                  className="mt-2"
                  rows={4}
                />
              </div>

              <Separator />

              <div>
                <Label htmlFor="select">Select</Label>
                <Select>
                  <SelectTrigger id="select" className="mt-2">
                    <SelectValue placeholder="옵션을 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">옵션 1</SelectItem>
                    <SelectItem value="option2">옵션 2</SelectItem>
                    <SelectItem value="option3">옵션 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="checkbox"
                  checked={checked}
                  onCheckedChange={(state) => setChecked(state === true)}
                />
                <Label htmlFor="checkbox">체크박스</Label>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>라디오 버튼</Label>
                <RadioGroup defaultValue="option1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="option1" />
                    <Label htmlFor="option1">옵션 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="option2" />
                    <Label htmlFor="option2">옵션 2</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="flex items-center space-x-2">
                <Switch
                  id="switch"
                  checked={switchOn}
                  onCheckedChange={setSwitchOn}
                />
                <Label htmlFor="switch">
                  스위치 ({switchOn ? '켜짐' : '꺼짐'})
                </Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 표시 탭 */}
        <TabsContent value="display" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>배지</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>기본</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>아바타</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>BH</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>테이블</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>이름</TableHead>
                    <TableHead>이메일</TableHead>
                    <TableHead>상태</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">홍길동</TableCell>
                    <TableCell>hong@example.com</TableCell>
                    <TableCell>
                      <Badge variant="secondary">활성</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">김영희</TableCell>
                    <TableCell>kim@example.com</TableCell>
                    <TableCell>
                      <Badge>활성</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 피드백 탭 */}
        <TabsContent value="feedback" className="space-y-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>주의</AlertTitle>
            <AlertDescription>
              이것은 경고 알림입니다. 중요한 정보를 표시할 때 사용합니다.
            </AlertDescription>
          </Alert>

          <Alert className="border-green-600 bg-green-50 dark:bg-green-950">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800 dark:text-green-200">성공</AlertTitle>
            <AlertDescription className="text-green-700 dark:text-green-300">
              작업이 성공적으로 완료되었습니다.
            </AlertDescription>
          </Alert>

          <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-900 dark:text-blue-200">정보</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 dark:text-blue-300">
                이것은 일반적인 정보 메시지입니다.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
