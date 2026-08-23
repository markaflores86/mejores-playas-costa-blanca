import { supabaseAdmin } from '../../lib/supabaseAdmin'

export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end()
  const { title, description, email, lat, lng } = req.body
  // Server-side insertion with service role key (trusted)
  try{
    const { data, error } = await supabaseAdmin.from('points').insert([{ title, description, email, lat, lng }])
    if(error) return res.status(500).json({ error: error.message })
    // TODO: ejecutar moderación automática (texto + imagen checks) y actualizar approved flag
    return res.status(200).json({ ok:true, data })
  }catch(err){
    return res.status(500).json({ error: err.message })
  }
}
