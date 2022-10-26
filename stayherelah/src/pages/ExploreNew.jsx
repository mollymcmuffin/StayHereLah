import Header from "../components/Header";
import Featured from "../components/Featured";
import background from "../images/home/houses.jpg";
import styled from "styled-components";
import Search from "../components/Search";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";
import { React, useEffect, useState } from "react";
import AllHood from "../components/AllHood";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-size: cover;
  flex-direction: column;
`;

const ExploreNew = () => {
  const [hoods, setHoods] = useState(null);

  useEffect(() => {
    onValue(ref(db), async (snapshot) => {
      const data = await snapshot.val();
      console.log(data["nonmature"]["01Project_Name"][0]);
      setHoods(data);
    });
  }, []);

  return (
    <>
      {hoods && (
        <Container>
          <Header />
          <AllHood data={hoods} />
        </Container>
      )}
    </>
  );
};

export default ExploreNew;
