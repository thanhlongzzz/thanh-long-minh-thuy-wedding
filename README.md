# 💒 Wedding Website - Thành Long & Minh Thủy

A beautiful, modern wedding invitation website built with React, TypeScript, and Vite. Features a stunning photo gallery, event details, location maps, and guest book functionality.

## ✨ Features

- 🎨 **Modern Design**: Beautiful UI with smooth animations using Framer Motion
- 📸 **Photo Gallery**: Masonry-style gallery with lightbox view and keyboard navigation
- 🗓️ **Event Details**: Separate event schedules for both families with tabbed interface
- 🗺️ **Location Maps**: Interactive Google Maps integration for venue locations
- 💝 **Gift Section**: Bank account details with VietQR codes for both bride and groom
- 📖 **Guest Book**: Google Sheets integration for guest messages
- 📱 **Responsive**: Fully responsive design for all devices
- 🎭 **Animations**: Smooth scroll animations and micro-interactions
- ⚡ **Performance**: Fast loading with image lazy-loading and optimizations

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/thanhlongzzz/thanh-long-minh-thuy-wedding.git
cd thanh-long-minh-thuy-wedding

# Install dependencies
npm install
```

## 💻 Development

Start the development server with hot-reload:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Development Features

- ⚡ **Hot Module Replacement (HMR)**: Changes reflect instantly
- 🔍 **TypeScript**: Full type checking and IntelliSense
- 📏 **ESLint**: Code quality and consistency checks

## 🏗️ Building

### Build for Production (Standard)

Build the project for deployment on a regular server (with base path `/`):

```bash
npm run build
```

This generates an optimized production build in the `dist/` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

### Option 1: GitHub Pages (Recommended)

This project includes an automated deployment script for GitHub Pages:
**need to change *BASE_PATH = '/YOUR_REPO_NAME/'* of deploy script in *packages.json***
```bash
npm run deploy
```

**What this does:**
1. Builds the project with the correct base path for GitHub Pages
2. Creates a temporary branch with the build output
3. Force pushes to the `build` branch on GitHub
4. Cleans up temporary files and branches
5. Returns to the main branch

**Setup GitHub Pages:**
1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Set source to **Deploy from a branch**
4. Select branch: `build` and folder: `/ (root)`
5. Save and wait for deployment

Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Option 2: Custom Server / Hosting

For other hosting platforms (Vercel, Netlify, custom server, etc.):

1. Build the project:
```bash
npm run build
```

2. Upload the `dist/` folder to your hosting service

3. Configure your server to serve the `index.html` file for all routes (SPA routing)

### Option 3: Custom Deployment with Different Base Path

If deploying to a subdirectory on your server:

```bash
BASE_PATH='/your-subdirectory/' npm run build
```

## ⚙️ Configuration

### Customizing Base Path

The base path is used when your site is deployed to a subdirectory (like GitHub Pages). It's automatically handled through environment variables.

#### For GitHub Pages

Already configured in the `deploy` script in `package.json`:

```json
"deploy": "BASE_PATH='/thanh-long-minh-thuy-wedding/' npm run build && ..."
```

#### For Your Own Deployment

**Method 1: Temporary (Single Build)**

```bash
BASE_PATH='/your-path/' npm run build
```

**Method 2: Permanent (Update Config)**

Edit `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-path/',  // Change this to your desired path
})
```

Or create a custom build script in `package.json`:

```json
{
  "scripts": {
    "build:custom": "BASE_PATH='/your-path/' npm run build"
  }
}
```

### Understanding Base Path in Code

The base path is automatically applied to:

1. **Vite Config** (`vite.config.ts`):
```typescript
base: process.env.BASE_PATH || '/',
```

2. **Image Paths** in Components:
```typescript
const BASE_URL = import.meta.env.BASE_URL || '/';
const imagePath = `${BASE_URL}assets/gallery/image.jpg`;
```

This ensures all assets (images, CSS, JS) load correctly regardless of deployment location.

### Customizing Content

#### 1. Update Wedding Information

Edit files in `src/components/`:
- `Hero.tsx` - Names, date, countdown
- `Couple.tsx` - Couple photos and parent names
- `Events.tsx` - Event schedules for both families
- `Location.tsx` - Venue addresses and map coordinates
- `Gift.tsx` - Bank account information and QR codes

#### 2. Update Photos

Replace images in `public/assets/gallery/` with your own photos, then update:
- `src/components/Gallery.tsx` - Main gallery images
- `src/components/Couple.tsx` - Couple portrait photos
- `src/components/LoveQuote.tsx` - Background image

#### 3. Google Sheets Integration (Guest Book)

Create new sheet include *Timestamp, Name, Message, Attending* column
Create appscritp with code bellow and deploy it to web app => get YOUR_GOOGLE_APPS_SCRIPT_URL

```javascript

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Lấy tất cả dữ liệu có trong Sheet (bao gồm cả hàng tiêu đề)
  // getRange(bắt đầu hàng, bắt đầu cột, số hàng, số cột)
  var range = sheet.getDataRange();
  var values = range.getValues(); // Trả về một mảng 2 chiều [[...], [...]]

  // Kiểm tra nếu không có dữ liệu (chỉ có hàng tiêu đề)
  if (values.length <= 1) {
    return ContentService.createTextOutput(JSON.stringify({ 'records': [] }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // Giả định hàng đầu tiên (index 0) là tiêu đề
  var headers = values[0];
  var records = [];

  // Lặp qua các hàng dữ liệu, bắt đầu từ hàng thứ 2 (index 1)
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var record = {};
    
    // Gán giá trị của cột cho tên trường tương ứng
    // Lưu ý: Đảm bảo tiêu đề cột khớp với cách bạn muốn tên trường
    // Cột 1: Timestamp | Cột 2: Name | Cột 3: Message | Cột 4: Attending
    record[headers[0]] = row[0]; // Timestamp
    record[headers[1]] = row[1]; // Name
    record[2] = row[2]; // Message
    record[3] = row[3]; // Attending (Yes/No)
    
    // Cấu trúc đối tượng JSON theo thứ tự các cột đã lưu
    records.push({
      'timestamp': row[0],
      'name': row[1],
      'message': row[2],
      'attending': row[3] === "Yes" // Chuyển "Yes"/"No" thành boolean true/false
    });
  }

  // Trả về JSON chứa mảng các bản ghi
  return ContentService.createTextOutput(JSON.stringify({ 'records': records }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Hàm doPost cũ của bạn (nên giữ nguyên)
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.message,
    data.attending ? "Yes" : "No"
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

```

Update the Google Apps Script URL in `src/components/GuestBook.tsx`:

```typescript
const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
  method: 'POST',
  mode: 'no-cors',
  // ...
});
```


## 📁 Project Structure

```
thanh-long-minh-thuy-wedding/
├── public/
│   └── assets/
│       └── gallery/          # Wedding photos
├── src/
│   ├── components/           # React components
│   │   ├── Hero.tsx         # Hero section with countdown
│   │   ├── Couple.tsx       # Couple introduction
│   │   ├── Events.tsx       # Event schedules
│   │   ├── Location.tsx     # Venue maps
│   │   ├── Gallery.tsx      # Photo gallery
│   │   ├── Gift.tsx         # Gift/donation section
│   │   └── GuestBook.tsx    # Guest messages
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── vite.config.ts           # Vite configuration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Image Slider**: Swiper
- **Date Utilities**: date-fns

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production (base path: `/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run deploy` | Build and deploy to GitHub Pages |

## 🎨 Customization Guide

### Change Color Scheme

Edit Tailwind colors in `tailwind.config.js` or use custom CSS in `src/index.css`.

### Modify Animations

Animations are configured in individual components using Framer Motion. Look for:
- `motion.div` elements
- `variants` objects
- `animate`, `initial`, `exit` props

### Add New Sections

1. Create a new component in `src/components/`
2. Import and add to `App.tsx`
3. Update styling as needed

## 🐛 Troubleshooting

### Assets Return 404 on GitHub Pages

Make sure:
1. Base path is configured correctly in `vite.config.ts`
2. All image paths use `import.meta.env.BASE_URL`
3. You've run `npm run deploy` (not manual build)

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Images Not Loading in Production

Check that:
1. Images are in `public/assets/` folder
2. Image paths use `BASE_URL` prefix
3. File names match exactly (case-sensitive)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 💖 Credits

Created with love for Thanh Long & Minh Thủy's wedding.

Built with:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Made with ❤️ for our special day**
