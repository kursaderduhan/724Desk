import React, { memo, useState } from "react";
import {
  Flex,
  Box,
  HStack,
  VStack,
  Text,
  Image,
  Button,
  SimpleGrid,
  Container,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import Layout from "@components/Layout/Layout";
import Link from "next/link";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Altcoin from "@components/Crypto/Altcoin";
import Footer from "@components/Footer/Footer";
export const Crypto = () => {
  const [page, setPage] = useState<string>("crypto");
  const [smallScreen] = useMediaQuery("(max-width:572px)");
  return (
    <Layout headerChoose>
      {page === "crypto" && (
        <>
          <Flex
            flexDirection={"column"}
            w={"full"}
            h={"450px"}
            bgImage={"/cryptoBg.png"}
            bgSize={"cover"}
            bgPos={"center"}
            display={{ base: "none", lg: "flex" }}
          >
            <VStack
              w={"full"}
              bgImage={"/cryptoBgBlack.png"}
              bgPos={"center"}
              pos={"absolute"}
              bgSize={"cover"}
            >
              <Text color={"#FFFFFF"} textStyle={"cryptoHead"} pt={"150px"}>
                Kripto
              </Text>
              <Text
                color={"#EAEAEA"}
                textStyle={"subText"}
                textAlign={"center"}
                pt={"16px"}
                pb={"42px"}
                maxW={"592px"}
              >
                Uzmanlığınızı paylaşmak birçok ihtiyaç sahibinin bilgi
                birikimizinden faydalanmasını sağlayacaktır. Böylece gelir elde
                ederken insanlara yardımcı olmanın mutluluğunu yaşayın.
              </Text>
              <Link href={"/SupportRequest"}>
                <Button
                  variant={"globalButton"}
                  fontSize={"15px"}
                  _hover={{ opacity: 0.8 }}
                  w={"267px"}
                  rounded={"10px"}
                  h={"47px"}
                  fontStyle={"normal"}
                  fontWeight={400}
                  letterSpacing={"0.15px"}
                  lineHeight={"22px"}
                >
                  Hemen Destek Talebi Oluştur
                </Button>
              </Link>
            </VStack>
          </Flex>
          <HStack
            py={"60px"}
            w={"full"}
            justifyContent="center"
            display={{ base: "none", lg: "flex" }}
          >
            <Box w={"full"} h={"188px"} bg={"#E9F2F5"} pos={"absolute"}></Box>
            <Image
              src={"/cryptoPhone.png"}
              alt={"phone"}
              w={"444px"}
              h={"545px"}
              zIndex={1}
            />
            <VStack alignItems={"flex-start"} zIndex={1}>
              <Text color={"black"} textStyle={"homePageText"}>
                Kripto Alanında Bilgi Alın ve İşlem Yapın
              </Text>
              <Text
                textStyle={"subText"}
                color={"#433F3F"}
                maxW={"592px"}
                pt={"12px"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
                consectetur quisque eget adipiscing vitae in. Tincidunt platea
                etiam pulvinar pellentesque nulla sit sed.
              </Text>
            </VStack>
          </HStack>
          <VStack
            w="full"
            h={"full"}
            bg={"#E9F2F5"}
            py={{ base: 10, lg: "72px" }}
          >
            <Container maxW={"1200px"}>
              <Text
                fontSize={{ base: "28px", lg: "33px" }}
                color={"black"}
                display={"flex"}
                justifyContent={"center"}
                w={"full"}
                textStyle={"bigText"}
              >
                Kripto Kategorileri
              </Text>
              <SimpleGrid
                columns={{ base: 1, lg: 3 }}
                gridRowGap={"16px"}
                gridColumnGap={{base:"0px",lg:"16px"}}
                pt={{base:"24px",lg:"72px"}} 
              >
                {Item.map((item) => (
                  <Link href={item.link} key={item.key}>
                    <VStack
                      w={{ base: "343px", lg: "390px" }}
                      h={"450px"}
                      bg={"white"}
                      cursor={"pointer"}
                      transform={"auto"}
                      _hover={{
                        scale: "1.01",
                        opacity: "0.7",
                        boxShadow: "dark-lg",
                      }}
                      rounded={10}
                      onClick={() => setPage(item.headName)}
                    >
                      <Image
                        src={item.Image}
                        alt={"ımg"}
                        w={"full"}
                        h={"238px"}
                      />
                      <VStack
                        w={"full"}
                        alignItems={"flex-start"}
                        px={"24px"}
                        pt={"32px"}
                        pb={"41px"}
                      >
                        <Text color={"black"} textStyle={"deskTokenHead"}>
                          {item.headName}
                        </Text>
                        <Text
                          textStyle={"categoriesText"}
                          pt={"14px"}
                          color={"#959595"}
                        >
                          {item.description}
                        </Text>
                      </VStack>
                    </VStack>
                  </Link>
                ))}
              </SimpleGrid>
            </Container>
          </VStack>
          <VStack w={"full"} h={"full"} pt={"82px"}>
            <Container maxW={"1200px"} display={{ base: "none", lg: "flex" }}>
              <VStack
                w={{ base: "343px", lg: "full" }}
                h={"300px"}
                bgImage={"/cryptoLp.png"}
                bgSize={"cover"}
                bgPos={"center"}
                alignItems={"flex-start"}
                justifyContent={"flex-end"}
                p={"54px"}
                borderRadius={"16px"}
              >
                <Text color={"white"} textStyle={"deskTokenHead"}>
                  Güvenli Bir Şekilde İşlem Yapın
                </Text>
                <Text
                  textStyle={"subText"}
                  pt={"16px"}
                  color={"#EFECEC"}
                  maxW={"632px"}
                >
                  Oluşturmuş olduğumuz güvenlik alt yapısı sayesinde
                  işlemlerinizi sorunsuz ve güvenli bir şekilde
                  tamamlayabilirsiniz.
                </Text>
              </VStack>
              <VStack gap={3} pt={"100"}>
                <Image
                  src={"cryptoLp-2.png"}
                  alt={"ımg"}
                  w={{ base: "343px", lg: "389px" }}
                  h={"200px"}
                />
                <Text textStyle={"deskTokenHead"} color={"black"} pt={"23px"}>
                  Farklı Lokasyon ve Diller ile Çözüm Arayın
                </Text>
                <Text
                  color={"#433F3F"}
                  textAlign={"center"}
                  pt={"12px"}
                  textStyle={"subText"}
                  maxW={"490px"}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dictum consectetur quisque eget adipiscing vitae in. Tincidunt
                  platea etiam pulvinar pellentesque nulla sit sed.
                </Text>
              </VStack>
            </Container>
            <Footer />
          </VStack>
        </>
      )}
      {page == "NFT" && (
        <>
          <VStack
            h={{base:"20px",lg:"196px"}}
            bg={{base:"white",lg:"#E5EDF4"}}
            alignSelf={"flex-end"}
            alignItems={{base:"center",lg:"flex-start"}}
            justifyContent={{base:"center",lg:"flex-end"}}
            gap={5}
            py={{base:0,lg:10}}
          >
            <Container maxW={"1200px"}>
              <Flex alignItems={"center"} gap={2}>
                <Icon
                  aria-label="back"
                  as={ChevronLeftIcon}
                  fontSize={"xl"}
                  bg={"transparent"}
                  _hover={{ bg: "transparent", opacity: 0.8 }}
                  onClick={() => setPage("crypto")}
                  cursor={"pointer"}
                />

                <Text fontSize={{base:"15px",lg:"19px"}} fontWeight={500} color={"#333333"}>
                  Altcoin
                </Text>
              </Flex>
            </Container>
          </VStack>
          <Altcoin />
        </>
      )}
    </Layout>
  );
};

export default memo(Crypto);

interface itemProp {
  Image: string;
  link: string;
  headName: string;
  description: string;
  key: number;
}

const Item: Array<itemProp> = [
  {
    Image: "/crypto-1.png",
    link: "",
    headName: "NFT",
    description:
      "Takas edilemez jeton, ya da İngilizcedeki popüler ismiyle non-fungible token, dijital bir varlığın benzersiz olduğunu ve bu nedenle birbirinin yerine geçemeyeceğini onaylayan, blok zinciri adı verilen bir dijital defterde depolanan veri birimidir.",
    key: 1,
  },
  {
    Image: "/crypto-2.png",
    link: "",
    headName: "Blockchain",
    description:
      "Blockchain yani blok zinciri, halka açık blok olarak da bilinen işlem kayıtlarını, eşler arası düğümler aracılığıyla birbirine bağlanan bir ağda “zincir” olarak bilinen çeşitli veri tabanlarında saklayan bir yapıdır.",
    key: 2,
  },
  {
    Image: "/crypto-3.png",
    link: "",
    headName: "Dao",
    description:
      "Merkezi olmayan otonom organizasyon yani, DAO; adından anlaşılacağı üzere, herhangi bir otoriteye bağlı olmadan, bilgisayar kodları tarafından yönetilen bir sistelgir. ",
    key: 3,
  },
  {
    Image: "/crypto-4.png",
    link: "",
    headName: "Borsalar",
    description:
      "Yatırımcıların geleneksel para birimleri veya diğer dijital para birimleri gibi diğer varlıklar için kripto para birimleri ve dijital para birimleri ticareti yapmasına olanak tanıyan platformlardır.",
    key: 4,
  },
  {
    Image: "/crypto-5.png",
    link: "",
    headName: "GameFi",
    description:
      "GameFi, oyna-kazan türündeki kripto oyunlarını oynayarak kâr elde edilmesi amacıyla finansal sistemlerin oyunlaştırılmasını ifade eder.",
    key: 5,
  },
  {
    Image: "/crypto-6.png",
    link: "",
    headName: "Cüzdanlar",
    description:
      "Kripto para cüzdanları, halka açık ve özel anahtarları depolayan, kripto para transferine izin veren fiziksel, yazılım veya donanım araçlardır.",
    key: 6,
  },
  {
    Image: "/crypto-7.png",
    link: "",
    headName: "DeFi",
    description:
      "Merkeziyetsiz Finans, süreç içerisinde hiçbir merkezi bir yapı barındırmayan ve tamamiyle blokzinciri üzerinde çalışan yazılımların işleyişi yönettiği finans ekosistemidir.",
    key: 7,
  },
  {
    Image: "/crypto-8.png",
    link: "",
    headName: "Farming",
    description:
      "Farming, kripto para ekosisteminde yüksek getiri veya ödül elde etmek için kripto para stake etme veya ödünç verme işlemine deniyor.",
    key: 8,
  },
  {
    Image: "/crypto-9.png",
    link: "",
    headName: "Staking",
    description:
      "Staking, bir kripto para zincirinin operasyonlarını desteklemek için kripto paraların sanal cüzdanda belirli süre kilitleyip harcamadan veya transfer etmeden tutma işlemidir.",
    key: 9,
  },
];
