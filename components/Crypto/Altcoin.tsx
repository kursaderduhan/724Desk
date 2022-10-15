import React, { memo,useState } from 'react'
import { VStack, HStack, Text, Image, Container,Flex } from '@chakra-ui/react'
import { HiScale } from 'react-icons/hi'
export const Altcoin = () => {
  const [page,setPage] = useState<string>("page")
  return (
    <VStack bg={'#F7FCFE'} w={'full'} py={20}>
      <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
        {page == "page" &&
          <Flex gap={5}>
            <VStack
              w={'288px'}
              h={'325px'}
              textStyle={'cryptoPageText'}
              bg={'white'}
              rounded={5}
              alignItems={'flex-start'}
              p={5}
            >
              <HStack>
                <Image
                  src={'/bitcoin-convert.png'}
                  alt={'ımg'}
                  w={'24px'}
                  h={'24px'}
                />
                <Text fontSize={'19px'} color={'#F27C00'} fontWeight={500}>
                  Kripto
                </Text>
              </HStack>
              <VStack alignItems={'flex-start'} pl={8}>
                <Text>Altcoin</Text>
                <Text color={'#666666'} pl={5}>
                  Litecoin
                </Text>
                <Text color={'#666666'} pl={5}>
                  Smooth Love Potion
                </Text>
                <Text color={'#666666'} pl={5}>
                  KYC Nedir?
                </Text>
                <Text>Blockchain</Text>
                <Text>Kriptografi</Text>
                <Text>Kriptografi</Text>
                <Text>Metaverse</Text>
              </VStack>
            </VStack>
            <VStack gap={5}>
              {item.map(ıtem => (
                <HStack
                  key={ıtem.id}
                  w={'896px'}
                  h={'183px'}
                  bg={'white'} border={"1px solid"} borderColor={"transparent"}
                  rounded={10} cursor={"pointer"} _hover={{ border: "1px solid", borderColor: "lightblue" }} onClick={() => setPage(ıtem.headName)}
                >
                  <VStack alignItems={"flex-start"} gap={3} pl={5}>
                    <Text fontSize={'19px'} color={'#333333'} fontWeight={500}>
                      {ıtem.headName}
                    </Text>
                    <Text fontSize={'12px'} color={'#959595'} fontWeight={400}>
                      {ıtem.description}
                    </Text>
                    <HStack w={"full"} justifyContent={"space-between"}>
                      <HStack>
                        <Image
                          src={'/pen1.png'}
                          alt={'pen'}
                          w={'24px'}
                          h={'24px'}
                        />
                        <Text
                          fontSize={'14px'}
                          fontWeight={400}
                          color={'#666666'}
                        >
                          {ıtem.writer}
                        </Text>
                      </HStack>
                      <HStack>
                        <Image
                          src={'/book.png'}
                          alt={'book'}
                          w={'24px'}
                          h={'24px'}
                        />
                        <Text
                          fontSize={'14px'}
                          fontWeight={400}
                          color={'#666666'}
                        >
                          {ıtem.reading}
                        </Text>
                      </HStack>
                      <HStack>
                        <Image
                          src={'/calendar1.png'}
                          alt={'calendar'}
                          w={'24px'}
                          h={'24px'}
                        />
                        <Text
                          fontSize={'14px'}
                          fontWeight={400}
                          color={'#666666'}
                        >
                          {ıtem.date}
                        </Text>
                      </HStack>
                      <HStack>
                        <Image
                          src={'/facebook-soft.png'}
                          alt={'facebook'}
                          w={'24px'}
                          h={'24px'}
                        />
                        <Image
                          src={'/twitter-soft.png'}
                          alt={'twitter'}
                          w={'24px'}
                          h={'24px'}
                        />
                        <Image
                          src={'/whatsapp(1).png'}
                          alt={'whatsapp'}
                          w={'24px'}
                          h={'24px'}
                        />
                        <Image
                          src={'/link.png'}
                          alt={'link'}
                          w={'24px'}
                          h={'24px'}
                        />
                      </HStack>
                    </HStack>
                  </VStack>
                  <Image
                    src={ıtem.ımage}
                    alt={'ımg'}
                    w={'200px'}
                    h={'183px'}
                    alignSelf={'flex-end'} rounded={10}
                  />
                </HStack>
              ))}
            </VStack>
          </Flex>
        }{page == "Airdrop nedir?" && 
          <>
          {item.map(items => (
            <VStack key={items.id}>
              <HStack>
                <VStack>
                  <Text>{items.headName}</Text>
                </VStack>
                <VStack></VStack>
              </HStack>
            </VStack>
          ))}
          </>}
      </Container>
    </VStack>
  )
}

export default memo(Altcoin)

interface itemProp {
  headName: string
  description: string
  writer: string
  reading: number
  date: string
  ımage: string
  id: number
}

