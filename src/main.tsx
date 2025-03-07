import * as React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import './theme/theme.css'
import App from './App.tsx'
import { StoreProvider } from './stores/StoreContext';
import { ThemeProvider } from './theme/ThemeContext';
import { ConfigProvider } from 'antd';
import { getThemeConfig } from './theme/ThemeContext';
import { useTheme } from './theme/ThemeContext';

const AppWithTheme = () => {
  const { theme } = useTheme();
  return (
    <ConfigProvider theme={getThemeConfig(theme)}>
      <App />
    </ConfigProvider>
  );
};

createRoot(document.getElementById('root')!).render(
    <StoreProvider>
        <ThemeProvider>
            <AppWithTheme />
        </ThemeProvider>
    </StoreProvider>
)
