import React, { memo } from "react";
import Layout from "@components/Layout/Layout";
import {
  HStack,
  Container,
  Text,
  VStack,
  Image,
  Circle,
  InputGroup,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
} from "@chakra-ui/react";
import Footer from "@components/Footer/Footer";
export const Contact = () => {
  return (
    <Layout>
      <HStack
        h={"196px"}
        bg={"#E5EDF4"}
        flexDirection={"column"}
        alignSelf={"flex-end"}
        alignItems={"flex-start"}
        justifyContent={"flex-end"}
        display={{ base: "none", lg: "flex" }}
      >
        <Container maxW={"1200px"}>
          <Text color={"#333333"} textStyle={"homePageText"} pb={"3px"}>
            Bizimle İletişime Geçin
          </Text>
          <Text textStyle={"categoriesText"} color={"#959595"} pb={"32px"}>
            Uzman olmak için gereken adımları inceleyin
          </Text>
        </Container>
      </HStack>
      <VStack bg={"#F7FCFE"}>
        <Container maxW={"1200px"}>
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            alignItems={"center"}
            w={"full"}
            gap={{ base: 5, lg: "269px" }}
            py={{ base: "16px", lg: "42px" }}
          >
            <VStack
              alignItems={"flex-start"}
              alignSelf={"flex-start"}
              w={"100%"}
            >
              <Text textStyle={"deskTokenHead"} color={"#333333"}>
                İletişim kanalları
              </Text>
              <Text
                color={"#959595"}
                pt={"4px"}
                maxW={"331px"}
                textStyle={"homePageSubText"}
              >
                Bize aşağıdaki iletişim kanallarından ulaşın!
              </Text>
              <VStack alignItems={"flex-start"}>
                {itemsLeft.map((items) => (
                  <HStack
                    pt={{ base: "31px", lg: "47px" }}
                    key={items.id}
                    cursor={"pointer"}
                  >
                    <Circle size="38px" bg={items.color}>
                      <Image
                        src={items.image}
                        alt={"ımg"}
                        w={"22px"}
                        h={"22px"}
                      />
                    </Circle>
                    <Text fontSize={"15px"} fontWeight={400} color={"#333333"}>
                      {items.itemHead}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
            <VStack
              alignItems={"flex-start"}
              w={"full"}
              gap={2}
              pt={{ base: "90px", lg: "0px" }}
            >
              <Text textStyle={"deskTokenHead"} color={"#333333"}>
                Sosyal medya adresleri
              </Text>
              <Text
                color={{ base: "#959595", lg: "black" }}
                textStyle={"homePageSubText"}
              >
                Bizi sosyal medya hesaplarımızdan takip edin!
              </Text>
              <VStack alignItems={"flex-start"}>
                {itemsRight.map((items) => (
                  <HStack key={items.id} pt={"47px"} cursor={"pointer"}>
                    <Circle
                      size="38px"
                      bg={items.color}
                      bgGradient={items.gradient}
                    >
                      <Image
                        src={items.image}
                        alt={"ımg"}
                        w={"22px"}
                        h={"22px"}
                      />
                    </Circle>
                    <Text fontSize={"15px"} fontWeight={400} color={"#333333"}>
                      {items.itemHead}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </Flex>
          <VStack py={{ base: 10, lg: 5 }}>
            <VStack alignItems={"flex-start"} gap={5}>
              <Text color={"#333333"} textStyle={"deskTokenHead"}>
                İletişim Bilgileri
              </Text>
              <Text
                fontSize={"15px"}
                color={"#959595"}
                fontWeight={400}
                display={{ base: "none", lg: "flex" }}
              >
                İletişim bilgilerinizi yazın, biz size dönüş yapalım.
              </Text>
              <Flex
                flexDirection={{ base: "column", lg: "row" }}
                alignItems={"center"}
                gap={"16px"}
              >
                <InputGroup flexDirection={"column"}>
                  <FormLabel>
                    <Text textStyle={"categoriesText"}>Ad Soyad</Text>
                  </FormLabel>
                  <Input
                    placeholder="örn. Fatih Demirkan"
                    type={"text"} _placeholder={{fontSize:"14px",lineHeight:"150%",fontWeight:400,fontStyle:"normal",letterSpacing:"0.5px"}}
                    w={{ base: "343px", lg: "389px" }}
                  />
                </InputGroup>
                <InputGroup flexDirection={"column"}>
                  <FormLabel>
                    <Text textStyle={"categoriesText"}>E-mail</Text>
                  </FormLabel>
                  <Input
                    placeholder="örn. fdemirkan4@gmail.com"
                    type={"email"} _placeholder={{fontSize:"14px",lineHeight:"150%",fontWeight:400,fontStyle:"normal",letterSpacing:"0.5px"}}
                    w={{ base: "343px", lg: "389px" }}
                  />
                </InputGroup>
              </Flex>
              <Flex
                flexDirection={{ base: "column", lg: "row" }}
                alignItems={"center"}
                gap={"16px"}
              >
                <InputGroup flexDirection={"column"}>
                  <FormLabel>
                    <Text textStyle={"categoriesText"}>Telefon Numarası</Text>
                  </FormLabel>
                  <Input
                    placeholder="örn. +90 534 936 3296"
                    type={"number"} _placeholder={{fontSize:"14px",lineHeight:"150%",fontWeight:400,fontStyle:"normal",letterSpacing:"0.5px"}}
                    w={{ base: "343px", lg: "389px" }}
                  />
                </InputGroup>
                <InputGroup flexDirection={"column"}>
                  <FormLabel>
                    <Text textStyle={"categoriesText"}>Konu</Text>
                  </FormLabel>
                  <Input
                    placeholder="örn. Doge Coin hakkında"
                    type={"text"}
                    w={{ base: "343px", lg: "389px" }}
                  />
                </InputGroup>
              </Flex>
              <InputGroup flexDirection={"column"}>
              <FormLabel>
                    <Text textStyle={"categoriesText"}>Açıklama</Text>
                  </FormLabel>
              <Textarea
                placeholder="örn. Merhaba, doge coin hakkında bilgi almak istiyorum, lütfen dönüş yapar mısınız?"
                size="sm" _placeholder={{fontSize:"14px",lineHeight:"150%",fontWeight:400,fontStyle:"normal",letterSpacing:"0.5px"}}
                resize={"none"}
                w={{ base: "343px", lg: "794px" }}
                h={"283px"}
              />
              </InputGroup>
              <Button
                variant={"globalButton"}
                w={{ base: "343px", lg: "136px" }} h={"36px"} borderRadius={"5px"}
                fontSize={"13px"} lineHeight={"20px"} letterSpacing={"0.5px"} fontWeight={500} fontStyle={"normal"}
              >
                Gönder
              </Button>
            </VStack>
          </VStack>
        </Container>
      <Footer />
      </VStack>
    </Layout>
  );
};

export default memo(Contact);

interface itemProps {
  id: number;
  image: string;
  itemHead: string;
  color?: string;
  gradient?: string;
}

const itemsLeft: Array<itemProps> = [
  { id: 1, image: "/call.png", itemHead: "+90 534 936 3296", color: "#2C4EC6" },
  {
    id: 1,
    image: "/sms.png",
    itemHead: "fdemirkan4@gmail.com",
    color: "#FCCA1B",
  },
  {
    id: 1,
    image: "/whatsapp.png",
    itemHead: "+90 534 936 3296",
    color: "#56C568",
  },
  {
    id: 1,
    image: "/telegram.png",
    itemHead: "t.me/fdemirkan",
    color: "#2A8CE9",
  },
];
const itemsRight: Array<itemProps> = [
  {
    id: 1,
    image: "/facebook.png",
    itemHead: "fb.me/724desk",
    color: "#4267B2",
  },
  {
    id: 2,
    image: "/twitter.png",
    itemHead: "twitter.com/724desk",
    color: "#1DA1F2",
  },
  {
    id: 3,
    image: "/linkedin.png",
    itemHead: "linked.in/724desk",
    color: "#0072B1",
  },
  {
    id: 4,
    image: "/instagram.png",
    itemHead: "instagram.com/724desk",
    gradient:
      "radial-gradient(100% 100% at 0% 11.84%, #E95950 0%, #BC2A8D 21.42%, #DEB55B 54.69%, #CD486B 91.19%)",
  },
];
