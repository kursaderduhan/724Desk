import React, { memo } from 'react'
import {
  Flex,
  VStack,
  Image,
  Text,
  UnorderedList,
  ListItem,
  HStack,
  Button
} from '@chakra-ui/react'
import Link from 'next/link'
export const WhyBeExpert = () => {
  return (
    <Flex justifyContent={"space-between"} >
      <Flex
        flexDirection={'column'}
        w={{ base: '343px', lg: '693px' }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Flex flexDirection={'column'}>
          <Text
            fontSize={{ base: '19px', lg: '33px' }}
            color={'#333333'}
            textStyle={'bigText'}
           
          >
            Neden Uzman Olmalıyım?
          </Text>
          <Flex flexDirection={'column'}>
            <Text
              fontSize={{ base: '15px', lg: '19px' }}
              fontWeight={500} textStyle={"homePageText"}
              color={'#333333'} pt={{base:"16px",lg:"42px"}} maxW={"693px"}
            >
              Support projemiz dünya çapında uzmanların oluşturduğu bir networke
              sahiptir.
            </Text>
            <UnorderedList
              color={'#666666'}
              spacing={"32px"} pt={{base:"24px",lg:"42px"}} maxW={"693px"}
              w={{ base: '343px', lg: 'full' }} textStyle={"subText"}
            >
              <ListItem>
                Öncelikle böyle bir platforlga uzman olmak size büyük bir
                saygınlık kazandıracaktır. Uzmanlarımız için özel olarak
                paylaşacağımız bir link üzerinden uzmanlık profilinizi
                paylaşabilirsiniz.
              </ListItem>
              <ListItem>
                `Güzel şeyler paylaştıkça büyür` prensibi ışığında, bilgi
                birikiminizden birçok ihtiyaç sahibinin faydalanması sizi daha
                iyi hissettirecektir. Böylece güzel işler de büyümüş olacaktır.
              </ListItem>
              <ListItem>
                Maddi kazanç sağlamak birçoğumuz için en önemli nokta olabilir.
                Bu platforlga paylaşacağınız uzmanlığınız size para
                kazandıracak. Uzmanlarımız da kendi aralarında paylaşılga
                bulunabilecekler ve bir konu hakkında veya bilgi ihtiyacında
                kuracağımız uzmanlar arası paylaşım sayfaları neticesinde bilgi
                birikimlerini paylaşabileceklerdir.
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} display={{base:"flex",lg:"none"}} pt={"82px"}>
          <Text>Gelir Durumlarınızı Görüntüleyin</Text>
          <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={"16px"} zIndex={1} pt={"24px"}>
          {item.map(ıtem => (
            <VStack
              key={ıtem.id}
              w={'288px'}
              h={'337px'} justifyContent={"space-between"}
              bg={'#505583'}
              rounded={10}
              py={'24px'}
            >
              <HStack alignItems={"center"} alignSelf={'flex-start'} px={3} >
                <Image src={ıtem.Image} alt={'ımg'} w={'24px'} h={'36px'} />
                <Text
                  fontSize={'13px'}
                  color={'#EAEAEA'}
                  fontWeight={500}
                  alignSelf={'flex-end'}
                  lineHeight={'20px'}
                  fontStyle={'normal'}
                  letterSpacing={'0.1px'} pb={1}
                >
                  {ıtem.desc}
                </Text>
              </HStack>
              <Image src={ıtem.grafik} alt={'grafik'} w={'260px'} h={'102px'} />
              <Text
                fontSize={'58px'}
                fontWeight={300}
                lineHeight={'87px'}
                letterSpacing={'-0.5px'}
                fontStyle={'normal'}
                alignSelf={'center'}
                color={'white'}
              >
                {ıtem.counter}
              </Text>
              <Text
                color={'#C4C4C4'}
                fontSize={'14px'}
                fontWeight={400}
                alignSelf={'center'}
              >
                {ıtem.desc2}
              </Text>
            </VStack>
          ))}
        </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Text
            fontSize={{ base: '19px', lg: '33px' }}
           textStyle={'bigText'} pt={"90px"}
            color={'#333333'} pb={{base:"24px",lg:"42px"}}
          >
            Kimler Uzman Olabilir?
          </Text>
          <Image 
            src={'/expertsImg.png'}
            alt={''}
            w={{ base: '343px', lg: '693px' }}
            h={{ base: '192px', lg: '390px' }}
          />
          <UnorderedList
            color={'#666666'} 
            spacing={{base:"24px",lg:"32px"}} pt={{base:"24px",lg:"42px"}} maxW={"693px"}
            w={{ base: '343px', lg: 'full' }} textStyle={"subText"}
          >
            <ListItem>
              Bilişim teknolojileri alalında herhangi bir konuda uzmanlığı olan
              her profesyonel Support projemizde uzman olabilir.
            </ListItem>
            <ListItem>
              Öncelikle uzman olduğunuz konu hakkında seçici heyetimizi
              bilgilendirmelisiniz. Bunu `uzman olmak istiyorum` linkinden
              başvurunuzu yaparak veya `uzman` hesabı oluşturarak
              gerçekleştirebilirsiniz.
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex flexDirection={'column'}>
          <Text
            fontSize={{ base: '19px', lg: '33px' }}
            textStyle={'bigText'} pt={"90px"}
             color={'#333333'} pb={{base:"24px",lg:"42px"}}
          >
            Paylaşmak İstediğiniz bir uzmanlığınız mı var?
          </Text>
          <Image
            src={'/expertsImg.png'}
            alt={''}
            w={{ base: '343px', lg: '693px' }}
            h={{ base: '192px', lg: '390px' }}
          />
          <UnorderedList
            color={'#666666'}
            spacing={{base:"24px",lg:"32px"}} textStyle={"subText"}
            w={{ base: '343px', lg: 'full' }} pt={{base:"24px",lg:"42px"}}
          >
            <ListItem>
              Bir konuda uzman mısınız? Herhangi bir teknoloji alanında herkese
              koçluk yapmanın en iyi yolunun zarif adımlarla rehberler
              hazırlamak olduğuna inanıyoruz. Hemen platformumuz için bir
              makale, sunum veya problem çözüm dokümanı hazırlayın,
              yayınlayalım.
            </ListItem>
            <ListItem>
              Bir problemi adım adım nasıl çözüme ulaştırdığınızı anlatın.
              Yazınızda harici bir link de paylaşabilirsiniz.
            </ListItem>
            <ListItem>
              Hazırlayacağınız rehberler, müşterilerimizin projemize ulaşıp
              destek hizmeti almasına olanak sağlayacaktır. Hazırlamış olduğunuz
              makalelerden gelen müşterilerimizi hizmet almaları için sizlere
              yönlendireceğiz.
            </ListItem>
            <ListItem>
              Kılavuzumuzu kullanarak rehberinizin paylaşımını
              başlatabilirsiniz. Kılavuzumuz, detaylı bir rehber hazırlama
              hususunda sizlere yol gösterecektir. Hemen inceleyin!
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex flexDirection={'column'}>
          <Text
             fontSize={{ base: '19px', lg: '33px' }}
             textStyle={'bigText'} pt={"90px"}
              color={'#333333'} pb={{base:"24px",lg:"42px"}}
          >
            Hangi kriterlere göre tarafıma iş yönlendirilecek?
          </Text>
          <Image
            src={'/expertsImg.png'}
            alt={''}
            w={{ base: '343px', lg: '693px' }}
            h={{ base: '192px', lg: '390px' }}
          />
          <UnorderedList
            color={'#666666'}
            spacing={{base:"24px",lg:"32px"}} textStyle={"subText"}
            w={{ base: '343px', lg: 'full' }} pt={{base:"24px",lg:"42px"}}
          >
            <ListItem>
              Uzmanlarımıza sağlıklı bir iş dağıtımı yapmak ve mevcut
              potansiyelden eşit oranda pay vermek istediğimizden dolayı
              uzmanlarımıza yönlendireceğimiz işlerle alakalı bazı kriterler
              belirledik.
            </ListItem>
            <ListItem>
              Uzmanlarımıza platformumuz üzerinde yaptıkları her türlü
              işlemlerinin kalitesini takip ederek puanlar veriyoruz. Bu sayede
              uzmanlarımızın toplayacağı puanların ortalamasını alarak onlar
              için kalite puanı oluşturuyoruz. Bu puanlar uzmanlarımızın
              platformumuz üzerinden alacağı iş potansiyelini etkileyecektir.
            </ListItem>
            <ListItem>
              Bu noktada sistemimizi ve iş kurgumuzu iyileştirmek adına
              uzmanlarımızdan gelecek her türlü değerlendirmelere de açığız.
              Gelen önerileri oluşturacağımız yeni değerlendirme sistemlerini de
              dikkate alacağız. Uzmanlarımızın fikirleri bizler için çok önemli
              olduğundan temel beklentimiz uzmanlarımızın görüşlerini bizimle
              paylaşmasıdır.
            </ListItem>
            <ListItem>
              Algoritmalar tarafından otomatik olarak oluşturulan kalite
              puanlarına elle müdahale mümkün değildir. Belirlenen kriterlere
              uyulup uyulmadığı neticesinde kalite puanında olumlu veya olumsuz
              değişiklikler olacaktır.
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex flexDirection={'column'}>
          <Text
            fontSize={{ base: '19px', lg: '33px' }}
            textStyle={'bigText'} pt={"90px"}
             color={'#333333'} pb={{base:"24px",lg:"42px"}}
          >
            İş yönlendirmelerinde hangi kriterleri baz alacağız?
          </Text>
          <Image
            src={'/expertsImg.png'}
            alt={''}
            w={{ base: '343px', lg: '693px' }}
            h={{ base: '192px', lg: '390px' }}
          />
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Bu kriterlerden birçoğunu aşağıdaki başlıklarda sizin için
            listeledik.
          </Text>
          <UnorderedList
             color={'#666666'}
             spacing={{base:"24px",lg:"32px"}} textStyle={"subText"}
             w={{ base: '343px', lg: 'full' }} pt={{base:"24px",lg:"42px"}}
          >
            <ListItem>
              Ticket Cevaplama Kalitesi: Uzmanlarımızın destek taleplerine cevap
              verme hızı, yazışmanın kaç ticket ile kapatıldığı, cevap
              içeriklerinde verilen bilgilerin kalitesi, doyuruculuğu, tertibi
              ve kullanılan dilin akıcılığı kalite puanlarında etkili olacaktır.
            </ListItem>
            <ListItem>
              Müşteri yorumları: Bir destek talebinin ardından müşteri
              tarafından yapılan olumlu veya olumsuz yorumlar kalite puanını
              etkiler.
            </ListItem>
            <ListItem>
              Zorluk derecesi: Hizmet verilen kategorinin zorluk derecesi kalite
              puanında etkilidir.
            </ListItem>
            <ListItem>
              Hizmet verilen kategorinin zorluk derecesi kalite puanında
              etkilidir.
            </ListItem>
            <ListItem>
              Hizmet dili: Uzmanlarımızın ana dilleri dışında iletişim kurup
              destek sağlayabildiği her yabancı dil hizmeti de kalite puanlarını
              olumlu etkileyecektir.
            </ListItem>
            <ListItem>
              Çalışma süresi: Uzmanlarımızın hizmet süresi ve platformumuzda
              geçirdiği zaman da kalite puanında etkiye sahiptir.
            </ListItem>
            <ListItem>
              Kategori yöneticisinin yorumları: Hizmet boyunca veya hizmet
              ardından kategori yöneticilerinin uzmanlarımız için yaptığı
              değerlendirmeler de kalite puanını etkileyen faktörlerdendir.
            </ListItem>
          </UnorderedList>
          <Text fontSize={'15px'} fontWeight={400} color={'#666666'}>
            Verilen hizmetten müşterilerimizin memnun kalmaması veya
            uzmanlarımızın hizmet kurallarına aykırı davranması durumlarında
            kategori yöneticilerimiz olaya dahil olup süreci devralacaklardır.
            Uzmanlarımız hatalı oldukları durumlarda uyarılacak, aynı hatanın
            tekrarlanması sonucunda akreditasyonları sonlandırılacaktır.
          </Text>
        </Flex>
        <Flex flexDirection={'column'}>
          <Text
            fontSize={{ base: '19px', lg: '33px' }}
            textStyle={'bigText'} pt={"90px"}
             color={'#333333'} pb={{base:"24px",lg:"42px"}}
          >
            Daha fazla iş almak için kalite puanınızı nasıl artırırsınız?
          </Text>
          <Image
            src={'/expertsImg.png'}
            alt={''}
            w={{ base: '343px', md: '693px' }}
            h={{ base: '192px', md: '390px' }}
          />
          <UnorderedList
            color={'#666666'}
            spacing={{base:"24px",lg:"32px"}} textStyle={"subText"}
            w={{ base: '343px', lg: 'full' }} pt={{base:"24px",lg:"42px"}}
          >
            <ListItem>
              Platformumuz uzmanlarımızın daha fazla kazanç elde etmelerine
              katkıda bulunmak için kalite puanı sistemi uygulamaktadır. Bu
              sistem, 100 tavan puanını baz alarak değerlendirme yapmaktadır.
            </ListItem>
            <ListItem>
              Kalite puanı uzmanlar arasında daha fazla iş alma imkanı
              sağlayacaktır. Kalite puanınızı artırmak için makaleler
              yayınlayabilir, müşteri değerlendirme puanlarınızı yüksek
              tutabilir, diğer dillerde destek verebilir ve platformda daha
              fazla vakit geçirerek puanınızı yükseltebilirsiniz.
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex flexDirection={'column'}>
          <Text
           fontSize={{ base: '19px', lg: '33px' }}
           textStyle={'bigText'} pt={"90px"}
            color={'#333333'} pb={{base:"24px",lg:"42px"}}
          >
            Kalite puanını neler etkiler?
          </Text>
          <Image
            src={'/expertsImg.png'}
            alt={''}
            w={{ base: '343px', md: '693px' }}
            h={{ base: '192px', md: '390px' }}
          />
          <UnorderedList
             color={'#666666'}
             spacing={{base:"24px",lg:"32px"}} textStyle={"subText"}
             w={{ base: '343px', lg: 'full' }} pt={{base:"24px",lg:"42px"}}
          >
            <ListItem>
              Ticket Puanlama: Müşterilerimiz, ticket cevaplarının altına
              koyacağız Rating modülü üzerinde 1-5 arasında sunulan çözüm için
              değerlendirme yapacaklar. Bu değerlendirmelerin ortalaması
              alınacak.
            </ListItem>
            <ListItem>
              Ticket Cevaplama Kalitesi: Müşterilerimiz ticket cevaplarının
              altına koyacağımız Rating modülü üzerinden sunulan çözüm için 1
              ile 5 puan arasında değerlendirme yapacaklar. Bu
              değerlendirmelerin ortalaması alınır.
            </ListItem>
            <ListItem>
              Müşteri yorumları: Bir destek talebinin ardından müşteri
              tarafından yapılan olumlu veya olumsuz yorumlar kalite puanını
              etkiler.
            </ListItem>
            <ListItem>
              Proje içerisinde cevaplanan ticket sayısı kalite puanını etkiler.
            </ListItem>
            <ListItem>
              Hizmet verilen kategorinin zorluk derecesi kalite puanında
              etkilidir.
            </ListItem>
            <ListItem>
              Uzmanın ana dili dışında iletişim kurabilip destek sağlayabildiği
              diğer diller de kalite puanında etkilidir.
            </ListItem>
            <ListItem>
              Uzmanımızın platformumuz için ayırdığı hizmet zamanı kalite
              puanında etkilidir.
            </ListItem>
            <ListItem>
              Kategori yöneticisinin değerlendirmesi kalite puanında etkilidir.
            </ListItem>
          </UnorderedList>
        </Flex>
        <Link href={"/BecomeAnExpert"}>
        <Button variant={"globalButton"} w={"343px"} display={{base:"flex",lg:"none"}} m={"82px"} fontSize={"13px"} fontWeight={500} lineHeight={"20px"} letterSpacing={"0.5px"} fontStyle={"normal"} >Uzman Olmak İstiyorum</Button></Link>
      </Flex>
      <Flex
        flexDirection={'column'}
        gap={"48px"}
        display={{ base: 'none', lg: 'flex' }}
      >
        <HStack>
          <Image
            src={'/circleOrange.png'}
            alt={'circle'}
            w={'16px'}
            h={'16px'}
          />
          <Text color={'#F27C00'}  textStyle={"categoriesText"} fontWeight={500}>
            Neden Uzman Olmalıyım?
          </Text>
        </HStack>
        <HStack>
          <Image src={'/circleGray.png'} alt={'circle'} w={'16px'} h={'16px'} />
          <Text textStyle={"categoriesText"} fontWeight={500} color={'#959595'}>
            Gelir Durumlarınızı Görüntüleyin
          </Text>
        </HStack>
        <HStack>
          <Image src={'/circleGray.png'} alt={'circle'} w={'16px'} h={'16px'} />
          <Text textStyle={"categoriesText"} fontWeight={500} color={'#959595'}>
            Kimler Uzman Olabilir?
          </Text>
        </HStack>
        <HStack>
          <Image src={'/circleGray.png'} alt={'circle'} w={'16px'} h={'16px'} />
          <Text textStyle={"categoriesText"} fontWeight={500} color={'#959595'}>
            Uzmanlığınız mı var?
          </Text>
        </HStack>
        <HStack>
          <Image src={'/circleGray.png'} alt={'circle'} w={'16px'} h={'16px'} />
          <Text textStyle={"categoriesText"} fontWeight={500} color={'#959595'}>
            Hangi kriterlere göre tarafıma, iş yönlendirilecek?
          </Text>
        </HStack>
        <HStack>
          <Image src={'/circleGray.png'} alt={'circle'} w={'16px'} h={'16px'} />
          <Text textStyle={"categoriesText"} fontWeight={500} color={'#959595'}>
            İş yönlendirmelerin de hangi kriterleri baz alacağız?
          </Text>
        </HStack>
        <HStack>
          <Image src={'/circleGray.png'} alt={'circle'} w={'16px'} h={'16px'} />
          <Text textStyle={"categoriesText"} fontWeight={500} color={'#959595'}>
            Daha fazla iş almak için kalite puanınızı nasıl artırırsınız?
          </Text>
        </HStack>
        <HStack>
          <Image src={'/circleGray.png'} alt={'circle'} w={'16px'} h={'16px'} />
          <Text textStyle={"categoriesText"} fontWeight={500} color={'#959595'}>
            Kalite puanını neler etkiler?
          </Text>
        </HStack>
        <Button
          variant={'globalButton'}
          w={'204px'}
          h={'36px'}
          fontSize={'13px'} fontWeight={500} fontStyle={"normal"} letterSpacing={"0.5px"}
         >
          Hemen Uzman Ol
        </Button>
      </Flex>
    </Flex>
  )
}

export default memo(WhyBeExpert)


interface itemProps {
  id: number
  Image: string
  desc: string
  grafik: string
  counter: string
  desc2: string
}

const item: Array<itemProps> = [
  {
    id: 1,
    Image: '/arrow-top.png',
    desc: 'Düne göre: %6 artış',
    grafik: '/dt-1.png',
    counter: '15',
    desc2: 'Anlık İşlem'
  },
  {
    id: 2,
    Image: '/arrow-top.png',
    desc: 'Geçen aya göre: %11 artış',
    grafik: '/dt-2.png',
    counter: '267',
    desc2: 'Problem Çözümü'
  }
]
