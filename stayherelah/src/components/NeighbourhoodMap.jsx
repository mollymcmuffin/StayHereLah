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

const NeighbourhoodMap = ({ facilities, data, id }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBeU0KYm091allUovk19s4Aw4KfI7l43aI",
  });

  const hoods = data["neighbourhood"];
  const hoodsArr = [];
  for (var key in hoods) {
    hoodsArr.push(key);
  }
  console.log(hoodsArr[id]);
  console.log(hoods[hoodsArr[id]]);
  const Names = hoods[hoodsArr[id]]["Name"];
  const xy = hoods[hoodsArr[id]]["XY"];
  console.log(xy);

  const [selectedFacility, setSelectedFacility] = useState(null);
  const center = useMemo(
    () => ({
      lat: xy[0][1],
      lng: xy[0][0],
    }),
    []
  );

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap zoom={14} center={center} mapContainerStyle={containerStyle}>
      {data &&
        Names.map((name, index) => (
          <Marker
            key={index}
            position={{ lat: xy[index][1], lng: xy[index][0] }}
            onClick={() => {
              setSelectedFacility([name, xy[index][1], xy[index][0]]);
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

export default NeighbourhoodMap;
