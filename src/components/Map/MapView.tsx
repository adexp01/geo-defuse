import * as h3 from "h3-js";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is imported
import { useEffect, useRef } from "react";
import Marker from "../../assets/map/marker.svg";
import { useMapStore } from "../../store/mapStore";

const hardcodeDroneRoute = [
  [47.98060606382305, 37.81206565566806],
  [47.96864292354561, 37.80765058635207],
  [47.96024303346312, 37.82211054830882],
  [47.98160606382305, 37.81646565566806],
  [47.9625242467607, 37.83374666395188],
  [47.98473479331981, 37.827338429364524],
  [47.96408744594539, 37.83918208847247],
  [47.97675675715422, 37.8414166201625]
];

const hardcodeChildrenRoute = [
  [47.940016060319515, 37.833568343329055], // Start
  [47.928188988147745, 37.83057150888887],
  [47.91978436650922, 37.84501920231283],
  [47.92320565022529, 37.862462688083426],
  [47.929118850739776, 37.86396313705598],
  [47.93545332549532, 37.86508292297249],
  [47.94343735086649, 37.85101715991361],
  [47.940016060319515, 37.833568343329055] // End (same as start)
];

const hardcodeRoute = [
  [47.96864292354561, 37.80765058635207],
  [47.96024303346312, 37.82211054830882],
  [47.9625242467607, 37.83374666395188],
  [47.96408744594539, 37.83918208847247],
  [47.97675675715422, 37.8414166201625],
  [47.98473479331981, 37.827338429364524],
  [47.98160606382305, 37.81646565566806],
  [47.98046528003005, 37.81064581186547],
  [47.96864292354561, 37.80765058635207]
];

const hardcodeUserRoute = [
  [47.98886279872004, 37.796179710205834],
  [47.98046528003005, 37.81064581186547],
  [47.981606063823016, 37.81646565566806],
  [47.98473479331981, 37.827338429364524],
  [47.99740434976874, 37.82957058509004],
  [48.005379385422664, 37.81548617425271],
  [48.00068279411573, 37.79917412860816],
  [47.98886279872004, 37.796179710205834]
];

const hardcodeArea = [
  [48.0159, 37.8029],
  [48.0159, 37.9029],
  [47.9159, 37.9029],
  [47.9159, 37.8029]
];

export const MapView = () => {
  const { childRoutes, userRoutes, myRoute, droneRoutes } = useMapStore(
    state => state
  );
  console.log(childRoutes, userRoutes, myRoute, droneRoutes);
  const mapRef = useRef<L.Map | null>(null);
  const resolution = 7;

  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [48.0159, 37.8029],
      zoom: 13
    });
    const map = mapRef.current;

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

    const hexagons = h3.polygonToCells(hardcodeArea, resolution);

    hexagons.forEach((hex, index) => {
      const hexBoundary = h3.cellToBoundary(hex, true);
      const latLngs = hexBoundary.map(
        ([lat, lng]) => [lng, lat] as [number, number]
      );

      if (index > 6) {
        console.log(latLngs);
      }

      let color;
      if (index < 3) {
        color = "#D8FFB6";
      } else if (index < 6) {
        color = "#FFB638";
      } else {
        color = "#FF7676";
      }

      L.polygon(latLngs, { color, opacity: 0.3 }).addTo(map);
    });

    const customIcon = L.icon({
      iconUrl: Marker,
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38]
    });

    L.marker([47.94408744594539, 37.81918208847247], {
      icon: customIcon
    }).addTo(map);
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    let polyline: L.Polyline | null = null;
    if (droneRoutes) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      polyline = L.polyline(hardcodeDroneRoute, { color: "#FFF8EB" }).addTo(
        mapRef.current
      );
      mapRef.current.fitBounds(polyline.getBounds());
    }

    return () => {
      if (polyline) {
        mapRef.current?.removeLayer(polyline);
      }
    };
  }, [droneRoutes]);

  useEffect(() => {
    if (!mapRef.current) return;

    let polyline: L.Polyline | null = null;
    if (myRoute) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      polyline = L.polyline(hardcodeRoute, { color: "#FFF8EB" }).addTo(
        mapRef.current
      );
      mapRef.current.fitBounds(polyline.getBounds());
    }

    return () => {
      if (polyline) {
        mapRef.current?.removeLayer(polyline);
      }
    };
  }, [myRoute]);

  useEffect(() => {
    if (!mapRef.current) return;

    let polyline: L.Polyline | null = null;
    if (childRoutes) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      polyline = L.polyline(hardcodeChildrenRoute, { color: "#FFF8EB" }).addTo(
        mapRef.current
      );
      mapRef.current.fitBounds(polyline.getBounds());
    }

    return () => {
      if (polyline) {
        mapRef.current?.removeLayer(polyline);
      }
    };
  }, [childRoutes]);

  useEffect(() => {
    if (!mapRef.current) return;

    let polyline: L.Polyline | null = null;
    if (userRoutes) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      polyline = L.polyline(hardcodeUserRoute, { color: "#FFF8EB" }).addTo(
        mapRef.current
      );
      mapRef.current.fitBounds(polyline.getBounds());
    }

    return () => {
      if (polyline) {
        mapRef.current?.removeLayer(polyline);
      }
    };
  }, [userRoutes]);

  return <div id="map" className="h-full w-full"></div>;
};
