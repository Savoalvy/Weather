import { LayersControl, Marker, Popup } from 'react-leaflet';
import { DEFAULT_POSITION } from '@shared/index.ts';

const { Overlay } = LayersControl;

export const CityMarker = () => (
  <Overlay checked name='Маркер Москвы'>
    <Marker position={DEFAULT_POSITION}>
      <Popup>Пример маркера в Москве</Popup>
    </Marker>
  </Overlay>
);
