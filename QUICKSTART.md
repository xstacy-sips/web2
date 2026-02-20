# Quick Start Guide - Xstacy React

## 🚀 Setup in 3 Steps

### Step 1: Install Dependencies
Open terminal in the `xstacy-react` folder and run:
```bash
npm install
```

### Step 2: Add Your Assets
Copy your `assets` folder (containing images, logos, etc.) to the `public` directory:
```
xstacy-react/
└── public/
    └── assets/
        └── images/
            ├── logo/
            ├── drinks/
            └── doodels/
```

### Step 3: Start Development Server
```bash
npm start
```

Your website will open at http://localhost:3000

---

## 📝 Common Tasks

### Adding a New Drink to Menu
1. Open `src/data/menuData.js`
2. Find the appropriate category (e.g., `sparklingNectar`, `milkySurprise`)
3. Add your drink to the `items` array:

```javascript
{
  name: 'New Drink',
  description: 'Amazing flavor!',
  priceSmall: '89',
  price: '99',
  badges: ['New', 'Must Try']
}
```

### Updating Navigation Links
Edit `src/components/Navigation.js`

### Changing Colors
Edit the CSS variables in `src/App.css`:
```css
:root {
    --primary: #3853a4;        /* Main brand color */
    --background: #faf8f3;     /* Page background */
    --accent-green: #cddda3;   /* Accent color 1 */
    --accent-brown: #846b59;   /* Accent color 2 */
}
```

### Building for Production
When ready to deploy:
```bash
npm run build
```
This creates an optimized `build` folder you can upload to any web host.

---

## 🎯 Key Advantages of React Version

✅ **No Repeated Code**: Components like Navigation, Footer reused everywhere
✅ **Easy Updates**: Change menu once in menuData.js, updates everywhere
✅ **Better Performance**: React's virtual DOM = faster rendering
✅ **Scalable**: Easy to add new pages, features
✅ **Modern Stack**: Industry-standard React framework

---

## 📞 Need Help?

- Check the full README.md for detailed documentation
- All CSS is modular and in component folders
- Menu data is centralized in src/data/menuData.js
