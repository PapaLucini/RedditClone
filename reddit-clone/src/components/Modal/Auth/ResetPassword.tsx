import { authModalState } from "@/src/atoms/authModalAtom";
import { firebaseAuth } from "@/src/firebase/clientApp";
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import triggerResetEmail from "./Login";

const ResetPassword: React.FC = () => {
  const [resetForm, setEmail] = useState({
    email: "",
  });
  const setAuthModalState = useSetRecoilState(authModalState);

  const triggerResetEmail = async (
    event: React.ChangeEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    await sendPasswordResetEmail(firebaseAuth, resetForm.email);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={triggerResetEmail}>
      <Input
        required
        name="email"
        placeholder="Email"
        type="email"
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: " blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: " blue.500",
        }}
        bg="gray.50"
      ></Input>
      <Button
        width={"100%"}
        height="36px"
        mt={2}
        marginBottom="2px"
        type="submit"
      >
        Login
      </Button>
      <Flex fontSize={"9pt"} justifyContent="center">
        <Text mr={1}>Already have an account?</Text>
        <Text
          color={"blue.500"}
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default ResetPassword;
