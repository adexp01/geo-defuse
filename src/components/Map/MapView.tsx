import * as h3 from "h3-js";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is imported
import { useEffect } from "react";

export const MapView = () => {
  const occupiedAreaDonetskOblast = [
    [47.6, 38.4],
    [47.8, 38.1],
    [48.1, 37.8],
    [48.3, 37.6],
    [48.5, 37.3],
    [48.6, 37.2],
    [48.7, 37.5],
    [48.5, 37.7]
  ];

  const resolution = 7;

  useEffect(() => {
    const map = L.map("map", {
      center: [48.0159, 37.8029],
      zoom: 13
    });

    L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}",
      {
        minZoom: 0,
        maxZoom: 20,
        attribution:
          '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ext: "jpg"
      }
    ).addTo(map);

    const hexagons = h3.polygonToCells(occupiedAreaDonetskOblast, resolution);

    hexagons.forEach(hex => {
      const hexBoundary = h3.cellToBoundary(hex, true);
      const latLngs = hexBoundary.map(
        ([lat, lng]) => [lng, lat] as [number, number]
      );
      L.polygon(latLngs, { color: "blue" }).addTo(map);
    });

    // const latLngBounds = L.latLngBounds(
    //   occupiedAreaDonetskOblast.map(([lat, lng]) => [lat, lng])
    // );
    // map.fitBounds(latLngBounds);
  }, []);

  return <div id="map" className="h-screen w-full"></div>;
};
