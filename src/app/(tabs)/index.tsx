// src/app/(tabs)/index.tsx
import { Redirect } from 'expo-router';
import React from 'react';

export default function TabsIndex() {
  // redireciona para a aba /(tabs)/home
  return <Redirect href="/(tabs)/home" />;
}
