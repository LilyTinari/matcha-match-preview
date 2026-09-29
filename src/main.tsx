import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

(window as any).gm_authFailure = () => {
  try { sessionStorage.setItem('gmp_api_inactive', 'true'); } catch (err) {}
  window.dispatchEvent(new CustomEvent('gmp-auth-failure'));
};

createRoot(document.getElementById('root')!).render(<App />);
