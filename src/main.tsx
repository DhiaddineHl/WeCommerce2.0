import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './routing/AppRouter.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={appRouter}
        />
      </QueryClientProvider>
    </Theme>
  </React.StrictMode>,
)
