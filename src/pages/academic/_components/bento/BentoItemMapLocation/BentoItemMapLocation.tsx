import 'leaflet/dist/leaflet.css'

import type { LatLngTuple } from 'leaflet'
import { useState } from 'react'
import { CircleMarker, MapContainer, TileLayer } from 'react-leaflet'

import { cn } from '@/lib/utils'

const TORONTO: LatLngTuple = [43.6532, -79.3832]
const MAP_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'

const BentoItemMapLocation = () => {
  const [tilesLoaded, setTilesLoaded] = useState(false)

  return (
    <div
      className={cn('absolute inset-0 z-10', !tilesLoaded && 'invisible')}
      aria-label='Interactive map of Toronto'
      role='region'
    >
      <MapContainer
        center={TORONTO}
        zoom={12}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        className='size-full'
      >
        <TileLayer
          url={MAP_URL}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={19}
          eventHandlers={{ tileload: () => setTilesLoaded(true) }}
        />
        <CircleMarker
          center={TORONTO}
          radius={8}
          pathOptions={{
            color: '#fff',
            weight: 2,
            fillColor: '#059669',
            fillOpacity: 1
          }}
          interactive={false}
        />
      </MapContainer>
    </div>
  )
}

export default BentoItemMapLocation
