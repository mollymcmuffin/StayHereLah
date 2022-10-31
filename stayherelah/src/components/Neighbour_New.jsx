import React from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import amk from "../images/explore/angmokio.jpg";
import bedok from "../images/explore/bedok.jpg";
import bishan from "../images/explore/bishan.jpg";
import bm from "../images/explore/bukitmerah.jpg";
import bp from "../images/explore/bukitpanjang.jpg";
import cck from "../images/explore/choachukang.jpg";
import clementi from "../images/explore/clementi.jpeg";
import geylang from "../images/explore/geylang.jpg";
import hougang from "../images/explore/hougang.jpg";
import je from "../images/explore/jurongeast.jpg";
import jw from "../images/explore/jurongwest.jpg";
import kallang from "../images/explore/kallang.jpg";
import pasirris from "../images/explore/pasirris.JPG";
import punggol from "../images/explore/punggol.jpeg";
import queenstown from "../images/explore/queenstown.jpg";
import sembawang from "../images/explore/sembawang.jpg";
import serangoon from "../images/explore/serangoon.jpeg";
import tampines from "../images/explore/tampines.jpg";
import toapayoh from "../images/explore/toapayoh.JPG";
import woodlands from "../images/explore/woodlands.jpg";
import yishun from "../images/explore/yishun.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Box = styled.div`
  position: relative;
  background-color: white;
  height: 350px;
  width: 40%;
  border: 15px solid green;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  align-items: center;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const Textbackground = styled.div`
  background-color: rgba(100, 91, 80, 0.4);
  height: 75px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const AMK = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${amk});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const BSN = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${bishan});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const HGN = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${hougang});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const TP = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${toapayoh});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const SBW = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${sembawang});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const YSN = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${yishun});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const WLD = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${woodlands});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const BDK = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${bedok});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const GY = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${geylang});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const KLG = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${kallang});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const PRS = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${pasirris});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const PGL = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${punggol});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const SGN = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${serangoon});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const TPS = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${tampines});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const BP = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${bp});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const CCK = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${cck});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const CLT = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${clementi});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const JE = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${je});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const JW = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${jw});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const BM = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${bm});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const QTN = styled.h3`
  height: 75px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: 0.5s ease-out;
  background-color: #ffe7cc;
  margin: 10px 10px 10px 10px;
  &:hover {
    color: white;
    background: url(${queenstown});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: white;
    transition: 0.5s ease-out;
  }
`;

const Neighbour = () => {
  return (
    <div>
      <Wrapper>
        <Box>
          <Title>North</Title>
          <Wrapper>
            <AMK>
              <ProjectLink to={"/googlemap"} state = {{from:"amk"}}>
                <Textbackground>Ang Mo Kio</Textbackground>
              </ProjectLink>
            </AMK>
            <BSN>
              <ProjectLink to={"/googlemap"} state = {{from:"bsn"}}>
                <Textbackground>Bishan</Textbackground>
              </ProjectLink>
            </BSN>
            <HGN>
              <ProjectLink to={"/googlemap"} state = {{from:"hgn"}}>
                <Textbackground>Hougang</Textbackground>
              </ProjectLink>
            </HGN>
            <TP>
              <ProjectLink to={"/googlemap"} state = {{from:"tp"}}>
                <Textbackground>Toa Payoh</Textbackground>
              </ProjectLink>
            </TP>
          </Wrapper>
          <Wrapper>
            <SBW>
              <ProjectLink to={"/googlemap"} state = {{from:"sbw"}}>
                <Textbackground>Sembawang</Textbackground>
              </ProjectLink>
            </SBW>
            <YSN>
              <ProjectLink to={"/googlemap"} state = {{from:"ysn"}}>
                <Textbackground>Yishun</Textbackground>
              </ProjectLink>
            </YSN>
            <WLD>
              <ProjectLink to={"/googlemap"} state = {{from:"wld"}}>
                <Textbackground>Woodlands</Textbackground>
              </ProjectLink>
            </WLD>
          </Wrapper>
        </Box>
        <Box>
          <Title>Central</Title>
          <Wrapper>
            <BM>
              <ProjectLink to={"/googlemap"} state = {{from:"bm"}}>
                <Textbackground>Bukit Merah</Textbackground>
              </ProjectLink>
            </BM>
            <QTN>
              <ProjectLink to={"/googlemap"} state = {{from:"qtn"}}>
                <Textbackground>Queenstown</Textbackground>
              </ProjectLink>
            </QTN>
          </Wrapper>
        </Box>
      </Wrapper>
      <Wrapper>
        <Box>
          <Title>East</Title>
          <Wrapper>
            <BDK>
              <ProjectLink to={"/googlemap"} state = {{from:"bdk"}}>
                <Textbackground>Bedok</Textbackground>
              </ProjectLink>
            </BDK>
            <GY>
              <ProjectLink to={"/googlemap"} state = {{from:"gy"}}>
                <Textbackground>Geylang</Textbackground>
              </ProjectLink>
            </GY>
            <KLG>
              <ProjectLink to={"/googlemap"} state = {{from:"klg"}}>
                <Textbackground>Kallang</Textbackground>
              </ProjectLink>
            </KLG>
            <PRS>
              <ProjectLink to={"/googlemap"} state = {{from:"prs"}}>
                <Textbackground>Pasir Ris</Textbackground>
              </ProjectLink>
            </PRS>
          </Wrapper>
          <Wrapper>
            <PGL>
              <ProjectLink to={"/googlemap"} state = {{from:"pgl"}}>
                <Textbackground>Punggol</Textbackground>
              </ProjectLink>
            </PGL>
            <SGN>
              <ProjectLink to={"/googlemap"} state = {{from:"sgn"}}>
                <Textbackground>Serangoon</Textbackground>
              </ProjectLink>
            </SGN>
            <TPS>
              <ProjectLink to={"/googlemap"} state = {{from:"tps"}}>
                <Textbackground>Tampines</Textbackground>
              </ProjectLink>
            </TPS>
          </Wrapper>
        </Box>
        <Box>
          <Title>West</Title>
          <Wrapper>
            <BP>
              <ProjectLink to={"/googlemap"} state = {{from:"bp"}}>
                <Textbackground>Bukit Panjang</Textbackground>
              </ProjectLink>
            </BP>
            <CCK>
              <ProjectLink to={"/googlemap"} state = {{from:"cck"}}>
                <Textbackground>Chua Cho Kang</Textbackground>
              </ProjectLink>
            </CCK>
            <CLT>
              <ProjectLink to={"/googlemap"} state = {{from:"clt"}}>
                <Textbackground>Clementi</Textbackground>
              </ProjectLink>
            </CLT>
          </Wrapper>
          <Wrapper>
            <JE>
              <ProjectLink to={"/googlemap"} state = {{from:"je"}}>
                <Textbackground>Jurong East</Textbackground>
              </ProjectLink>
            </JE>
            <JW>
              <ProjectLink to={"/googlemap"} state = {{from:"jw"}}>
                <Textbackground>Jurong West</Textbackground>
              </ProjectLink>
            </JW>
          </Wrapper>
        </Box>
      </Wrapper>
    </div>
  );
};

export default Neighbour;
