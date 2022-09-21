import React, { memo } from 'react'
import { HStack, VStack, Text, Image, Flex, Box } from '@chakra-ui/react'
export const DataBase = () => {
  return (
    <Flex w={'full'} h={'full'} flexDirection={'column'}>
      <VStack px={125} py={50}>
        <Text
          fontSize={'23px'}
          fontWeight={500}
          color={'#525252'}
          alignSelf={'flex-start'}
        >
          724DESK Bilgi Bankası
        </Text>
        <HStack w={'full'} justifyContent={'space-between'} gap={10}>
          <Image
            src={'/DataBase-Img.png'}
            alt={'ımg'}
            w={'491px'}
            h={'276px'}
          />
          <VStack alignItems={'flex-start'}>
            <Text fontWeight={500} fontSize={'33px'} color={'#333333'}>
              İşte Dev Balinaların En Çok Trade Et...
            </Text>
            <Text color={'#666666'} fontSize={'14px'} fontWeight={400}>
              Curve DAO Token (CRV), Livepeer (LPT) ve birkaç altcoin projesinde
              devasa balina satın alımlarına şahit oldu. Balinalar CRV’yi en çok
              kullanılan akıllı sözleşmeler listesinde de ilk sıralara çıkardı.
              <br />
              WhaleStates’e göre, “BlueWhale0088” adlı bir ETH balinası, 2.13
              milyon dolar değerinde CRV stokladı. Balina sadece iki işlemde
              824.000 CRV satın aldı ve piyasaya düşerken...
            </Text>
            <Text fontSize={'12px'} color={'#666666'} fontWeight={400}>
              12/04/2022
            </Text>
          </VStack>
        </HStack>
        <HStack w={'full'}>
          {Item.map(items => (
            <Box
              key={items.Key}
              w={'288px'}
              h={'162px'}
              bgImage={items.Image}
              bgPos={'center'}
              bgSize={'cover'}
              display={'flex'}
              py={5}
            >
              <Text
                fontSize={'15px'}
                fontWeight={500}
                alignSelf={'flex-end'}
                w={'full'}
                display={'flex'}
                justifyContent={'center'}
                color={'white'}
              >
                {items.Text}
              </Text>
            </Box>
          ))}
        </HStack>
      </VStack>
      <VStack w={'full'}>
        <HStack w={'full'} display={"flex"} alignSelf={"flex-end"}   pos={"relative"}>
          <Image
            src={'/DataBase-Ellipse.png'}
            alt={'women'}
            w={'491px'} 
            h={'491px'}
            pl={125}  zIndex={1}  
          />
          <Box
            bgImage={'/DataBase-bg.png'}
            w={'1075px'}
            h={'491px'}
                  >
                      <HStack>
                          <Image src={"/message-question.png"} alt={"question"} />
                          <VStack>
                              <Text>Bizi neden seçmelisiniz?</Text>
                              <Text fontSize={"14px"} fontWeight={400}>Sizi anlıyoruz, çünkü aynı dili konuşuyoruz. Sizinle birlikteyiz, çünkü aynı yerde yaşıyoruz. Size destek oluyoruz, çünkü aynı kanalları kullanıyoruz...</Text>
                          </VStack>
                      </HStack>
          </Box>
        </HStack>
      </VStack>
    </Flex>
  )
}

export default memo(DataBase)

interface itemProp {
  Image: string
  Text: string
  Key: string
}

const Item: Array<itemProp> = [
  {
    Image: '/DataBase-1.png',
    Text: 'Snoop Dogg’tan The SandBox...',
    Key: 'one'
  },
  {
    Image: '/DataBase-2.png',
    Text: 'Ünlü Şirket, Bu Altcoin Projesin...',
    Key: 'two'
  },
  {
    Image: '/DataBase-3.png',
    Text: 'Son Bir Haftada En Çok Yükselen...',
    Key: 'three'
  },
  {
    Image: '/DataBase-4.png',
    Text: 'Binance Bu Altcoin’e Yatırım Yap...',
    Key: 'four'
  }
]
