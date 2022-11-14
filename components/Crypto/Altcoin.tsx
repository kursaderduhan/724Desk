import React, { memo, useState } from "react";
import {
  VStack,
  HStack,
  Text,
  Image,
  Container,
  Flex,
  Button,
} from "@chakra-ui/react";
import Element from "./Element";
export const Altcoin = () => {
  const [page, setPage] = useState<string>("page");
  let result = item.filter((item) => item.headName == page);
  return (
    <VStack bg={"#F7FCFE"} w={"full"} py={{ base: "12px", lg: 20 }}>
      <Container maxW={"1200px"}>
        {page == "page" && (
          <Flex gap={5}>
            <VStack
              w={"288px"}
              h={"325px"}
              textStyle={"cryptoPageText"}
              bg={"white"}
              rounded={5}
              alignItems={"flex-start"}
              p={5}
              display={{ base: "none", md: "flex" }}
            >
              <HStack>
                <Image
                  src={"/bitcoin-convert.png"}
                  alt={"ımg"}
                  w={"24px"}
                  h={"24px"}
                />
                <Text fontSize={"19px"} color={"#F27C00"} fontWeight={500}>
                  Kripto
                </Text>
              </HStack>
              <VStack alignItems={"flex-start"} pl={8}>
                <Text>Altcoin</Text>
                <Text color={"#666666"} pl={5}>
                  Litecoin
                </Text>
                <Text color={"#666666"} pl={5}>
                  Smooth Love Potion
                </Text>
                <Text color={"#666666"} pl={5}>
                  KYC Nedir?
                </Text>
                <Text>Blockchain</Text>
                <Text>Kriptografi</Text>
                <Text>Kriptografi</Text>
                <Text>Metaverse</Text>
              </VStack>
            </VStack>
            <VStack gap={5}>
              {item.map((ıtem: any) => (
                <HStack
                  key={ıtem.id}
                  w={{ base: "343px", md: "896px" }}
                  h={{ base: "150px", md: "183px" }}
                  bg={"white"}
                  border={"1px solid"}
                  borderColor={"transparent"}
                  rounded={10}
                  cursor={"pointer"}
                  _hover={{ border: "1px solid", borderColor: "lightblue" }}
                  onClick={() => setPage(ıtem.headName)}
                >
                  <VStack alignItems={"flex-start"} gap={3} pl={5}>
                    <Text
                      fontSize={{ base: "15px", md: "19px" }}
                      color={"#333333"}
                      fontWeight={500}
                    >
                      {ıtem.headName}
                    </Text>
                    <Text
                      fontSize={{ base: "8px", md: "12px" }}
                      color={"#959595"}
                      fontWeight={400}
                    >
                      {ıtem.description}
                    </Text>
                    <Flex w={"full"} justifyContent={"space-between"}>
                      <HStack>
                        <Image
                          src={"/pen1.png"}
                          alt={"pen"}
                          w={{ base: "12px", md: "24px" }}
                          h={{ base: "12px", md: "24px" }}
                        />
                        <Text
                          fontSize={{ base: "8px", md: "14px" }}
                          fontWeight={400}
                          color={"#666666"}
                        >
                          {ıtem.writer}
                        </Text>
                      </HStack>
                      <HStack>
                        <Image
                          src={"/book.png"}
                          alt={"book"}
                          w={{ base: "12px", md: "24px" }}
                          h={{ base: "12px", md: "24px" }}
                        />
                        <Text
                          fontSize={{ base: "8px", md: "14px" }}
                          fontWeight={400}
                          color={"#666666"}
                        >
                          {ıtem.reading}
                        </Text>
                      </HStack>
                      <HStack>
                        <Image
                          src={"/calendar1.png"}
                          alt={"calendar"}
                          w={{ base: "12px", md: "24px" }}
                          h={{ base: "12px", md: "24px" }}
                        />
                        <Text
                          fontSize={{ base: "8px", md: "14px" }}
                          fontWeight={400}
                          color={"#666666"}
                        >
                          {ıtem.date}
                        </Text>
                      </HStack>
                      <HStack display={"none"}>
                        <Image
                          src={"/facebook-soft.png"}
                          alt={"facebook"}
                          w={{ base: "12px", md: "24px" }}
                          h={{ base: "12px", md: "24px" }}
                        />
                        <Image
                          src={"/twitter-soft.png"}
                          alt={"twitter"}
                          w={{ base: "12px", md: "24px" }}
                          h={{ base: "12px", md: "24px" }}
                        />
                        <Image
                          src={"/whatsapp(1).png"}
                          alt={"whatsapp"}
                          w={{ base: "12px", md: "24px" }}
                          h={{ base: "12px", md: "24px" }}
                        />
                        <Image
                          src={"/link.png"}
                          alt={"link"}
                          w={{ base: "12px", md: "24px" }}
                          h={{ base: "12px", md: "24px" }}
                        />
                      </HStack>
                    </Flex>
                  </VStack>
                  <Image
                    src={ıtem.ımage}
                    alt={"ımg"}
                    w={{ base: "100px", md: "200px" }}
                    h={{ base: "150px", md: "183px" }}
                    alignSelf={"flex-end"}
                    rounded={10}
                  />
                </HStack>
              ))}
            </VStack>
          </Flex>
        )}
        {page !== "page" && (
          <>
            {result.map((element) => (
              <VStack key={element.id} w={"full"} h={"full"}>
                <Flex w={"full"} gap={5} justifyContent={"space-between"}>
                  <VStack w={"693px"}>
                    <Text
                      fontSize={"33px"}
                      color={"#333333"}
                      fontWeight={500}
                      alignSelf={"flex-start"}
                    >
                      {element.headName}
                    </Text>
                    <Text
                      fontSize={"12px"}
                      color={"#959595"}
                      fontWeight={400}
                      alignSelf={"flex-start"}
                    >
                      {element.date}
                    </Text>
                    {page == "Airdrop nedir?" && <Element />}
                    <VStack py={10} alignSelf={"flex-end"}>
                      <Text color={"#666666"}>Yardım için buradayız!</Text>
                      <Button
                        variant={"globalButton"}
                        w={"132px"}
                        h={"32px"}
                        gap={1}
                      >
                        <Image
                          src={"/24-support.png"}
                          alt={"ımg"}
                          w={"24px"}
                          h={"24px"}
                        />
                        <Text fontSize={"14px"}>Canlı Destek</Text>
                      </Button>
                      <Text
                        fontSize={"14px"}
                        color={"#666666"}
                        fontWeight={400}
                      >
                        Call or chat with a Tech Pro 24/7.
                      </Text>
                    </VStack>
                  </VStack>
                  <VStack
                    alignSelf={"flex-start"}
                    w={"389px"}
                    gap={5}
                    display={{ base: "none", lg: "flex" }}
                    flexDirection={"column"}
                  >
                    <VStack alignSelf={"flex-start"}>
                      <Text
                        fontSize={"19px"}
                        color={"#333333"}
                        fontWeight={500}
                        alignSelf={"flex-start"}
                      >
                        İçerik Bilgileri
                      </Text>
                      <VStack alignSelf={"flex-start"} w={"full"}>
                        <HStack color={"#333333"} alignSelf={"flex-start"}>
                          <Image
                            src={"/pen1.png"}
                            alt={"pen"}
                            w={"24px"}
                            h={"24px"}
                          />
                          <Text fontSize={"14px"} fontWeight={400}>
                            {element.writer}
                          </Text>
                        </HStack>
                        <HStack color={"#333333"} alignSelf={"flex-start"}>
                          <Image
                            src={"/book.png"}
                            alt={"book"}
                            w={"24px"}
                            h={"24px"}
                          />
                          <Text fontSize={"14px"} fontWeight={400}>
                            {element.reading}
                          </Text>
                        </HStack>
                        <HStack color={"#333333"} alignSelf={"flex-start"}>
                          <Image
                            src={"/calendar1.png"}
                            alt={"calendar"}
                            w={"24px"}
                            h={"24px"}
                          />
                          <Text fontSize={"14px"} fontWeight={400}>
                            {element.date}
                          </Text>
                        </HStack>
                      </VStack>
                    </VStack>
                    <VStack alignSelf={"flex-start"}>
                      <Text
                        alignSelf={"flex-start"}
                        fontSize={"19px"}
                        color={"#333333"}
                        fontWeight={500}
                      >
                        Bu içerik yardımcı oldu mu?
                      </Text>
                      <HStack alignSelf={"flex-start"}>
                        <HStack>
                          <Image
                            src={"/dislike.png"}
                            alt={"ımg"}
                            w={"24px"}
                            h={"24px"}
                          />
                          <Text> Hayır</Text>
                        </HStack>
                        <HStack>
                          <Image
                            src={"/like.png"}
                            alt={"ımg"}
                            w={"24px"}
                            h={"24px"}
                          />
                          <Text>Evet</Text>
                        </HStack>
                      </HStack>
                    </VStack>
                    <VStack gap={2} alignSelf={"flex-start"}>
                      <Text
                        alignSelf={"flex-start"}
                        fontSize={"19px"}
                        color={"#333333"}
                        fontWeight={500}
                      >
                        Paylaş
                      </Text>
                      <HStack alignSelf={"flex-start"}>
                        <Image
                          src={"/facebook-soft.png"}
                          alt={"facebook"}
                          w={"24px"}
                          h={"24px"}
                        />
                        <Image
                          src={"/twitter-soft.png"}
                          alt={"twitter"}
                          w={"24px"}
                          h={"24px"}
                        />
                        <Image
                          src={"/whatsapp(1).png"}
                          alt={"whatsapp"}
                          w={"24px"}
                          h={"24px"}
                        />
                        <Image
                          src={"/link.png"}
                          alt={"link"}
                          w={"24px"}
                          h={"24px"}
                        />
                      </HStack>
                    </VStack>
                    <VStack alignSelf={"flex-start"} gap={4}>
                      {vertDesc.map((chooseItem) => (
                        <HStack key={chooseItem.id} alignSelf={"flex-start"}>
                          <Image
                            src={
                              chooseItem.headName == "Standart Airdrop"
                                ? "/circleOrange.png"
                                : "/circleGray.png"
                            }
                            alt={"circle"}
                            w={"16px"}
                            h={"16px"}
                          />
                          <Text
                            color={
                              chooseItem.headName == "Standart Airdrop"
                                ? "#F27C00"
                                : "#959595"
                            }
                            fontSize={"12px"}
                            fontWeight={"500"}
                          >
                            {chooseItem.headName}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                    <VStack w={"full"} alignSelf={"flex-start"} gap={5}>
                      {similar.map((similarText) => (
                        <Flex
                          key={similarText.id}
                          bgImage={similarText.ımage}
                          w={"389px"}
                          h={"208px"}
                          bgSize={"cover"}
                          bgPos={"center"}
                          flexDirection={"column"}
                          alignSelf={"flex-end"}
                          justifyContent={"flex-end"}
                          p={5}
                        >
                          <Text
                            fontSize={"15px"}
                            color={"white"}
                            fontWeight={"500"}
                          >
                            {similarText.headName}
                          </Text>
                          <Text
                            color={"#C4C4C4"}
                            fontSize={"12px"}
                            fontWeight={400}
                          >
                            {similarText.date}
                          </Text>
                        </Flex>
                      ))}
                    </VStack>
                  </VStack>
                </Flex>
              </VStack>
            ))}
          </>
        )}
      </Container>
    </VStack>
  );
};

export default memo(Altcoin);

interface itemProp {
  headName: string;
  description: string;
  writer: string;
  reading: number;
  date: string;
  ımage: string;
  id: number;
}

const item: Array<itemProp> = [
  {
    headName: "Airdrop nedir?",
    description:
      "Curve DAO Token (CRV), Livepeer (LPT) ve birkaç altcoin projesinde devasa balina satın alımlarına şahit oldu. Balinalar CRV’yi en çok kullanılan akıllı sözleşmeler listesinde de ilk sıralara çıkardı.",
    writer: "Fatih Demirkan",
    reading: 1142,
    date: "16/12/2021 21:43",
    ımage: "/crypto1.png",
    id: 1,
  },
  {
    headName: "Akıllı Kontrat Nedir?",
    description:
      "Son dönemde metaverse’ün artan popülaritesi ile birlikte en dikkat çeken projeler arasında şüphesiz The SandBox yer alıyor. Bunu projenin yerel token’ı olan SAND’ın yıl boyuncaki performan...",
    writer: "Fatih Demirkan",
    reading: 1142,
    date: "16/12/2021 21:43",
    ımage: "/crypto2.png",
    id: 2,
  },
  {
    headName: "Blockchain",
    description:
      "Singapur merkezli bir hedge fonu olan Three Arrows Capital, Perşembe günü yaklaşık 101 milyon dolara 31.345 Ethereum (ETH) daha satın aldı. Blockchain analitik platformu Nansen, bir BlockFi...",
    writer: "Fatih Demirkan",
    reading: 1142,
    date: "16/12/2021 21:43",
    ımage: "/crypto3.png",
    id: 3,
  },
  {
    headName: "Kripto Cüzdanlar",
    description:
      "En büyük kripto para listeleme platformlarından biri olan CoinGecko’dan alınan verilere göre, son bir haftada en çok yükselen kripto paralar şunlar: Son günlerin parlayan yıldızı Xido Finance...",
    writer: "Fatih Demirkan",
    reading: 1142,
    date: "16/12/2021 21:43",
    ımage: "/crypto4.png",
    id: 4,
  },
  {
    headName: "DeFi",
    description:
      "Son Ronin köprü saldırısı sırasında çalınan fonları geri almak amacıyla Binance, Axie Infinity’nin arkasında geliştirici ekip Sky Mavis’in 150 milyon dolarlık finansman turuna öncülük ettiğini açıkladı.",
    writer: "Fatih Demirkan",
    reading: 1142,
    date: "16/12/2021 21:43",
    ımage: "/crypto5.png",
    id: 5,
  },
  {
    headName: "GameFi",
    description:
      "Curve DAO Token (CRV), Livepeer (LPT) ve birkaç altcoin projesinde devasa balina satın alımlarına şahit oldu. Balinalar CRV’yi en çok kullanılan akıllı sözleşmeler listesinde de ilk sıralara çıkardı.",
    writer: "Fatih Demirkan",
    reading: 1142,
    date: "16/12/2021 21:43",
    ımage: "/crypto1.png",
    id: 6,
  },
  {
    headName: "Kripto Dolandırıcılığı İle Nasıl Mücadele Edilir?",
    description:
      "Son dönemde metaverse’ün artan popülaritesi ile birlikte en dikkat çeken projeler arasında şüphesiz The SandBox yer alıyor. Bunu projenin yerel token’ı olan SAND’ın yıl boyuncaki performan...",
    writer: "Fatih Demirkan",
    reading: 1142,
    date: "16/12/2021 21:43",
    ımage: "/crypto2.png",
    id: 7,
  },
  {
    headName: "Kripto Para Borsaları",
    description:
      "Singapur merkezli bir hedge fonu olan Three Arrows Capital, Perşembe günü yaklaşık 101 milyon dolara 31.345 Ethereum (ETH) daha satın aldı. Blockchain analitik platformu Nansen, bir BlockFi...",
    writer: "Fatih Demirkan",
    reading: 1142,
    date: "16/12/2021 21:43",
    ımage: "/crypto3.png",
    id: 8,
  },
  {
    headName: "Metamask Nedir?",
    description:
      "En büyük kripto para listeleme platformlarından biri olan CoinGecko’dan alınan verilere göre, son bir haftada en çok yükselen kripto paralar şunlar: Son günlerin parlayan yıldızı Xido Finance...",
    writer: "Fatih Demirkan",
    reading: 1142,
    date: "16/12/2021 21:43",
    ımage: "/crypto4.png",
    id: 9,
  },
  {
    headName: "NFT Nedir?",
    description:
      "Son Ronin köprü saldırısı sırasında çalınan fonları geri almak amacıyla Binance, Axie Infinity’nin arkasında geliştirici ekip Sky Mavis’in 150 milyon dolarlık finansman turuna öncülük ettiğini açıkladı.",
    writer: "Fatih Demirkan",
    reading: 1142,
    date: "16/12/2021 21:43",
    ımage: "/crypto5.png",
    id: 10,
  },
  {
    headName: "P2P Nedir?",
    description:
      "En büyük kripto para listeleme platformlarından biri olan CoinGecko’dan alınan verilere göre, son bir haftada en çok yükselen kripto paralar şunlar: Son günlerin parlayan yıldızı Xido Finance...",
    writer: "Fatih Demirkan",
    reading: 1142,
    date: "16/12/2021 21:43",
    ımage: "/crypto1.png",
    id: 11,
  },
  {
    headName: "Staking Nedir?",
    description:
      "Son Ronin köprü saldırısı sırasında çalınan fonları geri almak amacıyla Binance, Axie Infinity’nin arkasında geliştirici ekip Sky Mavis’in 150 milyon dolarlık finansman turuna öncülük ettiğini açıkladı.",
    writer: "Fatih Demirkan",
    reading: 1142,
    date: "16/12/2021 21:43",
    ımage: "/crypto2.png",
    id: 12,
  },
];

interface chooseProp {
  id: number;
  headName: string;
}

const vertDesc: Array<chooseProp> = [
  { id: 1, headName: "Airdrop Türleri Nelerdir?" },
  { id: 2, headName: "Standart Airdrop" },
  { id: 3, headName: "Ödül Airdrop’u" },
  { id: 4, headName: "Özel Airdrop" },
  { id: 5, headName: "Holder Airdrop" },
  { id: 6, headName: "Airdroplar Nasıl Elde Edilir?" },
];

interface similarProp {
  id: number;
  ımage: string;
  headName: string;
  date: string;
}

const similar: Array<similarProp> = [
  {
    id: 1,
    ımage: "/ımg-1.png",
    headName: "Akıllı Kontrat Nedir?",
    date: "08/12/2021",
  },
  {
    id: 1,
    ımage: "/ımg-2.png",
    headName: "Kripto Dolandırıcılığı İle Nasıl Mücadele Edilir?",
    date: "08/12/2021",
  },
  {
    id: 1,
    ımage: "/ımg-3.png",
    headName: "Metamask Nedir?",
    date: "08/12/2021",
  },
];
