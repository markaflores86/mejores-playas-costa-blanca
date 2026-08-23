import Head from 'next/head'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function Create(){
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [email,setEmail] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    // Simple client-side validation
    if(!title || !email) return alert('Título y email son requeridos')

    // Insert point with approved=false by default (moderación automática se ejecutará server-side)
    const { data, error } = await supabase.from('points').insert([{ title, description, email, lat:38.5, lng:-0.5 }])
    if(error) return alert('Error: '+error.message)
    alert('Punto recibido. Si pasa moderación aparecerá en el mapa.')
    setTitle(''); setDescription(''); setEmail('')
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
          <button type="submit">Enviar punto</button>
        </form>
      </div>
    </>
  )
}
