# Bomba - Multi-currency Accounts for Africans

A modern, responsive Next.js application for the Bomba financial platform, designed to help Africans send and receive money globally with competitive exchange rates.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Hero Slider**: Interactive 6-slide carousel with 5-second auto-rotation
- **Currency Converter**: Real-time exchange rates with 1% fee calculation
- **Trusted Partners**: Hover effects on partner logos
- **Press Page**: Dedicated page showcasing media coverage
- **Modern UI**: Clean, professional design with smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons
- **Responsive**: Mobile-first design

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd bomba-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── press/
│       └── page.tsx        # Press page
├── components/
│   ├── Header/
│   │   └── Header.tsx      # Navigation with hamburger menu
│   ├── HeroSlider/
│   │   └── HeroSlider.tsx  # Interactive slider component
│   ├── CurrencyConverter/
│   │   └── CurrencyConverter.tsx # Currency conversion tool
│   ├── Features/
│   │   └── Features.tsx    # Feature showcase
│   ├── TrustedPartners/
│   │   └── TrustedPartners.tsx # Partner logos with hover effects
│   ├── NewsSection/
│   │   └── NewsSection.tsx # News updates section
│   ├── Footer/
│   │   └── Footer.tsx      # Footer with links and social media
│   └── Icons/
│       └── Icons.tsx       # Custom SVG icons
```

## 🎯 Key Components

### Hero Slider

- 6 slides with different content
- 5-second auto-rotation
- Clickable indicators
- Smooth slide transitions
- Navigation arrows

### Currency Converter

- Real-time exchange rates (mock data)
- 1% fee calculation
- Support for 25+ currencies
- Responsive design
- Live rate updates

### Trusted Partners

- Hover effects on partner logos
- Category badges
- Fallback text for missing images
- Grid layout with responsive design

### Header Navigation

- Responsive hamburger menu
- Dropdown functionality
- Smooth transitions
- Mobile-optimized

## 🎨 Design Features

- **Color Scheme**: Blue, green, and purple accents
- **Typography**: Inter font family
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Works on all screen sizes
- **Accessibility**: Proper ARIA labels and semantic HTML

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## 🔧 Customization

### Adding New Slides

Edit `src/components/HeroSlider/HeroSlider.tsx` and add new slides to the `slides` array.

### Updating Exchange Rates

Replace the mock data in `src/components/CurrencyConverter/CurrencyConverter.tsx` with real API calls.

### Adding Partner Logos

Update the `partners` array in `src/components/TrustedPartners/TrustedPartners.tsx`.

## 📄 Pages

### Home Page (`/`)

- Hero slider with 6 slides
- News section
- Mission statement
- Currency converter
- Features showcase
- Trusted partners
- Call-to-action section

### Press Page (`/press`)

- Media coverage articles
- Press kit download
- Contact information
- Call-to-action

## 🎯 Call-to-Action Integration

The home page includes a prominent call-to-action button that links to the Press page, allowing users to easily access media coverage and press information.

## 🔍 SEO Optimization

- Meta tags for social sharing
- Open Graph tags
- Twitter Card support
- Semantic HTML structure
- Fast loading times

## 🛡️ Best Practices

- TypeScript for type safety
- Component-based architecture
- Responsive design principles
- Accessibility standards
- Performance optimization

## 📞 Support

For questions or support, please contact:

- Email: hello@bomba.co
- Website: [bomba.co](https://bomba.co)

## 📄 License

© 2024 Bomba Limited. All rights reserved.
