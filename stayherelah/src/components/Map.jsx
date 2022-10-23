import { React, useMemo } from "react";
import { useLoadScript, Marker, GoogleMap } from "@react-google-maps/api";
import styled from "styled-components";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const Map = ({ facilities, projects, maturity, id }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBeU0KYm091allUovk19s4Aw4KfI7l43aI",
  });

  const mallxy = projects[maturity]["05mall"][`mall0${id}`]["Mall_XY"];
  const mrtxy = projects[maturity]["06mrt"][`mrt0${id}`]["Mrt_XY"];
  const prischxy =
    projects[maturity]["08Primary_School"][`Primary_School0${id}`][
      "Primary_XY"
    ];
  const secschxy =
    projects[maturity]["09Secondary_School"][`Secondary_School${id}`]["Sec_XY"];

  const highwayxy =
    projects[maturity]["04highway"][`highway0${id}`]["highway_XY"];

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={12}
      center={{ lat: 1.287953, lng: 103.851784 }}
      mapContainerStyle={containerStyle}
    >
      {facilities.facilities.mrt &&
        mrtxy.map((xy) => (
          <Marker
            key={mrtxy.indexOf(xy)}
            position={{ lat: xy[1], lng: xy[0] }}
          />
        ))}
      {facilities.facilities.mall &&
        mallxy.map((xy) => (
          <Marker
            key={mrtxy.indexOf(xy)}
            position={{ lat: xy[1], lng: xy[0] }}
          />
        ))}
      {facilities.facilities.prisch &&
        prischxy.map((xy) => (
          <Marker
            key={mrtxy.indexOf(xy)}
            position={{ lat: xy[1], lng: xy[0] }}
          />
        ))}
      {facilities.facilities.secsch &&
        secschxy.map((xy) => (
          <Marker
            key={mrtxy.indexOf(xy)}
            position={{ lat: xy[1], lng: xy[0] }}
          />
        ))}
      {facilities.facilities.highway &&
        highwayxy.map((xy) => (
          <Marker
            key={mrtxy.indexOf(xy)}
            position={{ lat: xy[1], lng: xy[0] }}
          />
        ))}
      {/* <Marker position={{ lat: 1.3717, lng: 103.893 }} />
      <Marker position={{ lat: 1.288488, lng: 103.8059398 }} /> */}
    </GoogleMap>
  );
};

export default Map;
