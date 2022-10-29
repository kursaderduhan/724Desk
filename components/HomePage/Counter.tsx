import React, { useState, useEffect, memo } from 'react'
import { VStack, Text, HStack, Flex } from '@chakra-ui/react'

export const Counter = () => {
  const [timerDays, setTimerDays] = useState<number>()
  const [timerHours, setTimerHours] = useState<number>()
  const [timerMinutes, setTimerMinutes] = useState<number>()
  const [timerSeconds, setTimerSeconds] = useState<number>()

  let interval: any

  const startTimer = () => {
    const countDownDate = new Date('December 29,2022 ').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()

      const distance = countDownDate - now

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
      const seconds = Math.floor((distance % (60 * 1000)) / 1000)

      if (distance <= 0) {
        // Stop Timer
      } else {
        // Update Timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    })
  }

  useEffect(() => {
    startTimer()
  })

  return (
    <Flex>
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </Flex>
  )
}

export default memo(Counter)

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }: any) => {
  return (
    <Flex>
      <HStack gap={2} fontSize={'4xl'} fontWeight={500}>
        <VStack w={'full'}>
          <Text color={"white"} fontSize={{base:"42px",md:"58px"}} >{timerDays}</Text>
          <Text color={'#C4C4C4'} fontSize={{base:"10px",md:'13px'}} >
            days
          </Text>
        </VStack>
        <Text alignSelf={'flex-start'} color={"white"} py={3}>:</Text>
        <VStack>
          <Text color={"white"} fontSize={{base:"42px",md:"58px"}}>{timerHours}</Text>
          <Text color={'#C4C4C4'} fontSize={{base:"10px",md:'13px'}} >
            hours
          </Text>
        </VStack>
        <Text alignSelf={'flex-start'} color={"white"} py={3}>:</Text>
        <VStack>
          <Text color={"white"} fontSize={{base:"42px",md:"58px"}}>{timerMinutes}</Text>
          <Text color={'#C4C4C4'} fontSize={{base:"10px",md:'13px'}} >
            minutes
          </Text>
        </VStack>
        <Text alignSelf={"flex-start"} color={"white"} py={3}>:</Text>
        <VStack>
          <Text color={"white"} fontSize={{base:"42px",md:"58px"}}>{timerSeconds}</Text>
          <Text color={'#C4C4C4'} fontSize={{base:"10px",md:'13px'}} >
            seconds
          </Text>
        </VStack>
      </HStack>
    </Flex>
  )
}

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10
}
