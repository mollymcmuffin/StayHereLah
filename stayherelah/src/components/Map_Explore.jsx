import { React, useMemo } from "react";
import { useLoadScript, Marker, GoogleMap } from "@react-google-maps/api";
import styled from "styled-components";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const Map = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBeU0KYm091allUovk19s4Aw4KfI7l43aI",
  });

  let latn, lntn;

  let location = props.location;

  if (location == "amk")
  {
    latn = 1.36879;
    lntn = 103.84575;
  }
  else if (location == "bsn")
  {
    latn = 1.35233;
    lntn = 103.83527;
  }
  else if (location == "hgn")
  {
    latn = 1.36127;
    lntn = 103.88630;
  }
  else if (location == "tp")
  {
    latn = 1.33408;
    lntn = 103.85629;
  }
  else if (location == "sbw")
  {
    latn = 1.44889;
    lntn = 103.81873;
  }
  else if (location == "ysn")
  {
    latn = 1.43040;
    lntn = 103.83538;
  }
  else if (location == "wld")
  {
    latn = 1.43791;
    lntn = 103.78959;
  }
  else if (location == "bm")
  {
    latn = 1.28179;
    lntn = 103.82386;
  }
  else if (location == "qtn")
  {
    latn = 1.29411;
    lntn = 103.78584;
  }
  else if (location == "bdk")
  {
    latn = 1.32332;
    lntn = 103.92756;
  }
  else if (location == "gy")
  {
    latn = 1.32001;
    lntn = 103.89166;
  }
  else if (location == "klg")
  {
    latn = 1.30988;
    lntn = 103.86504;
  }
  else if (location == "prs")
  {
    latn = 1.36916519;
    lntn = 103.9499962;
  }
  else if (location == "pgl")
  {
    latn = 1.39857;
    lntn = 103.90698;
  }
  else if (location == "sgn")
  {
    latn = 1.35536;
    lntn = 103.86799;
  }
  else if (location == "tps")
  {
    latn = 1.34957;
    lntn = 103.95674;
  }
  else if (location == "bp")
  {
    latn = 1.37741;
    lntn = 103.77183;
  }
  else if (location == "cck")
  {
    latn = 1.38350;
    lntn = 103.74686;
  }
  else if (location == "clt")
  {
    latn = 1.31594;
    lntn = 103.76463;
  }
  else if (location == "je")
  {
    latn = 1.3320;
    lntn = 103.74321;
  }
  else if (location == "jw")
  {
    latn = 1.33977;
    lntn = 103.70867;
  }

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: latn, lng: lntn }}
      mapContainerStyle={containerStyle}
    >
      <Marker position={{ lat: latn, lng: lntn }} />
    </GoogleMap>
  );
};

export default Map;
