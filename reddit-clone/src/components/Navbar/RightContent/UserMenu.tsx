import React from "react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { authModalState } from "@/src/atoms/authModalAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin, MdOutlineLogout } from "react-icons/md";
import { signOut, User } from "firebase/auth";
import { Bubblegum_Sans } from "@next/font/google";
import { firebaseAuth } from "@/src/firebase/clientApp";
import { userAgent } from "next/server";

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = (props) => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <Menu>
      <MenuButton
        cursor={"pointer"}
        padding="0px 6px"
        borderRadius={4}
        _hover={{
          outline: "1px solid",
          outlineColor: "gray.200",
        }}
      >
        <Flex align={"center"}>
          <Flex align={"center"}>
            {props.user ? (
              <>
                <Icon
                  as={FaRedditSquare}
                  fontSize={24}
                  mr={1}
                  color="gray.300"
                />
                <Flex
                  direction={"column"}
                  display={{ base: "none", lg: "flex" }}
                  fontSize={"8pt"}
                  mr={4}
                >
                  <Text fontWeight={700}>
                    {props.user?.displayName || props.user.email?.split("@")[0]}
                  </Text>
                  <Flex>
                    <Icon as={IoSparkles} color={"brand.100"} mr={1} />
                    <Text color={"gray.400"}>1 karma</Text>
                  </Flex>
                </Flex>
              </>
            ) : (
              <Icon as={VscAccount} fontSize={24} color="gray.400" />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList fontSize={"10pt"}>
        {props.user ? (
          <>
            <MenuItem
              _hover={{
                bg: "blue.500",
                color: "white",
              }}
            >
              <Flex align={"center"} fontWeight={700}>
                <Icon as={CgProfile} mr={2} fontSize={20} />
                Profile
              </Flex>
            </MenuItem>
            {/* <MenuDivider /> */}
            <Flex
              align={"center"}
              border="1px solid"
              borderColor={"gray.100"}
              margin={2}
            ></Flex>
            <MenuItem
              _hover={{
                bg: "blue.500",
                color: "white",
              }}
              onClick={() => signOut(firebaseAuth)}
            >
              <Flex width={"100%"} align={"center"} fontWeight={700}>
                <Icon as={MdOutlineLogout} mr={2} fontSize={20} />
                Logout
              </Flex>
            </MenuItem>
          </>
        ) : (
          <MenuItem
            _hover={{
              bg: "blue.500",
              color: "white",
            }}
            onClick={() =>
              setAuthModalState((prev) => ({
                ...prev,
                view: "login",
                open: true,
              }))
            }
          >
            <Flex width={"100%"} align={"center"} fontWeight={700}>
              <Icon as={MdOutlineLogin} mr={2} fontSize={20} />
              Login/Sign Up
            </Flex>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
