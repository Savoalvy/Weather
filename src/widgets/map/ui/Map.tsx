import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@chakra-ui/react';

const { BaseLayer, Overlay } = LayersControl;

// Центр карты и границы всего мира
const DEFAULT_POSITION: [number, number] = [55.751244, 37.618423];
const WORLD_BOUNDS: [number, number][] = [
  [85, -180],
  [-85, 180]
];

export const Map = () => {
  return (
    <Box
      w='100%'
      h='100%'
      position='relative'
      bg='#87CEEB' // голубой фон под прозрачное море
    >
      <MapContainer
        bounds={WORLD_BOUNDS}
        maxBounds={WORLD_BOUNDS}
        maxBoundsViscosity={1.0}
        minZoom={1}
        maxZoom={18}
        zoomControl={true}
        style={{ width: '100%', height: '100%' }}
        worldCopyJump={false}
        attributionControl={false}
      >
        <LayersControl position='topright'>
          {/* OpenStreetMap */}
          <BaseLayer checked name='OpenStreetMap'>
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; OpenStreetMap contributors'
              noWrap={true}
              bounds={WORLD_BOUNDS}
            />
          </BaseLayer>

          {/* Светлая карта (Carto) */}
          <BaseLayer name='Светлая карта (Carto)'>
            <TileLayer
              url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
              attribution='&copy; CARTO'
              noWrap={true}
              bounds={WORLD_BOUNDS}
              opacity={1} // задаёт прозрачность слоя
            />
          </BaseLayer>

          {/* Тёмная карта (Carto) */}
          <BaseLayer name='Тёмная карта (Carto)'>
            <TileLayer
              url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
              attribution='&copy; CARTO'
              noWrap={true}
              bounds={WORLD_BOUNDS}
            />
          </BaseLayer>

          {/* Спутниковая (Esri) */}
          <BaseLayer name='Спутниковая (Esri)'>
            <TileLayer
              url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
              attribution='Tiles © Esri'
              noWrap={true}
              bounds={WORLD_BOUNDS}
            />
          </BaseLayer>

          {/* Топографическая (Esri) */}
          <BaseLayer name='Топографическая (Esri)'>
            <TileLayer
              url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
              attribution='Tiles © Esri'
              noWrap={true}
              bounds={WORLD_BOUNDS}
            />
          </BaseLayer>

          {/* Прозрачный фон (Stamen Terrain Background) */}
          <BaseLayer name='Террейн с прозрачным морем (Stamen)'>
            <TileLayer
              url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
              attribution='Tiles © Esri'
              noWrap={true}
              bounds={[
                [85, -180],
                [-85, 180]
              ]}
            />
          </BaseLayer>

          {/* Маркер */}
          <Overlay checked name='Маркер Москвы'>
            <Marker position={DEFAULT_POSITION}>
              <Popup>Пример маркера в Москве</Popup>
            </Marker>
          </Overlay>
        </LayersControl>

        {/* Атрибуция в углу */}
        <div className='leaflet-bottom leaflet-right'>
          <div className='leaflet-control-attribution leaflet-control'>
            Метеоданные ©NimBus
          </div>
        </div>
      </MapContainer>
    </Box>
  );
};
