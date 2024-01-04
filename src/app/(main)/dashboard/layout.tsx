import { SubscriptionModalProvider } from '@/lib/providers/subscription-modal-provider';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout = async ({ children, params }: LayoutProps) => {
  // const { data: products, error } = await getActiveProductsWithPrice();
  // if (error) throw new Error();
  return (
    <main className='flex over-hidden h-screen'>
      <SubscriptionModalProvider products={[]}>{children}</SubscriptionModalProvider>
    </main>
  );
};

export default Layout;
