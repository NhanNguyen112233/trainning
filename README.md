# Store:

- Actions:
- Selectors:
  ![alt text](image.png)

plan:
https://www.mindmeister.com/app/map/3658983944?source=blank

ITCSS, SMACSS, CUBE CSS

token
Currently, you have spacing and colors, but a full token system would also include:
Typography scales (not just font sizes)
Border radius values
Shadow systems
Animation durations/easing
Z-index management


{
  "color": {
    "primary": {
      "50": "#E6F1FF",
      "100": "#B3D7FF",
      "200": "#80BDFF",
      "300": "#4DA3FF", 
      "400": "#1A89FF",
      "500": "#0070E0",
      "600": "#0059B3",
      "700": "#004080",
      "800": "#002B57",
      "900": "#00172E"
    },
    "neutral": {
      "50": "#F9FAFB",
      "100": "#F3F4F6", 
      "200": "#E5E7EB",
      "300": "#D1D5DB",
      "400": "#9CA3AF",
      "500": "#6B7280",
      "600": "#4B5563", 
      "700": "#374151",
      "800": "#1F2937",
      "900": "#111827"
    },
    "success": {
      "50": "#ECFDF5",
      "100": "#D1FAE5", 
      "200": "#A7F3D0",
      "300": "#6EE7B7",
      "400": "#34D399",
      "500": "#10B981",
      "600": "#059669",
      "700": "#047857",
      "800": "#065F46",
      "900": "#064E3B"
    },
    "error": {
      "50": "#FEF2F2", 
      "100": "#FEE2E2",
      "200": "#FECACA",
      "300": "#FCA5A5", 
      "400": "#F87171",
      "500": "#EF4444",
      "600": "#DC2626",
      "700": "#B91C1C", 
      "800": "#991B1B",
      "900": "#7F1D1D"
    }
  },
  "typography": {
    "fontFamily": {
      "primary": "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      "secondary": "Arial, -apple-system, BlinkMacSystemFont, sans-serif"
    },
    "fontSize": {
      "xs": "0.75rem",
      "sm": "0.875rem", 
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem", 
      "2xl": "1.5rem",
      "3xl": "1.875rem", 
      "4xl": "2.25rem",
      "5xl": "3rem"
    },
    "fontWeight": {
      "thin": 100,
      "light": 300, 
      "regular": 400,
      "medium": 500,
      "semibold": 600, 
      "bold": 700,
      "extrabold": 800
    }
  },
  "spacing": {
    "xs": "0.25rem", 
    "sm": "0.5rem",
    "md": "1rem", 
    "lg": "1.5rem",
    "xl": "2rem", 
    "2xl": "3rem",
    "3xl": "4rem"
  },
  "borderRadius": {
    "none": "0",
    "sm": "0.125rem", 
    "base": "0.25rem", 
    "md": "0.5rem",
    "lg": "1rem", 
    "xl": "1.5rem", 
    "full": "9999px"
  },
  "boxShadow": {
    "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "base": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)", 
    "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", 
    "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  }
}

