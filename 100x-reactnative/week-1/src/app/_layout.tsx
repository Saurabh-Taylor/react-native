import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import React from 'react';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';
import App from '.';

export default function TabLayout() {
  
  return (
    <>
      <AnimatedSplashOverlay />
      <App />
    </>
  );
}
