import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  DarkMode,
} from "@chakra-ui/react";

// Assets
import signInImage from "assets/img/signInImage.png";

// Custom Components
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";

function SignIn() {
  const titleColor = "white";
  const textColor = "gray.400";
  const history = useHistory();

  // State for form inputs
  const [username, setUsername] = useState("");
  const [user_password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a request to the backend
      const response = await axios.post(`${'http://127.0.0.1:8000'}/login`, {
        username,
        user_password,
      });

      // Store the authentication token
      localStorage.setItem("authToken", response.data.token);

      // Redirect to the dashboard
      history.push("/admin/dashboard");
    } catch (error) {
      console.error("Error during login", error);
      // Handle error...
    }
  };

  return (
    <Flex position='relative'>
      <Flex
        minH='100vh'
        h={{ base: "120vh", lg: "fit-content" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        pt={{ sm: "100px", md: "0px" }}
        flexDirection='column'
        me={{ base: "auto", lg: "50px", xl: "auto" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          w={{ base: "100%", md: "50%", lg: "450px" }}
          px='50px'>
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            mt={{ base: "50px", md: "150px", lg: "100px", xl: "100px" }}
            mb={{ base: "60px", lg: "95px" }}>
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Bienvenido!
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Inicia sesión con tu usuario y contraseña.
            </Text>
            <FormControl>
              <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='normal'
                color='white'>
                Usuario
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color='white'
                  bg='rgb(19,21,54)'
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  h='46px'
                  placeholder='Usuario'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </GradientBorder>
            </FormControl>
            <FormControl>
              <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='normal'
                color='white'>
                Contraseña
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color='white'
                  bg='rgb(19,21,54)'
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  type='password'
                  placeholder='Contraseña'
                  value={user_password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </GradientBorder>
            </FormControl>
            <Button
              variant='brand'
              fontSize='18px'
              type='submit'
              w='100%'
              maxW='350px'
              h='45'
              mb='20px'
              mt='20px'
              onClick={handleSubmit}>
              Iniciar sesión
            </Button>
            {/* ...rest of the component... */}
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", lg: "block" }}
          overflowX='hidden'
          h='100%'
          maxW={{ md: "50vw", lg: "50vw" }}
          minH='100vh'
          w='960px'
          position='absolute'
          left='0px'>
          <Box
            bgImage={signInImage}
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            position='absolute'>
            <Text
              textAlign='center'
              color='white'
              letterSpacing='8px'
              fontSize='20px'
              fontWeight='500'>
              INSPIRED BY THE FUTURE:
            </Text>
            <Text
              textAlign='center'
              color='transparent'
              letterSpacing='8px'
              fontSize='36px'
              fontWeight='bold'
              bgClip='text !important'
              bg='linear-gradient(94.56deg, #FFFFFF 79.99%, #21242F 102.65%)'>
              THE VISION UI DASHBOARD
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
