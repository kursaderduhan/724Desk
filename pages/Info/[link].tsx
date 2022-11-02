import { HStack, Container, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import Layout from '@components/Layout/Layout'
import AboutUs from '@components/Documents/AboutUs'
import UserContract from '@components/Documents/UserContract'
import Footer, { ListData } from '@components/Footer/Footer'
import { useStorken } from '@data/storken'

export const getStaticPaths = () => {
  // map data to an array of path objects with params (id)

  const paths = ListData.map(pageData => {
    return {
      params: { link: pageData.link }
    }
  })
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async (context: any) => {
  const link = context.params.link
  const datam = ListData.find(datas => datas.link === link)

  return {
    props: { pageData: datam, content: link }
  }
}

interface PageDetail {
  id: number
  name: string
  detail: string
  link: string
}

const name = (pageData: any) => {
  const content = ListData.find(
    datas => datas.link === pageData.content
  ) as PageDetail
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
        py={10}
      >
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            {content.name}
          </Text>
          <HStack w={'full'} justifyContent={'space-between'}>
            <Text fontSize={'12px'} fontWeight={400} color={'#959595'}>
              {content.detail}
            </Text>
          </HStack>
        </Container> 
      </HStack>
      <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
        {/* <UserContract/> */}
        {content.id == 0 ? <UserContract /> : null}
      </Container>
      <Footer />
    </Layout>
  )
}

export default name
