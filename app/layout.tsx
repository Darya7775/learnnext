import React from 'react';
import '@/app/ui/global.css';
import StyledComponentsRegistry from './registry';
import { inter } from './ui/fonts';

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({children}: Props) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
