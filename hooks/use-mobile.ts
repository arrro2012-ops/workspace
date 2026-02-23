'use client';

import { useEffect, useState } from 'react';

/**
 * 모바일 기기인지 감지하는 커스텀 훅입니다.
 * Tailwind CSS의 md 브레이크포인트(768px) 기준으로 판단합니다.
 * @returns {boolean} 모바일 기기인 경우 true
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    // 미디어 쿼리 확인
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    setIsMobile(mediaQuery.matches);

    // 리스너 등록
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // SSR 미스매치 방지
  if (!mounted) {
    return false;
  }

  return isMobile;
}
