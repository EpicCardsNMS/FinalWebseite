# MeineKartenVerkaufen.de - Rebuild mit neuem CI

## Design Guidelines

### Design References
- Original: meinekartenverkaufen.de (Sammelkarten Ankauf)
- Style: Modern, Clean, Trust-Building – mit frischem, eigenständigem CI

### Color Palette
- Primary: #6D28D9 (Deep Violet – Hauptfarbe)
- Primary Light: #8B5CF6 (Violet 500)
- Primary Dark: #4C1D95 (Violet 900)
- Accent: #F59E0B (Amber – CTAs und Highlights)
- Accent Hover: #D97706 (Amber 600)
- Background: #0F0F1A (Dark Navy)
- Surface: #1A1A2E (Dark Card Background)
- Surface Light: #252542 (Lighter Card)
- Text Primary: #F8FAFC (White)
- Text Secondary: #94A3B8 (Slate 400)
- Border: #334155 (Slate 700)

### Typography
- Font Family: Inter (Sans-Serif)
- Heading1: Inter font-weight 800 (48px)
- Heading2: Inter font-weight 700 (36px)
- Heading3: Inter font-weight 600 (24px)
- Body: Inter font-weight 400 (16px)
- Small: Inter font-weight 400 (14px)

### Key Component Styles
- Buttons: Amber accent (#F59E0B), dark text, 12px rounded, hover: darken
- Cards: Dark surface (#1A1A2E), 1px border (#334155), 16px rounded, hover glow
- Accordion: Dark surface, violet accent on open
- Tables: Dark surface, alternating row shading, violet header

### Layout & Spacing
- Hero: Full viewport, gradient background with floating card elements
- Sections: 96px vertical padding
- Cards: 24px gaps, hover lift effect
- Max content width: 1200px

### Images to Generate
1. **hero-trading-cards-collection.jpg** - Dramatic arrangement of colorful trading cards (Pokemon, Magic style) fanned out on dark surface with dramatic lighting, premium feel (Style: photorealistic, dark mood, vibrant card colors)
2. **pokemon-cards-stack.jpg** - Stack of Pokemon-style trading cards with holographic effects, close-up shot on dark background (Style: photorealistic, vibrant)
3. **magic-cards-display.jpg** - Fantasy-themed trading cards displayed elegantly, dark mystical atmosphere with purple/blue lighting (Style: photorealistic, fantasy mood)
4. **other-cards-variety.jpg** - Variety of different trading card game cards spread on dark surface, diverse colorful designs (Style: photorealistic, colorful)

---

## Development Tasks & File Structure

### Files to Create (max 8):

1. **src/pages/Index.tsx** - Homepage mit Hero, Kartenauswahl-Formular, FAQ, Ratgeber
2. **src/pages/Preise.tsx** - Preise-Unterseite mit Tabellen für Magic, Pokemon, Andere
3. **src/components/Header.tsx** - Navigation Header
4. **src/components/Footer.tsx** - Footer mit Links und Copyright
5. **src/components/CardSelector.tsx** - Interaktives Kartenauswahl-Formular (Wizard/Stepper)
6. **src/components/FAQ.tsx** - FAQ Akkordeon-Sektion
7. **src/components/Ratgeber.tsx** - Ratgeber SEO-Text Sektion
8. **src/App.tsx** - Router Setup mit Preise-Route

### Routing
- / → Homepage (Index.tsx)
- /preise → Preise-Seite (Preise.tsx)