import './tailwind.css';
import { StrictMode } from 'react';
import { router } from './router.tsx';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// QueryClient 설정 최적화
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 윈도우 포커스시 자동 리페치 비활성화
      retry: 1, // 실패시 재시도 횟수
      staleTime: 5 * 60 * 1000, // 5분간 데이터를 'fresh'하다고 간주
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
