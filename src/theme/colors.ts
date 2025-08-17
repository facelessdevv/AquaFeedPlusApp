import type { StatusBarStyle } from 'react-native';

export interface Colors {
  primary: string;
  accent: string;
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  statusBar: StatusBarStyle;
}

export const lightColors: Colors = {
  primary: '#003a5d',
  accent: '#E04B15',
  background: '#F7F9FC',
  surface: '#FFFFFF',
  textPrimary: '#0A1E2B',
  textSecondary: '#5B6670',
  border: '#E0E6ED',
  statusBar: 'dark-content',
};

export const darkColors: Colors = {
  primary: '#58A6FF',
  accent: '#ff6b3d',
  background: '#0A1E2B',
  surface: '#162B3A',
  textPrimary: '#F0F4F8',
  textSecondary: '#A0AEC0',
  border: '#2D3748',
  statusBar: 'light-content',
};