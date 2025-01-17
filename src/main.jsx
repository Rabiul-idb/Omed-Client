import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {RouterProvider,} from "react-router-dom";
import { router } from './Router/Routes.jsx';
import AuthContext from './AuthContex/AuthContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
    
  </StrictMode>,
)
