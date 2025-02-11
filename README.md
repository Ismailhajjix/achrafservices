# Agence Achraf Services

A modern, high-performance website for immigration and visa services built with Next.js 14.

## Features

- ⚡️ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🔥 TypeScript for type safety
- 📱 Responsive design
- 🎭 Jest & React Testing Library for testing
- 🔍 SEO optimized
- 📊 Performance optimized
- 🔒 Security focused

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/achraf.git
cd achraf
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file:
```bash
cp .env.local.example .env.local
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Testing

### Running Tests
```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Coverage Goals
- Statements: 80%
- Branches: 80%
- Functions: 80%
- Lines: 80%

## Deployment

The project is optimized for deployment on Vercel. To deploy:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

## Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://achrafservices.ma
NEXT_PUBLIC_GA_ID=your-ga-id
```

## Project Structure

```
├── app/                  # Next.js app directory
├── components/          # React components
│   ├── ui/             # UI components
│   ├── sections/       # Page sections
│   └── header/         # Header components
├── hooks/              # Custom React hooks
├── lib/               # Utility functions
├── public/            # Static assets
└── styles/           # Global styles
```

## Performance Optimizations

- Image optimization with next/image
- Font optimization
- Component lazy loading
- Static page generation
- API route caching
- CDN caching headers

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@achrafservices.ma or open an issue. 