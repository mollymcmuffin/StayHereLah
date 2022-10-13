import React from "react";

import { Column, Text, Stack, Img, Row, Button } from "components";

const HomePagePage = () => {
  return (
    <>
      <Column className="bg-blue_100 font-montserrat items-center justify-start mx-[auto] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Column className="bg-bluegray_400 items-center justify-start lg:p-[22px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] w-[100%]">
            <Column className="items-center justify-start w-[20%]">
              <Text className="font-bold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 underline w-[auto]">
                ~INSERT WEBSITE NAME~
              </Text>
            </Column>
          </Column>
          <Stack className="lg:h-[510px] xl:h-[637px] 2xl:h-[717px] 3xl:h-[860px] w-[100%]">
            <Img
              src="images/img_hdb.png"
              className="absolute lg:h-[372px] xl:h-[466px] 2xl:h-[524px] 3xl:h-[628px] top-[0] w-[100%]"
              alt="HDB"
            />
            <Stack className="absolute bg-bluegray_700_ae bottom-[0] lg:h-[204px] xl:h-[255px] 2xl:h-[287px] 3xl:h-[344px] inset-x-[0] mx-[auto] lg:px-[25px] xl:px-[32px] 2xl:px-[36px] 3xl:px-[43px] rounded-radius25 w-[52%]">
              <div className="absolute bg-bluegray_100 lg:h-[41px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] inset-[0] justify-center m-[auto] rounded-radius15 w-[61%]"></div>
              <Column className="absolute justify-start left-[15%] pr-[4px] pt-[4px] top-[0] w-[53%]">
                <Column className="justify-start w-[91%]">
                  <Row className="items-start justify-end ml-[auto] w-[83%]">
                    <Text className="font-semibold mt-[3px] lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-white_A700 underline w-[auto]">
                      Explore
                    </Text>
                    <Text className="font-semibold mb-[3px] 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-white_A700 underline w-[auto]">
                      BTO
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[54%]">
                    <Img
                      src="images/img_locationicon.png"
                      className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] w-[18%]"
                      alt="LocationIcon"
                    />
                    <Text
                      className="font-semibold text-gray_500 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Seach Location
                    </Text>
                  </Row>
                  <Button className="font-semibold lg:ml-[113px] xl:ml-[142px] 2xl:ml-[160px] 3xl:ml-[192px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[36%]">
                    Search
                  </Button>
                </Column>
              </Column>
            </Stack>
          </Stack>
          <Text
            className="font-extrabold lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-black_900 w-[auto]"
            as="h2"
            variant="h2"
          >
            Upcoming BTOs:
          </Text>
          <Row className="items-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[92%]">
            <Img
              src="images/img_rectangle23.png"
              className="lg:h-[119px] xl:h-[148px] 2xl:h-[167px] 3xl:h-[200px] w-[23%]"
              alt="RectangleTwentyThree"
            />
            <Img
              src="images/img_rectangle25.png"
              className="lg:h-[119px] xl:h-[148px] 2xl:h-[167px] 3xl:h-[200px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] w-[22%]"
              alt="RectangleTwentyFive"
            />
            <Img
              src="images/img_rectangle26.png"
              className="lg:h-[119px] xl:h-[148px] 2xl:h-[167px] 3xl:h-[200px] lg:ml-[36px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] w-[22%]"
              alt="RectangleTwentySix"
            />
            <Img
              src="images/img_rectangle27.png"
              className="lg:h-[119px] xl:h-[148px] 2xl:h-[167px] 3xl:h-[200px] lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] w-[21%]"
              alt="RectangleTwentySeven"
            />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default HomePagePage;
