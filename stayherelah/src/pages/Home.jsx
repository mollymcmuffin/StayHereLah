import Header from "../components/Header";
import Featured from "../components/Featured";
import background from "../images/home/house.jpg";
import styled from "styled-components";
import Search from "../components/Search";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";
import { React, useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  background-image: url(${background});
  height: 100vh;
  background-size: cover;
  flex-direction: column;
`;

const Home = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    onValue(ref(db), async (snapshot) => {
      const data = await snapshot.val();
      console.log(data["nonmature"]["01Project_Name"][0]);
      setProjects(data);
    });
  }, []);

  return (
    <>
      {projects && (
        <Container>
          <Header></Header>
          <Search></Search>
          <Featured featuredProjects={projects}></Featured>
        </Container>
      )}
    </>
  );
};

export default Home;
