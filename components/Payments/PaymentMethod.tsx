import React, { memo, useState } from 'react'
import {
  VStack,
  Text,
  HStack,
  Button,
  Flex,
  InputGroup,
  Input,
  FormLabel,
  InputRightElement,
  Select,
  Checkbox,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Radio,
  Image,
  Divider,
  ModalBody,
  RadioGroup,
  Circle,
  Stack,
  useDisclosure,
  SimpleGrid
} from '@chakra-ui/react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

import { BsPlusCircle } from 'react-icons/bs'

const PaymentMethod = ({succesfull,failedPage}:any) => {
  const [page, setPage] = useState<number>(1)
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [wallet, setWallet] = useState<boolean>(false)

  return (
    <VStack w={'490px'} h={'660px'} bg={'white'} gap={5}>
      <Text
        w={'full'}
        h={'42px'}
        bg={'#F5ECE3'}
        alignSelf={'center'}
        fontSize={'13px'}
        color={'#333333'}
        display={'flex'}
        fontWeight={500}
        alignItems={'center'}
        px={5}
      >
        Ödeme Yöntemi Seçin
      </Text>
      <HStack fontSize={'13px'}>
        <Button
          bg={'white'}
          w={'147px'}
          onClick={() => setPage(1)}
          border={'1px solid'}
          borderColor={'#C1DAF04D'}
        >
          Kredi/Banka Kartı
        </Button>
        <Button
          bg={'white'}
          w={'147px'}
          onClick={() => setPage(2)}
          border={'1px solid'}
          borderColor={'#C1DAF04D'}
        >
          Havale
        </Button>
        <Button
          bg={'white'}
          w={'147px'}
          onClick={() => setPage(3)}
          border={'1px solid'}
          borderColor={'#C1DAF04D'}
        >
          Kripto
        </Button>
      </HStack>
      {page == 1 ? (
        <Flex
          flexDirection={'column'}
          h={'full'}
          justifyContent={'space-between'}
        >
          <Flex flexDirection={'column'} gap={5}>
            <InputGroup flexDirection={'column'} w={'full'}>
              <FormLabel>
                <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                  Kart Üzerindeki İsim
                </Text>
              </FormLabel>
              <InputGroup w={'full'}>
                <Input
                  placeholder={'Örn.Fatih Demirkan'}
                  bg={'white'}
                  type={'text'}
                  w={'458px'}
                />
                <InputRightElement>
                  <AiOutlineCheckCircle />
                </InputRightElement>
              </InputGroup>
            </InputGroup>
            <InputGroup flexDirection={'column'} w={'full'}>
              <FormLabel>
                <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                  Kart Numarası
                </Text>
              </FormLabel>
              <InputGroup w={'full'}>
                <Input
                  placeholder={'4543 1479 1145 2214'}
                  bg={'white'}
                  type={'text'}
                  w={'458px'}
                />
                <InputRightElement>
                  <Image
                    src={'/logos_mastercard.png'}
                    alt={'ımg'}
                    w={'24px'}
                    h={'19px'}
                  />
                </InputRightElement>
              </InputGroup>
            </InputGroup>
            <HStack w={'full'}>
              <VStack alignItems={'flex-start'}>
                <FormLabel>
                  <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                    Ay
                  </Text>
                </FormLabel>
                <Select w={'143px'} h={'46px'}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Select>
              </VStack>
              <VStack alignItems={'flex-start'}>
                <FormLabel>
                  <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                    Yıl
                  </Text>
                </FormLabel>
                <Select w={'143px'} h={'46px'}>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                </Select>
              </VStack>
              <VStack alignItems={'flex-start'}>
                <FormLabel>
                  <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
                    CVV
                  </Text>
                </FormLabel>
                <InputGroup>
                  <Input
                    w={'143px'}
                    h={'46px'}
                    placeholder={'344'}
                    _placeholder={{ color: 'black' }}
                  />
                  <InputRightElement>
                    <Image
                      src={'/cards.png'}
                      alt={'ımg'}
                      w={'24px'}
                      h={'24px'}
                    />
                  </InputRightElement>
                </InputGroup>
              </VStack>
            </HStack>
            <Checkbox fontSize={'14px'} color={'#525252'} fontWeight={400}>
              Sonraki Ödemeler için kaydet
            </Checkbox>
            <Checkbox fontSize={'14px'} color={'#525252'} fontWeight={400}>
              <span style={{ color: '#2485E8' }}>Satın alma kuralları</span>
              ’nı okudum, onaylıyorum.
            </Checkbox>
            <Button
              variant={'globalButton'}
              fontSize={'15px'}
              w={'300px'}
              alignSelf={'center'}
              gap={3}
            >
              Ödemeyi Tamamla{' '}
              <Image src={'/card.png'} alt={'ımg'} w={'18px'} h={'18px'} />
            </Button>
          </Flex>
          <Flex>
            <Flex color={'#959595'} cursor={'pointer'} onClick={onOpen}>
              <Icon alignSelf={'center'}>
                <BsPlusCircle />
              </Icon>
              <Text fontSize={'15px'}>Yeni bir kart ekle</Text>
            </Flex>
          </Flex>
          <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
            <ModalOverlay />
            <ModalContent w={'490px'} h={'588px'}>
              <ModalHeader
                fontSize={'15px'}
                color={' #333333'}
                fontWeight={500}
              >
                Yeni kart ekle
              </ModalHeader>
              <ModalCloseButton />
              <Divider />
              <ModalBody w={'490px'} h={'588px'}>
                <AddCard />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      ) : page == 2 ? (
        <Flex flexDirection={'column'} h={'full'} w={'full'} px={2} py={2}>
          <Flex flexDirection={'column'} h={'full'} w={'full'} gap={8}>
            <RadioGroup w={'full'}>
              <Stack direction='column' w={'full'}>
                <Radio value='1' w={'full'}>
                  <HStack w={'full'} gap={20}>
                    <Flex gap={5}>
                      <Image
                        src={'/isBank.png'}
                        alt={'is'}
                        w={'42px'}
                        h={'42px'}
                      />
                      <VStack alignItems={'flex-start'}>
                        <Text
                          fontSize={'12px'}
                          color={'#666666'}
                          fontWeight={400}
                        >
                          İş Bankası hesabı:
                        </Text>
                        <Text
                          color={'#333333'}
                          fontSize={'15px'}
                          fontWeight={500}
                        >
                          TR02 0006 4000 0014 1500 3468 41
                        </Text>
                      </VStack>
                    </Flex>
                    <Flex>
                      <Image
                        src={'/copy.png'}
                        alt={'ımg'}
                        w={'24px'}
                        h={'24px'}
                      />
                    </Flex>
                  </HStack>
                </Radio>
                <Radio value='2'>
                  <HStack w={'full'} gap={20}>
                    <Flex gap={5}>
                      <Image
                        src={'/ziraatBank.png'}
                        alt={'ziraat'}
                        w={'42px'}
                        h={'42px'}
                      />
                      <VStack alignItems={'flex-start'}>
                        <Text
                          fontSize={'12px'}
                          color={'#666666'}
                          fontWeight={400}
                        >
                          Ziraat Bankası hesabı:
                        </Text>
                        <Text
                          color={'#333333'}
                          fontSize={'15px'}
                          fontWeight={500}
                        >
                          TR62 0001 0019 0087 1255 4450 01
                        </Text>
                      </VStack>
                    </Flex>
                    <Flex>
                      <Image
                        src={'/copy.png'}
                        alt={'ımg'}
                        w={'24px'}
                        h={'24px'}
                      />
                    </Flex>
                  </HStack>
                </Radio>
                <Radio value='3'>
                  <HStack w={'full'} gap={20}>
                    <Flex gap={5}>
                      <Image
                        src={'/vakıfBank.png'}
                        alt={'vakıf'}
                        w={'42px'}
                        h={'42px'}
                      />
                      <VStack alignItems={'flex-start'}>
                        <Text
                          fontSize={'12px'}
                          color={'#666666'}
                          fontWeight={400}
                        >
                          Vakıfbank hesabı:
                        </Text>
                        <Text
                          color={'#333333'}
                          fontSize={'15px'}
                          fontWeight={500}
                        >
                          TR02 0001 5001 5800 7309 3391 67
                        </Text>
                      </VStack>
                    </Flex>
                    <Flex>
                      <Image
                        src={'/copy.png'}
                        alt={'ımg'}
                        w={'24px'}
                        h={'24px'}
                      />
                    </Flex>
                  </HStack>
                </Radio>
              </Stack>
            </RadioGroup>

            <Checkbox fontSize={'14px'} color={'#525252'} fontWeight={400}>
              Daha sonrası için kaydet
            </Checkbox>
            <Checkbox fontSize={'14px'} color={'#525252'} fontWeight={400}>
              <span style={{ color: '#2485E8' }}>Satın alma kuralları</span>
              ’nı okudum, onaylıyorum.
            </Checkbox>
            <Button
              variant={'globalButton'}
              fontSize={'15px'}
              w={'300px'}
              alignSelf={'center'}
              gap={3} onClick={() => failedPage()}
            >
              Ödemeyi Tamamla
              <Image src={'/card.png'} alt={'ımg'} w={'18px'} h={'18px'} />
            </Button>
          </Flex>
          <Flex>
            <Flex color={'#959595'} cursor={'pointer'} onClick={onOpen}>
              <Icon alignSelf={'center'}>
                <BsPlusCircle />
              </Icon>
              <Text fontSize={'15px'}>Yeni bir hesap ekle</Text>
            </Flex>
          </Flex>
        </Flex>
      ) : page == 3 ? (
        <Flex w={'full'} px={5} py={2} flexDirection={'column'} gap={5}>
          <HStack w={'full'} justifyContent={'space-between'} display={'flex'}>
            <Text fontSize={'23px'} color={'#333333'} fontWeight={400}>
              Fatih D.
            </Text>
            <Flex gap={5}>
              <HStack color={wallet ? '#56C568' : 'red'}>
                {wallet ? (
                  <Flex alignItems={'center'} gap={1}>
                    <Circle size='8px' bg={"#56C568"}></Circle>
                    <Text onClick={onOpen} cursor={'pointer'}>
                      Bağlandı
                    </Text>{' '}
                  </Flex>
                ) : (
                  <Flex alignItems={'center'} gap={1}>
                    <Circle size='8px' bg={"red"}></Circle>
                    <Text onClick={onOpen} cursor={'pointer'}>
                      Cüzdan Bağla
                    </Text>
                  </Flex>
                )}
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Your Wallet</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Wallet walletActive={() => setWallet(true)} />
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </HStack>
              <Text
                color={'#959595'}
                fontSize={'15px'}
                fontWeight={500}
                cursor={'pointer'}
                onClick={() => (wallet == true ? setWallet(false) : null)}
              >
                Çıkış Yap
              </Text>
            </Flex>
          </HStack>
          <HStack w={'full'} justifyContent={'space-between'}>
            <Text color='#666666' fontSize={'14px'} fontWeight={500}>
              0x867cad50b5879a965453c81bb50357579d71a1be
            </Text>
            <Image src={'/copy.png'} alt={'ımg'} w={'24px'} h={'24px'} />
          </HStack>
          <VStack alignItems={'flex-start'}>
            <RadioGroup>
              <Stack direction='column' gap={2}>
                <Radio value='1'>
                  <HStack>
                    <Image src={'/bnb.png'} alt={'ımg'} w={'24px'} h={'24px'} />
                    <Text color={'#333333'} fontSize={'15px'} fontWeight={400}>
                      1,446 BNB
                    </Text>
                  </HStack>
                </Radio>
                <Radio value='2'>
                  <HStack>
                    <Image src={'/btc.png'} alt={'ımg'} w={'24px'} h={'24px'} />
                    <Text color={'#333333'} fontSize={'15px'} fontWeight={400}>
                      0,00641123 BTC
                    </Text>
                  </HStack>
                </Radio>
                <Radio value='3'>
                  <HStack>
                    <Image src={'/eth.png'} alt={'ımg'} w={'24px'} h={'24px'} />
                    <Text color={'#333333'} fontSize={'15px'} fontWeight={400}>
                      0,46214 ETH
                    </Text>
                  </HStack>
                </Radio>
              </Stack>
            </RadioGroup>
          </VStack>
          <Button
            variant={'globalButton'}
            fontSize={'15px'}
            w={'300px'}
            alignSelf={'center'}
            gap={3} onClick={() => succesfull()}
          >
            Ödemeyi Tamamla
            <Image src={'/card.png'} alt={'ımg'} w={'18px'} h={'18px'} />
          </Button>
        </Flex>
      ) : null}
    </VStack>
  )
}

