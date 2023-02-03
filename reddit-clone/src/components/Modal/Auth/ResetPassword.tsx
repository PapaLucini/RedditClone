import { authModalState } from "@/src/atoms/authModalAtom";
import { firebaseAuth } from "@/src/firebase/clientApp";
import { Input, Button, Flex, Text, Icon } from "@chakra-ui/react";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { BsDot, BsReddit } from "react-icons/bs";
const ResetPassword: React.FC = () => {
  const [resetForm, setEmail] = useState({
    email: "",
  });

  const [resetPasswordSuccess, setResetSuccess] = useState(false);
  const [resetHasError, setResetError] = useState(false);
  const setAuthModalState = useSetRecoilState(authModalState);

  const triggerResetPassword = async (
    event: React.ChangeEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    try {
      await sendPasswordResetEmail(firebaseAuth, resetForm.email);
      setResetSuccess(true);
      setResetError(false);
      
    } catch (error) {
      setResetError(true);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Flex direction={"column"} alignItems={"center"} width="100%">
      <Icon as={BsReddit} color="brand.100" fontSize={40} mb={2} />
      {
        resetPasswordSuccess ? (
          <Text mb={4}>Check your email.</Text>
        ) : (
          <>
            <form onSubmit={triggerResetPassword}>
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

              {
                resetHasError && (
                  <Text mb={4} color="red" fontSize={10} textAlign="center" mt={1}>The email provided does not exist.</Text>
                )
              }

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
          </>
        )
      }

    </Flex>
  );
};
export default ResetPassword;
