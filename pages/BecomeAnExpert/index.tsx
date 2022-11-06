import React, { memo,useState } from 'react'
import {
  VStack,
  Text,
  Container,
  Button,
  Flex
} from '@chakra-ui/react'
import Layout from '@components/Layout/Layout'
import Footer from '@components/Footer/Footer'
import BecameAnExpert from '@components/BecameAnExperts/BecomeAnExpert'
import ExpertsDetail from '@components/BecameAnExperts/ExpertsDetail'
export const BecomeAnExpert = () => {
  const [sendForm, setSendForm] = useState("")
  const [formDetail, setFormDetail] = useState("none")
  const openDetail = () => {
    sendForm == "" && setSendForm("none")
    formDetail == "none" && setFormDetail("")
  }
  return (
    <Layout>
      <VStack
        h={'196px'}
        bg={'#E5EDF4'}
        alignSelf={'flex-end'}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        gap={5}
        py={10} display={{base:"none",md:"flex"}}
      >
        <Container maxW={"1200px"}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Hemen Uzman Olun
          </Text>
          <Text fontSize={'12px'} fontWeight={400} color={'#959595'}>
            Uzman olmak için aşağıdaki formu doldurun ve hemen başvuru yapın!
          </Text>
        </Container>
      </VStack>
      <Flex justifyContent={'center'} py={10} flexDirection={"column"} gap={10} w={"full"} alignSelf={"center"}>
        <Container maxW={"794px"}>
        <VStack alignItems={"flex-start"} gap={2} >
          <Text
            fontSize={'23px'}
            fontWeight={500}
            color={'#333333'}
            alignSelf={'flex-start'}
          >
            Hemen Uzman Olun
          </Text>
          <Text fontSize={'15px'} fontWeight={400} color={'#959595'}>
            Uzman olmak için aşağıdaki formu doldurun ve hemen başvuru yapın!
          </Text>
          <Flex display={sendForm}>
            <BecameAnExpert/>
          </Flex>
          <Flex display={formDetail}>
            <ExpertsDetail/>
          </Flex>
          <Button variant={'globalButton'} w={{base:"343px",md:"136px"}} alignSelf={"flex-start"} onClick={openDetail}>Gönder</Button>
          </VStack>
          </Container>
        <Footer/>
      </Flex>
    </Layout>
  )
}

export default memo(BecomeAnExpert)
