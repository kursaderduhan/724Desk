import { HStack, Container, VStack, Text } from '@chakra-ui/react'
import React, { useCallback } from 'react'
import Layout from '@components/Layout/Layout'
import AboutUs from '@components/Documents/AboutUs'
import UserContract from '@components/Documents/UserContract'
import Footer, { ListData } from '@components/Footer/Footer'
import SecurityRules from '@components/Documents/SecurityRules'
import { HtmlProps } from 'next/dist/shared/lib/html-context'
import UseTerms from '@components/Documents/UseTerms'

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
  detailPage: any
  link: string
}
const name = (pageData: any) => {
  console.log(pageData.content)
  const content = ListData.find(
    datas => datas.link === pageData.content
  ) as PageDetail
  const result = pages.filter(pages => pages.id == content.id)

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
              {content.name} detay sayfası
            </Text>
          </HStack>
        </Container>
      </HStack>
      <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
        {result.map(resultPage => (
          <>{resultPage.page}</>
        ))}
      </Container>
      <Footer />
    </Layout>
  )
}

export default name

interface pageProps {
  id: number
  page: any
}

const pages: Array<pageProps> = [
  { id: 0, page: <AboutUs /> },
  { id: 1, page: <UserContract /> },
  { id: 2, page: <UseTerms /> },
  { id: 3, page: <SecurityRules /> },
]
