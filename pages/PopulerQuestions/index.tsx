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
  AccordionPanel
} from '@chakra-ui/react'
import Footer from '@components/Footer/Footer'
import { ChevronDownIcon, SmallCloseIcon } from '@chakra-ui/icons'
export const PopulerQuestions = () => {
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
        py={10}
        display={{ base: 'none', md: 'flex' }}
      >
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Sıkça Sorulan Sorular
          </Text>
          <Text fontSize={'12px'} fontWeight={400} color={'#666666'}>
            Sıkça sorulan sorular içinden ihtiyacın olan cevaba ulaşabilrsin.
          </Text>
        </Container>
      </HStack>
      <VStack bg={'#F7FCFE'} w={'full'} h={'full'} py={10}>
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <HStack alignItems={'flex-start'}>
            <Button
              variant={'globalButton'}
              rounded={10}
              fontSize={{ base: '10px', md: '14px' }}
              onClick={() => setCategoryName('Bilgisayar')}
            >
              Bilgisayar
            </Button>
            <Button
              rounded={10}
              fontSize={{ base: '10px', md: '14px' }}
              onClick={() => setCategoryName('Software Development')}
            >
              Software Development
            </Button>
            <Button
              rounded={10}
              fontSize={{ base: '10px', md: '14px' }}
              onClick={() => setCategoryName('Network')}
            >
              Network
            </Button>
            <Button
              rounded={10}
              fontSize={{ base: '10px', md: '14px' }}
              onClick={() => setCategoryName('Cyber Security')}
            >
              Cyber Security
            </Button>
            <Button
              rounded={10}
              fontSize={{ base: '10px', md: '14px' }}
              onClick={() => setCategoryName('Server Management')}
            >
              Server Management
            </Button>
          </HStack>
          <Text
            fontSize={{ base: '19px', md: '23px' }}
            fontWeight={500}
            color={'#333333'}
          >
            Sıkça Sorulan Sorular
          </Text>
          {item.map(dropDownMenu => (
            <Accordion
              w={'full'}
              alignItems={{ base: 'center', md: 'flex-start' }}
              justifyContent={'center'}
              display={'flex'}
              flexDirection={'column'} 
              allowToggle
              key={dropDownMenu.id}
            >
              <AccordionItem w={{ base: '343px', md: '100%' }}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        w={{ base: '343px', md: 'full' }}
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
                      w={{ base: '343px', md: 'full' }}
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
}

const item: Array<itemProps> = [
  {
    id: 1,
    heading: 'Projenin amacı nedir?',
    description:
      'Bilişim teknolojileri alanında online platformlar aracılığıyla anlık oluşabilecek her türlü problemi uzman ekibimizle çözüme ulaştırmak.'
  },
  { id: 2, heading: 'Nasıl destek hizmeti alabilirim?', description: '' },
  { id: 3, heading: 'Hizmetleriniz neleri kapsıyor? ', description: '' },
  {
    id: 4,
    heading:
      'Uzmanlarınızın kabiliyetlerinden ve çözüm üreteceklerinden nasıl emin olabilirim?',
    description: ''
  },
  { id: 5, heading: 'Uzmanımı kendim seçebilir miyim? ', description: '' },
  {
    id: 6,
    heading: 'Hangi problemlerim için sizden destek alabilirim? ',
    description: ''
  },
  {
    id: 7,
    heading:
      'Kategorilerinizde hizmet almak istediğim başlığı göremiyorum. Ne yapmalıyım?',
    description: ''
  },
  {
    id: 8,
    heading: 'Özel bilgilerimi paylaşırken sizden nasıl emin olacağız?',
    description: ''
  },
  {
    id: 9,
    heading:
      'Sunmuş olduğunuz hizmet paketlerinizin dışında sizden destek hizmeti alabilir miyim? ',
    description: ''
  },
  {
    id: 10,
    heading: 'Destek almak istediğim zamanı belirleyebilir miyim? ',
    description: ''
  },
  {
    id: 11,
    heading: 'Hizmetten memnun kalmazsam hizmeti iade edebilir miyim? ',
    description: ''
  },
  {
    id: 12,
    heading:
      'Destek almak istediğim cihaz ve uygulamalarımın internet bağlantısı gerekli midir? ',
    description: ''
  },
  {
    id: 13,
    heading: 'Offline cihazlarım ve uygulamalarım için destek alabilir miyim? ',
    description: ''
  },
  {
    id: 14,
    heading:
      'Uzmanlar bilgisayarıma veya cep telefonuma uzaktan bağlanabilir mi? ',
    description: ''
  },
  { id: 15, heading: 'Nasıl Ödeme Yapabilirim? ', description: '' },
  { id: 16, heading: 'Kimler uzman olabilir?', description: '' },
  { id: 17, heading: 'Neden uzman olmalıyım?', description: '' }
]