export default memo(PaymentMethod)

const AddCard = () => {
  return (
    <Flex flexDirection={'column'} w={'full'} h={'full'} gap={10}>
      <InputGroup flexDirection={'column'} w={'full'}>
        <FormLabel>
          <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
            Kart Üzerindeki İsim
          </Text>
        </FormLabel>
        <InputGroup w={'full'}>
          <Input
            placeholder={'Örn.Fatih Demirkan'}
            bg={'white'}
            type={'text'}
            w={'458px'}
          />
          <InputRightElement>
            <AiOutlineCheckCircle />
          </InputRightElement>
        </InputGroup>
      </InputGroup>
      <InputGroup flexDirection={'column'} w={'full'}>
        <FormLabel>
          <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
            Kart Numarası
          </Text>
        </FormLabel>
        <InputGroup w={'full'}>
          <Input
            placeholder={'4543 1479 1145 2214'}
            bg={'white'}
            type={'text'}
            w={'458px'}
          />
          <InputRightElement>
            <Image
              src={'/logos_mastercard.png'}
              alt={'ımg'}
              w={'24px'}
              h={'19px'}
            />
          </InputRightElement>
        </InputGroup>
      </InputGroup>
      <HStack w={'full'}>
        <VStack alignItems={'flex-start'}>
          <FormLabel>
            <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
              Ay
            </Text>
          </FormLabel>
          <Select w={'143px'} h={'46px'}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </Select>
        </VStack>
        <VStack alignItems={'flex-start'}>
          <FormLabel>
            <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
              Yıl
            </Text>
          </FormLabel>
          <Select w={'144px'} h={'46px'}>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
            <option>2027</option>
          </Select>
        </VStack>
        <VStack alignItems={'flex-start'}>
          <FormLabel>
            <Text fontSize={'12px'} fontWeight={400} color={'#525252'}>
              CVV
            </Text>
          </FormLabel>
          <InputGroup>
            <Input
              w={'139px'}
              h={'46px'}
              placeholder={'344'}
              _placeholder={{ color: 'black' }}
            />
            <InputRightElement>
              <Image src={'/cards.png'} alt={'ımg'} w={'24px'} h={'24px'} />
            </InputRightElement>
          </InputGroup>
        </VStack>
      </HStack>
      <Checkbox fontSize={'14px'} color={'#525252'} fontWeight={400}>
        Sonraki Ödemeler İçin Kaydet
      </Checkbox>
      <Button
        variant={'globalButton'}
        fontSize={'15px'}
        w={450}
        alignSelf={'center'}
        gap={3}
      >
        Kaydet
      </Button>
    </Flex>
  )
}

