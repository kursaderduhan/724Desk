import React, { memo } from 'react'
import {
  HStack,
  Text,
  Container,
  VStack,
  Image,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import Layout from '@components/Layout/Layout'
import Footer from '@components/Footer/Footer'
export const Reference = () => {
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
        py={10} display={{base:"none",md:"flex"}}
      >
        <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Referans Programı
          </Text>
          <Text fontSize={'12px'} fontWeight={'400'} color={'#959595'}>
            Referans durumlarını inceleyin ve kendi referansınızı oluşturun.
          </Text>
        </Container>
      </HStack>
      <Container maxW={{ xl: '1200px', xxl: '1600px' }}>
        <VStack alignItems={"flex-start"} gap={{base:1,md:5}} py={{base:0,md:10}} w={{base:"343px",md:"full"}}>
          <Text fontSize={{base:"23px",md:'33px'}} color={'#333333'} fontWeight={500}>
            724Desk Referans Programı
          </Text>
          <Text fontSize={'14px'} color={'#333333'} fontWeight={400}>
            Seçeneklerimiz arasından sana en uygun olan hizmet paketini seçim
            hemen başlayabilirsin!
          </Text>
          <Image src={'/reference.png'} alt={'ımg'} w={{ base: "343px", md: '693px' }} h={{base:"192px",md:'390px'}} />
          <Text fontSize={'14px'} color={'#666666'} fontWeight={400}>
            724Desk (724Desk.com) sizleri dinliyor, geri bildirimlerinize önem
            veriyor. Bir çok <br /> kullanıcımızın dört gözle beklediği referans
            programı an itibariyle başlamıştır!
          </Text>
          <Text fontSize={{base:"19px",md:'23px'}} color={'#333333'} fontWeight={500}>
            724Desk Referans Programı Nedir?
          </Text>
          <UnorderedList>
            <ListItem fontSize={'14px'} color={'#666666'} fontWeight={400}>
              724Desk Referans Programı; arkadaşlarınızı 724Desk’e davet ederek
              pasif gelir elde <br /> edebileceğiniz bir programdır. Size özel
              oluşturulan referans linkiniz ile 724Desk’e kayıt <br /> olan
              arkadaşlarınız 724Desk’de her işlem yaptığında, siz de pasif gelir
              kazanırsınız.
            </ListItem>
          </UnorderedList>
          <Text fontSize={{base:"19px",md:'23px'}} color={'#333333'} fontWeight={500}>
            Arkadaşlarımı Nasıl Davet Edebilirim?
          </Text>
          <UnorderedList w={{base:"343px",md:'693px'}}>
            <ListItem fontSize={'14px'} color={'#666666'} fontWeight={400}>
              724Desk hesabınıza giriş yaptıktan sonra sağ üstte bulunan
              kullanıcı profili üzerine gelerek Referans [Bonus Kazan] butonuna
              tıklayın. Ardından açılan pencerede “Bağlantınızı Oluşturun”
              bölümünden arkadaşlarınızla paylaşacağınız bonus oranlarını seçip
              kendi bağlantızı oluşturabilirsiniz. Arkadaşlarınız bu bağlantı
              ile kayıt olduklarında arkadaşlarınız her alım satım işlemi
              yaptığında ödedikleri komisyon üzerinden bonus kazanabilirler, hem
              de siz arkadaşlarınız her işlem yaptığında bonus kazanırsınız.
            </ListItem>
          </UnorderedList>
          <Image src={'/reference.png'} alt={'ımg'} w={{ base: "343px", md: '693px' }} h={{base:"194px",md:'390px'}} />
          <Text fontSize={'14px'} color={'#666666'} fontWeight={400}>
            Adım Adım referans programının nasıl çalıştığını öğrenelim.
          </Text>
          <UnorderedList w={{base:"343px",md:'693px'}} spacing={3}>
            <ListItem fontSize={'14px'} color={'#666666'} fontWeight={400}>
              1. Üç arkadaşınız var: Ali, Ayşe ve Mehmet. 724Desk referans
              linkiniz ile 724Desk’e kayıt oldular.
            </ListItem>
            <ListItem fontSize={'14px'} color={'#666666'} fontWeight={400}>
              2. Varsayılan olarak, arkadaşlarınızın ödediği komisyonlardan %20
              referans bonusu alırsınız. Ali komisyon giderlerine 1 BNB
              harcadıysa 0,2 BNB alırsınız. Ayşe, komisyon giderlerine 0.05 BTC
              öderse, 0.01 BTC kazanırsınız.
            </ListItem>
            <ListItem fontSize={'14px'} color={'#666666'} fontWeight={400}>
              3. Dilerseniz aldığınız % 20 referans bonusundan bazılarını
              arkadaşlarınızla paylaşmayı seçebilirsiniz. Bu durumda aşağıdaki
              seçeneklere sahipsiniz:
            </ListItem>
            <ListItem fontSize={'14px'} color={'#666666'} fontWeight={400}>
              Sen %10 alırsın, Ali %10 alır. Ali işlem ücretlerinde 1 BNB
              harcadı ve 0.2 BNB kazandınız. Bu durumda, her biriniz 0.1 BNB
              alırsınız.
            </ListItem>
            <ListItem fontSize={'14px'} color={'#666666'} fontWeight={400}>
              Sen %15 alırsın, Ayşe %5 alır. Ayşe işlem ücretlerinde 0.05 BTC
              harcadı ve siz 0.01 BTC kazandınız. Bu durumda Ayşe 0.0025 BTC
              alırken, siz 0,0075 BTC alırsınız.
            </ListItem>
            <ListItem fontSize={'14px'} color={'#666666'} fontWeight={400}>
              Sen %20 alırsın, Mehmet %0 alır. Mehmet komisyon ücretleri olarak
              0.2 ETH harcadı ve siz bunun %20 ‘si olan 0.04 ETH kazanırsınız.
            </ListItem>
            <ListItem fontSize={'14px'} color={'#666666'} fontWeight={400}>
              Programa Yönelik Önemli Notlar:
            </ListItem>
            <ListItem fontSize={'14px'} color={'#666666'} fontWeight={400}>
              724Desk Referans Programı periyodik olarak şirket stratejileri
              doğrultusunda incelenip; bonus oranlarının değiştirilmesi,
              referans programına getirdiğiniz kullanıcıların size kazanç
              sağlayabileceği sürelerin limitlendirilebilmesi gibi değişiklikler
              uygulanabilir.
            </ListItem>
            <ListItem fontSize={'14px'} color={'#666666'} fontWeight={400}>
              Komisyon bonusları, 724Desk Referans Programı çalıştığı sürece
              geçerli olacaktır.
            </ListItem>
            <ListItem fontSize={'14px'} color={'#666666'} fontWeight={400}>
              724Desk, referans programını herhangi bir zaman diliminde
              durdurabilir.
            </ListItem>
            <ListItem fontSize={'14px'} color={'#666666'} fontWeight={400}>
              724Desk, 724Desk Referans Programı’nın kurallarını herhangi bir
              bildirimde bulunmaksızın değiştirme hakkını saklı tutar.
            </ListItem>
          </UnorderedList>
        <Footer/>
        </VStack>
      </Container>
    </Layout>
  )
}

export default memo(Reference)
