import React, { memo } from 'react'
import { Flex, SimpleGrid, Text, Image, VStack } from '@chakra-ui/react'

export const News = () => {
  return (
    <Flex w={'full'} pt={{base:"54px", lg:"120px"}} >
      <SimpleGrid columns={{base:1,lg:3}} spacing={"16px"} gridColumnGap={"16px"} gridRowGap={"64px"}>
        {news.map(news => (
          <VStack
            key={news.key}
            alignItems={'flex-start'}
            w={'full'} p={"8px"}
            h={'full'} _hover={{ transition: '0.8s', bg: '#E1EEF6',rounded:"10px" }}
            cursor={'pointer'}
          >
            <Image src={news.Image} alt={'ımg'} w={{ base: "253px", lg: '389px' }} h={{base:"136px",lg:'208px'}} />
            <Text textStyle={"homePageSubText"} fontWeight={500} color={'#333333'} pt={"24px"}>
              {news.Title}
            </Text>
            <Text color={'#959595'} textStyle={"categoriesText"} pt={"12px"} maxW={"389px"}>
              {news.Description}
            </Text>
            <Text textStyle={"categoriesText"} color={'#525252'} pt={"12px"}>
              {news.Date}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export default memo(News)

interface newsProps {
  Image: string
  Title: string
  Description: string
  Date: string
  key: number
}

const news: Array<newsProps> = [
  {
    Image: '/news-1.png',
    Title: 'Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer',
    Description:
      'Introducing Affiliate Rewards Bootcamp—a fast-track program where you’ll earn rewards as you learn the secrets to becoming a crypto influencer.',
    Date: '08/12/2021',
    key: 1
  },
  {
    Image: '/news-2.png',
    Title: 'Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer',
    Description:
      'Introducing Affiliate Rewards Bootcamp—a fast-track program where you’ll earn rewards as you learn the secrets to becoming a crypto influencer.',
    Date: '08/12/2021',
    key: 2
  },
  {
    Image: '/news-3.png',
    Title: 'Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer',
    Description:
      'Introducing Affiliate Rewards Bootcamp—a fast-track program where you’ll earn rewards as you learn the secrets to becoming a crypto influencer.',
    Date: '08/12/2021',
    key: 3
  },
  {
    Image: '/news-4.png',
    Title: 'Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer',
    Description:
      'Introducing Affiliate Rewards Bootcamp—a fast-track program where you’ll earn rewards as you learn the secrets to becoming a crypto influencer.',
    Date: '08/12/2021',
    key: 4
  },
  {
    Image: '/news-5.png',
    Title: 'Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer',
    Description:
      'Introducing Affiliate Rewards Bootcamp—a fast-track program where you’ll earn rewards as you learn the secrets to becoming a crypto influencer.',
    Date: '08/12/2021',
    key: 5
  },
  {
    Image: '/news-6.png',
    Title: 'Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer',
    Description:
      'Introducing Affiliate Rewards Bootcamp—a fast-track program where you’ll earn rewards as you learn the secrets to becoming a crypto influencer.',
    Date: '08/12/2021',
    key: 6
  },
  {
    Image: '/news-7.png',
    Title: 'Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer',
    Description:
      'Introducing Affiliate Rewards Bootcamp—a fast-track program where you’ll earn rewards as you learn the secrets to becoming a crypto influencer.',
    Date: '08/12/2021',
    key: 7
  },
  {
    Image: '/news-8.png',
    Title: 'Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer',
    Description:
      'Introducing Affiliate Rewards Bootcamp—a fast-track program where you’ll earn rewards as you learn the secrets to becoming a crypto influencer.',
    Date: '08/12/2021',
    key: 8
  },
  {
    Image: '/news-9.png',
    Title: 'Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer',
    Description:
      'Introducing Affiliate Rewards Bootcamp—a fast-track program where you’ll earn rewards as you learn the secrets to becoming a crypto influencer.',
    Date: '08/12/2021',
    key: 9
  }
]
