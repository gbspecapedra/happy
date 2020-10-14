import Leaflet from "leaflet";
import mapMarkerImg from "../assets/images/map-marker.svg";

export const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});