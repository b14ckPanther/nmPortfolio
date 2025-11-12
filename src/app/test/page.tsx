'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { Toaster } from '@/components/ui/toaster';

export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center my-8">Component Test Page</h1>
      
      <div className="container mx-auto px-4 space-y-12 flex-1">
        <section className="border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">SiteHeader</h2>
          <SiteHeader />
        </section>
        
        <section className="border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">SiteFooter</h2>
          <SiteFooter />
        </section>
        
        <section className="border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">TailwindIndicator</h2>
          <TailwindIndicator />
        </section>
        
        <section className="border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Toaster</h2>
          <Toaster />
        </section>
      </div>
      
      <footer className="mt-12 py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          Test page for component debugging
        </div>
      </footer>
    </div>
  );
}
