import React, { memo } from 'react'
import { Flex, SimpleGrid, Text, Image, VStack } from '@chakra-ui/react'

export const News = () => {
  return (
    <Flex w={'full'} py={10}>
      <SimpleGrid columns={3} spacing={6}>
        {news.map(news => (
          <VStack
            key={news.key}
            alignItems={'flex-start'}
            w={'full'}
            h={'full'}
            _hover={{ scale: '1.02', opacity: '0.7' }}
            cursor={'pointer'}
          >
            <Image src={news.Image} alt={'ımg'} w={'389px'} h={'208px'} />
            <Text fontSize={'15px'} fontWeight={500} color={'#333333'}>
              {news.Title}
            </Text>
            <Text color={'#959595'} fontSize={'12px'} fontWeight={400}>
              {news.Description}
            </Text>
            <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
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
