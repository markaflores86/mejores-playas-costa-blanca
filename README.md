# Mejores Playas - Costa Blanca

Pequeño MVP: mapa colaborativo de la Costa Blanca donde los visitantes pueden crear puntos con fotos y comentarios (sin registro, solo email). Incluye integración inicial con Supabase, Leaflet (OpenStreetMap), comprobación básica de moderación y etiqueta de prueba de AdSense.

Contenido del repo y pasos rápidos:

1) Requisitos locales
- Node.js 18+ y npm

2) Clonar y ejecutar en local

```bash
git clone https://github.com/markaflores86/mejores-playas-costa-blanca.git
cd mejores-playas-costa-blanca
npm install
npm run dev
```

3) Variables de entorno (añadir en Vercel o .env.local)
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY (server only)
- NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT (ca-pub-... placeholder)
- NEXT_PUBLIC_SITE_LOCALE_DEFAULT (es)

4) SQL para crear tablas (abrir SQL Editor en Supabase y ejecutar `sql/init.sql`)

5) Deploy a Vercel
- Conecta tu cuenta de GitHub, importa este repo y añade las env vars en Project Settings.

---

Voy a seguir subiendo más archivos y te los mostraré uno por uno. Para continuar, crea el proyecto Supabase (si quieres hago la guía paso a paso) y pega las credenciales en Vercel cuando esté listo.
