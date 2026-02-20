# Xstacy React Website

A modern, modular React application for Xstacy beverage brand - Making The World Smile, One Sip at a Time!

## 🎯 Features

- **Modular Component Architecture**: Reusable components to avoid code repetition
- **React Router**: Smooth navigation between pages
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Scroll Animations**: Intersection Observer API for engaging transitions
- **Data-Driven Menu**: Menu items stored in a centralized data file for easy updates

## 📁 Project Structure

```
xstacy-react/
├── public/
│   └── index.html
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navigation.js
│   │   ├── Footer.js
│   │   ├── PageHeader.js
│   │   ├── DrinkCard.js
│   │   ├── MenuItem.js
│   │   └── [corresponding CSS files]
│   ├── pages/              # Page components
│   │   ├── Home.js
│   │   ├── Menu.js
│   │   └── [corresponding CSS files]
│   ├── data/               # Centralized data
│   │   └── menuData.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd xstacy-react
```

2. Install dependencies:
```bash
npm install
```

3. Copy your assets folder to the public directory:
```bash
# Copy your assets folder (images, etc.) to public/assets
cp -r /path/to/your/assets ./public/
```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

Create an optimized production build:
```bash
npm run build
```

## 🔧 Key Improvements Over HTML Version

### 1. **Component Reusability**
- **Navigation & Footer**: Single component used across all pages
- **PageHeader**: Reusable header component with customizable title and subtitle
- **DrinkCard**: Consistent drink display cards
- **MenuItem**: Reusable menu item component with badges support

### 2. **Data Management**
- Menu items stored in `menuData.js` for easy updates
- No need to edit HTML when adding/updating drinks
- Single source of truth for all menu content

### 3. **Better Code Organization**
- Separation of concerns (components, pages, data)
- CSS modules for each component
- Easy to maintain and scale

### 4. **Enhanced User Experience**
- Smooth page transitions with React Router
- Scroll animations with Intersection Observer
- Mobile-responsive navigation

## 📝 How to Update Menu Items

To add or modify menu items, simply edit `src/data/menuData.js`:

```javascript
{
  name: 'Your Drink Name',
  description: 'Description here',
  price: '99',
  priceSmall: '89', // optional
  badges: ['Bestseller', 'Must Try'] // optional
}
```

Available badge types:
- `Bestseller`
- `Must Try`
- `New`
- `Healthy`

## 🎨 Customization

### Colors
Edit CSS variables in `src/App.css`:
```css
:root {
    --primary: #3853a4;
    --background: #faf8f3;
    --accent-green: #cddda3;
    --accent-brown: #846b59;
}
```

### Fonts
The project uses Google Fonts (Nunito & Playpen Sans). To change fonts, update the import in `src/index.css`.

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Mobile: ≤ 768px

## 🛠️ Technologies Used

- React 18
- React Router DOM 6
- CSS3 with CSS Variables
- Intersection Observer API
- Google Fonts

## 📄 License

© 2025 Xstacy. All rights reserved.

## 🙏 Credits

Design by Arti Kathe
