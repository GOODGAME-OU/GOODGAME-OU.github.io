import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const { MODE, DEV } = import.meta.env;

if (DEV) {
    console.info(`🐳 ${APP_NAME} | ${APP_VERSION} | ${MODE}`);
}

const root = document.getElementById('root');

if (!root) {
    throw new Error('Root element not found');
}

createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
