---
description: '새로운 React 컴포넌트를 components 폴더에 생성합니다'
argument-hint: '<ComponentName>'
allowed-tools:
  [
    'Bash(mkdir:*)',
    'Bash(test:*)',
    'Write(*)',
  ]
---

# Claude 명령어: Add Component

새로운 React 함수형 컴포넌트를 자동으로 생성합니다.

## 사용법

```
/add-component ComponentName
```

## 예시

```
/add-component Button
/add-component Card
/add-component UserProfile
```

## 동작

1. 컴포넌트 이름을 PascalCase로 검증
2. `components/` 폴더에 `${ComponentName}.tsx` 파일 생성
3. React 함수형 컴포넌트 기본 템플릿 추가:
   - TypeScript 인터페이스 (Props)
   - FC (FunctionComponent) 타입
   - Tailwind CSS 기본 스타일
   - children 지원 (선택적)

## 생성되는 파일 구조

```
components/
├── ${ComponentName}.tsx    // 새로 생성되는 파일
└── ...
```

## 템플릿 상세

생성되는 컴포넌트는 다음과 같은 구조를 포함합니다:

- **Props 인터페이스**: TypeScript Strict 모드 지원
- **FC 타입**: React.FC를 사용한 타입 안전성
- **Tailwind CSS**: 기본 스타일 클래스 포함
- **Export**: Named export 및 default export 지원
- **주석**: 기본 구조 설명 주석

## 규칙

- 컴포넌트 이름은 **PascalCase** 필수 (예: Button, UserCard, DropdownMenu)
- 파일명은 자동으로 PascalCase로 생성됨
- TypeScript Strict 모드 준수
- children은 ReactNode 타입으로 선택적 지원

## 참고사항

- 이미 존재하는 파일명이면 생성 안 함
- 생성 후 즉시 import하여 사용 가능
- shadcn/ui 컴포넌트를 상속하려면 별도 수정 필요
