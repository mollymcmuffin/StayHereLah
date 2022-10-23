import { React, useMemo } from "react";
import { useLoadScript, Marker, GoogleMap } from "@react-google-maps/api";
import styled from "styled-components";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const MapForAllProjects = ({}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBeU0KYm091allUovk19s4Aw4KfI7l43aI",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={11}
      center={{ lat: 1.3678, lng: 103.8028 }}
      mapContainerStyle={containerStyle}
    >
      <Marker position={{ lat: 1.288488, lng: 103.8059398 }} />
    </GoogleMap>
  );
};

export default MapForAllProjects;
