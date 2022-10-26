import { React, useMemo, useState } from "react";
import { useLoadScript, Marker, GoogleMap } from "@react-google-maps/api";
import styled from "styled-components";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const MapForAllProjects = ({ projects }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBeU0KYm091allUovk19s4Aw4KfI7l43aI",
  });

  const matureprisch = projects["mature"]["08Primary_School"];
  const nonmatureprisch = projects["nonmature"]["08Primary_School"];
  const [selectedFacility, setSelectedFacility] = useState(null);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={11}
      center={{ lat: 1.3678, lng: 103.8028 }}
      mapContainerStyle={containerStyle}
    >
      <Marker position={{ lat: 1.3691002, lng: 103.83936023522986 }} />
      <Marker position={{ lat: 1.2858741500000002, lng: 103.81513175137866 }} />
      <Marker position={{ lat: 1.3573371, lng: 103.94930547179054 }} />
      <Marker position={{ lat: 1.37793775, lng: 103.74198414587175 }} />
      <Marker position={{ lat: 1.3364853499999998, lng: 103.73645449079083 }} />
      <Marker position={{ lat: 1.4292761, lng: 103.79073434544745 }} />
      <Marker position={{ lat: 1.2912837000000001, lng: 103.82406594082047 }} />
    </GoogleMap>
  );
};

export default MapForAllProjects;