export const Wallet = ({ walletActive }: { walletActive: any }) => {
  return (
    <VStack
      h={'716px'}
      bg={' #FFFFFF'}
      borderRadius={'16px'}
      alignItems={'flex-start'}
      gap={5}
    >
      <Text fontSize={'19px'} fontWeight={500} color={'#666666'}>
        Select network
      </Text>
      <SimpleGrid columns={2} spacing={5}>
        <Button variant={'walletButton'}>
          <Image src={'/eth.png'} alt={'eth'} w={'26px'} h={'42px'} /> Ethereum
        </Button>
        <Button variant={'walletButton'}>
          <Image src={'/bnb.png'} alt={'bnb'} w={'42px'} h={'42px'} />
          Bsc
        </Button>
        <Button variant={'walletButton'}>
          <Image src={'/ava.png'} alt={'ava'} w={'44px'} h={'42px'} />
          Avalaunch
        </Button>
      </SimpleGrid>
      <Text fontSize={'19px'} fontWeight={500} color={'#666666'}>
        Select Wallet
      </Text>
      <SimpleGrid columns={2} spacing={5}>
        <Button variant={'walletButton'}>
          <Image src={'/metamask.png'} alt={'metamask'} w={'42px'} h={'42px'} />
          Metamask
        </Button>
        <Button variant={'walletButton'}>
          <Image
            src={'/trustWallet.png'}
            alt={'trustWallet'}
            w={'42px'}
            h={'42px'}
          />
          TrustWallet
        </Button>
        <Button variant={'walletButton'}>
          <Image
            src={'/walletConnect.png'}
            alt={'walletConnect'}
            w={'42px'}
            h={'42px'}
          />
          WalletConnect
        </Button>
        <Button variant={'walletButton'}>
          <Image
            src={'/tokenPocket.png'}
            alt={'tokenPocket'}
            w={'42px'}
            h={'42px'}
          />
          TokenPocket
        </Button>
        <Button variant={'walletButton'}>
          <Image
            src={'/mathWallet.png'}
            alt={'mathWallet'}
            w={'42px'}
            h={'42px'}
          />
          MathWallet
        </Button>
        <Button variant={'walletButton'}>
          <Image src={'/coin98.png'} alt={'coin98'} w={'42px'} h={'42px'} />
          Coin98
        </Button>
      </SimpleGrid>
      <Button
        variant={'globalButton'}
        w={'395px'}
        onClick={() => walletActive()}
      >
        Devam et
      </Button>
    </VStack>
  )
}
