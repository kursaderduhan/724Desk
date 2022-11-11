import {
  HStack,
  VStack,
  Text,
  Image,
  ListItem,
  UnorderedList,
  Flex,
  Box,
  Button
} from '@chakra-ui/react'
import React, { memo } from 'react'

export const TrendPage = () => {
  return (
    <VStack>
      <Flex
        w={'full'}
        gap={{ base: '72px', lg: '126px' }}
        justifyContent={'space-between'}
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <VStack
          alignItems={'flex-start'}
          textStyle={'subText'}
          maxW={{ base: 'full', lg: '693px' }}
          gap={'42px'}
          color={'#333333'}
        >
          <VStack alignItems={'flex-start'} alignSelf={'flex-start'}>
            <Text
              fontSize={{ base: '23px', lg: '33px' }}
              textStyle={'bigText'}
              color={'#333333'}
            >
              Son Bir Haftada En Çok Yükselen Kripto Paralar
            </Text>
            <Text textStyle={'categoriesText'} color={'#959595'}>
              08/12/2022
            </Text>
          </VStack>
          <Text
            pt={{ base: '24px', lg: '0px' }}
            textStyle={'subText'}
            color={'#333333'}
          >
            En büyük kripto para listeleme platformlarından biri olan
            CoinGecko’dan alınan verilere göre, son bir haftada en çok yükselen
            kripto paralar şunlar: Son günlerin parlayan yıldızı Xido Finance
            XIDO %84 lük bir yükselişle geliyor. .
          </Text>
          <Image
            src={'/expertsImg.png'}
            alt={''}
            w={{ base: '343px', lg: '693px' }}
            h={{ base: '192px', lg: '390px' }}
          />
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
          <VStack alignItems={'flex-start'}>
            <Text
              fontSize={{ base: '19px', lg: '23px' }}
              textStyle={'deskTokenHead'}
              color={'#333333'}
            >
              What Will I Learn?
            </Text>
            <Text color={'#333333'} pt={'24px'}>
              The course is comprised of seven classes. Five of which include
              “projects” where you’ll receive rewards for completing five
              projects. You can also receive BUSD rewards for completing more
              than one class. Below, we’ve listed the curriculum, related
              projects and available rewards. Those wanting to receive rewards
              will need to complete the course within two months of signing up.
              For additional information, you can read our Affiliate Bootcamp
              Guide.
            </Text>
          </VStack>
          <Text textStyle={'homePageText'} fontWeight={500} color={'#333333'}>
            Class 1: What does it mean to become a crypto Affiliate
          </Text>
          <UnorderedList>
            <ListItem fontSize={'14px'} fontWeight={400} color={'#666666'}>
              Get a complete view of affiliate marketing at Binance and the
              incentives up for grabs.{' '}
            </ListItem>
          </UnorderedList>
          <Text textStyle={'homePageText'} fontWeight={500} color={'#333333'}>
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
          <Text textStyle={'homePageText'} fontWeight={500} color={'#333333'}>
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
          <Text textStyle={'homePageText'} fontWeight={500} color={'#333333'}>
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
          <Text textStyle={'homePageText'} fontWeight={500} color={'#333333'}>
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
            w={{ base: '343px', lg: '693px' }}
            h={{ base: '194px', lg: '390px' }}
          />
          <Text
            textStyle={'deskTokenHead'}
            fontSize={{ base: '19px', lg: '23px' }}
            color={'#333333'}
          >
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
        <VStack
          alignItems={{ base: 'center', lg: 'flex-start' }}
          pt={'42px'}
          gap={5}
        >
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Paylaş
          </Text>
          <HStack gap={2}>
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
          <Flex
            flexDirection={'column'}
            gap={'75px'}
            display={{ base: 'none', lg: 'flex' }}
          >
            <HStack>
              <Image
                src={'/circleOrange.png'}
                alt={'circle'}
                w={'16px'}
                h={'16px'}
              />
              <Text color={'#F27C00'} textStyle={"categoriesText"} fontWeight={'500'}>
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
              <Text textStyle={"categoriesText"} fontWeight={'500'} color={'#959595'}>
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
              <Text textStyle={"categoriesText"} fontWeight={'500'} color={'#959595'}>
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
              <Text textStyle={"categoriesText"} fontWeight={'500'} color={'#959595'}>
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
              <Text textStyle={"categoriesText"} fontWeight={'500'} color={'#959595'}>
                What Can You Expect as a Binance Affiliate
              </Text>
            </HStack>
          </Flex>
          <Text
            fontSize={'19px'}
            pt={'54px'}
            fontWeight={'500'}
            color={'#333333'}
          >
            Benzer Gönderiler
          </Text>
          <Flex
            bgImage={'/ımg-1.png'}
            w={{ base: '343px', lg: '389px' }}
            h={{ base: '136px', lg: '208px' }}
            rounded={10}
            bgSize={'cover'}
            bgPos={'center'}
            flexDirection={'column'}
            alignSelf={'flex-end'}
            justifyContent={'flex-end'}
            p={"24px"}
          >
            <Text color={'white'} textStyle={"homePageSubText"} fontWeight={'500'}>
              Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer
            </Text>
            <Text color={'#C4C4C4'} textStyle={"categoriesText"} pt={"8px"}>
              08/12/2021
            </Text>
          </Flex>
          <Flex
            bgImage={'/ımg-2.png'}
            w={{ base: '343px', lg: '389px' }}
            h={{ base: '136px', lg: '208px' }}
            rounded={10}
            bgSize={'cover'}
            bgPos={'center'}
            flexDirection={'column'}
            alignSelf={'flex-end'}
            justifyContent={'flex-end'}
            p={"24px"}
          >
            <Text textStyle={"homePageSubText"} color={'white'} fontWeight={'500'}>
              Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer
            </Text>
            <Text color={'#C4C4C4'} textStyle={"categoriesText"}  pt={"8px"}>
              08/12/2021
            </Text>
          </Flex>
          <Flex
            bgImage={'/ımg-3.png'}
            w={{ base: '343px', lg: '389px' }}
            h={{ base: '136px', lg: '208px' }}
            rounded={10}
            bgSize={'cover'}
            bgPos={'center'}
            flexDirection={'column'}
            alignSelf={'flex-end'}
            justifyContent={'flex-end'}
           p={"24px"}
          >
            <Text textStyle={"homePageSubText"} color={'white'} fontWeight={'500'}>
              Affiliate Rewards Bootcamp: Go From Zero to Crypto Influencer
            </Text>
            <Text color={'#C4C4C4'} textStyle={"categoriesText"}  pt={"8px"}>
              08/12/2021
            </Text>
          </Flex>
        </VStack>
        <VStack
          display={{ base: 'flex', lg: 'none' }}
          justifyContent={'center'}
          flexDirection={'column'} pt={"54px"} gap={"16px"}
        >
          <Text textStyle={'categoriesText'} color={'#666666'}>
            We are here to help!
          </Text>
          <Button
            bg={'#F27C00'}
            rounded={'5px'}
            w={'132px'}
            h={'32px'}
            fontSize={'12px'}
            color={'white'}
            lineHeight={'150%'}
            letterSpacing={'0.25px'}
            fontStyle={'normal'} gap={"5px"} _hover={{opacity:0.8}}
          >
            <Image src={"/24-support.png"} alt={"icon"} w={"24px"} h={"24px"} />
            Live Support
          </Button>
          <Text textStyle={"subText"} color={"#666666"}>Call or chat with a Tech Pro 24/7.</Text>
        </VStack>
      </Flex>
    </VStack>
  )
}

export default memo(TrendPage)
