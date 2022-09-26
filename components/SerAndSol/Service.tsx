import React, { memo } from 'react'
import {
  Flex,
  HStack,
  VStack,
  Image,
  Text,
  Container,
  Button
} from '@chakra-ui/react'
export const Service = () => {
  return (
    <Flex bg={'#333862'} h={'1202px'}>
      <VStack w={'full'} >
        <HStack bg={'#272B53'} w={'full'} h={'311px'}>
          <Container maxW={{ xl:'1200px',xxl:'1600px'}}>
            <HStack w={'full'} justifyContent={'space-around'}>
              <VStack>
                <HStack gap={4}>
                  <Image src={'/flag.png'} alt={'flag'} w={'54px'} h={'54px'} />
                  <Text fontWeight={500} fontSize={'33px'} color={'white'}>
                    33
                  </Text>
                  <Text fontWeight={400} fontSize={'15px'} color={'#959595'}>
                    ülke
                  </Text>
                </HStack>
                <Text fontSize={'23px'} fontWeight={500} color={'#EAEAEA'}>
                  Birçok farklı ülkeden uzmanlara sahibiz
                </Text>
                <Text fontSize={'14px'} fontWeight={400} color={'#D4D4D4'}>
                  Size çok yakınız, aynı zaman diliminde her zaman yanınızdayız.
                </Text>
              </VStack>
              <VStack>
                <HStack>
                  <Image
                    src={'/global-refresh.png'}
                    alt={'global'}
                    w={'54px'}
                    h={'54px'}
                  />
                  <Text fontWeight={500} fontSize={'33px'} color={'white'}>
                    42
                  </Text>
                  <Text fontWeight={400} fontSize={'15px'} color={'#959595'}>
                    Dil
                  </Text>
                </HStack>
                <Text fontSize={'23px'} fontWeight={500} color={'#EAEAEA'}>
                  Bİrçok dilde hizmet vermekteyiz
                </Text>
                <Text fontSize={'14px'} fontWeight={400} color={'#D4D4D4'}>
                  Sizi anlıyoruz, çünkü aynı dili konuşuyoruz. Size destek
                  oluyoruz, çünkü hedeflerimiz aynı.
                </Text>
              </VStack>
            </HStack>
          </Container>
        </HStack>
        <Container maxW={{ xl:'1200px',xxl:'1600px'}}>
          <VStack gap={20} py={100}>
            <Flex flexDirection={'column'} alignItems={'flex-start'} w={'full'}>
              <Text fontWeight={500} fontSize={'23px'} color={'white'}>
                Birçok farklı iletişim kanalından hizmet sunmaktayız
              </Text>
              <Text fontSize={'14px'} fontWeight={400} color={'#D4D4D4'}>
                Sizin sahip olduğunuz iletişim kanalları aracılığıyla iletişim
                kuruyoruz. sahip olduğunuz iletişim kanalları aracılığıyla
                iletişim kuruyoruz.
              </Text>
            </Flex>
            <HStack w={'full'} h={'full'} alignItems={'flex-start'} justifyContent={"space-between"}>
              <VStack h={'full'} gap={10}>
                <Flex flexDirection={'column'}>
                  <Image
                    src={'/phone-1.png'}
                    alt={'phone'}
                    w='54px'
                    h={'54px'}
                  />
                  <Text fontSize={'19px'} fontWeight={500} color={'white'}>
                    Telefon
                  </Text>
                  <Text fontSize={'12px'} fontWeight={400} color={'#C4C4C4'}>
                    Telefon numaranız aracılığıyla uzmanlarımız <br/> size ulaşarak
                    gerekli desteği sağlayacaktır.
                  </Text>
                </Flex>
                <Flex
                  flexDirection={'column'}
                  alignItems={'flex-start'}
                  gap={2}
                  alignSelf={'flex-start'}
                >
                  <Image
                    src={'/global.png'}
                    alt={'phone'}
                    w='54px'
                    h={'54px'}
                  />
                  <Text fontSize={'19px'} fontWeight={500} color={'white'}>
                    Canlı Sohbet
                  </Text>
                  <Text fontSize={'12px'} fontWeight={400} color={'#C4C4C4'}>
                    Canlı sohbet aracılığıyla eş zamanlı olarak <br/> uzmanlarımızdan
                    destek alabilirsiniz.
                  </Text>
                </Flex>
              </VStack>
              <VStack h={'full'} alignItems={"flex-start"}gap={10}>
                <Flex flexDirection={'column'} alignItems={'flex-start'}>
                  <Image
                    src={'/messages.png'}
                    alt={'phone'}
                    w='54px'
                    h={'54px'}
                  />
                  <Text fontSize={'19px'} fontWeight={500} color={'white'}>
                    Anlık Mesajlaşma
                  </Text>
                  <Text fontSize={'12px'} fontWeight={400} color={'#C4C4C4'}>
                    Whatsapp, Telegram ve Signal gibi kanallar<br/> aracılığıyla
                    destek alabilir, bizimle iletişime<br/> geçebilirsiniz.
                  </Text>
                </Flex>
                <Flex flexDirection={'column'} alignItems={'flex-start'}>
                  <Image
                    src={'/global.png'}
                    alt={'phone'}
                    w='54px'
                    h={'54px'}
                  />
                  <Text fontSize={'19px'} fontWeight={500} color={'white'}>
                    E - Posta
                  </Text>
                  <Text fontSize={'12px'} fontWeight={400} color={'#C4C4C4'}>
                    E-posta yoluyla bize iletişim kurup<br/> sorunlarınızı
                    çözebilirsiniz.
                  </Text>
                </Flex>
              </VStack>
              <VStack  alignItems={"flex-start"}gap={10}>
                <Flex flexDirection={'column'} alignItems={'flex-start'}>
                  <Image src={'/video.png'} alt={'phone'} w='54px' h={'54px'} />
                  <Text fontSize={'19px'} fontWeight={500} color={'white'}>
                    Görüntülü Görüşme
                  </Text>
                  <Text fontSize={'12px'} fontWeight={400} color={'#C4C4C4'}>
                    Uzmanlarımızla görüntülü görüşerek <br/> sorunlarınızı
                    çözebilirsiniz.
                  </Text>
                </Flex>
                <Flex flexDirection={'column'} alignItems={'flex-start'}>
                  <Image
                    src={'/global.png'}
                    alt={'phone'}
                    w='54px'
                    h={'54px'}
                  />
                  <Text fontSize={'19px'} fontWeight={500} color={'white'}>
                    724 Desk Uygulaması
                  </Text>
                  <Text fontSize={'12px'} fontWeight={400} color={'#C4C4C4'}>
                    Web uygulamamız üzerinden bize ulaşıp <br/> destek talebinde
                    bulunarak çözüm sürecinizi <br/> takip edebilirsiniz.
                  </Text>
                </Flex>
              </VStack>
            </HStack>
            <Button
              fontSize={'13px'}
              fontWeight={500}
              color={'white'}
              border={'1px solid'}
              borderColor={'white'}
              _hover={{ opacity: 0.8 }}
              bg={'transparent'} alignSelf={"flex-start"} w="195px" h={"36px"}
             >
              Daha Fazla Bilgi
            </Button>
          </VStack>
        </Container>
      </VStack>
    </Flex>
  )
}

export default memo(Service)
