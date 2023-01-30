import { Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';

import LeftSideDropDownMenu from './LeftSideDropDownMenu';

const Navbar:React.FC = () => {
    
    return (
        <Flex bg={"white"} height="50px" padding={"5px 12px"}>
            <Flex>
                <LeftSideDropDownMenu/>
            </Flex>
        </Flex>
        );
}
export default Navbar;