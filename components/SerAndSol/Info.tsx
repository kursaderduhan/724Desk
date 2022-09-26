import React, { memo } from 'react'
import {
  Flex,
  HStack,
  VStack,
  Text,
  Box,
  Container,
  Button
} from '@chakra-ui/react'
export const Info = () => {
  return (
    <Flex
      w='full'
      bgImage={'/Info-bg.png'}
      h={'746px'}
      bgSize={'cover'}
      bgPos={'center'}
    >
      <Container maxW={{ xl:'1200px',xxl:'1600px'}}>
        <VStack w="592px" h={"full"} justifyContent={"flex-end"} py={50} gap={10} alignItems={"flex-start"}>
          <VStack >
            <Text color={"white"} fontSize={"33px"} fontWeight={500}>
              Para kazanırken bilgi birikiminizi artırabileceğiniz bir
              topluluğun içinde yer alın!
            </Text>
            <Text color={"#EAEAEA"} fontSize={"14px"} fontWeight={400}>
              Hizmet kategorilerimiz içinde uzmanlığı olan kişilerin bilgi
              birikimlerini paylaşabildiği bu platformda siz de yerinizi alın.
              Hem
            </Text>
          </VStack>
          <Button bg={"#F27C00"} color={"white"} fontSize={"15px"}>Daha Fazla Bilgi Al</Button>
          <Text color={"#EAEAEA"} fontSize={"14px"} fontWeight={400}>
            Uzmanlığınızı paylaşmak, sahip olduğunuz bilginin ihtiyaç
            sahiplerine ulaşmasını sağlayacaktır. Bu sayede hem insanlara
            yardımcı olmanın mutluluğunu yaşarken hem de gelir elde edecek, her
            anlamda kendinizi iyi hissedeceksiniz.
          </Text>
        </VStack>
      </Container>
    </Flex>
  )
}

export default memo(Info)
