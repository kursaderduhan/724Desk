import React, { memo } from 'react'
import {
  Flex,
  Box,
  HStack,
  VStack,
  Text,
  Image,
  Button,
  SimpleGrid,
  Container
} from '@chakra-ui/react'
import Layout from '@components/Layout/Layout'
import Link from 'next/link'
export const Crypto = () => {
  return (
    <Layout headerChoose>
      <HStack
        w={'full'}
        h={'450px'}
        bgImage={'/cryptoBg.png'}
        alignItems={'center'}
        bgSize={'cover'}
        bgPos={'center'}
      >
        <VStack justifyContent={'center'} w={'full'} gap={5}>
          <Text fontSize={'46px'} fontWeight={500} color={'#FFFFFF'}>
            Kripto
          </Text>
          <Text
            fontSize={'14px'}
            fontWeight={400}
            color={'#EAEAEA'}
            textAlign={'center'}
            lineHeight={'150%'}
          >
            Uzmanlığınızı paylaşmak birçok ihtiyaç sahibinin bilgi
            birikimizinden <br /> faydalanmasını sağlayacaktır. Böylece gelir
            elde ederken insanlara yardımcı <br /> olmanın mutluluğunu yaşayın.
          </Text>
          <Button
            variant={'globalButton'}
            fontSize={'15px'}
            w={'267px'}
            h={'47px'}
          >
            Hemen Destek Talebi Oluştur
          </Button>
        </VStack>
      </HStack>
      <HStack py={50} w={'full'} justifyContent='center'>
        <Box w={'full'} h={'188px'} bg={'#E9F2F5'} pos={'absolute'}></Box>
        <Image
          src={'/cryptoPhone.png'}
          alt={'phone'}
          w={'444px'}
          h={'545px'}
          zIndex={1}
        />
        <VStack alignItems={'flex-start'} zIndex={1}>
          <Text fontSize={'19px'} fontWeight={500} color={'black'}>
            Kripto Alanında Bilgi Alın ve İşlem Yapın
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={'#433F3F'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
            consectetur <br />
            quisque eget adipiscing vitae in. Tincidunt platea etiam pulvinar
            pellentesque <br /> nulla sit sed.
          </Text>
        </VStack>
      </HStack>
      <VStack w='full' h={'1648px'} bg={'#E9F2F5'} py={50}>
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <Text fontSize={'33px'} fontWeight={500} color={'black'}>
            Kripto Kategorileri
          </Text>
          <SimpleGrid columns={3} spacing={5} py={50}>
            {Item.map(item => (
              <Link href={item.link} key={item.key}>
                <VStack
                  w={'390px'}
                  h={'450px'}
                  bg={'white'}
                  cursor={'pointer'}
                  transform={'auto'}
                  _hover={{ scale: '1.01', opacity: '0.7' }}
                  rounded={5}
                >
                  <Image src={item.Image} alt={'ımg'} w={'full'} h={'238px'} />
                  <VStack w={'full'} alignItems={'flex-start'} px={5} py={10}>
                    <Text fontSize={'23px'} fontWeight={500} color={'black'}>
                      {item.headName}
                    </Text>
                    <Text fontSize={'12px'} fontWeight={400} color={'#959595'}>
                      {item.description}
                    </Text>
                  </VStack>
                </VStack>
              </Link>
            ))}
          </SimpleGrid>
        </Container>
      </VStack>
      <VStack w={'full'} h={'full'} py={50}>
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <VStack
            w={'full'}
            h={'300px'}
            bgImage={'/cryptoLp.png'}
            bgSize={'cover'}
            bgPos={'center'}
            alignItems={'flex-start'}
            justifyContent={'flex-end'}
            p={10}
            borderRadius={'16px'}
          >
            <Text fontSize={'23px'} fontWeight={500} color={'white'}>
              Güvenli Bir Şekilde İşlem Yapın
            </Text>
            <Text fontSize={'14px'} fontWeight={400} color={'#EFECEC'}>
              Oluşturmuş olduğumuz güvenlik alt yapısı sayesinde işlemlerinizi
              sorunsuz ve güvenli bir şekilde tamamlayabilirsiniz.
            </Text>
          </VStack>
          <VStack gap={3} py={50}>
            <Image src={'cryptoLp-2.png'} alt={'ımg'} w={'389px'} h={'200px'} />
            <Text fontSize={'23px'} fontWeight={500} color={'black'}>
              Farklı Lokasyon ve Diller ile Çözüm Arayın
            </Text>
            <Text fontSize={'14px'} fontWeight={400} color={'#433F3F'} textAlign={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum <br/>
              consectetur quisque eget adipiscing vitae in. Tincidunt platea <br/>
              etiam pulvinar pellentesque nulla sit sed.
            </Text>
          </VStack>
        </Container>
      </VStack>
    </Layout>
  )
}

export default memo(Crypto)

interface itemProp {
  Image: string
  link: string
  headName: string
  description: string
  key: number
}

const Item: Array<itemProp> = [
  {
    Image: '/crypto-1.png',
    link: '',
    headName: 'NFT',
    description:
      'Takas edilemez jeton, ya da İngilizcedeki popüler ismiyle non-fungible token, dijital bir varlığın benzersiz olduğunu ve bu nedenle birbirinin yerine geçemeyeceğini onaylayan, blok zinciri adı verilen bir dijital defterde depolanan veri birimidir.',
    key: 1
  },
  {
    Image: '/crypto-2.png',
    link: '',
    headName: 'Blockchain',
    description:
      'Blockchain yani blok zinciri, halka açık blok olarak da bilinen işlem kayıtlarını, eşler arası düğümler aracılığıyla birbirine bağlanan bir ağda “zincir” olarak bilinen çeşitli veri tabanlarında saklayan bir yapıdır.',
    key: 2
  },
  {
    Image: '/crypto-3.png',
    link: '',
    headName: 'Dao',
    description:
      'Merkezi olmayan otonom organizasyon yani, DAO; adından anlaşılacağı üzere, herhangi bir otoriteye bağlı olmadan, bilgisayar kodları tarafından yönetilen bir sistemdir. ',
    key: 3
  },
  {
    Image: '/crypto-4.png',
    link: '',
    headName: 'Borsalar',
    description:
      'Yatırımcıların geleneksel para birimleri veya diğer dijital para birimleri gibi diğer varlıklar için kripto para birimleri ve dijital para birimleri ticareti yapmasına olanak tanıyan platformlardır.',
    key: 4
  },
  {
    Image: '/crypto-5.png',
    link: '',
    headName: 'GameFi',
    description:
      'GameFi, oyna-kazan türündeki kripto oyunlarını oynayarak kâr elde edilmesi amacıyla finansal sistemlerin oyunlaştırılmasını ifade eder.',
    key: 5
  },
  {
    Image: '/crypto-6.png',
    link: '',
    headName: 'Cüzdanlar',
    description:
      'Kripto para cüzdanları, halka açık ve özel anahtarları depolayan, kripto para transferine izin veren fiziksel, yazılım veya donanım araçlardır.',
    key: 6
  },
  {
    Image: '/crypto-7.png',
    link: '',
    headName: 'DeFi',
    description:
      'Merkeziyetsiz Finans, süreç içerisinde hiçbir merkezi bir yapı barındırmayan ve tamamiyle blokzinciri üzerinde çalışan yazılımların işleyişi yönettiği finans ekosistemidir.',
    key: 7
  },
  {
    Image: '/crypto-8.png',
    link: '',
    headName: 'Farming',
    description:
      'Farming, kripto para ekosisteminde yüksek getiri veya ödül elde etmek için kripto para stake etme veya ödünç verme işlemine deniyor.',
    key: 8
  },
  {
    Image: '/crypto-9.png',
    link: '',
    headName: 'Staking',
    description:
      'Staking, bir kripto para zincirinin operasyonlarını desteklemek için kripto paraların sanal cüzdanda belirli süre kilitleyip harcamadan veya transfer etmeden tutma işlemidir.',
    key: 9
  }
]
