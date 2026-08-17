---
name: Editorial Technologist
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434656'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#747688'
  outline-variant: '#c4c5d9'
  surface-tint: '#124af0'
  primary: '#0040e0'
  on-primary: '#ffffff'
  primary-container: '#2e5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#b8c3ff'
  secondary: '#6b38d4'
  on-secondary: '#ffffff'
  secondary-container: '#8455ef'
  on-secondary-container: '#fffbff'
  tertiary: '#005e6e'
  on-tertiary: '#ffffff'
  tertiary-container: '#00788c'
  on-tertiary-container: '#d7f6ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001356'
  on-primary-fixed-variant: '#0035be'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 120px
    fontWeight: '900'
    lineHeight: 110px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '900'
    lineHeight: 60px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: Geist Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  section-number:
    fontFamily: Geist Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  stack-xl: 160px
  stack-lg: 80px
  stack-md: 40px
---

## Brand & Style

The design system is a fusion of **high-end editorial aesthetics** and **technical precision**. It treats the developer portfolio not as a mere collection of links, but as a digital monograph. The brand personality is authoritative, sophisticated, and innovative, bridging the gap between artistic expression and engineering excellence.

The visual style leverages **Digital Minimalism** mixed with **Poster-like Branded Grids**. It uses aggressive white space to command attention and asymmetrical layouts to create a sense of dynamic movement. The emotional response should be one of "Premium Craftsmanship"—suggesting that the code behind the UI is as elegant as the interface itself. 

Key stylistic pillars include:
- **Asymmetry:** Intentional breaking of the grid to highlight featured content or technical diagrams.
- **Section Numbering:** Utilizing oversized leading numerals (e.g., 01, 02) to guide the narrative flow.
- **Technical Accents:** Monospaced metadata and "slug" text that frame high-fashion serif headings.

## Colors

The palette is rooted in a high-contrast relationship between **Warm White** and **Deep Navy**, creating a sophisticated canvas for vibrant digital accents.

- **Primary & Secondary:** Electric Blue and Vibrant Violet are used for interactive states, focal points, and subtle linear gradients. They represent the "energy" of the full-stack capability.
- **Accent:** Bright Cyan is reserved for technical callouts, status indicators, and syntax-highlighting nuances.
- **Usage:** Deep Navy should be used for full-page immersive sections (like the Footer or Featured Case Studies) to create "rhythmic breathing" as the user scrolls through the lighter editorial sections.

## Typography

This system relies on **Extreme Scale Contrast**. Large, high-contrast Serifs (Playfair Display) provide the editorial voice, while the technical Geist sans-serif provides clarity for documentation and metadata.

- **Display Type:** Use `display-hero` for brand names and section titles. On desktop, these should often overlap or sit very close to imagery.
- **Technical Metadata:** Use `label-mono` for tech stacks, dates, and "slug" identifiers.
- **Hierarchy:** Always pair a serif headline with a monospaced label above it to reinforce the "Full Stack Developer" identity—mixing the classic with the technical.

## Layout & Spacing

The layout follows a **Poster-like Grid** system. While it uses a 12-column underlying structure, content is often offset to create white space.

- **Asymmetrical Compositions:** Project descriptions should occupy a different column span than the project imagery (e.g., text on cols 2-5, image on cols 6-12).
- **Sticky Navigation:** A minimal, narrow vertical or horizontal bar that remains fixed, ensuring the "AYM." logo is always visible.
- **Vertical Rhythm:** Use `stack-xl` (160px) between major sections to allow the editorial type to breathe. On mobile, compress this to 80px.
- **Reflow:** On mobile, the grid collapses to a single column, but maintains the "oversized" feel by keeping margins tight and typography relatively large.

## Elevation & Depth

This system avoids traditional shadows in favor of **Tonal Layering** and **High-Contrast Outlines**.

- **Surface Tiers:** Depth is created by placing `background-warm-white` cards over `accent-lavender` sections, or Deep Navy cards over Black backgrounds.
- **Glassmorphism:** Use subtle backdrop blurs (20px+) only for floating elements like tech badges or navigation backgrounds to maintain the "digital" feel without cluttering the editorial clarity.
- **Technical Lines:** Use thin (1px) borders in `primary_color` or a light neutral to define zones, mimicking architectural blueprints.

## Shapes

The shape language is **Soft yet Structured**. 

- **Containers:** Project cards and input fields use a `0.25rem` (Soft) radius to maintain a professional, architectural feel.
- **Interactive Elements:** Buttons may use `rounded-xl` for a pill-shape to contrast against the rigid grid of the layout.
- **Images:** Photography and project screenshots should remain sharp (0px radius) to emphasize the editorial "cut" of a magazine.

## Components

### Project Cards (Oversized)
These are the centerpiece. They should span at least 8 columns. Titles use `headline-lg` (Serif). The hover state should reveal a subtle gradient overlay (Electric Blue to Violet) or a technical "spec sheet" of the project's architecture.

### Floating Tech Badges
Small, pill-shaped chips using `label-mono`. Use `accent-lavender` backgrounds with `primary_color` text. These should appear to "float" over project imagery or be grouped in a dedicated tech-stack cluster.

### Minimal Navigation
The logo "AYM." should be the primary anchor. Links are `label-mono`. Use a hairline separator (1px) to divide navigation from the main content.

### Technical Architecture Diagrams
A custom component style using `primary_color` lines, monospaced labels, and no fills. These diagrams act as secondary "editorial illustrations" to explain complex backend logic.

### Buttons
- **Primary:** Solid `neutral_color` (Deep Navy) with `background_warm_white` text. No shadow.
- **Secondary:** Outlined with a 1px `primary_color` border. 
- **Typography:** Always use `label-mono` for button labels to maintain the technical persona.