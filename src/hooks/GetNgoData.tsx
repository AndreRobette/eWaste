import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

import mapIcon from '../utils/mapIcon';

interface INgoProps {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

export function GetNgoData() {
  const [ngos] = useState<INgoProps[]>([
    {
      id: 19,
      latitude: -27.0954643,
      longitude: -52.6146158,
      name: 'PEV Brasão Avenida',
    },
  ]);

  return (
    <div>
      {ngos.map((ngo) => {
        return (
          <Marker
            key={ngo.id}
            icon={mapIcon}
            position={[ngo.latitude, ngo.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {ngo.name}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com/maps/dir/?api=1&destination=${-27.0954643},${-52.6146158}`}
              >
                <FiArrowRight size={20} color="#FFF" />
              </a>
            </Popup>
          </Marker>
        );
      })}
    </div>
  );
}
