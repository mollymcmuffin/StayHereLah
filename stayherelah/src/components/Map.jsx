import { React, useState, useMemo } from "react";
import {
  useLoadScript,
  Marker,
  GoogleMap,
  InfoWindow,
} from "@react-google-maps/api";
import styled from "styled-components";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const Popup = styled.div`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: medium;
  border-radius: 10px;
`;

const Map = ({ facilities, projects, maturity, id }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBeU0KYm091allUovk19s4Aw4KfI7l43aI",
  });

  const mall = projects[maturity]["05mall"][`mall0${id}`];
  const mrt = projects[maturity]["06mrt"][`mrt0${id}`];
  const prisch = projects[maturity]["08Primary_School"][`Primary_School0${id}`];
  const secsch =
    projects[maturity]["09Secondary_School"][`Secondary_School${id}`];
  const highway = projects[maturity]["04highway"][`highway0${id}`];
  const [selectedFacility, setSelectedFacility] = useState(null);
  const center = useMemo(
    () => ({
      lat: prisch["Primary_XY"][0][1],
      lng: prisch["Primary_XY"][0][0],
    }),
    []
  );

  // console.log("Testing");
  // console.log(mallxy);
  // console.log(mrtxy);
  // console.log(prischxy);
  // console.log(secschxy);
  // console.log(highwayxy);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap zoom={13} center={center} mapContainerStyle={containerStyle}>
      {facilities.facilities.mrt &&
        mrt["Mrt_XY"].map((xy, index) => (
          <Marker
            key={index}
            position={{ lat: xy[1], lng: xy[0] }}
            onClick={() => {
              setSelectedFacility([mrt["Mrt"][index], xy[1], xy[0]]);
            }}
          />
        ))}
      {facilities.facilities.mall &&
        mall["Mall_XY"].map((xy, index) => (
          <Marker
            key={index}
            position={{ lat: xy[1], lng: xy[0] }}
            onClick={() => {
              setSelectedFacility([mall["Mall"][index], xy[1], xy[0]]);
            }}
          />
        ))}
      {facilities.facilities.prisch &&
        prisch["Primary_XY"].map((xy, index) => (
          <Marker
            key={index}
            position={{ lat: xy[1], lng: xy[0] }}
            onClick={() => {
              setSelectedFacility([
                prisch["Primary_School"][index],
                xy[1],
                xy[0],
              ]);
            }}
          />
        ))}
      {facilities.facilities.secsch &&
        secsch["Sec_XY"].map((xy, index) => (
          <Marker
            key={index}
            position={{ lat: xy[1], lng: xy[0] }}
            onClick={() => {
              setSelectedFacility([
                secsch["Secondary_School"][index],
                xy[1],
                xy[0],
              ]);
            }}
          />
        ))}
      {facilities.facilities.highway &&
        highway["highway_XY"].map((xy, index) => (
          <Marker
            key={index}
            position={{ lat: xy[1], lng: xy[0] }}
            onClick={() => {
              setSelectedFacility([highway["highway"][index], xy[1], xy[0]]);
            }}
          />
        ))}

      {/* <Marker position={{ lat: 1.3717, lng: 103.893 }} />
      <Marker position={{ lat: 1.288488, lng: 103.8059398 }} /> */}
      {selectedFacility && (
        <InfoWindow
          position={{
            lat: selectedFacility[1],
            lng: selectedFacility[2],
          }}
          onCloseClick={() => {
            setSelectedFacility(null);
          }}
        >
          <Popup>{selectedFacility[0]}</Popup>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Map;
