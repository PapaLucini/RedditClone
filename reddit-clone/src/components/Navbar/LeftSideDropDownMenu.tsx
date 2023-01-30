import { AddIcon, HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';


const LeftSideDropDownMenu: React.FC = () => {

    return (
        <Menu>
            <MenuButton
             as={IconButton} 
             aria-label='Options'
             icon={<HamburgerIcon/>}
             variant='outline'
             />
            <MenuList>
                <MenuItem icon={<AddIcon/>} >
                    Create Expense
                </MenuItem>
            </MenuList>
        </Menu>
    );
}
export default LeftSideDropDownMenu;

