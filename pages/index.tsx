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
  Container,
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

const Home: NextPage = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const handleChange = (event: any) => {
    setSearch(event.target.value)
  }
  const searchPage = (e: any) => {
    if (e.key === 'Enter') {
      search == '' && alert('Arama Boş Olamaz')
      search == 'trade yapmak' && router.push('/Search')
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
        bgImage='/HomePageBg.png'
        w={{ base: 'full', md: 'full' }}
        h={{ base: '746px', md: '746px' }}
        bgPos={'center'}
        bgSize={'cover'}
      >
        <Container maxW={'1200px'}>
          <Flex
            flexDirection={'column'}
            w={'100vw'}
            h={'full'}
            gap={10}
            py={{ base: 140, md: 150 }}
            alignItems={{ base: 'center', md: 'flex-start' }}
          >
            <Text fontSize={{ base: '32px', md: '54px' }}>
              Problemlerinize <br /> Anında{' '}
              <span style={{ color: '#F27C00' }}>
                Çözüm <br /> Bulun!
              </span>
            </Text>
            <Link href={'/SupportRequest'}>
              <Button
                bg={'#F27C00'}
                color={'white'}
                w={'242px'}
                gap={4}
                _hover={{ opacity: 0.8 }}
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
              w={'389px'}
              rounded={5}
              boxShadow={'xl'}
              alignItems={'center'}
            >
              <InputLeftElement h={'full'}>
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input
                placeholder='Problemlerinizi yazın ve arayın'
                type={'text'}
                onChange={handleChange}
                value={search.toLowerCase()}
                onKeyPress={e => searchPage(e)}
              />
            </InputGroup>
            <HStack>
              {Item.map(item => (
                <Button
                  key={item.key}
                  name={item.name}
                  rounded={99}
                  border={'1px solid'}
                  borderColor={'rgba(0,0,0,0.1)'}
                  color={'rgba(0, 0, 0, 0.5)'}
                  fontSize={'13px'}
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
