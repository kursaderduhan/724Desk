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
export const WhyBeExpert = () => {
  return (
    <Flex gap={20}>
      <Flex flexDirection={'column'} w={'693px'} gap={10}>
        <Flex flexDirection={'column'} gap={10}>
          <Text fontSize={{base:"19px",md:'33px'}} fontWeight={500} color={'#333333'}>
            Neden Uzman Olmalıyım?
          </Text>
          <Flex flexDirection={'column'} gap={5}>
            <Text fontSize={{base:"15px",md:'19px'}} fontWeight={500} color={'#333333'}>
              Support projemiz dünya çapında uzmanların oluşturduğu bir networke
              sahiptir.
            </Text>
            <UnorderedList
              fontSize={'14px'}
              fontWeight={'400'}
              color={'#666666'}
              spacing={3} w={{base:"343px",md:"full"}}
            >
              <ListItem>
                Öncelikle böyle bir platformda uzman olmak size büyük bir
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
                Bu platformda paylaşacağınız uzmanlığınız size para
                kazandıracak. Uzmanlarımız da kendi aralarında paylaşımda
                bulunabilecekler ve bir konu hakkında veya bilgi ihtiyacında
                kuracağımız uzmanlar arası paylaşım sayfaları neticesinde bilgi
                birikimlerini paylaşabileceklerdir.
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={10}>
          <Text fontSize={{base:"19px",md:'33px'}} fontWeight={500} color={'#333333'}>
            Kimler Uzman Olabilir?
          </Text>
          <Image src={'/expertsImg.png'} alt={''} w={{ base: "343px", md: '693px' }} h={{base:"192px",md:'390px'}} />
          <UnorderedList
            fontSize={'14px'}
            fontWeight={'400'}
            color={'#666666'}
            spacing={3} w={{base:"343px",md:"full"}}
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
        <Flex flexDirection={'column'} gap={10}>
          <Text fontSize={{base:"19px",md:'33px'}} fontWeight={500} color={'#333333'}>
            Paylaşmak İstediğiniz bir uzmanlığınız mı var?
          </Text>
          <Image src={'/expertsImg.png'} alt={''} w={{ base: "343px", md: '693px' }} h={{base:"192px",md:'390px'}}  />
          <UnorderedList
            fontSize={'14px'}
            fontWeight={'400'}
            color={'#666666'}
            spacing={3} w={{base:"343px",md:"full"}}
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
        <Flex flexDirection={'column'} gap={10}>
          <Text fontSize={{base:"19px",md:'33px'}} fontWeight={500} color={'#333333'}>
            Hangi kriterlere göre tarafıma iş yönlendirilecek?
          </Text>
          <Image src={'/expertsImg.png'} alt={''} w={{ base: "343px", md: '693px' }} h={{base:"192px",md:'390px'}} />
          <UnorderedList
            fontSize={'14px'}
            fontWeight={'400'}
            color={'#666666'}
            spacing={3} w={{base:"343px",md:"full"}}
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
        <Flex flexDirection={'column'} gap={10}>
          <Text fontSize={{base:"19px",md:'33px'}} fontWeight={500} color={'#333333'}>
            İş yönlendirmelerinde hangi kriterleri baz alacağız?
          </Text>
          <Image src={'/expertsImg.png'} alt={''} w={{ base: "343px", md: '693px' }} h={{base:"192px",md:'390px'}} />
          <Text fontSize={'19px'} fontWeight={500} color={'#333333'}>
            Bu kriterlerden birçoğunu aşağıdaki başlıklarda sizin için
            listeledik.
          </Text>
          <UnorderedList
            fontSize={'14px'}
            fontWeight={'400'}
            color={'#666666'}
            spacing={3} w={{base:"343px",md:"full"}}
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
        <Flex flexDirection={'column'} gap={10}>
          <Text fontSize={{base:"19px",md:'33px'}} fontWeight={500} color={'#333333'}>
            Daha fazla iş almak için kalite puanınızı nasıl artırırsınız?
          </Text>
          <Image src={'/expertsImg.png'} alt={''} w={{ base: "343px", md: '693px' }} h={{base:"192px",md:'390px'}} />
          <UnorderedList
            fontSize={'14px'}
            fontWeight={'400'}
            color={'#666666'}
            spacing={3} w={{base:"343px",md:"full"}}
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
        <Flex flexDirection={'column'} gap={10}>
          <Text fontSize={{base:"19px",md:'33px'}} fontWeight={500} color={'#333333'}>
            Kalite puanını neler etkiler?
          </Text>
          <Image src={'/expertsImg.png'} alt={''} w={{ base: "343px", md: '693px' }} h={{base:"192px",md:'390px'}} />
          <UnorderedList
            fontSize={'14px'}
            fontWeight={'400'}
            color={'#666666'}
            spacing={3} w={{base:"343px",md:"full"}}
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
      </Flex>
      <Flex flexDirection={'column'} gap={5} display={{base:"none",md:"flex"}}>
        <HStack>
          <Image
            src={'/circleOrange.png'}
            alt={'circle'}
            w={'16px'}
            h={'16px'}
          />
          <Text color={'#F27C00'} fontSize={'12px'} fontWeight={'500'}>
            Neden Uzman Olmalıyım?
          </Text>
        </HStack>
        <HStack>
          <Image src={'/circleGray.png'} alt={'circle'} w={'16px'} h={'16px'} />
          <Text fontSize={'12px'} fontWeight={'500'} color={'#959595'}>
            Gelir Durumlarınızı Görüntüleyin
          </Text>
        </HStack>
        <HStack>
          <Image src={'/circleGray.png'} alt={'circle'} w={'16px'} h={'16px'} />
          <Text fontSize={'12px'} fontWeight={'500'} color={'#959595'}>
            Kimler Uzman Olabilir?
          </Text>
        </HStack>
        <HStack>
          <Image src={'/circleGray.png'} alt={'circle'} w={'16px'} h={'16px'} />
          <Text fontSize={'12px'} fontWeight={'500'} color={'#959595'}>
            Uzmanlığınız mı var?
          </Text>
        </HStack>
        <HStack>
          <Image src={'/circleGray.png'} alt={'circle'} w={'16px'} h={'16px'} />
          <Text fontSize={'12px'} fontWeight={'500'} color={'#959595'}>
            Hangi kriterlere göre tarafıma, iş yönlendirilecek?
          </Text>
        </HStack>
        <HStack>
          <Image src={'/circleGray.png'} alt={'circle'} w={'16px'} h={'16px'} />
          <Text fontSize={'12px'} fontWeight={'500'} color={'#959595'}>
            İş yönlendirmelerin de hangi kriterleri baz alacağız?
          </Text>
        </HStack>
        <HStack>
          <Image src={'/circleGray.png'} alt={'circle'} w={'16px'} h={'16px'} />
          <Text fontSize={'12px'} fontWeight={'500'} color={'#959595'}>
            Daha fazla iş almak için kalite puanınızı nasıl artırırsınız?
          </Text>
        </HStack>
        <HStack>
          <Image src={'/circleGray.png'} alt={'circle'} w={'16px'} h={'16px'} />
          <Text fontSize={'12px'} fontWeight={'500'} color={'#959595'}>
            Kalite puanını neler etkiler?
          </Text>
        </HStack>
        <Button
          variant={'globalButton'}
          w={'204px'}
          h={'36px'}
          fontSize={'13px'}
        >
          Hemen Uzman Ol
        </Button>
      </Flex>
    </Flex>
  )
}

export default memo(WhyBeExpert)
