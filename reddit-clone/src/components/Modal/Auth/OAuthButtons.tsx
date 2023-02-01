import { firebaseAuth } from "@/src/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/src/firebase/errors";
import { Flex, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
const OAuthButton: React.FC = () => {
  const [signInWithGoogle, user, loading, error] =
    useSignInWithGoogle(firebaseAuth);

  return (
    <Flex direction={"column"} width="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/images/googlelogo.png" height={"20px"} mr={"4"} />
        Continue with Google
      </Button>
      <Button variant={"oauth"}>Some other provider</Button>
      {error && (
        <Text fontSize={10} color="red" textAlign={"center"} mt={2}>
          {/* {FIREBASE_ERRORS[error.message as keyof typeof FIREBASE_ERRORS]} */}
          {error.message}
        </Text>
      )}
    </Flex>
  );
};
export default OAuthButton;
