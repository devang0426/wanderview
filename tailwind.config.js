module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#10b981',
        accent: '#f59e0b',
        dark: '#1f2937',
      },
      boxShadow: {
        '3d': '0 10px 30px -15px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 15px rgba(37, 99, 235, 0.5)',
      },
    },
  },
  plugins: [],
}