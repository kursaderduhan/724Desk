import React,{memo} from 'react'
import {Flex} from '@chakra-ui/react'
export const PartnerShip = () => {
    return (
        <Flex w={{base:"100%",md:"full"}} h={{base:"504px",md:"391px"}} bgImage={{base:"/isBirligi.png",md:"/partnerShip.png"}} bgSize={"cover"} bgPos={"center"}>
        </Flex>
    )
}

export default memo(PartnerShip)