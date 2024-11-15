# Slidington 🎮

A lightweight, customizable button library that brings interactive and stylish buttons to your web projects. With multiple models and easy integration, Slidington simplifies the process of creating engaging button elements.

Hey there! This project started as a fun little side project and wasn’t really meant for production—though it totally *can* be used that way. It’s not the fanciest library out there, but I’ll keep it updated when I can.

![Version](https://img.shields.io/badge/version-1.6.1-blue.svg)
![Size](https://img.shields.io/badge/size-<5KB_gzipped-green.svg)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=flat&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/camolover)
[![](https://visitcount.itsvg.in/api?id=Slidington&label=View&color=1&icon=6&pretty=false)](https://visitcount.itsvg.in)

## ✨ Features

- 🎯 Simple integration
- 🪶 Lightweight (<5KB gzipped)
- ♿ Built with accessibility in mind
- 🎨 Multiple button models
- 🎮 Interactive animations
- 🛠️ Highly customizable

## 📦 Installation

### NPM
```bash
npm install slidington
```

### CDN
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slidington@latest/dist/style.min.css">
<script src="https://cdn.jsdelivr.net/npm/slidington@latest/dist/script.min.js"></script>
```

## 🚀 Usage

Create interactive buttons by using the `slidington.create()` method:

```javascript
slidington.create({
    title: 'Your Button',
    description: 'Optional button description',
    model: 'default', // Choose from available models
    image: '#555555', // Color code or image URL
    link: 'https://your-link.com',
    buttonColor: '#3a8d8d',
    arrowColor: '#ffde00'
});
```

## 🎨 Available Models

1. **Default** - Classic sliding animation
2. **Triangle** - Triangle-shaped hover effect
3. **Solid** - Solid sliding animation
4. **Teardrop** - Teardrop-shaped animation
5. **Wave** - Wave effect
6. **ZigZag** - Zigzag pattern animation
7. **Stairs** - Stair-step animation
8. **Outlet** - Plug and play animation

## ⚙️ Configuration Options

| Option | Type | Description |
|--------|------|-------------|
| `title` | String | Button text |
| `description` | String | Optional description |
| `model` | String | Button model |
| `image` | String | Background color or image URL |
| `link` | String | URL for button click |
| `action` | String | Custom function name for click events |
| `buttonColor` | String | Main button color |
| `arrowColor` | String | Arrow icon color |

## 🌟 Examples

### Link Button
```javascript
slidington.create({
    title: 'Visit Portfolio',
    description: 'Click to explore amazing projects',
    model: 'default',
    image: '#555555',
    link: 'https://example.com',
    buttonColor: '#3a8d8d',
    arrowColor: '#ffde00'
});
```

### Custom Action Button
```javascript
slidington.create({
    title: 'Take Action',
    description: 'Click to trigger custom function',
    model: 'triangle',
    image: 'path/to/image.jpg',
    action: 'yourCustomFunction',
    buttonColor: '#23542a',
    arrowColor: '#ffde00'
});
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 💖 Support

If you find this library helpful, consider buying me a coffee:

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/camolover)

## 🔗 Links

- [GitHub Repository](https://github.com/CamoLover/Slidington)
- [NPM Package](https://www.npmjs.com/package/slidington)
- [Developer's Portfolio](https://camolover.dev)
