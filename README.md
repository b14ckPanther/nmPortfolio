# Noor's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark/light mode support
- Contact form with email notifications
- Project showcase with filtering
- Skills section with progress bars
- Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm, yarn, or pnpm
- Resend API key for contact form functionality

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Set up environment variables
   Create a `.env.local` file in the root directory and add the following:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

To run this project, you'll need to set up the following environment variables in your `.env.local` file:

- `RESEND_API_KEY`: Your Resend API key for sending emails
- `NEXT_PUBLIC_APP_URL`: The base URL of your application (e.g., http://localhost:3000 for development)

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Resend](https://resend.com/) - Email sending
- [Lucide Icons](https://lucide.dev/) - Icons

## License

This project is licensed under the MIT License.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
