import {
  VStack,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Button
} from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

const Element = () => {
  return (
    <VStack w={'693px'} alignSelf={'flex-start'} h={'full'} py={10} gap={5}>
      <Text
        color={'#333333'}
        fontSize={'14px'}
        fontWeight={400}
        textStyle={'elementDescText'}
      >
        Kripto airdrop, bir kripto projesinden kullanıcıların cüzdanlarına
        ücretsiz kripto para birimi transferidir. Kripto yatırımcısı, genellikle
        ücretsiz olarak veya basit bir görevi yerine getirmek için bir miktar
        coin veya kripto para birimi tokeni alır. Kripto airdropları, bir haber
        bültenine kaydolmak, projenin sosyal medya sayfalarını takip etmek veya
        marka tanınırlığı oluşturmak ve platforma daha fazla insan çekmek için
        güzel bir yoldur.
      </Text>
      <Image src={'/crypto1.png'} alt={'ımg'} w={'693px'} h={'390px'} />
      <Text textStyle={'elementHeadText'}>Airdrop Türleri Nelerdir?</Text>
      <VStack textStyle={'elementDescText'}>
        <Text>
          Kripto projelerinin ana motivasyonları kullanıcıları teşvik etmek olsa
          da, bazı durumlarda ücretsiz kripto verebilir.
        </Text>
        <Text textStyle={'elementDescText'}>
          En yaygın airdrop türleri şunlardır:
        </Text>
        <UnorderedList textStyle={'elementDescText'} pl={4}>
          <ListItem>Standart Airdrop</ListItem>
          <ListItem>Ödül Airdrop’u</ListItem>
          <ListItem>Özel Airdrop</ListItem>
          <ListItem>Holder Airdrop</ListItem>
        </UnorderedList>
      </VStack>
      <Text textStyle={'elementHeadText'}>Standart Airdrop</Text>
      <Text textStyle={'elementDescText'}>
        Standart bir kripto para birimi airdropu, bir pazarlama stratejisi
        olarak mevcut cüzdanlara bir miktar coin veya token aktarır. Standart
        Airdrop’da amaçlanan, genellikle markayı tanıtmak ve daha fazla insanı,
        genellikle ilk coin teklifleri sırasında varlığı benimsemeye teşvik
        etmektir. Genel olarak tek yapılması gereken yeni projede bir hesap
        açmak ve dağıtım etkinliği sırasında cüzdan adresini vermektir.
      </Text>
      <Text textStyle={'elementHeadText'}>Ödül Airdrop’u</Text>
      <Text textStyle={'elementDescText'}>
        Ödül airdropları da bir pazarlama stratejisidir, ancak potansiyel
        alıcıların dijital varlığı almak için bazı promosyon faaliyetlerine
        katılması gerekir. Bu faaliyetlere örnek olarak şunlar verilebilir:
        <br />
        <br />
        Twitter veya diğer sosyal medya platformlarında blockchain projesi
        hakkında bir gönderi paylaşmak
        <br /> Projenin e-posta bültenine kayıt olmak <br />
        Projeye katılabilmek için bir foruma kayıt olmak
        <br /> Standart Airdrop’un aksine Ödül Airdrop’u yoluyla ücretsiz bir
        token elde etmek biraz daha fazla çalışma gerektirir. Ancak aktiviteler
        genellikle talepkar değildir.
      </Text>
      <Text textStyle={'elementHeadText'}>Özel Airdrop</Text>
      <Text textStyle={'elementDescText'}>
        Özel Airdrop, bir airdrop toplayıcıyı takip eden kişilere kripto paralar
        gönderir. Bu üçüncü taraf siteler, gelecek vaat eden kripto projeleri ve
        yaklaşan airdrop etkinlikleri hakkında haberler paylaşır.
      </Text>
      <Text textStyle={'elementHeadText'}>Holder Airdrop</Text>
      <Text textStyle={'elementDescText'}>
        Holder Airdroplar, cüzdanlarında bir miktar başka kripto para birimi
        olan kişilere gider. Genellikle, kripto projesi belirli bir tarihte
        kripto varlıklarının anlık görüntüsünü alır ve ardından insanların o
        zamandaki sahipliklerine göre bir airdrop talep etmelerine izin verir.
      </Text>
      <Text textStyle={'elementHeadText'}>Airdroplar Nasıl Elde Edilir?</Text>
      <Text textStyle={'elementDescText'}>
        Kripto airdropları, fiat para birimini kullanarak herhangi bir varlık
        satın almak zorunda kalmadan kripto portföyüne eklenebilir.
        <br />
        Kripto airdrop fırsatları için çevrimiçi olarak düzenli aramalar yapmak
        <br />
        Airdrop toplayıcılarını takip etmek ve özel airdroplarına kaydolmak
        <br />
        Sunulan Standart Airdroplardan faydalanmak için yeni platformlara
        kaydolmak <br />
        Ödül Airdropları’na hazırlanmak için gelecek vaat eden projeleri takip
        etmek <br />
        <br />
        Yaklaşan bir airdroptan yararlanmak, çoğunlukla gelişmelere ayak
        uydurmak ve ortaya çıkan fırsatları değerlendirebilme meselesidir.
        <br />
      </Text>
      <Link
        href={
          'https://taxbit.com/blog/what-are-crypto-airdrops-and-how-do-they-work'
        }
      >
        <Text fontSize={'14px'} color={'#666666'} fontWeight={400} alignSelf={"flex-start"}>
          Kaynak:
          https://taxbit.com/blog/what-are-crypto-airdrops-and-how-do-they-work
        </Text>
      </Link>
    </VStack>
  )
}

export default Element
