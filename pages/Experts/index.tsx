import React, { memo, useState } from 'react'
import Layout from '@components/Layout/Layout'
import {
  HStack,
  VStack,
  Text,
  Container,
  Image,
  Button,
  SimpleGrid,
  Flex,
  Box,
  InputGroup,
  FormLabel,
  Input,
  Textarea,
  Select,
  InputRightAddon,
  Checkbox
} from '@chakra-ui/react'
import Link from 'next/link'
import Footer from '@components/Footer/Footer'
const Experts = () => {
  const [categoryName, setCategoryName] = useState<string>('Bilgisayar')
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
        py={10} display={{base:"none",lg:"flex"}}
      >
        <Container maxW={"1200px"}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Uzmanlar
          </Text>
          <Text fontSize={'12px'} fontWeight={400} color={'#666666'}>
            İhtiyacınız olan çözümlere ulaşabilir, daha önce yazılmış makaleleri
            inceleyerek sorunlarınıza çözüm bulabilirsiniz.
          </Text>
        </Container>
      </HStack>
      <VStack bg={'#F7FCFE'} w={'full'} h={'full'}>
        <Container maxW={"1200px"}>
          <VStack alignItems={'flex-start'} gap={5} py={10} flexDirection={"column"}>
            <Text fontSize={'23px'} fontWeight={500} color={'#333333'}>
              Uzman Kategorileri
            </Text>
            <HStack alignItems={'flex-start'}>
              <Button
                variant={'globalButton'}
                rounded={10}
                fontSize={'14px'}
                onClick={() => setCategoryName('Bilgisayar')}
              >
                Bilgisayar
              </Button>
              <Button
                rounded={10}
                fontSize={'14px'}
                onClick={() => setCategoryName('Software Development')}
              >
                Software Development
              </Button>
              <Button
                rounded={10}  display={{base:"none",lg:"flex"}}
                fontSize={'14px'}
                onClick={() => setCategoryName('Network')}
              >
                Network
              </Button>
              <Button
                rounded={10} display={{base:"none",lg:"flex"}}
                fontSize={'14px'}
                onClick={() => setCategoryName('Cyber Security')}
              >
                Cyber Security
              </Button>
              <Button
                rounded={10} display={{base:"none",lg:"flex"}}
                fontSize={'14px'}
                onClick={() => setCategoryName('Server Management')}
              >
                Server Management
              </Button>
            </HStack>
            <Text fontSize={'23px'} fontWeight={500} color={'#333333'}>
              <span>{categoryName}</span> Kategorisindeki Uzmanlarımız
            </Text>
            <SimpleGrid columns={{base:2,md:2,lg:4}} gap={4}>
              {Item.map(ıtem => (
                <Box
                  key={ıtem.key}
                  w={{base:"164px",lg:'288px'}}
                  h={{base:"247px",lg:'408px'}}
                  bg={'white'}
                  rounded={10}
                  py={2}
                >
                  <VStack gap={3}>
                    <Flex
                      bgImage={ıtem.Image}
                      bgSize={'cover'}
                      bgPos={'center'}
                      w={{base:"148px",lg:'256px'}}
                      h={{base:"90px",lg:'156px'}}
                      alignItems={'flex-start'}
                      px={2}
                      justifyContent={'space-between'}
                      flexDirection={'column'}
                    >
                      <HStack
                        w={'80px'}
                        h={'30px'}
                        bg={'#F7FCFE'}
                        rounded={10}
                        justifyContent='center'
                        opacity={0.9}
                      >
                        <Text fontSize={'12px'} fontWeight={500}>
                          {ıtem.online == true ? (
                            <span style={{ color: 'green' }}>Online</span>
                          ) : (
                            <span style={{ color: 'red' }}>Offline</span>
                          )}
                        </Text>
                      </HStack>
                      <HStack
                        w={'69px'}
                        h={'30px'}
                        bg={'#F7FCFE'}
                        justifyContent={'center'}
                        display={'flex'}
                        rounded={10}
                        opacity={0.9}
                      >
                        <Text fontSize={'12px'} color={'#2C4EC6'}>
                          {ıtem.sector}
                        </Text>
                      </HStack>
                    </Flex>
                    <Text
                      fontSize={{base:"15px",lg:'19px'}}
                      fontWeight={500}
                      color={'black'}
                      alignSelf={'flex-start'}
                      px='5'
                    >
                      {ıtem.fullName}
                    </Text>
                    <Text
                      fontSize={{base:"12px",lg:'14px'}}
                      fontWeight={400}
                      alignSelf={'flex-start'}
                      px='5'
                      color={'#666666'}
                    >
                      {ıtem.expert}
                    </Text>
                    <Text
                     fontSize={{base:"12px",lg:'14px'}}
                      fontWeight={400} display={{base:"none",lg:"flex"}}
                      color={'#666666'}
                      alignSelf={'flex-start'}
                      px='5'
                    >
                      {ıtem.description}
                    </Text>
                    <HStack w='full' px='5' justifyContent={'space-between'}>
                      <HStack
                        alignItems={'flex-start'}
                        display={'flex'}
                        color={'#666666'}
                      >
                        {ıtem.phone && (
                          <Image
                            src={ıtem.phone}
                            alt={'phone'}
                            w={'24px'}
                            h={'24px'}
                          />
                        )}
                        {ıtem.mail && (
                          <Image
                            src={ıtem.mail}
                            alt={'sms'}
                            w={'24px'}
                            h={'24px'}
                          />
                        )}
                        {ıtem.message && (
                          <Image
                            src={ıtem.message}
                            alt={'sms-2'}
                            w={'24px'}
                            h={'24px'}
                          />
                        )}
                        {ıtem.telegram && (
                          <Image
                            src={ıtem.telegram}
                            alt={'messenger'}
                            w={'24px'}
                            h={'24px'}
                          />
                        )}
                      </HStack>
                      <Text fontSize={'12px'} fontWeight={400} color={'white'}>
                        {ıtem.language}
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
        <VStack gap={5} alignItems={"center"} display={"flex"} flexDirection={"column"}>
          <Text fontSize={{base:"18px",lg:'23px'}} color={'#333333'} fontWeight={500}>
            Bir sorunun mu var? Hemen Ticket Oluştur
          </Text>
          <Flex flexDirection={{base:"column",lg:"row"}}>
            <InputGroup flexDirection={'column'}>
              <FormLabel>
                <Text fontSize={'12px'} color={'#525252'} fontWeight={400}>
                  Make a title for your request
                </Text>
              </FormLabel>
              <Input
                type={'text'}
                placeholder={'e.g. We need a help'}
                w={{base:"320px",lg:'389px'}}
              />
            </InputGroup>
            <InputGroup flexDirection={'column'}>
              <FormLabel>
                <Text fontSize={'12px'} color={'#525252'} fontWeight={400}>
                  E-mail
                </Text>
              </FormLabel>
              <Input
                type={'email'}
                placeholder={'e.g. ferhattunali@gmail.com'}
                w={{base:"320px",lg:'389px'}}
              />
            </InputGroup>
          </Flex>
          <InputGroup flexDirection={'column'} alignItems={"flex-start"} w={{base:"320px",lg:'794px'}}>
            <FormLabel>
              <Text fontSize={'12px'} color={'#525252'} fontWeight={400}>
                Details
              </Text>
            </FormLabel>
            <Textarea
              placeholder='e.g. Can you help me, because i need your help in my situation'
              _placeholder={{ color: '#B3CBD4' }}
              h={'283px'} w={{base:"320px",lg:"794px"}}
              resize={'none'}
            ></Textarea>
          </InputGroup>
          <Flex flexDirection={{base:"column",lg:"row"}} display={{base:"none",lg:"flex"}} gap={"16px"} alignItems={"center"}>
            <InputGroup flexDirection={'column'} w={{base:"320px",lg:'389px'}}>
              <FormLabel>
                <Text fontSize={'12px'} color={'#525252'} fontWeight={400}>
                  Category
                </Text>
              </FormLabel>
              <Select placeholder={'Select option'}>
                <option>Crypto</option>
              </Select>
            </InputGroup>
            <InputGroup flexDirection={'column'} w={{base:"320px",lg:'389px'}}>
              <FormLabel>
                <Text fontSize={'12px'} color={'#525252'} fontWeight={400}>
                  Communication type
                </Text>
              </FormLabel>
              <Select placeholder={'Select option'}>
                <option>Phone</option>
              </Select>
            </InputGroup>
          </Flex>
          <Flex flexDirection={{base:"column",lg:"row"}} alignItems={"center"} w={"full"} gap={"16px"} display={{base:"none",lg:"flex"}}>
            <Flex w={{base:"320px",lg:'full'}} alignItems={"flex-start"} gap={"15px"}>
              <InputGroup flexDirection={'column'} w={{base:"160px",lg:'187px'}} alignSelf={"flex-start"}>
                <FormLabel>
                  <Text fontSize={'12px'} color={'#525252'} fontWeight={400}>
                    Support time
                  </Text>
                </FormLabel>
                <Input
                  type={'date'}
                  placeholder={'Mon. 12:00 - 17:00...'}
                  w={{base:"160px",lg:'187px'}}
                />
              </InputGroup>
              <InputGroup flexDirection={'column'}  w={{base:"160px",lg:'187px'}}>
                <FormLabel>
                  <Text fontSize={'12px'} color={'#525252'} fontWeight={400}>
                    Time zone
                  </Text>
                </FormLabel>
                <Select placeholder={'Select option'}>
                  <option>GMT +2</option>
                </Select>
              </InputGroup>
            </Flex>
            <InputGroup flexDirection={'column'}  w={{base:"160px",lg:'389px'}}>
              <FormLabel>
                <Text fontSize={'12px'} color={'#525252'} fontWeight={400}>
                  Approximate solution process
                </Text>
              </FormLabel>
              <Input placeholder={'3-5 hours'} w={{base:"320px",lg:'389px'}} type={'text'} />
            </InputGroup>
          </Flex>
          <Flex w={"100%"} justifyContent={"flex-start"} display={{base:"none",lg:"flex"}} gap={"16px"}>
            <InputGroup flexDirection={'column'}>
              <FormLabel>
                <Text fontSize={'12px'} color={'#525252'} fontWeight={400}>
                  Priority status
                </Text>
              </FormLabel>
              <Select placeholder={'Select option'} w={{base:"320px",lg:'389px'}}>
                <option>Urgent</option>
              </Select>
            </InputGroup>
            <InputGroup flexDirection={'column'}>
              <FormLabel>
                <Text fontSize={'12px'} color={'#525252'} fontWeight={400}>
                  Support language
                </Text>
              </FormLabel>
              <Select placeholder={'Select option'} w={{base:"320px",lg:'389px'}}>
                <option>Arabic</option>
              </Select>
            </InputGroup>
          </Flex>
          <InputGroup flexDirection={'column'} alignSelf={"flex-start"} w={{base:"320px",lg:'389px'}} display={{base:"none",lg:"flex"}}>
            <FormLabel>
              <Text fontSize={'12px'} color={'#525252'} fontWeight={400}>
                Priority status
              </Text>
            </FormLabel>
            <InputGroup >
              <Input placeholder={'Select option'} w={{ base: "240px", lg: '277px' }} type={'file'} />
              <InputRightAddon w={{base:"80px",lg:'112px'}} fontSize={'14px'} justifyContent={"center"} display={"flex"}>
                Add sound
              </InputRightAddon>
            </InputGroup>
          </InputGroup>
          <Checkbox
            fontSize={'14px'} display={{base:"none",lg:"flex"}}
            color={'#525252'}
            alignSelf={{base:"center",lg:'flex-start'}}
          >
            I agree <span style={{ color: '#2485E8' }}>User agreement</span>{' '}
          </Checkbox>
          <Text
            color={'#2485E8'}
            fontSize='12px'
            fontWeight={400} display={{base:"none",lg:"flex"}}
            alignSelf={"flex-start"}
          >
            Less options
          </Text>
          <Button
            variant={'globalButton'}
            w={{base:"343px",lg:'136px'}}
            fontSize={'13px'}
            alignSelf={{base:"center",lg:'flex-start'}}
          >
            Gönder
          </Button>
        </VStack>
        <Footer />
      </VStack>
    </Layout>
  )
}

export default memo(Experts)

interface categoryProps {
  online: boolean
  sector: string
  Image: string
  fullName: string
  expert: string
  description: string
  phone?: string
  mail?: string
  message?: string
  telegram?: string
  language: string
  key: number
}

const Item: Array<categoryProps> = [
  {
    Image: '/pro-1.png',
    fullName: 'Leslie Alexander',
    online: true,
    sector: 'Yazılım',
    expert: 'Front-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    phone: '/phone.png',
    mail: '/sms.png',
    message: '/messages-2.png',
    telegram: '/messenger.png',
    language: 'English',
    key: 1
  },
  {
    Image: '/pro-2.png',
    fullName: 'Kristin Watson',
    online: true,
    sector: 'Yazılım',
    expert: 'Back-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    phone: '/phone.png',
    mail: '/sms.png',
    telegram: '/messenger.png',
    language: 'English,French',
    key: 2
  },
  {
    Image: '/pro-3.png',
    fullName: 'Darrell Steward',
    online: false,
    sector: 'Tasarım',
    expert: 'Front-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    message: '/messages-2.png',
    telegram: '/messenger.png',
    language: 'English',
    key: 3
  },
  {
    Image: '/pro-4.png',
    fullName: 'Eleanor Pena',
    online: true,
    sector: 'Analiz',
    expert: 'Back-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    phone: '/phone.png',
    message: '/messages-2.png',
    telegram: '/messenger.png',
    language: 'English, Turkish',
    key: 4
  },
  {
    Image: '/pro-1.png',
    fullName: 'Leslie Alexander',
    online: true,
    sector: 'Yazılım',
    expert: 'Front-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    phone: '/phone.png',
    mail: '/sms.png',
    message: '/messages-2.png',
    telegram: '/messenger.png',
    language: 'English',
    key: 5
  },
  {
    Image: '/pro-2.png',
    fullName: 'Kristin Watson',
    online: true,
    sector: 'Yazılım',
    expert: 'Back-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    mail: '/sms.png',
    telegram: '/messenger.png',
    language: 'English,Spanish',
    key: 6
  },
  {
    Image: '/pro-3.png',
    fullName: 'Darrell Steward',
    online: false,
    sector: 'Tasarım',
    expert: 'Front-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    message: '/messages-2.png',
    language: 'English',
    key: 7
  },
  {
    Image: '/pro-4.png',
    fullName: 'Eleanor Pena',
    online: true,
    sector: 'Analiz',
    expert: 'Back-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    phone: '/phone.png',
    telegram: '/messenger.png',
    language: 'English, Spanish',
    key: 8
  },
  {
    Image: '/pro-1.png',
    fullName: 'Leslie Alexander',
    online: true,
    sector: 'Yazılım',
    expert: 'Front-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    phone: '/phone.png',
    mail: '/sms.png',
    message: '/messages-2.png',
    telegram: '/messenger.png',
    language: 'English',
    key: 9
  },
  {
    Image: '/pro-2.png',
    fullName: 'Kristin Watson',
    online: true,
    sector: 'Yazılım',
    expert: 'Back-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    mail: '/sms.png',
    telegram: '/messenger.png',
    language: 'English,Spanish',
    key: 10
  },
  {
    Image: '/pro-3.png',
    fullName: 'Darrell Steward',
    online: false,
    sector: 'Tasarım',
    expert: 'Front-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    message: '/messages-2.png',
    language: 'English',
    key: 11
  },
  {
    Image: '/pro-4.png',
    fullName: 'Eleanor Pena',
    online: true,
    sector: 'Analiz',
    expert: 'Back-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    phone: '/phone.png',
    telegram: '/messenger.png',
    language: 'English, Spanish',
    key: 12
  },
  {
    Image: '/pro-1.png',
    fullName: 'Leslie Alexander',
    online: true,
    sector: 'Yazılım',
    expert: 'Front-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    phone: '/phone.png',
    mail: '/sms.png',
    message: '/messages-2.png',
    telegram: '/messenger.png',
    language: 'English',
    key: 13
  },
  {
    Image: '/pro-2.png',
    fullName: 'Kristin Watson',
    online: true,
    sector: 'Yazılım',
    expert: 'Back-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    mail: '/sms.png',
    telegram: '/messenger.png',
    language: 'English,Spanish',
    key: 14
  },
  {
    Image: '/pro-3.png',
    fullName: 'Darrell Steward',
    online: false,
    sector: 'Tasarım',
    expert: 'Front-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    message: '/messages-2.png',
    language: 'English',
    key: 15
  },
  {
    Image: '/pro-4.png',
    fullName: 'Eleanor Pena',
    online: true,
    sector: 'Analiz',
    expert: 'Back-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor sociis ac pellentesque habitant.',
    phone: '/phone.png',
    telegram: '/messenger.png',
    language: 'English, Spanish',
    key: 16
  }
]
