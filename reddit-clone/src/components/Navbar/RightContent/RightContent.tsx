import { firebaseAuth } from "@/src/firebase/clientApp";
import { Button, Flex, MenuButton } from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React, { use } from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = (props) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {props.user ? (
          <>
            <Icons />
            <Flex>
              <UserMenu user={props.user} />
            </Flex>
          </>
        ) : (
          <>
            <AuthButtons />
            <Flex display={{ base: "flex", sm: "none" }}>
              <UserMenu user={props.user} />
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
};
export default RightContent;

{
  /* <Button variant={"outline"} onClick={() => signOut(firebaseAuth)}>
              LogOut
            </Button> 
             */
}
