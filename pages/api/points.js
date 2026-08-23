import { supabaseAdmin } from '../../lib/supabaseAdmin'
import leoProfanity from 'leo-profanity'

// Server-side handler: inserts point using service_role key and runs basic text moderation
export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end()
  const { title, description, email, lat, lng } = req.body || {}
  if(!title || !email) return res.status(400).json({ error: 'title and email required' })

  // Basic text moderation using leo-profanity (covers spanish/english profanities)
  try{
    // ensure dictionary loaded
    leoProfanity.loadDictionary()
  }catch(e){
    // ignore
  }
  const titleBad = leoProfanity.check(String(title || ''))
  const descBad = leoProfanity.check(String(description || ''))
  const approved = !(titleBad || descBad)

  try{
    const insert = { title, description, email, lat, lng, approved }
    const { data, error } = await supabaseAdmin.from('points').insert([insert])
    if(error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ ok:true, data, approved })
  }catch(err){
    return res.status(500).json({ error: err.message })
  }
}
