import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {RouterProvider,} from "react-router-dom";
import { router } from './Router/Routes.jsx';
import AuthContext from './AuthContex/AuthContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';


// tanstack query
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
    <QueryClientProvider client={queryClient}> <AuthContext>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthContext></QueryClientProvider>
   </HelmetProvider>
  </StrictMode>,
)
