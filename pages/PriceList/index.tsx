import React, { memo,useState ,useContext} from 'react'
import Layout from '@components/Layout/Layout'
import {
  HStack,
  Container,
  Text,
  VStack,
  Image,
  Button,
  ListItem,
  Divider,
  UnorderedList,
  useMediaQuery,
  Flex
} from '@chakra-ui/react'
import Link from 'next/link'
import Footer from '@components/Footer/Footer'

 
export const PriceList = () => {
  const [choose, setChoose] = useState<number>()
  const [smallScreen] = useMediaQuery("(max-width:572px)")
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
        py={10} display={{base:"none",md:"flex"}}
      > 
        <Container maxW={"1200px"}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Fiyat Listesi
          </Text>
          <Text fontSize={'12px'} fontWeight={'400'} color={'#959595'}>
            Seçeneklerimiz arasından sana en uygun olan hizmet paketini seçim
            hemen başlayabilirsin!
          </Text>
        </Container>
      </HStack>
      <VStack bg={'#F7FCFE'} w={'full'}>
        <Container maxW={"1200px"}>
          <VStack w={'full'} alignItems={'flex-start'}>
            {Item.map(item => (
              <Flex flexDirection={{ base: "column", md: "row" }} key={item.key} gap={{ base: 2, md: 20 }} py={{base:1,md:50}}>
                <VStack
                  w={{base:"343px",md:'288px'}}
                  h={{base:"424px",md:'500px'}}
                  bg={'white'}
                  alignItems={{base:"center",md:'flex-start'}}
                  p={5}
                  gap={{base:1,md:5}} rounded={5}
                >
                  <Image src={item.Image} alt={'ımg'} w={'82px'} h={'82px'} />
                  <Text fontSize={'33px'} color={'#C4C4C4'} fontWeight={400}>
                    {item.time}
                  </Text>
                  <Text fontSize={'23px'} color={'#333333'} fontWeight={400}>
                    {item.price}
                  </Text>
                  <VStack w={'full'}>
                    <HStack
                      w={'full'}
                      justifyContent={'space-between'}
                      fontSize={'15px'}
                    >
                      <Text color={'#666666'} fontWeight={400}>
                        Çözüm
                      </Text>
                      <Text color={'#333333'} fontWeight={500}>
                        {item.result}
                      </Text>
                    </HStack>
                    <HStack
                      w={'full'}
                      justifyContent={'space-between'}
                      fontSize={'15px'}
                    >
                      <Text color={'#666666'} fontWeight={400}>
                        Kategori
                      </Text>
                      <Text color={'#333333'} fontWeight={500}>
                        {item.category}
                      </Text>
                    </HStack>
                    <HStack
                      w={'full'}
                      justifyContent={'space-between'}
                      fontSize={'15px'}
                    >
                      <Text color={'#666666'} fontWeight={400}>
                        Ticket Sayısı
                      </Text>
                      <Text color={'#333333'} fontWeight={500}>
                        {item.ticketNumber}
                      </Text>
                    </HStack>
                    {item.supportNumber && (
                      <HStack
                        w={'full'}
                        justifyContent={'space-between'}
                        fontSize={'15px'}
                      >
                        <Text color={'#666666'} fontWeight={400}>
                          Destek Sayısı
                        </Text>
                        <Text color={'#333333'} fontWeight={500}>
                          {item.supportNumber}
                        </Text>
                      </HStack>
                    )}
                  </VStack>
                  <Link href={"/Payment"} onClick={() => setChoose(item.key) }>
                  <Button
                    color={smallScreen ? "white" :'#F27C00'}
                    boxShadow={'md'}
                    _hover={{ opacity: 0.8 }}
                    alignSelf={'center'}
                    w={'163px'} variant={smallScreen ? "globalButton" : ""}
                  >
                    Paketi Seç
                    </Button>
                    </Link>
                </VStack>
                <VStack w={{base:"343px",md:'500px'}} alignItems={'flex-start'}>
                  <HStack>
                    <Image src={item.Image} alt={'ımg'} w={'42px'} h={'42px'} />
                    <Text fontSize={'19px'} color={'black'} fontWeight={500}>
                      {item.timeLong}
                    </Text>
                  </HStack>
                  <Text fontSize={'14px'} color={'#666666'} fontWeight={400}>
                    {item.description}
                  </Text>
                  {item.descListItem && (
                    <UnorderedList>
                      <ListItem
                        fontSize={'14px'}
                        color={'#666666'}
                        fontWeight={400} ml={5}
                      >
                        {item.descListItem}
                      </ListItem>
                    </UnorderedList>
                  )}
                  <Divider />
                  <HStack w={'250px'}>
                    <Text fontSize={'14px'} color={'#666666'} fontWeight={400}>
                      Çözüm Sayısı:
                    </Text>
                    <Text fontSize={'15px'} color={'#333333'} fontWeight={500}>
                      {item.resultRight}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={'14px'} color={'#666666'} fontWeight={400}>
                      Kategori:
                    </Text>
                    <Text fontSize={'15px'} color={'#333333'} fontWeight={500}>
                      {item.categoryRight}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={'14px'} color={'#666666'} fontWeight={400}>
                      Ticket:
                    </Text>
                    <Text fontSize={'15px'} color={'#333333'} fontWeight={500}>
                      {item.ticketNumber}
                    </Text>
                  </HStack>
                  {item.supportNumber && (
                    <HStack>
                      <Text
                        fontSize={'14px'}
                        color={'#666666'}
                        fontWeight={400}
                      >
                        Destek:
                      </Text>
                      <Text
                        fontSize={'15px'}
                        color={'#333333'}
                        fontWeight={500}
                      >
                        {item.supportNumber}
                      </Text>
                    </HStack>
                  )}
                  <Link href={"/Payment"} onClick={() => setChoose(item.key) } >
                  <Button
                    variant={'globalButton'}
                    w={'200px'}
                    fontSize={'13px'} display={{base:"none",md:"flex"}}
                  >
                    Paketi Seç
                    </Button>
                    </Link>
                </VStack>
              </Flex>
            ))}
          </VStack>
          <Footer/>
        </Container>
      </VStack>
    </Layout>
  )
}

