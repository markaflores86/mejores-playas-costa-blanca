import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map(){
  useEffect(()=>{
    const map = L.map('map').setView([38.5, -0.5], 9)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map)

    // Example marker (Alicante area)
    const marker = L.marker([38.3452, -0.4810]).addTo(map).bindPopup('Ejemplo: Playa en Alicante')

    return ()=>{
      map.remove()
    }
  },[])

  return <div id="map" style={{height:'60vh',borderRadius:12,overflow:'hidden'}}></div>
}
