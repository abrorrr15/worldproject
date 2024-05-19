import { useNavigate } from 'react-router-dom';
import styles from './Map.module.css';
import { MapContainer, TileLayer, Popup, Marker, useMap, useMapEvents } from "react-leaflet";
import { useEffect, useState } from 'react';
import { useCities } from '../contexts/CityContext';
import { useGeolocation } from '../hooks/useGeolocation';
import { useUrlPosition } from '../hooks/useUrlPosition';
import Button from './Button';

function Map() {
  const { cities } = useCities();

  const [mapPosition, setMapPosition] = useState([40, 0]);

  const { isLoading: isLoadingPosition, position: geolocationPosition, getPosition } = useGeolocation();

  const [lat, lng] = useUrlPosition();

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng])
  }, [lat, lng]);

  useEffect(() => {
    if (geolocationPosition)
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);

  }, [geolocationPosition])



  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && <Button type='position' onClick={getPosition}>{isLoadingPosition ? "Loading..." : "Use your position"}</Button>}
      <MapContainer
        center={mapPosition}
        // center={[lat, lng]}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (<Marker
          position={[city.position.lat, city.position.lng]}
          key={city.id}>
          <Popup>
            <span>{city.emoji}</span><span>{city.cityName}</span>
          </Popup>
        </Marker>))
        }

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}
function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) =>
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  }
  );
}


function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);

  return null;
}
export default Map
