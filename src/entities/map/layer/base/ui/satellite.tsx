import { LayersControl, TileLayer } from 'react-leaflet';
import { WORLD_BOUNDS } from '@shared/index.ts';

const { BaseLayer } = LayersControl;
export const Satellite = () => (
  <BaseLayer name='Спутниковая (Esri)'>
    <TileLayer
      url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      attribution='Tiles © Esri'
      noWrap={true}
      bounds={WORLD_BOUNDS}
    />
  </BaseLayer>
);