export default memo(PriceList)

interface itemProp {
  Image: string
  time: string
  timeLong: string
  description: string
  descListItem?: string
  price: string
  result: string
  resultRight: string
  category: string
  categoryRight: string
  ticketNumber: string
  supportNumber?: string
  populer: boolean
  key: number
}

const Item: Array<itemProp> = [
  {
    Image: '/clock.png',
    time: 'Saatlik',
    timeLong: 'Saatlik Problem Çözümü',
    description:
      'Her türlü hizmetimizi zaman bazlı olarak satın almak mümkündür. Talep formumuzda kaç saatlik hizmet alınmak istendiğiyle ilgili detay belirtilmelidir. Ortalama %5’lik süre farkları tolare edilecektir. Ekstra süre gerektiren durumlarda süre uzatması yapılabilmektedir.',
    price: '$ / Saat',
    result: 'Tümü',
    resultRight: 'Tüm Çözümler',
    category: 'Tümü',
    categoryRight: 'Tüm Kategoriler',
    ticketNumber: 'Limitsiz',
    populer: false,
    key: 1
  },
  {
    Image: '/timer-start-1.png',
    time: 'Tek Seferlik',
    timeLong: 'Tek Seferlik Problem Çözümü',
    description:
      'Herhangi bir kategorimizde problem çözümü için satın alınabilecek. 1 adetlik destek talebi açabilme hakkı içerecek. Ticket’ın oluşturulması ile birlikte bu hak kullanılmış olacak. Bu hakkı TL veya dolar cinsinden para ile de tutabiliriz, satın almadan sonra ticket adet hakkı şeklinde de tanımlayabiliriz. Geliştirme aşamasında ekiple karar verilecek. ',
    price: '$19.99/Tek sefer',
    result: 'Bir',
    resultRight: 'Tüm Çözümler',
    category: 'Bir',
    categoryRight: 'Tüm Kategoriler',
    ticketNumber: 'Bir kere',
    supportNumber: 'Bir kere',
    populer: true,
    key: 2
  },
  {
    Image: '/calendar.png',
    time: '6 Aylık',
    timeLong: '6 Aylık Problem Çözümü',
    description:
      'Bir ay boyunca sınırsız hizmet alma opsiyonu sağlayacak. Bazı kategorileri bu sınırsız hizmetler için sınırlayabiliriz. Alt yapımızda seçenek olarak bulunduracağız. Ancak uygulama sürecinde detayına karar vereceğiz.',
    descListItem:
      'Tüm kategorilerimiz için ve online tüm servisleriniz için destek hizmetini içerir.',
    price: '$59.99/Ay',
    result: 'Tümü',
    resultRight: 'Tüm Çözümler',
    category: 'Tümü',
    categoryRight: 'Tüm Kategoriler',
    ticketNumber: 'Limitsiz',
    supportNumber: '30 kere',
    populer: false,
    key: 3
  },
  {
    Image: '/calendar-1.png',
    time: 'Yıllık',
    timeLong: 'Yıllık Problem Çözümü',
    description:
      'Tüm yıl boyunca her türlü konuda destek alınabilecek bir hizmet paketimizdir. Paketlerin kapsayacağı kategorileri sınırlayabiliriz. Proje detayları netleştikçe ve ilerleyen süreçlerde bu konularda gerekli nihai kararı vermiş olacağız.',
    descListItem:
      'Tüm kategorilerimiz için ve online tüm servisleriniz için destek hizmetini içerir.',
    price: '$99.99/Ay',
    result: 'Tümü',
    resultRight: 'Tüm Çözümler',
    category: 'Tümü',
    categoryRight: 'Tüm Kategoriler',
    ticketNumber: 'Limitsiz',
    supportNumber: '30 kere',
    populer: false,
    key: 4
  }
]
