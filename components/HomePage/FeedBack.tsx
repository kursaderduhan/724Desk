import React, { memo } from 'react'
import {
  Flex,
  VStack,
  HStack,
  Text,
  Image,
  Avatar,
  Box,
  Icon,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Circle
} from '@chakra-ui/react'
import { IoIosArrowDropdown } from 'react-icons/io'
import { ChevronDownIcon, SmallCloseIcon } from '@chakra-ui/icons'

export const FeedBack = () => {
  return (
    <Flex
      w={'full'}
      flexDirection={'column'}
      h={'full'}
      py={100}
      bg={'#E5E5E5'}
      alignItems={'flex-start'}
      gap={5}
    >
      <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
        <Text fontWeight={500} fontSize={'23px'} color={'#525252'}>
          Geri Dönüşler
        </Text>
      </Container>
      <HStack w={'full'} pl={'180px'}>
        {Item.map(item => (
          <Flex
            key={item.key}
            bg={'#FFFFFF'}
            w={'277px'}
            h={'214px'}
            rounded={5}
          >
            <VStack w={'full'} p={6}>
              <HStack w={'full'} justifyContent={'space-between'}>
                <Avatar src={item.Image} size={'lg'} />
                <VStack alignItems={'flex-end'}>
                  <Text fontSize={'15px'} color={'#333333'} fontWeight={500}>
                    {item.name}
                  </Text>
                  <Text fontSize={'12px'} color={'#959595'} fontWeight={400}>
                    {item.job}
                  </Text>
                  <Text fontSize={'10px'} color={'#959595'} fontWeight={500}>
                    {item.time}
                  </Text>
                </VStack>
              </HStack>
              <Text fontSize={'12px'} fontWeight={400} color={'#333333'}>
                {item.feedBack}
              </Text>
              <HStack w={'full'} justifyContent={'space-between'}>
                <HStack>
                  <Image src={item.star} alt={'star'} w={'16px'} h={'16px'} />
                  <Image src={item.star} alt={'star'} w={'16px'} h={'16px'} />
                  <Image src={item.star} alt={'star'} w={'16px'} h={'16px'} />
                  <Image src={item.star} alt={'star'} w={'16px'} h={'16px'} />
                  <Image
                    src={item.starEmpty}
                    alt={'star'}
                    w={'16px'}
                    h={'16px'}
                  />
                </HStack>
                <HStack>
                  <Image
                    src={item.heartIcon}
                    alt={'heart'}
                    w={'16px'}
                    h={'16px'}
                  />
                  <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                    {item.likeCounter}
                  </Text>
                </HStack>
              </HStack>
            </VStack>
          </Flex>
        ))}
      </HStack>
      <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
        <Text fontWeight={500} fontSize={'23px'} color={'#525252'} py={10}>
          Sıkça Sorulan Sorular
        </Text>
        <Accordion w={'full'} alignItems={'flex-start'} allowToggle>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    w={'full'}
                    h={'60px'}
                    bg={'white'}
                    rounded={0}
                    justifyContent={'space-between'}
                    px={10}
                  >
                    <Box
                      flex='1'
                      textAlign='left'
                      fontSize={'15px'}
                      fontWeight={400}
                      color={'#89969F'}
                    >
                      Projenin amacı nedir?
                    </Box>
                    {isExpanded ? (
                      <Circle border={'1px solid'} borderColor={'gray'}>
                        <SmallCloseIcon fontSize='18px' color={'gray'} />{' '}
                      </Circle>
                    ) : (
                      <Circle border={'1px solid'} borderColor={'gray'}>
                        <ChevronDownIcon fontSize='18px' color={'gray'} />
                      </Circle>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg={'white'} rounded={0} px={10}>
                  Bilişim teknolojileri alanında online platformlar aracılığıyla
                  anlık oluşabilecek her türlü problemi uzman ekibimizle çözüme
                  ulaştırmak.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <br/>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    w={'full'}
                    h={'60px'}
                    bg={'white'}
                    rounded={0}
                    justifyContent={'space-between'}
                    px={10}
                  >
                    <Box
                      flex='1'
                      textAlign='left'
                      fontSize={'15px'}
                      fontWeight={400}
                      color={'#89969F'}
                    >
                      Nasıl destek hizmeti alabilirim?
                    </Box>
                    {isExpanded ? (
                      <Circle border={'1px solid'} borderColor={'gray'}>
                        <SmallCloseIcon fontSize='18px' color={'gray'} />{' '}
                      </Circle>
                    ) : (
                      <Circle border={'1px solid'} borderColor={'gray'}>
                        <ChevronDownIcon fontSize='18px' color={'gray'} />
                      </Circle>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg={'white'} rounded={0} px={10}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam minima beatae accusamus id laudantium culpa excepturi,
                  facilis numquam officiis rerum? Distinctio dignissimos
                  necessitatibus pariatur delectus consectetur corporis
                  incidunt, dolores dicta.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <br/>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    w={'full'}
                    h={'60px'}
                    bg={'white'}
                    rounded={0}
                    justifyContent={'space-between'}
                    px={10}
                  >
                    <Box
                      flex='1'
                      textAlign='left'
                      fontSize={'15px'}
                      fontWeight={400}
                      color={'#89969F'}
                    >
                      Hizmetleriniz neleri kapsıyor?
                    </Box>
                    {isExpanded ? (
                      <Circle border={'1px solid'} borderColor={'gray'}>
                        <SmallCloseIcon fontSize='18px' color={'gray'} />{' '}
                      </Circle>
                    ) : (
                      <Circle border={'1px solid'} borderColor={'gray'}>
                        <ChevronDownIcon fontSize='18px' color={'gray'} />
                      </Circle>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg={'white'} rounded={0} px={10}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam minima beatae accusamus id laudantium culpa excepturi,
                  facilis numquam officiis rerum? Distinctio dignissimos
                  necessitatibus pariatur delectus consectetur corporis
                  incidunt, dolores dicta.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <br/>
          <AccordionItem >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    w={'full'}
                    h={'60px'}
                    bg={'white'}
                    rounded={0}
                    justifyContent={'space-between'}
                    px={10} 
                  >
                    <Box
                      flex='1'
                      textAlign='left'
                      fontSize={'15px'}
                      fontWeight={400}
                      color={'#89969F'}
                    >
                      Uzmanlarınızın kabiliyetlerinden ve çözüm üreteceklerinden
                      nasıl emin olabilirim?
                    </Box>
                    {isExpanded ? (
                      <Circle border={'1px solid'} borderColor={'gray'}>
                        <SmallCloseIcon fontSize='18px' color={'gray'} />{' '}
                      </Circle>
                    ) : (
                      <Circle border={'1px solid'} borderColor={'gray'}>
                        <ChevronDownIcon fontSize='18px' color={'gray'} />
                      </Circle>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg={'white'} rounded={0} px={10}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam minima beatae accusamus id laudantium culpa excepturi,
                  facilis numquam officiis rerum? Distinctio dignissimos
                  necessitatibus pariatur delectus consectetur corporis
                  incidunt, dolores dicta.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}

export default memo(FeedBack)

interface ıtemProps {
  Image: string
  name: string
  job: string
  time: string
  feedBack: string
  star: string
  starEmpty: string
  heartIcon: string
  likeCounter: number
  key: number
}

const Item: Array<ıtemProps> = [
  {
    Image: 'https://bit.ly/kent-c-dodds',
    name: 'Micheal Doe',
    job: 'CTO, Influencer',
    time: '15 Hours ago',
    feedBack:
      'Uzmanımız yaşadığım probleme anında çözüm buldu. Bu kadar kısa sürede olacağını hiç beklemiyord...',
    star: '/star.png',
    starEmpty: '/star-empty.png',
    heartIcon: '/heart.png',
    likeCounter: 163,
    key: 1
  },
  {
    Image: 'https://bit.ly/ryan-florence',
    name: 'Jane Doe',
    job: 'CEO, Finans Advisor',
    time: '15 Hours ago',
    feedBack:
      'Bu aldığım ikinci çözüm hizmeti. İlki gibi ikincisinden de çok memnun kaldım. Böyle bir platforma gerçekt...',
    star: '/star.png',
    starEmpty: '/star-empty.png',
    heartIcon: '/heart.png',
    likeCounter: 163,
    key: 2
  },
  {
    Image: 'https://bit.ly/prosper-baba',
    name: 'Victor Doe',
    job: 'CEO, Developer',
    time: '15 Hours ago',
    feedBack:
      "İstediğim saatlerde hizmet alabilmiş olmam harika. 724Desk'i bütün arkadaşlarıma önereceğim.",
    star: '/star.png',
    starEmpty: '/star-empty.png',
    heartIcon: '/heart.png',
    likeCounter: 163,
    key: 3
  },
  {
    Image: 'https://bit.ly/code-beast',
    name: 'Lucy Doe',
    job: 'CFO, Advisor',
    time: '15 Hours ago',
    feedBack:
      'Bir sorunuma çözüm bulurum diyordum ama hizmet verilen o kadar kategori var ki artık tek problemim hi..',
    star: '/star.png',
    starEmpty: '/star-empty.png',
    heartIcon: '/heart.png',
    likeCounter: 163,
    key: 4
  },
  {
    Image: 'https://bit.ly/sage-adebayo',
    name: 'George DOE',
    job: 'CEO, ',
    time: '10 Hours ago',
    feedBack:
      'Uygun fiyata gerçekten işinin ehli kişilerden destek alabilmek çok güzel. Bir başka problem yaşadığımda...',
    star: '/star.png',
    starEmpty: '/star-empty.png',
    heartIcon: '/heart.png',
    likeCounter: 163,
    key: 5
  }
]
