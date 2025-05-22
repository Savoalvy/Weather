import { LayersControl, TileLayer } from 'react-leaflet';
import { WORLD_BOUNDS } from '@shared/index.ts';

const { BaseLayer } = LayersControl;
export const LightMap = () => (
  <BaseLayer name='Террейн с прозрачным морем (Stamen)'>
    <TileLayer
      url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
      attribution='Tiles © Esri'
      noWrap={true}
      bounds={WORLD_BOUNDS}
    />
  </BaseLayer>
);
