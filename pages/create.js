import Head from 'next/head'
import { useState } from 'react'

export default function Create(){
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [email,setEmail] = useState('')
  const [loading,setLoading] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    if(!title || !email) return alert('Título y email son requeridos')
    setLoading(true)
    try{
      const res = await fetch('/api/points', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, email, lat: 38.5, lng: -0.5 })
      })
      const body = await res.json()
      if(!res.ok) throw new Error(body.error || 'Error en el servidor')
      if(body.approved){
        alert('Punto aprobado y publicado en el mapa.')
      }else{
        alert('Punto enviado. Está pendiente de moderación.')
      }
      setTitle(''); setDescription(''); setEmail('')
    }catch(err){
      alert('Error: '+err.message)
    }finally{setLoading(false)}
  }

  return (
    <>
      <Head>
        <title>Crear punto - Mejores Playas</title>
      </Head>
      <div className="container" style={{paddingTop:20}}>
        <h3>Crear punto</h3>
        <form onSubmit={handleSubmit}>
          <label>Título<br/><input value={title} onChange={e=>setTitle(e.target.value)} /></label>
          <label>Descripción<br/><textarea value={description} onChange={e=>setDescription(e.target.value)} /></label>
          <label>Email (para contactar)<br/><input value={email} onChange={e=>setEmail(e.target.value)} type="email" /></label>
          <button type="submit" disabled={loading}>{loading ? 'Enviando...' : 'Enviar punto'}</button>
        </form>
      </div>
    </>
  )
}
