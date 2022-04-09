import Leaflet from 'leaflet';
import mapMarkerImg from '../assets/logo.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [42, 42],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

export default mapIcon;
