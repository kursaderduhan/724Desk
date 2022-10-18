import React, { useState } from 'react'
import Layout from '@components/Layout/Layout'
import {
  Container,
  Text,
  IconButton,
  HStack,
  VStack,
  Icon,
  Image,
  Divider,
  Button,
  InputGroup,
  FormLabel,
  Input,
  Textarea,
  Checkbox
} from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import DetailPage from '@components/Search/DetailPage'
export const Search = () => {
  const [supportButton, setSupportButton] = useState<boolean>(false)
  const [feedBack, setFeedBack] = useState<boolean>(false)
  const [detailPage, setDetailPage] = useState<boolean>(false)
  return (
    <Layout>
      <HStack
        h={'196px'}
        bg={'#E5EDF4'}
        flexDirection={'column'}
        alignSelf={'flex-end'}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        gap={5}
        py={10}
      >
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Arama Sonuçları
          </Text>
          <HStack w={'full'} justifyContent={'space-between'}>
            <Text fontSize={'12px'} fontWeight={400} color={'#959595'}>
              Aradığınız anahtar kelime ile ilgili sonuçlara ulaşabilirsiniz.
            </Text>
          </HStack>
        </Container>
      </HStack>
      <VStack bg={'#F7FCFE'} py={10}>
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <VStack>
            {detailPage === false ? (
              <VStack>
                <Text fontSize={'23px'} color={'#333333'} fontWeight={500}>
                  “Trade yapmak” ile ilgili makale sonuçları
                </Text>
                <Text fontSize={'15px'} color={'#959595'} fontWeight={400}>
                  Bu anahtar kelime ile ilgili 7 arama sonucu bulunmuştur.
                </Text>
                <VStack py={5} gap={5}>
                  {item.map(ıtem => (
                    <HStack
                      key={ıtem.id}
                      w={'794px'}
                      h={'169px'}
                      bg={'white'}
                      justifyContent={'space-between'}
                      rounded={10} onClick={() => setDetailPage(true)} cursor={"pointer"}
                    >
                      <VStack alignItems={'flex-start'} gap={2} px={5}>
                        <Text
                          fontSize={'19px'}
                          fontWeight={500}
                          color={'#333333'}
                        >
                          {ıtem.headName}
                        </Text>
                        <Text
                          fontSize={'12px'}
                          fontWeight={400}
                          color={'#959595'}
                        >
                          {ıtem.description}
                        </Text>
                        <HStack color={'#56C568'}>
                          <Icon as={WarningIcon} w={'24px'} h={'24px'} />
                          <Text fontSize={'12px'} fontWeight={400}>
                            Rehber
                          </Text>
                        </HStack>
                      </VStack>
                      <Image
                        src={ıtem.ımage}
                        alt={'ımg'}
                        w={'200px'}
                        h={'169px'}
                        rounded={10}
                      />
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            ) : (
              <DetailPage />
            )}
            <VStack
              w={'794px'}
              h={supportButton === false ? '257px' : '894px'}
              bg={'white'}
              rounded={10}
              justifyContent={
                supportButton === false ? 'center' : 'space-around'
              }
              gap={2}
            >
              <VStack>
                <Text>Was this content helpful?</Text>
                {feedBack === false ? (
                  <HStack gap={5}>
                    <HStack
                      cursor={'pointer'}
                      onClick={() => setFeedBack(true)}
                    >
                      <Image
                        src={'/like.png'}
                        alt={'like'}
                        w={'24px'}
                        h={'24px'}
                      />
                      <Text
                        fontSize={'15px'}
                        fontWeight={400}
                        color={'#525252'}
                      >
                        Yes
                      </Text>
                    </HStack>
                    <HStack
                      onClick={() => setSupportButton(true)}
                      cursor={'pointer'}
                    >
                      <Image
                        src={'/dislike.png'}
                        alt={'dislike'}
                        w={'24px'}
                        h={'24px'}
                      />
                      <Text
                        fontSize={'15px'}
                        fontWeight={400}
                        color={'#525252'}
                      >
                        No
                      </Text>
                    </HStack>
                  </HStack>
                ) : (
                  <VStack>
                    {/* <Text fontSize={"15px"} color={"#333333"} fontWeight={500}>Was this content helpful?</Text> */}
                    <Text
                      fontSize={'18px'}
                      color={'black'}
                      fontWeight={500}
                      letterSpacing={'0.15px'}
                      lineHeight={'22px'}
                    >
                      Thanks for your feedback!
                    </Text>
                  </VStack>
                )}
              </VStack>
              {supportButton && (
                <VStack gap={5}>
                  <HStack>
                    <VStack>
                      <InputGroup flexDirection={'column'}>
                        <FormLabel
                          fontSize={'12px'}
                          color={'#525252'}
                          fontWeight={400}
                        >
                          Konu Başlığı
                        </FormLabel>
                        <Input
                          w={'365px'}
                          h={'46px'}
                          placeholder={'örn. Telefonumu açamıyorum'}
                          color={'#B3CBD4'}
                          type={'text'}
                        />
                      </InputGroup>
                    </VStack>
                    <VStack>
                      <InputGroup flexDirection={'column'}>
                        <FormLabel
                          fontSize={'12px'}
                          color={'#525252'}
                          fontWeight={400}
                        >
                          E-mail
                        </FormLabel>
                        <Input
                          w={'365px'}
                          h={'46px'}
                          placeholder={'örn. fdemirkan4@gmail.com'}
                          color={'#B3CBD4'}
                          type={'email'}
                        />
                      </InputGroup>
                    </VStack>
                  </HStack>
                  <InputGroup w={'746px'} h={'283px'} flexDirection={'column'}>
                    <FormLabel
                      fontSize={'12px'}
                      fontWeight={400}
                      color={'#525252'}
                    >
                      Açıklama
                    </FormLabel>
                    <Textarea
                      placeholder='örn. Merhaba, doge coin hakkında bilgi almak istiyorum, lütfen dönüş yapar mısınız?'
                      color={'#B3CBD4'}
                      h={'283px'}
                      resize={'none'}
                    ></Textarea>
                  </InputGroup>
                  <Checkbox
                    color={'#525252'}
                    fontSize={'14px'}
                    fontWeight={400}
                    alignSelf={'flex-start'}
                  >
                    I agree{' '}
                    <span style={{ color: '#2485E8' }}>User agreement</span>
                  </Checkbox>
                  <Button
                    variant={'globalButton'}
                    w={'136px'}
                    alignSelf={'flex-start'}
                  >
                    Gönder
                  </Button>
                </VStack>
              )}
              <Divider />
              <VStack>
                <Text fontSize={'12px'} fontWeight={400} color={'#666666'}>
                  We are here to help!
                </Text>
                <Button variant={'globalButton'} w={'132px'} h={'32px'} gap={1}>
                  <Image
                    src={'/24-support.png'}
                    alt={'ımg'}
                    w={'24px'}
                    h={'24px'}
                  />
                  <Text fontSize={'12px'}>Live Support</Text>
                </Button>
                <Text fontSize={'14px'} fontWeight={400} color={'#666666'}>
                  Call or chat with a Tech Pro 24/7.
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </Container>
      </VStack>
    </Layout>
  )
}

export default Search

interface itemProps {
  id: number
  headName: string
  description: string
  ımage: string
}

const item: Array<itemProps> = [
  {
    id: 1,
    headName: 'Trade İşlemleri Nasıl Yapılır?',
    description:
      'Litecoin, 2011 yılında eski bir Google çalışanı Charlie Lee tarafından geliştirilmiştir. Temelde Bitcoin ile aynı çalışma prensibine sahip olsa da aralarında bazı farklılıklar...',
    ımage: '/news-1.png'
  },
  {
    id: 2,
    headName: 'Trade İşlemleri Nasıl Yapılır?',
    description:
      'Litecoin, 2011 yılında eski bir Google çalışanı Charlie Lee tarafından geliştirilmiştir. Temelde Bitcoin ile aynı çalışma prensibine sahip olsa da aralarında bazı farklılıklar...',
    ımage: '/news-2.png'
  },
  {
    id: 3,
    headName: 'Trade İşlemleri Nasıl Yapılır?',
    description:
      'Litecoin, 2011 yılında eski bir Google çalışanı Charlie Lee tarafından geliştirilmiştir. Temelde Bitcoin ile aynı çalışma prensibine sahip olsa da aralarında bazı farklılıklar...',
    ımage: '/news-3.png'
  },
  {
    id: 4,
    headName: 'Trade İşlemleri Nasıl Yapılır?',
    description:
      'Litecoin, 2011 yılında eski bir Google çalışanı Charlie Lee tarafından geliştirilmiştir. Temelde Bitcoin ile aynı çalışma prensibine sahip olsa da aralarında bazı farklılıklar...',
    ımage: '/news-4.png'
  }
]
