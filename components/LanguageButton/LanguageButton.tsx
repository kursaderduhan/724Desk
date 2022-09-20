import React, { memo } from 'react'
import {
  MenuItem,
  FlexProps,
  HStack,
  Image,
  Text,
  VStack,
  Flex
} from '@chakra-ui/react'

export const LanguageButton = () => {
  return (
    <Flex flexDirection={'column'}>
      {Language.map(lang => (
        <MenuItem key={lang.Key} _hover={{bg:"#C1DAF0"}}>
          <Item key={lang.Key} Flag={lang.Flag} Country={lang.Country}></Item>
        </MenuItem>
      ))}
    </Flex>
  )
}

export default memo(LanguageButton)

interface LanguageProps {
  Country: string
  Flag: string
  Key: string
}

const Language: Array<LanguageProps> = [
  { Country: 'Türkçe', Flag: '/trFlag.png', Key: 'tr' },
  { Country: 'Felemenkçe', Flag: '/flFlag.png', Key: 'fl' },
  { Country: 'Almanca', Flag: '/grFlag.png', Key: 'ger' },
  { Country: 'Fransızca', Flag: '/frFlag.png', Key: 'fr' },
  { Country: 'İngilizce', Flag: '/ingFlag.png', Key: 'ing' }
]

interface ItemProps extends FlexProps {
  Country: string
  Flag: string
}

export const Item = ({ ...rest }: ItemProps) => {
  return (
    <HStack w={'full'} >
          <Image src={rest.Flag} alt={'flag'} w={"24px"} h={"16.5px"} />
      <Text fontSize={"sm"}>{rest.Country}</Text>
    </HStack>
  )
}
