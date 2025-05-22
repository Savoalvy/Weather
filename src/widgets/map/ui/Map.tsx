import { MapContainer, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { WORLD_BOUNDS } from '@shared/';
import { CityMarker, LightMap, Satellite } from '@entities/';

export const Map = () => {
  return (
    <MapContainer
      bounds={WORLD_BOUNDS}
      maxBounds={WORLD_BOUNDS}
      maxBoundsViscosity={1.0}
      minZoom={1}
      maxZoom={18}
      zoomControl={true}
      style={{ width: '100%', height: '100%', backgroundColor: '' }}
      worldCopyJump={false}
      attributionControl={false}
    >
      <LayersControl position='topright'>
        <Satellite />
        <LightMap />
        <CityMarker />
      </LayersControl>
    </MapContainer>
  );
};
