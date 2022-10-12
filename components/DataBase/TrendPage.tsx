import {
  HStack,
  VStack,
  Text,
  Image,
  ListItem,
  UnorderedList,
  Flex,
  Box
} from '@chakra-ui/react'
import React, { memo } from 'react'

export const TrendPage = () => {
  return (
    <VStack>
      <Flex  w={"full"} justifyContent={"space-between"}> 
        <VStack alignItems={'flex-start'} w={'693px'} gap={5}>
          <VStack alignItems={'flex-start'} alignSelf={'flex-start'}>
            <Text fontSize={'33px'} fontWeight={500} color={'#333333'}>
              Son Bir Haftada En Çok Yükselen Kripto Paralar
            </Text>
            <Text fontSize={'12px'} fontWeight={400} color={'#959595'}>
              08/12/2022
            </Text>
          </VStack>
          <Text>
            En büyük kripto para listeleme platformlarından biri olan
            CoinGecko’dan alınan verilere göre, son bir haftada en çok yükselen
            kripto paralar şunlar: Son günlerin parlayan yıldızı Xido Finance
            XIDO %84 lük bir yükselişle geliyor. .
          </Text>
          <Image src={'/expertsImg.png'} alt={''} w={'693px'} h={'390px'} />
          <Text>
            En büyük kripto para listeleme platformlarından biri olan
            CoinGecko’dan alınan verilere göre, son bir haftada en çok yükselen
            kripto paralar şunlar: Son günlerin parlayan yıldızı Xido Finance
            (XIDO) %84 lük bir yükselişle geliyor. 2. sırada Frax Share (FXS)
            %32.5 yükselişle gelirken üçüncü sırada ise kripto para birimi Mina
            Protocol (MINA) %24.4 ve onu da %15.1 lik yükselişle Convex Finance
            (CVZ) takip ediyor. <br /> <br /> Son 1 haftada en çok yükselen
            kripto paralarda 5. sırada ise CELO ve GMT gelirken onu NEAR, XEC,
            CAKE ve DOGE takip ediyor.
          </Text>
          <Text fontSize={'23px'} fontWeight={500} color={'#333333'}>
            What Will I Learn?
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={'#333333'}>
            The course is comprised of seven classes. Five of which include
            “projects” where you’ll receive rewards for completing five
            projects. You can also receive BUSD rewards for completing more than
            one class. Below, we’ve listed the curriculum, related projects and
            available rewards. Those wanting to receive rewards will need to
            complete the course within two months of signing up. For additional
            information, you can read our Affiliate Bootcamp Guide.
          </Text>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Class 1: What does it mean to become a crypto Affiliate
          </Text>
          <UnorderedList>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              Get a complete view of affiliate marketing at Binance and the
              incentives up for grabs.{' '}
            </ListItem>
          </UnorderedList>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Class 2: Introduction to Binance trading products
          </Text>
          <UnorderedList>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              This is your crash course for Binance products and how you can
              market them for commission.
            </ListItem>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              Project: Create content for one of the listed topics and have a
              minimum trading volume of 20 BTC.
            </ListItem>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              Reward: $300 sign-up package and increased commission rate to
              41~50%
            </ListItem>
          </UnorderedList>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Class 3: How to create quality and compelling content
          </Text>
          <UnorderedList>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              Fundamental marketing insights on creating blog, youtube and
              social media content, etc.
            </ListItem>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              Project: Create one content piece that receives a score of at
              least 20/30 over a one-month period on our Affiliate Content
              Program.
            </ListItem>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              Reward: $300 sign-up package and increased commission rate to
              41~50%
            </ListItem>
          </UnorderedList>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Class 4: User-generated content for Binance Products
          </Text>
          <UnorderedList>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              How to generate user-generated content for Binance Products
              (Charity, Academy, Gift Card, Binance Card, Trust Wallet,
              Launchpad).
            </ListItem>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              Project: Generate at least three short-form pieces of content for
              three of the above products with a total of 1,000 views or 300
              likes or 50 shares
            </ListItem>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              Reward: $300 sign-up package and increased commission rate to
              41~50%
            </ListItem>
          </UnorderedList>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Class 5: How to effectively attract and invite new users
          </Text>
          <UnorderedList>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              Learn fundamental marketing strategies on how to get new
              registrations effectively.
            </ListItem>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              Project: 30 new registrations over one month.
            </ListItem>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              Reward: $300 sign-up package and increased commission rate to
              41%-50%
            </ListItem>
          </UnorderedList>
          <Image
            src={'/TrendPageImg.png'}
            alt={'ımg'}
            w={'693px'}
            h={'390px'}
          />
          <Text fontSize={'23px'} fontWeight={500} color={'#333333'}>
            How Does The Rewards Bootcamp Work?
          </Text>
          <UnorderedList spacing={2}>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              <span style={{ color: 'black', fontWeight: 500 }}> Step 1: </span>{' '}
              Sign-up and select your pathway
            </ListItem>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              <span style={{ color: 'black', fontWeight: 500 }}> Step 2: </span>
              We’ll be sending the Bootcamp classes to the email you used to
              sign up. Check your inbox!
            </ListItem>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              <span style={{ color: 'black', fontWeight: 500 }}> Step 3: </span>
              Watch the Bootcamp class videos and complete the projects that you
              find most interesting. We encourage users to try and complete all
              projects during the two-month period.
            </ListItem>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              <span style={{ color: 'black', fontWeight: 500 }}> Step 4: </span>
              Submit your best projects to get evaluated by our team
            </ListItem>
          </UnorderedList>
        </VStack>
        <VStack alignItems={"flex-start"} gap={5}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Paylaş
          </Text>
          <HStack>
            <Image
              src={'/facebook (1).png'}
              alt={'facebook'}
              w={'24px'}
              h={'24px'}
            />
            <Image
              src={'/twitter (1).png'}
              alt={'twitter'}
              w={'24px'}
              h={'24px'}
            />
            <Image
              src={'/linkedin(1).png'}
              alt={'linkedin'}
              w={'24px'}
              h={'24px'}
            />
            <Image
              src={'/whatsapp(1).png'}
              alt={'whatsapp'}
              w={'24px'}
              h={'24px'}
            />
            <Image src={'/be.png'} alt={'be'} w={'24px'} h={'24px'} />
            <Image src={'/link.png'} alt={'link'} w={'24px'} h={'24px'} />
          </HStack>
          <Flex flexDirection={'column'} gap={5}>
            <HStack>
              <Image
                src={'/circleOrange.png'}
                alt={'circle'}
                w={'16px'}
                h={'16px'}
              />
              <Text color={'#F27C00'} fontSize={'12px'} fontWeight={'500'}>
                Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer
              </Text>
            </HStack>
            <HStack>
              <Image
                src={'/circleGray.png'}
                alt={'circle'}
                w={'16px'}
                h={'16px'}
              />
              <Text fontSize={'12px'} fontWeight={'500'} color={'#959595'}>
                What Will I Learn?
              </Text>
            </HStack>
            <HStack>
              <Image
                src={'/circleGray.png'}
                alt={'circle'}
                w={'16px'}
                h={'16px'}
              />
              <Text fontSize={'12px'} fontWeight={'500'} color={'#959595'}>
                How Does The Rewards Bootcamp Work
              </Text>
            </HStack>
            <HStack>
              <Image
                src={'/circleGray.png'}
                alt={'circle'}
                w={'16px'}
                h={'16px'}
              />
              <Text fontSize={'12px'} fontWeight={'500'} color={'#959595'}>
                Exclusivity Pathway
              </Text>
            </HStack>
            <HStack>
              <Image
                src={'/circleGray.png'}
                alt={'circle'}
                w={'16px'}
                h={'16px'}
              />
              <Text fontSize={'12px'} fontWeight={'500'} color={'#959595'}>
                What Can You Expect as a Binance Affiliate
              </Text>
            </HStack>
          </Flex>
          <Text fontSize={'19px'} fontWeight={'500'} color={'#333333'}>
            Benzer Gönderiler
          </Text>
          <Flex
            bgImage={'/ımg-1.png'}
            w={'389px'}
            h={'208px'}
            bgSize={'cover'}
            bgPos={'center'} flexDirection={"column"} alignSelf={"flex-end"} justifyContent={"flex-end"} p={5}
          >
            <Text fontSize={'15px'} color={'white'} fontWeight={'500'}>
              Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer
            </Text>
            <Text color={'#C4C4C4'} fontSize={'12px'} fontWeight={400}>
              08/12/2021
            </Text>
          </Flex>
          <Flex
            bgImage={'/ımg-2.png'}
            w={'389px'}
            h={'208px'}
            bgSize={'cover'}
            bgPos={'center'} flexDirection={"column"} alignSelf={"flex-end"} justifyContent={"flex-end"} p={5}
          >
            <Text fontSize={'15px'} color={'white'} fontWeight={'500'}>
              Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer
            </Text>
            <Text color={'#C4C4C4'} fontSize={'12px'} fontWeight={400}>
              08/12/2021
            </Text>
          </Flex>
          <Flex
            bgImage={'/ımg-3.png'}
            w={'389px'}
            h={'208px'}
            bgSize={'cover'}
            bgPos={'center'} flexDirection={"column"} alignSelf={"flex-end"} justifyContent={"flex-end"} p={5}
          >
            <Text fontSize={'15px'} color={'white'} fontWeight={'500'}>
              Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer
            </Text>
            <Text color={'#C4C4C4'} fontSize={'12px'} fontWeight={400}>
              08/12/2021
            </Text>
          </Flex>
        </VStack>
      </Flex>
    </VStack>
  )
}

export default memo(TrendPage)
