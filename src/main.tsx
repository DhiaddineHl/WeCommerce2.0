import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './routing/AppRouter.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ShoppingCartProvider from './context/ShoppingCartContext.tsx';
import {Provider} from "react-redux";
import store from './state/cartStore.ts';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <QueryClientProvider client={queryClient}>
        {/* <Provider store={store}> */}
        <ShoppingCartProvider>
        <RouterProvider
          router={appRouter}
        />
        </ShoppingCartProvider>
        {/* </Provider> */}
      </QueryClientProvider>
    </Theme>
  </React.StrictMode>,
)
