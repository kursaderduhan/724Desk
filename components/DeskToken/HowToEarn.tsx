import React, { memo } from "react";
import {
  Flex,
  HStack,
  VStack,
  Text,
  Image,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
const HowToEarn = () => {
  return (
    <VStack w={"full"} py={{ base: "82px", lg: "90px" }}>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={"flex-start"}
        w={"full"} gap={"71px"}
        justifyContent={"space-between"}
      >
        <VStack
          w={{ base: "full", lg: "437px" }}
          h={{ base: "485px", lg: "621px" }}
        >
          <Box
            w={{ base:"343px", lg: "376px" }}
            h={{ base: "485px", lg: "534px" }}
            bg={"linear-gradient(180deg, #F3DC5F 0%, #F5A937 100%)"}
            alignSelf={"flex-start"}
            mt={{base:10,lg:0}}
            overflow={"visible"}
            pos={"relative"}
            rounded={20}
          >
            <Image
              src={"/deskToken-3.png"}
              alt={"ımg"}
              pos={"absolute"}
              left={10}
              h={{ base: "485", lg: "full" }}
            />
          </Box>
        </VStack>
        <VStack alignItems={"flex-start"} display={"flex"} w={"100%"}>
          <Text
            fontSize={{ base: "23px", lg: "33px" }}
            textStyle={"bigText"}
            color={"black"} pt={{base:"82px",lg:"0px"}}
          >
            How to earn DESK Token?
          </Text>
          <Text
            color={"#525252"}
            maxW={"693px"}
            textStyle={"subText"}
            pt={"12px"} pb={{base:"54px",lg:"72px"}}
          >
            DESK will continue decreasing the total supply of BSW tokens with
            the help of a weekly burning mechanism, which should in turn
            increase the value of the token in the long run.
          </Text>
          {item.map((ıtem) => (
            <HStack key={ıtem.id} w={"100%"}>
              <Flex
                w={"54px"}
                h={"54px"}
                rounded={"13px"}
                bg={ıtem.color}
                alignSelf={"flex-start"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={ıtem.ımage} alt={"ımg"} w={"54px"} h={"54px"} />
              </Flex>
              <VStack alignItems={"flex-start"}>
                <Text color={"black"} textStyle={{base:"deskTokenHead:",lg:"homePageText"}}>
                  {ıtem.headName}
                </Text>
                <Text
                  w={{ base: "full", lg: "623px" }}
                  textStyle={"subText"}
                  color={"#666666"}
                  pt={"8px"}
                >
                  {ıtem.desc}
                </Text>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </Flex>
      <Text
        letterSpacing={"0.25px"}
        color={"#333333"}
        textStyle={"deskTokenHead"}
        alignSelf={"flex-start"} pt={{base:"82px",lg:"120px"}}
      >
        DESK Token Opportunities
      </Text>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={"24px"}  pt={{base:"24px",lg:""}}>
        {opp.map((opper) => (
          <VStack
            w={{ base: "343px", lg: "376px" }}
            h={{ base: "300px", lg: "376px" }}
            key={opper.id}
            bg={"linear-gradient(180deg, #76336B 0%, #500264 100%)"}
            rounded={20}
           pb={"24px"}
          >
            <Image src={opper.ımage} alt={"ımg"} w={"116px"} h={"116px"} />
            <Text fontSize={"23px"} color={"white"} textStyle={"deskToken"} pt={"30px"}>
              {opper.headName}
            </Text>
            <Text
              color={"white"}
              textStyle={"subText"}
              textAlign={"center"}
              px={"16px"} pt={"12px"}
            >
              {opper.desc}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default memo(HowToEarn);

interface itemProps {
  id: number;
  color: string;
  ımage: string;
  headName: string;
  desc: string;
}

const item: Array<itemProps> = [
  {
    id: 1,
    color: "linear-gradient(180deg, #FFDEBC 0%, #DFAB73 100%)",
    ımage: "/medal-star.png",
    headName:
      "Destek uzmanımız olun, hizmetiniz karşılığında Desk Token kazanın!",
    desc: `Destek uzmanlarımız müşterilerimize verdiği hizmetler karşılığında ödemelerini Desk Token ile alarak Token’imizi biriktirebilirler.`,
  },
  {
    id: 1,
    color: "linear-gradient(180deg, #BCF7FF 0%, #7DCED9 100%)",
    ımage: "/coin.png",
    headName: "Stake yaparak daha fazla Desk Token elde edin!",
    desc: "Elinizdeki Desk Token’leri yatırım havuzlarımıza koyarak projenin işleyişine destek olup, gelirlerimizden yüksek oranda kâr payı elde edebilirsiniz.",
  },
  {
    id: 1,
    color: "linear-gradient(180deg, #EECFFD 0%, #B680CF 100%)",
    ımage: "/profile-tick.png",
    headName:
      "Platformumuza referans olarak müşteri kazandırıp Desk Token kazanın! ",
    desc: "Platformumuza yeni müşteriler kazandırarak yapacakları alışverişlerden Token’imizi kazanabilirsiniz.",
  },
  {
    id: 1,
    color: "linear-gradient(180deg, #BCFFCB 0%, #80D793 100%)",
    ımage: "/card-pos.png",
    headName: "Platformumuz üzerinde alışveriş yaparak Desk Token kazanın!",
    desc: "Tüm alışverişlerde alışveriş tutarınız oranında (%?) token kazanarak gelir oluşturabilirsiniz.",
  },
  {
    id: 1,
    color: "linear-gradient(180deg, #FFBCBC 0%, #D95F5F 100%)",
    ımage: "/star-2.png",
    headName: "Promosyonlarımızı takip ederek Desk Token kazanın!",
    desc: "Platform olarak daha fazla kişiye ulaşmak için birçok aktivitemiz bulunmaktadır. Bu aktivitelerde Desk Token ödüllerimiz bulunmaktadır, bu ödüllerden kazanarak gelir elde edebilirsiniz.",
  },
];

interface oppProps {
  id: number;
  ımage: string;
  headName: string;
  desc: string;
}
const opp: Array<oppProps> = [
  {
    id: 1,
    ımage: "/cup.png",
    headName: "724DESK Launchpools",
    desc: "Stake your DESK tokens in DESK Launchpools and earn other tokens for FREE.",
  },
  {
    id: 2,
    ımage: "/tag-2.png",
    headName: "Liquidity provider fee",
    desc: "Add DESK token along with other tokens to the liquidity pools on Biswap and receive 50% from every transaction fee occurring on the platform.",
  },
  {
    id: 3,
    ımage: "/empty-wallet.png",
    headName: "724DESK Farms",
    desc: "Stake your Liquidity Provider tokens in Biswap Farms pairs and receive BSW tokens in return.",
  },
  {
    id: 4,
    ımage: "/favorite-chart.png",
    headName: "I - Gaming",
    desc: "Play your favorite games on the #1 i-gaming platform BetFury using the DESK token.",
  },
  {
    id: 5,
    ımage: "/smart-home.png",
    headName: "Referral Commission",
    desc: "Receive 5% from your friends’ earnings in Farms & Launchpools in the form of DESK tokens.",
  },
  {
    id: 6,
    ımage: "/card-coin.png",
    headName: "Trading",
    desc: "Easily trade DESK token on the platform with the lowest transaction fees in the DeFi space.",
  },
];
