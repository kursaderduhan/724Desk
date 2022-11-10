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
      <Container maxW={'1200px'}>
        <VStack h={'full'} alignItems={'flex-start'} pb={'59px'} pos={"relative"}>
          <Text color={'white'} textStyle={'bigText'} maxW={'592px'} pt={'236px'}>
            Para kazanırken bilgi birikiminizi artırabileceğiniz bir topluluğun
            içinde yer alın!
          </Text>
          <Text
            color={'#EAEAEA'}
            textStyle={'subText'}
            maxW={'592px'}
            pt={'12px'}
          >
            Hizmet kategorilerimiz içinde uzmanlığı olan kişilerin bilgi
            birikimlerini paylaşabildiği bu platformda siz de yerinizi alın. Hem
          </Text>
          <Button
            w={'186px'} top={"515px"}
            h={'47px'} pos={"absolute"}
            bg={'#F27C00'}
            color={'white'}
            rounded={'10px'}
            fontSize={'15px'}
            letterSpacing={'0.15px'}
            lineHeight={'22px'}
            fontWeight={400}
            fontStyle={'normal'}
          >
            Daha Fazla Bilgi Al
          </Button>
          <Text
            color={'#EAEAEA'}
            textStyle={'subText'}
            maxW={'592px'}
            pb={"59px"} pt={"163px"} 
          >
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
