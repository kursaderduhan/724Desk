import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@components/Layout/Layout'
import {
  Box,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Image,
  Icon,
  HStack,
  Container
} from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import Categories from '@components/HomePage/Categories'
import DeskToken from '@components/HomePage/DeskToken'
import DataBase from '@components/HomePage/DataBase'
import Experts from '@components/HomePage/Experts'
import FeedBack from '@components/HomePage/FeedBack'
import PartnerShip from '@components/HomePage/PartnerShip'
import ServicePocket from '@components/HomePage/ServicePocket'
import Footer from '@components/Footer/Footer'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useStorken } from '@data/storken'

const Home: NextPage = () => {
  const router = useRouter()
  const search = useStorken<any>("search")
  function handleChange(event: any) {
    search.set(event.target.value)
  }
  const searchPage = (e: any) => {
    if (e.key === 'Enter') {
      search.v == '' ? alert('Arama Boş Olamaz') : router.push('/Search')
    }
  }
  return (
    <Layout>
      <Head>
        <title>724Desk</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box
        bgImage={{base:"/Hp-BgMobile.png",lg:'/HomePageBg.png'}}
        w={{ base: '100%', lg: 'full' }}
        h={{ base: '746px', lg: '746px' }}
        bgPos={'center'}
        bgSize={'cover'}
      >
        <Container maxW={'1200px'}>
          <Flex
            flexDirection={'column'}
            w={'100%'}
            h={'full'}
            py={{ base: "233px", lg: "156px" }}
            alignItems={{ base: 'flex-start', lg: 'flex-start' }}
          >
            <Text textStyle={"homePageHead"} pb={{base:"24px",lg:"32px"}}>
              Problemlerinize <br /> Anında<span style={{ color: '#F27C00' }}> Çözüm <br /> Bulun!
              </span>
            </Text>
            <Link href={'/SupportRequest'}>
              <Button
                fontSize={"15px"}
                color={'white'}
                w={'242px'} h={"48px"}
                gap={4} variant={"globalButton"}
                _hover={{ opacity: 0.8 }} borderRadius={"10px"}
              >
                <Image
                  src={'/hpButtonIcon.png'}
                  alt={'icon'}
                  w={'21.5px'}
                  h={'21.5px'}
                />
                Destek Talebi Oluştur
              </Button>
            </Link>
            <InputGroup
              size={'lg'}
              w={{base:"343px",lg:'389px'}}
              boxShadow={'xl'} mt={"54px"} h={"54px"}
              alignItems={'center'} rounded={"10px"}
            >
              <InputLeftElement h={'full'}>
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input
                placeholder='Problemlerinizi yazın ve arayın' _placeholder={{fontStyle:"normal",fontWeight:400,color:"#9B9DBB",lineHeight:"24px",fontSize:"16px"}}
                type={'text'}
                onChange={handleChange}
                value={search.v.toLowerCase()} h="54px"
                onKeyPress={e => searchPage(e)} bg={"#F0F1F3"} rounded={"10px"}
              />
            </InputGroup>
            <HStack pt={"16px"}>
              {Item.map(item => (
                <Button
                  key={item.key}
                  name={item.name}
                  rounded={99}
                  border={'1px solid'}
                  borderColor={'rgba(0,0,0,0.1)'}
                  color={'rgba(0, 0, 0, 0.5)'}
                  fontSize={'13px'} h={"28px"}
                >
                  {item.name}
                </Button>
              ))}
            </HStack>
          </Flex>
        </Container>
      </Box>
      <Categories />
      <DeskToken />
      <DataBase />
      <Experts />
      <FeedBack />
      <PartnerShip />
      <ServicePocket />
      <Footer HomePage />
    </Layout>
  )
}

export default Home

interface buttonProps {
  name: string
  key: string
}

const Item: Array<buttonProps> = [
  { name: 'Kripto', key: 'crypto' },
  { name: 'Bitcoin', key: 'btc' },
  { name: 'Şarj Kablosu', key: 'şarj' },
  { name: 'Staking', key: 'staking' }
]
