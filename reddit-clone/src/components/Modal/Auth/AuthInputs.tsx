import { authModalState } from "@/src/atoms/authModalAtom";
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { start } from "repl";
import Login from "./Login";
import SignUp from "./SignUp";

type AuthInputsProps = {};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  const modalState = useRecoilValue(authModalState);

  var isLoginView = modalState.view === "login";
  var isSignupView = modalState.view === "signup";

  return (
    <Flex>
      <Flex direction="column" align="center" width="100%" mt="4">
        {isLoginView && <Login />}
        {isSignupView && <SignUp />}
      </Flex>
    </Flex>
  );
};
export default AuthInputs;
