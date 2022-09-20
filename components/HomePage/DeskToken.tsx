import React,{memo} from 'react'
import {Flex, VStack} from '@chakra-ui/react'
export const DeskToken = () => {
    return (
        <Flex bgImage={"/DeskToken-bg.png"} w={"full"} h={"1200px"} bgPos={"center"} bgSize={"cover"}>          
        </Flex>
    )
}

export default memo(DeskToken)