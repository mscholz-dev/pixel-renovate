import React, { FC, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map: FC = () => {
  useEffect(() => {
    const icon = L.icon({
      iconUrl: "/img/logo.png",
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });

    const map = L.map("map").setView(
      [50.6333, 3.0667],
      12,
    );

    L.tileLayer(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
      },
    ).addTo(map);

    L.marker([50.6333, 3.0667], { icon }).addTo(
      map,
    );
  }, []);

  return <div id="map" className="map" />;
};

export default Map;
