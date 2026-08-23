import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'

const MapClient = dynamic(() => import('../components/Map'), { ssr: false })

export default function Home(){
  return (
    <>
      <Head>
        <title>Mejores Playas - Costa Blanca</title>
        <meta name="description" content="Mapa colaborativo de las mejores playas de la Costa Blanca" />
        {/* AdSense prueba: mantén data-adtest="on" hasta tener dominio aprobado */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT} crossOrigin="anonymous"></script>
      </Head>

      <header className="site-header">
        <div className="container">
          <h1 className="logo"><img src="/logo.svg" alt="logo" width="36" style={{verticalAlign:'middle',marginRight:8}}/> Mejores Playas</h1>
          <nav>
            <Link href="/">Inicio</Link>
            <Link href="/create" style={{marginLeft:12}}>Crear punto</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h2>Explora la Costa Blanca</h2>
            <p>Coloca puntos, comparte fotos y comentarios. Monetiza con espacios publicitarios.</p>
          </div>
        </section>

        <div className="container" style={{paddingTop:20}}>
          <MapClient />
        </div>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} Mejores Playas - Costa Blanca</div>
      </footer>
    </>
  )
}
