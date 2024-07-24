"use client";

import React, { createRef, HTMLAttributes, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

type Props = HTMLAttributes<HTMLDivElement> & {
  location: number[];
};

const LocationMap = ({ location, ...divProps }: Props) => {
  const mapsDivRef = createRef<HTMLDivElement>();

  useEffect(() => {
    loadMaps();
  }, []);

  async function loadMaps() {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAPS_KEY as string,
    });
    const {Map} = await loader.importLibrary('maps');
    const {AdvancedMarkerElement} = await loader.importLibrary('marker');
    const map = new Map(mapsDivRef.current as HTMLDivElement, {
      mapId: 'map',
      center: {lng:location[0], lat:location[1]},
      zoom: 6,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: true,
    });
    new AdvancedMarkerElement({
      map,
      position: {lng:location[0], lat:location[1]},
    });
  }

  return (
    <>
      <div {...divProps} ref={mapsDivRef}></div>
    </>
  );
};

export default LocationMap;
