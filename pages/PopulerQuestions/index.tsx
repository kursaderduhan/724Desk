import Layout from '@components/Layout/Layout'
import React, { memo, useState } from 'react'
import {
  HStack,
  Flex,
  VStack,
  Text,
  Container,
  Button,
  ButtonGroup,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  Circle,
  AccordionPanel,
  SimpleGrid
} from '@chakra-ui/react'
import Footer from '@components/Footer/Footer'
import { ChevronDownIcon, SmallCloseIcon } from '@chakra-ui/icons'
export const PopulerQuestions = () => {
  const [categoryName, setCategoryName] = useState<string>('Bilgisayar')
  const change = (itemText:string ) => {
    setCategoryName(itemText)
  }
  return (
    <Layout>
      <HStack
        h={'196px'}
        bg={'#E5EDF4'}
        flexDirection={'column'}
        alignSelf={'flex-end'} 
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        display={{ base: 'none', md: 'flex' }}
      >
        <Container maxW={"1200px"}>
          <Text color={'#333333'} textStyle={"homePageText"}>
            Sıkça Sorulan Sorular
          </Text>
          <Text textStyle={"categoriesText"} color={'#666666'} pt={"3px"} pb={"32px"}>
            Sıkça sorulan sorular içinden ihtiyacın olan cevaba ulaşabilrsin.
          </Text>
        </Container>
      </HStack>
      <VStack bg={'#F7FCFE'} w={'100%'} h={'full'} >
        <Container maxW={"1200px"}>
          <Text textStyle={"deskTokenHead"} pt={{base:"24px",lg:"42px"}}>Kategoriler</Text>
          <SimpleGrid columns={{base:2,md:3,lg:5}} alignItems={'flex-start'} gap={"16px"} pt={"32px"}>
            {buttons.map(items => (
            <Button
              bg={categoryName === items.itemText ? "#F27C00" : "white"}
              key={items.id} color={categoryName === items.itemText ? "white" : "#666666"}
              fontSize={{ base: '10px', md: '14px' }} border={"1px solid"} borderColor={"#D4D4D4"} rounded={"10px"}
              onClick={() => change(items.itemText)} lineHeight={"150%"} letterSpacing={"0.5px"} fontStyle={"normal"}
            >
              {items.itemText}
            </Button>
            ))}
          </SimpleGrid>
          <Text
            fontSize={{ base: '19px', md: '23px' }}
            color={'#525252'} pt={{base:"82px",lg:"120px"}} textStyle={"deskTokenHead"}
          >
            Sıkça Sorulan Sorular
          </Text>
          {item.filter(items => items.category === categoryName).map(dropDownMenu => (
            <Accordion
              w={'100%'}
              alignItems={{ base: 'center', md: 'flex-start' }}
              justifyContent={'center'}
              display={'flex'} pt={"32px"}
              flexDirection={'column'} 
              allowToggle
              key={dropDownMenu.id}
            >
              <AccordionItem w={{ base: '100%', md: '100%' }}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        w={{ base: '100%', md: 'full' }}
                        h={{base:"80px",lg:'60px'}}
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
                          color={'#89969F'} py={2}
                        >
                          {dropDownMenu.heading}
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
                    <AccordionPanel
                      pb={4}
                      bg={'white'}
                      rounded={0}
                      px={10}
                      w={{ base: '100%', md: 'full' }}
                    >
                      {dropDownMenu.description}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          ))}
          <Footer />
        </Container>
      </VStack>
    </Layout>
  )
}

export default memo(PopulerQuestions)

interface itemProps {
  id: number
  heading: string
  description?: string
  category?: string
}

const item: Array<itemProps> = [
  {
    id: 1,
    heading: 'Projenin amacı nedir?',
    description:
      'Bilişim teknolojileri alanında online platformlar aracılığıyla anlık oluşabilecek her türlü problemi uzman ekibimizle çözüme ulaştırmak.',
      category:"Bilgisayar"
  },
  { id: 2, heading: 'Nasıl destek hizmeti alabilirim?', description: '',category:"Bilgisayar" },
  { id: 3, heading: 'Hizmetleriniz neleri kapsıyor? ', description: '',category:"Bilgisayar" },
  {
    id: 4,
    heading:
      'Uzmanlarınızın kabiliyetlerinden ve çözüm üreteceklerinden nasıl emin olabilirim?',
    description: '',
    category:"Bilgisayar"
  },
  { id: 5, heading: 'Uzmanımı kendim seçebilir miyim? ', description: '',category:"Bilgisayar" },
  {
    id: 6,
    heading: 'Hangi problemlerim için sizden destek alabilirim? ',
    description: '',
    category:"Bilgisayar"
  },
  {
    id: 7,
    heading:
      'Kategorilerinizde hizmet almak istediğim başlığı göremiyorum. Ne yapmalıyım?',
    description: '',
    category: "Software Development"
  },
  {
    id: 8,
    heading: 'Özel bilgilerimi paylaşırken sizden nasıl emin olacağız?',
    description: '',
    category: "Cyber Security"
  },
  {
    id: 9,
    heading:
      'Sunmuş olduğunuz hizmet paketlerinizin dışında sizden destek hizmeti alabilir miyim? ',
    description: '',
    category: "Bilgisayar"
  },
  {
    id: 10,
    heading: 'Destek almak istediğim zamanı belirleyebilir miyim? ',
    description: '',
    category: "Bilgisayar"
  },
  {
    id: 11,
    heading: 'Hizmetten memnun kalmazsam hizmeti iade edebilir miyim? ',
    description: '',
    category: "Bilgisayar"
  },
  {
    id: 12,
    heading:
      'Destek almak istediğim cihaz ve uygulamalarımın internet bağlantısı gerekli midir? ',
    description: '',
    category: "Network"
  },
  {
    id: 13,
    heading: 'Offline cihazlarım ve uygulamalarım için destek alabilir miyim? ',
    description: '',
    category: "Network"
  },
  {
    id: 14,
    heading:
      'Uzmanlar bilgisayarıma veya cep telefonuma uzaktan bağlanabilir mi? ',
    description: '',
    category:"Bilgisayar"
  },
  { id: 15, heading: 'Nasıl Ödeme Yapabilirim? ', description: '' },
  { id: 16, heading: 'Kimler uzman olabilir?', description: '' },
  { id: 17, heading: 'Neden uzman olmalıyım?', description: '' }
]

interface buttonProps {
  id: number
  itemText: string
}

const buttons:Array<buttonProps> = [
  {id:1,itemText:"Bilgisayar"},
  {id:2,itemText:"Software Development"},
  {id:3,itemText:"Network"},
  {id:4,itemText:"Cyber Security"},
  {id:5,itemText:"Server Management"},
]