import React, { memo } from "react";
import {
  HStack,
  VStack,
  Image,
  Container,
  Text,
  Flex,
  Box,
  Button,
  Circle,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { HiOutlineExternalLink } from "react-icons/hi";
import BurningMechanism from "@components/DeskToken/BurningMechanism";
import HowToEarn from "@components/DeskToken/HowToEarn";
import Footer from "@components/Footer/Footer";
import Layout from "@components/Layout/Layout";
export const DeskToken = () => {
  return (
    <Layout>
      <VStack overflow={"hidden"}>
        <HStack
          h={"196px"}
          bg={"#E5EDF4"}
          flexDirection={"column"}
          alignSelf={"flex-end"}
          alignItems={"flex-start"}
          justifyContent={"flex-end"}
          w={"full"}
          display={{ base: "none", lg: "flex" }}
        >
          <Container maxW={"1200px"}>
            <Text color={"#333333"} textStyle={"homePageText"}>
              Desk Token
            </Text>
            <Text
              color={"#959595"}
              pt={"3px"}
              textStyle={"categoriesText"}
              pb={"32px"}
            >
              Projemizin tokeni olan DESK Token’i inceleyin.
            </Text>
          </Container>
        </HStack>
        <VStack
          pt={{ base: "0px", lg: "42px" }}
          pb={{ base: "82px", lg: "120px" }}
          gap={"120px"}
        >
          <Flex
            bg={"linear-gradient(98.25deg, #121A44 -1.61%, #701366 103.06%)"}
            w={{ base: "full", lg: "1200px" }}
            h={{ base: "603px", lg: "449px" }}
            rounded={{ base: 0, lg: 20 }}
            pos={"relative"}
            overflow={"visible"}
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Box pos={"absolute"}>
              <Image
                src={"/deskToken-bg1.png"}
                alt={"desktoken"}
                w={{ base: "350px", lg: "472px" }}
                h={{ base: "322px", lg: "442px" }}
              />
            </Box>
            <VStack h={"full"} px={{ base: 2, lg: "100px" }} pb={"114px"}>
              <VStack alignItems={"flex-start"} w={"full"}>
                <Text
                  fontSize={{ base: "28px", lg: "46px" }}
                  lineHeight={{ base: "42px", lg: "69px" }}
                  fontStyle={"normal"}
                  color={"white"}
                  fontWeight={500}
                  pt={{ base: "24px", lg: "107px" }}
                >
                  DESK Token Nedir?
                </Text>
                <Text
                  color={"white"}
                  textStyle={"subText"}
                  opacity={0.7}
                  maxW={"491px"}
                  pt={{ base: "16px", lg: "2px" }}
                >
                  Seçeneklerimiz arasında size en uygun olan hizmet paketini
                  seçip hemen başlayabilirsiniz!
                </Text>
              </VStack>
              <Flex
                flexDirection={{ base: "column", lg: "row" }}
                w={"full"}
                alignItems={"flex-start"}
                gap={"24px"}
                pt={{ base: "32px", lg: "76px" }}
              >
                <Button
                  variant={"globalButton"}
                  w={"261px"}
                  fontSize={"15px"}
                  gap={2}
                  letterSpacing={"0.15px"}
                  lineHeight={"22px"}
                  fontWeight={400}
                  fontStyle={"normal"}
                  border={"none"}
                >
                  <Image
                    src={"/deskToken.png"}
                    alt={"deskToken"}
                    w={"24px"}
                    h={"24px"}
                  />
                  Desk Token Satın Al
                </Button>
                <Button
                  color={"white"}
                  bg={"#522D65"}
                  rounded={5}
                  w={"194px"}
                  fontSize={"15px"}
                  gap={2}
                  letterSpacing={"0.15px"}
                  lineHeight={"22px"}
                  fontWeight={400}
                  fontStyle={"normal"}
                  _hover={{ opacity: 0.8 }}
                >
                  Desk Token Birleştir
                </Button>
              </Flex>
            </VStack>
            <Image
              src={"/deskTokens.png"}
              alt="deskToken"
              w={{ base: "226px", lg: "392px" }}
              h={{ base: "322px", lg: "457px" }}
              alignSelf={"flex-end"}
            />
          </Flex>
          <Flex
            w={{ base: "full", lg: "1200px" }}
            h={{ base: "full", lg: "517px" }}
            border={{ base: "none", lg: "2px solid" }}
            borderColor={"linear-gradient(#76336B %100, #76336B %0)"}
            rounded={{ base: 0, lg: 20 }}
            justifyContent={"space-between"}
            px={{ base: 0, lg: 10 }}
            alignItems={"center"}
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Image
              src="/tokenomics.png"
              alt={""}
              w={"250px"}
              h={"250px"}
              mt={{ base: "82px", lg: "0px" }}
            />
            <VStack
              px={5}
              pt={{ base: "32px", lg: "0px" }}
              gap={{ base: "16px", lg: "0px" }}
              pb={{ base: "32px", lg: "0px" }}
            >
              {item.map((ıtem) => (
                <HStack key={ıtem.id}>
                  <Circle
                    size={"16px"}
                    bg={ıtem.color}
                    alignSelf={"flex-start"}
                    mt={1}
                  />
                  <VStack
                    alignItems={"flex-start"}
                    w={{ base: "full", lg: "366px" }}
                  >
                    <Text textStyle={"homePageSubText"} color={ıtem.color}>
                      {ıtem.number}
                    </Text>
                    <Text
                      textStyle={"footerSmall"}
                      color={" #333333"}
                      pt={{ base: "6px", lg: "0px" }}
                    >
                      {ıtem.headText}
                    </Text>
                    <Text
                      color={"#666666"}
                      textStyle={"smallText"}
                      pt={{ base: "2px", lg: "0px" }}
                    >
                      {ıtem.desc}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
            <HStack
              w={{ base: "full", lg: "389px" }}
              h={"421px"}
              rounded={{ base: 0, lg: 20 }}
              bg={"linear-gradient(180deg, #76336B 0%, #500264 100%)"}
              alignItems={"flex-start"}
              p={"32px"}
              flexDirection={"column"}
              justifyContent={"center"}
              gap={5}
            >
              <Text color={"white"} textStyle={"homePageText"}>
                DESK Token Metrics
              </Text>
              {token.map((tokens) => (
                <HStack
                  key={tokens.id}
                  w={"full"}
                  justifyContent={"space-between"}
                  alignItems={"flex-start"}
                >
                  <Text color={"white"} textStyle={"categoriesText"}>
                    {tokens.leftHead}
                  </Text>
                  <Text
                    color={"white"}
                    display={"flex"}
                    textStyle={"homePageSubText"}
                    gap={"16px"}
                    alignSelf={"flex-start"}
                    alignItems={"center"}
                  >
                    {tokens.ımage && (
                      <Image
                        src={tokens.ımage}
                        alt={"ımg"}
                        w={"24px"}
                        h={"24px"}
                      />
                    )}
                    {tokens.rightDesc}
                    {tokens.icon && (
                      <Icon as={tokens.icon} w={"18px"} h={"18px"} />
                    )}
                  </Text>
                </HStack>
              ))}
            </HStack>
          </Flex>
        </VStack>
        <BurningMechanism />
        <Container maxW={"1200px"}>
          <HowToEarn />
        </Container>
        <VStack
          w={"full"}
          h={{ base: "full", lg: "1476px" }}
          bg={"#212842"}
          justifyContent={"space-between"}
        >
          <Container maxW={"1200px"}>
            <VStack h={"full"} pt={"42px"} gap={10}>
              <Flex
                flexDirection={{ base: "column", lg: "row" }}
                alignItems={"center"}
                w={"full"}
                justifyContent={"space-around"}
                gap={5}
              >
                <Image
                  src={"/deskToken.png"}
                  alt={"deskToken"}
                  w={"186px"}
                  h={"186px"}
                />
                <VStack alignItems={"flex-start"}>
                  <Text
                    fontSize={{ base: "24px", lg: "33px" }}
                    fontWeight={500}
                    color={"white"}
                    pt={"94px"}
                  >
                    Want to integrate DESK token into your platform?
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={400}
                    color={"#C4C4C4"}
                    letterSpacing={"0.5px"}
                    w={{ base: "full", lg: "694px" }}
                  >
                    Get in touch with us via support@724desk.org and the team
                    will carefully analyze the possibility of connecting your
                    product with the user base of more than 46,000 DESK holders.
                    The best products based on our initial review will be added
                    to the list of DESK Token Opportunities and will get the
                    marketing boost in the form of promotion across our social
                    media profiles accounting for more than 130,000 users.
                  </Text>
                </VStack>
              </Flex>
              <VStack gap={10}>
                <Text
                  fontSize={{ base: "24px", lg: "33px" }}
                  fontWeight={500}
                  lineHeight={"36px"}
                  letterSpacing={"0.25px"}
                  color={"white"}
                  textAlign={"center"}
                  maxW={"792px"}
                >
                  Become a holder of the token that supports the 724Desk
                  ecosystem
                </Text>
                <Button
                  variant={"globalButton"}
                  h={"40px"}
                  gap={2}
                  w={"261px"}
                  fontWeight={400}
                  border={"none"}
                  fontSize={"15px"}
                  fontStyle={"normal"}
                  lineHeight={"22px"}
                  letterSpacing={"0.15px"}
                >
                  <Image
                    src={"/deskToken.png"}
                    alt={"desk"}
                    w={"24px"}
                    h={"24px"}
                  />
                  DESK Token Satın Al
                </Button>
              </VStack>
              <HStack
                w={"full"}
                justifyContent={"center"}
                pt={20}
                gap={5}
                h={"350px"}
              >
                <Image
                  src={"/dToken-1.png"}
                  alt={"ımg"}
                  w={"112px"}
                  h={"112px"}
                  alignSelf={"flex-end"}
                  display={{ base: "none", lg: "flex" }}
                />
                <Image
                  src={"/dToken-2.png"}
                  alt={"ımg"}
                  w={"66px"}
                  h={"66px"}
                />
                <Image
                  src={"/dToken-3.png"}
                  alt={"ımg"}
                  w={"195px"}
                  h={"195px"}
                  alignSelf={"flex-start"}
                />
                <Image
                  src={"/dToken-4.png"}
                  alt={"ımg"}
                  w={"73px"}
                  h={"73px"}
                  alignSelf={"flex-end"}
                />
                <Image
                  src={"/dToken-5.png"}
                  alt={"ımg"}
                  w={"112px"}
                  h={"112px"}
                  alignSelf={"center"}
                  bottom={25}
                  display={{ base: "none", lg: "flex" }}
                />
                <Image
                  src={"/dToken-2.png"}
                  alt={"ımg"}
                  w={"66px"}
                  h={"66px"}
                  alignSelf={"center"}
                  display={{ base: "none", lg: "flex" }}
                />
              </HStack>
            </VStack>
          </Container>
          <Footer />
        </VStack>
      </VStack>
    </Layout>
  );
};

export default memo(DeskToken);

interface itemProps {
  id: number;
  color: string;
  number: string;
  headText: string;
  desc: string;
}

const item: Array<itemProps> = [
  {
    id: 1,
    color: "#F27C00",
    number: "80.7%",
    headText: "Farms/Launchpools",
    desc: "The amount of tokens you earn each daily is proportional to the amount of tokens you have subscribed to the pool vs the total...",
  },
  {
    id: 2,
    color: "#8904DB",
    number: "4.3%",
    headText: "Referral Program",
    desc: "The amount of tokens you earn each daily is proportional to the amount of tokens you have subscribed to the pool vs the total...",
  },
  {
    id: 3,
    color: "#F9C74F",
    number: "9%",
    headText: "Team",
    desc: "The amount of tokens you earn each daily is proportional to the amount of tokens you have subscribed to the pool vs the total...",
  },
  {
    id: 4,
    color: "#F94144",
    number: "1%",
    headText: "SAFU",
    desc: "The amount of tokens you earn each daily is proportional to the amount of tokens you have subscribed to the pool vs the total...",
  },
  {
    id: 5,
    color: "#0DA300",
    number: "5%",
    headText: "Investment Fund",
    desc: "The amount of tokens you earn each daily is proportional to the amount of tokens you have subscribed to the pool vs the total...",
  },
];

interface tokenProps {
  id: number;
  leftHead: string;
  rightDesc: string;
  ımage?: string;
  icon?: IconType;
}
const token: Array<tokenProps> = [
  { id: 1, leftHead: "Price:", rightDesc: "$0.54" },
  {
    id: 1,
    leftHead: "Ticker Symbol:",
    rightDesc: "DESK",
    ımage: "/deskToken.png",
  },
  { id: 1, leftHead: "Chain:", rightDesc: "BSC(BEP-20)", ımage: "/bnb.png" },
  {
    id: 1,
    leftHead: "Contract Address:",
    rightDesc: "0x86...5453",
    icon: HiOutlineExternalLink,
  },
  { id: 1, leftHead: "Max Supply:", rightDesc: "700 000 000" },
  { id: 1, leftHead: "Total Supply:", rightDesc: "229 284 526" },
  { id: 1, leftHead: "Circulation Supply:", rightDesc: "209 716 965" },
  { id: 1, leftHead: "Burned:", rightDesc: "21 061 298" },
];