const item: Array<itemProp> = [
  {
    headName: 'Airdrop nedir?',
    description:
      'Curve DAO Token (CRV), Livepeer (LPT) ve birkaç altcoin projesinde devasa balina satın alımlarına şahit oldu. Balinalar CRV’yi en çok kullanılan akıllı sözleşmeler listesinde de ilk sıralara çıkardı.',
    writer: 'Fatih Demirkan',
    reading: 1142,
    date: '16/12/2021 21:43',
    ımage: '/crypto1.png',
    id: 1
  },
  {
    headName: 'Akıllı Kontrat Nedir?',
    description:
      'Son dönemde metaverse’ün artan popülaritesi ile birlikte en dikkat çeken projeler arasında şüphesiz The SandBox yer alıyor. Bunu projenin yerel token’ı olan SAND’ın yıl boyuncaki performan...',
    writer: 'Fatih Demirkan',
    reading: 1142,
    date: '16/12/2021 21:43',
    ımage: '/crypto2.png',
    id: 2
  },
  {
    headName: 'Blockchain',
    description:
      'Singapur merkezli bir hedge fonu olan Three Arrows Capital, Perşembe günü yaklaşık 101 milyon dolara 31.345 Ethereum (ETH) daha satın aldı. Blockchain analitik platformu Nansen, bir BlockFi...',
    writer: 'Fatih Demirkan',
    reading: 1142,
    date: '16/12/2021 21:43',
    ımage: '/crypto3.png',
    id: 3
  },
  {
    headName: 'Kripto Cüzdanlar',
    description:
      'En büyük kripto para listeleme platformlarından biri olan CoinGecko’dan alınan verilere göre, son bir haftada en çok yükselen kripto paralar şunlar: Son günlerin parlayan yıldızı Xido Finance...',
    writer: 'Fatih Demirkan',
    reading: 1142,
    date: '16/12/2021 21:43',
    ımage: '/crypto4.png',
    id: 4
  },
  {
    headName: 'DeFi',
    description:
      'Son Ronin köprü saldırısı sırasında çalınan fonları geri almak amacıyla Binance, Axie Infinity’nin arkasında geliştirici ekip Sky Mavis’in 150 milyon dolarlık finansman turuna öncülük ettiğini açıkladı.',
    writer: 'Fatih Demirkan',
    reading: 1142,
    date: '16/12/2021 21:43',
    ımage: '/crypto5.png',
    id: 5
  },
  {
    headName: 'GameFi',
    description:
      'Curve DAO Token (CRV), Livepeer (LPT) ve birkaç altcoin projesinde devasa balina satın alımlarına şahit oldu. Balinalar CRV’yi en çok kullanılan akıllı sözleşmeler listesinde de ilk sıralara çıkardı.',
    writer: 'Fatih Demirkan',
    reading: 1142,
    date: '16/12/2021 21:43',
    ımage: '/crypto1.png',
    id: 6
  },
  {
    headName: 'Kripto Dolandırıcılığı İle Nasıl Mücadele Edilir?',
    description:
      'Son dönemde metaverse’ün artan popülaritesi ile birlikte en dikkat çeken projeler arasında şüphesiz The SandBox yer alıyor. Bunu projenin yerel token’ı olan SAND’ın yıl boyuncaki performan...',
    writer: 'Fatih Demirkan',
    reading: 1142,
    date: '16/12/2021 21:43',
    ımage: '/crypto2.png',
    id: 7
  },
  {
    headName: 'Kripto Para Borsaları',
    description:
      'Singapur merkezli bir hedge fonu olan Three Arrows Capital, Perşembe günü yaklaşık 101 milyon dolara 31.345 Ethereum (ETH) daha satın aldı. Blockchain analitik platformu Nansen, bir BlockFi...',
    writer: 'Fatih Demirkan',
    reading: 1142,
    date: '16/12/2021 21:43',
    ımage: '/crypto3.png',
    id: 8
  },
  {
    headName: 'Metamask Nedir?',
    description:
      'En büyük kripto para listeleme platformlarından biri olan CoinGecko’dan alınan verilere göre, son bir haftada en çok yükselen kripto paralar şunlar: Son günlerin parlayan yıldızı Xido Finance...',
    writer: 'Fatih Demirkan',
    reading: 1142,
    date: '16/12/2021 21:43',
    ımage: '/crypto4.png',
    id: 9
  },
  {
    headName: 'NFT Nedir?',
    description:
      'Son Ronin köprü saldırısı sırasında çalınan fonları geri almak amacıyla Binance, Axie Infinity’nin arkasında geliştirici ekip Sky Mavis’in 150 milyon dolarlık finansman turuna öncülük ettiğini açıkladı.',
    writer: 'Fatih Demirkan',
    reading: 1142,
    date: '16/12/2021 21:43',
    ımage: '/crypto5.png',
    id: 10
  },
  {
    headName: 'P2P Nedir?',
    description:
      'En büyük kripto para listeleme platformlarından biri olan CoinGecko’dan alınan verilere göre, son bir haftada en çok yükselen kripto paralar şunlar: Son günlerin parlayan yıldızı Xido Finance...',
    writer: 'Fatih Demirkan',
    reading: 1142,
    date: '16/12/2021 21:43',
    ımage: '/crypto1.png',
    id: 11
  },
  {
    headName: 'Staking Nedir?',
    description:
      'Son Ronin köprü saldırısı sırasında çalınan fonları geri almak amacıyla Binance, Axie Infinity’nin arkasında geliştirici ekip Sky Mavis’in 150 milyon dolarlık finansman turuna öncülük ettiğini açıkladı.',
    writer: 'Fatih Demirkan',
    reading: 1142,
    date: '16/12/2021 21:43',
    ımage: '/crypto2.png',
    id: 12
  }
]
