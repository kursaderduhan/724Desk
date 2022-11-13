import React from "react";
import {
  VStack,
  HStack,
  Flex,
  Image,
  Text,
  Button,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
const BurningMechanism = () => {
  return (
    <VStack
      w={"full"}
      h={{ base: "full", lg: "943px" }}
      bg={"#212842"}
      pb={{ base: "42px", lg: "140px" }}
    >
      <Container maxW={"1200px"}>
        <VStack>
          <Text
            color={"white"}
            fontSize={{ base: "19px", lg: "23px" }}
            pt={{ base: "42px", lg: "140px" }}
            textStyle={"homePageText"}
          >
            DESK Token Burning Mechanism
          </Text>
          <Text
            textAlign={"center"}
            pt={"12px"}
            color={"#C4C4C4"}
            textStyle={"subText"}
          >
            724desk will continue decreasing the total supply of BSW tokens with
            the help of a weekly burning mechanism, which should in turn
            increase the value of the token in the long run.
          </Text>
          <Flex
            alignItems={"center"}
            gap={{ base: "0px", lg: "16px" }}
            flexDirection={{ base: "column", lg: "row" }}
            pt={"42px"}
            w={"100%"}
          >
            <VStack
              flexDirection={"column"}
              bg={"linear-gradient(180deg, #647BC7 0%, #364062 100%)"}
              rounded={20}
              w={{ base: "full", lg: "389px" }}
              h={"482px"}
              py={"42px"}
            >
              <Image
                src={"/totalSupply.png"}
                alt={"totalSupply"}
                w={"210px"}
                h={"210px"}
              />
              <Text
                gap={1}
                alignItems={"center"}
                color={"white"}
                display={"flex"}
                textStyle={"homePageSubText"}
                pt={"32px"}
              >
                <Image src={"/fire.png"} alt={"fire"} w={"24px"} h={"24px"} />
                Burned
              </Text>
              <Text
                lineHeight={"34px"}
                color={"white"}
                textStyle={"deskTokenHead"}
                pt={"16px"}
              >
                21 061 298
              </Text>
              <Button
                variant={"globalButton"}
                w={"251px"}
                fontSize={"15px"}
                fontWeight={400}
                letterSpacing={"0.15px"}
                lineHeight={"22px"}
                fontStyle={"normal"}
                top={"42px"}
                border={"none"}
              >
                Check Burning History
              </Button>
            </VStack>
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              pt={{ base: "80px", lg: "0px" }}
              w={"100%"}
              gridRowGap={"56px"}
              gridColumnGap={"30px"}
            >
              {items.map((item) => (
                <Flex key={item.id} gap={"16px"}>
                  <Flex
                    bg={item.bg}
                    w={"54px"}
                    h={"54px"}
                    rounded={13}
                    alignSelf={"flex-start"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Image
                      src={item.image}
                      alt={"rotate"}
                      w={"54px"}
                      h={"54px"}
                    />
                  </Flex>
                  <VStack alignItems={"flex-start"}>
                    <Text textStyle={"homePageSubText"} color={"white"}>
                      {item.itemHead}
                    </Text>
                    <Text
                      textStyle={" homePageSubText"}
                      pt={"8px"}
                      color={"#C4C4C4"}
                      maxW={"306px"}
                    >
                      {item.itemDesc}
                    </Text>
                  </VStack>
                </Flex>
              ))}
            </SimpleGrid>
          </Flex>
        </VStack>
      </Container>
    </VStack>
  );
};

export default BurningMechanism;

interface itemProps {
  id: number;
  image: string;
  itemHead: string;
  itemDesc: string;
  bg: string;
}

const items: Array<itemProps> = [
  {
    id: 1,
    image: "/rotate.png",
    itemHead: "50% from trading fees",
    itemDesc:
      "50% from every transaction on the 724Desk platform are used for purchasing BSW tokens from the market and burning them.",
    bg: "#F73A5D",
  },
  {
    id: 2,
    image: "/status-up.png",
    itemHead: "Performance Fee 1.99%",
    itemDesc:
      "Subtracted automatically from each harvest in the BSW Auto Compound pool and burned on a weekly basis.",
    bg: "#DFA432",
  },
  {
    id: 3,
    image: "/user-add.png",
    itemHead: "Unregistered Referrals",
    itemDesc:
      "All the rewards coming from the accounts with no referrers are used for weekly BSW token burning.",
    bg: "#1CAE7A",
  },
  {
    id: 4,
    image: "/ticket-discount.png",
    itemHead: "13% from Lottery tickets",
    itemDesc:
      "13% from every lottery ticket are accumulated on a separate wallet and burned once a week.",
    bg: "#A23CF2",
  },
];
