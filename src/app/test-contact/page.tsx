'use client';

import { ContactForm } from '@/components/contact-form';

export default function TestContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Contact Form Test</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-card p-6 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-semibold mb-6">Send a Test Message</h2>
          <ContactForm />
        </div>
        
        <div className="mt-12 p-6 bg-muted/50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Test Instructions</h2>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
            <li>Fill out the form with test data</li>
            <li>Submit the form</li>
            <li>Check your email for the test message</li>
            <li>Verify the success toast appears</li>
            <li>Test form validation by submitting with empty fields</li>
          </ol>
          
          <div className="mt-6 p-4 bg-background rounded border">
            <h3 className="font-medium mb-2">Note:</h3>
            <p className="text-sm text-muted-foreground">
              Make sure you have set up your <code className="bg-muted px-1.5 py-0.5 rounded">.env.local</code> file with a valid Resend API key
              and configured the email recipient in <code className="bg-muted px-1.5 py-0.5 rounded">src/app/api/contact/route.ts</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
