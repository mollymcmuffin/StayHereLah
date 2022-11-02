import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { FiHome } from "react-icons/fi";
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 7px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Alert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Description = styled.div`
  text-align: left;
  background-color: white;
  padding: 5px;
  border-radius: 15px;
`;

const Navbar = (props) => {
  const { collapseSidebar , collapsed } = useProSidebar();

  let location = props.location;

  let description;

  if (location == "amk")
  {
    location = "Ang Mo Kio";
    description = "Ang Mo Kio is one of Singapore’s western residential areas that is loved by locals and expats alike.\nLocated in District 5, Ang Mo Kio is a popular residential area with many famous educational institutions situated close by, ranging from primary to tertiary levels.";
  }
  else if (location == "bsn")
  {
    location = "Bishan"
    description = "Located in the central part of Singapore, one of the most desirable places to live in is home to 63,200 HDB residents which was previously a cemetery. \nBishan is more than just expensive resale flats and tuition centres, there are hidden gems and unique places worth checking out."
  }
  else if (location == "hgn")
  {
    location = "Hougang"
    description = "Derived from the Hokkien and Teochew word for “the end of the river,” Hougang is located just upstream of the Serangoon River. Strategically placed in the North-East region of Singapore, it is one of the smaller neighbourhoods with a residential focus."
  }
  else if (location == "tp")
  {
    location = "Toa Payoh"
    description = "One of the first towns developed by HDB (Housing Development Board), Toa Payoh is a centrally located town that is home to 105,000* HDB residents. Popularly known for the Toa Payoh Central hub with multiple amenities centralised in the middle of the town, this idea was based on the Neighbourhood Principle where several neighbourhoods are grouped around a Town Centre that acts as a focal point for the entertainment and shopping needs of residents."
  }
  else if (location == "sbw")
  {
    location = "Sembawang"
    description = "A residential town in the North Region of Singapore, Sembawang is one of the quieter neighbourhoods in the country with a breathtaking view of the open sea. An estimated 73,500 HDB residents call Sembawang home and currently, there are 26,834 flats in the town. This township plays much commercial importance as it is where the dockyard is, and where the country’s shipping trade currently takes place."
  }
  else if (location == "ysn")
  {
    location = "Yishun"
    description = "Under the ROH programme, Yishun Park was transformed into Yishun Pond Park, with an iconic 3-storey lookout tower amidst the lush landscaping of Yishun Pond. Located beside the Yishun Pond Park, Khoo Teck Puat Hospital serves the medical needs of residents in the north."
  }
  else if (location == "wld")
  {
    location = "Woodlands"
    description = "The origin of the name Woodlands comes from the heavily -wooded area when viewed from the neighbouring Johor side of the Straits. Woodlands is home to an estimated HDB resident population of 242,500 and there are 68,153 HDB flats in the town."
  }
  else if (location == "bm")
  {
    location = "Bukit Merah"
    description = "Bukit Merah’s name derives from the Malay words, bukit means hill and merah means red. Red soil that was uncovered during the excavation of the Henderson and Lengkok Bahru areas. Developed from the 1960s, Bukit Merah is home to 145,700 HDB residents. Gain access to three MRT stations along the East-West Line, Redhill Station, Tiong Bahru Station and Tiong Bahru Station."
  }
  else if (location == "qtn")
  {
    location = "Queenstown"
    description = "In Queenstown, there is an estimated HDB resident population of 82,500 and a total of 32,678 flats within the town. Queenstown is the first satellite town in Singapore and was named after Queen Elizabeth II in honor of her coronation in 1952. Queenstown is home to many research facilities such as Biopolis, Fusionopolis and Mediapolis."
  }
  else if (location == "bdk")
  {
    location = "Bedok"
    description = "A place that makes your heart bedok bedok with the affordable housing with plenty amenities in the area. Bedok is the largest district in Singapore in terms of population and home to 194,000* HDB residents. Even though it is located far from the hustle and bustle town, there is a huge list of things to do if you are living in Bedok that caters to families to extreme sports lovers."
  }
  else if (location == "gy")
  {
    location = "Geylang"
    description = "Geylang is home to an estimated 87,300 HDB residents with 30,304 flats within the area. Geylang has long been infamous for being the country's red-light district. Despite this, the neighbourhood is still regarded as a popular residential area due to it being a stone's throw away from the Central Business District."
  }
  else if (location == "klg")
  {
    location = "Geylang"
    description = "Kallang and Whampoa were merged into a single HDB town, and is home to an estimated 106,900 HDB residents. Within the area, there are a total of 39,194 flats. The name Kallang, was derived from the Malay term referring to the ‘orang laut’, or sea gypsies who lived by the Kallang and Singapore River. Another explanation of its origins is from the Malay word ‘kilang’ or mill/ factory, many of which operated in that area."
  }
  else if (location == "prs")
  {
    location = "Pasir Ris"
    description = "Pasir Ris, which means ‘white sand’ in Malay, describes the long stretch of white sandy beach along the north-east coastline of Singapore. 108,400 HDB residents call Pasir Ris town home, with a total of 29,654 flats in the town. Pasir Ris Park is a popular hangout for residents of the town, with its proximity to the beach. The park contains a 6ha mangrove forest which is well-known among nature lovers."
  }
  else if (location == "pgl")
  {
    location = "Punggol"
    description = "Punggol has an estimated HDB resident population of 187,800 and we manage 49,909 flats in the town. These numbers are set to rise over the next few years as more developments take shape and new residents and young families move into the town. The first eco-town in Singapore, Punggol is attracting the attention of young families for good reason."
  }
  else if (location == "sgn")
  {
    location = "Serangoon"
    description = "Serangoon is home to an estimated HDB resident population of 68,800 and we manage 21,634 flats in the town. The centrally-located Nex shopping mall is one of the largest malls in the north-east region of Singapore. The mall is a favourite hangout for residents and visitors alike with its comprehensive offerings of retail, entertainment and dining options, and its accessibility to public transport."
  }
  else if (location == "tps")
  {
    location = "Serangoon"
    description = "Tampines is home to about 232,700 HDB residents with a total of 8,812 flats in the town. Tampines has undergone multiple developments to improve the sustainable living that the town has been known for, starting in 2011 with the opening of Tampines Eco-green."
  }
  else if (location == "bp")
  {
    location = "Serangoon"
    description = "Bukit Panjang means long stretches of hills in Malay, bukit means hill and panjang means hill.The hidden estate in the north-west of Singapore is home to 121,100 HDB residents. 7 subzones including Senja, Saujana, Fajar, Bangkit, Jelebu, Dairy Farm and Nature Reserve. The 2.5 km park along the Bukit Timah Expressway (BKE) is one of the most popular features, Zhenghua Park connects to Bukit Timah Nature Reserve and Dairy Farm Nature Park as well."
  }
  else if (location == "cck")
  {
    location = "Chua Chu Kang"
    description = "The name Choa Chu Kang was derived from the Teochew word ‘kang chu’. The plantation owners were known as Kangchu – the word ‘kang’ means river and ‘chu’ is the clan name of the first headman in charge of the plantations in the area. Choa Chu Kang has an estimated HDB resident population of 169,000 and a total of 48,900 flats in the town. The town consists of 7 neighbourhoods including Keat Hong, Yew Tee, and Teck Whye."
  }
  else if (location == "clt")
  {
    location = "Clementi"
    description = "Located between Jurong West and Dover, Clementi is home to an estimated HDB resident population of 72,300 with a total of 26,727 flats as of 2018. A matured residential estate, Clementi has seen a huge uplift in developments both residential and commercial. Clementi is a popular residential area with many famous educational institutions situated close by, ranging from primary to tertiary levels, including Ngee Ann Polytechnic, Singapore Polytechnic and the National University of Singapore."
  }
  else if (location == "je")
  {
    location = "Jurong East"
    description = "Jurong East constitutes the area around Jurong Town Hall Road and the Pan Island Expressway, as well as the Teban and Pandan estates. Jurong East is also part of the largest industrial area in Singapore. The town is home to an estimated HDB resident population of 78,000 with approximately 23,897 flats in the area."
  }
  else if (location == "jw")
  {
    location = "Jurong West"
    description = "Jurong West is the largest town in the Western part of Singapore, and is home to an estimated 258,100 HDB residents, with approximately 74,301 flats in the town. The development of the Jurong area began with the construction of estates such as Boon Lay, Taman Jurong and Hong Kah to form Jurong West Town in the 1970s. Subsequently, Pioneer and the surrounding neighbourhoods were also added to Jurong West under the Jurong West Extension."
  }

  return (
    <div style={{ display: 'flex', height: '100%'}}>
      <Sidebar>
        <Menu>
          <MenuItem icon = {<FiHome/>}>
            {location}
          </MenuItem>
        </Menu>
        <Description>
          {collapsed ? " " : description}
        </Description>
        <Box>
          <Button onClick={() => collapseSidebar()}>
            {collapsed ? "Details" : "Close"}
          </Button>
        </Box>
        <Alert>
        {collapsed ? "" : "ALERT!! You can drag the stick man at the bottom right to explore the neighbourhood!"}
        </Alert>
      </Sidebar>
    </div>
  );
}

export default Navbar;