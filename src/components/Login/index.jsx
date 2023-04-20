import React, { useState } from "react";

import { 
    Alert,
    AlertIcon,
    Button, 
    Checkbox, 
    Flex, 
    FormControl, 
    FormLabel, 
    HStack, 
    Heading, 
    Image, 
    Input, 
    Link, 
    Stack, 
    useColorModeValue
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import fundoUnitri from "../../assets/escola.jpg";

const Login = () => {

    const linkColor = useColorModeValue('blue', 'cyan.200');
    const bordaInput = useColorModeValue("#e2e8f0","white.500")
    const navigate = useNavigate();
    const [erro, setErro] = useState("");
    const [logado, setLogado] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleCadastroClick(event) {
        event.preventDefault();
        navigate("/cadastro");
    }

    const handleLogar = (event) => {
        event.preventDefault();

        if(!email) {
            return setErro("Insira o campo E-mail!");
        }

        if(!senha) {
            return setErro("Insira o campo Senha!");
        }

        if (email === "joao@gmail.com.br" && senha === "joao1234") {
            return setLogado("Logado com sucesso");
        }

        if(email !== "joao@gmail.com.br" && senha !== "joao1234") {
            return setErro("Senha ou email invalidos!");
        } 

        if(!email && !senha) {
            return setErro("Insira os campos E-mail e Senha!")
        }

        setErro();
    }

    return (
        <HStack w="full" h="100vh">
            <Flex w="full" h="full" borderRightWidth={1} display={{base: 'none', md: 'flex'}}>
                <Image 
                    src={fundoUnitri} 
                    h="full"
                    objectFit="cover" 
                    w="full" 
                />
            </Flex>
            <Flex w="full" h="full" alignItems="center" justifyContent="center">
                <Stack w="full" maxW="md" spacing={4} p={6}>
                    <Heading fontSize="2xl" color="blackAlpha" textAlign="center"> 
                        Faça login em sua conta
                    </Heading>

                    <FormControl id="email">
                        <FormLabel>E-mail</FormLabel>
                        <Input 
                            type="email"
                            placeholder="Email" 
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            borderRadius="1rem"
                            borderColor={bordaInput}
                        />
                    </FormControl>

                    <FormControl id="senha">
                        <FormLabel>Senha</FormLabel>
                        <Input 
                            placeholder="Senha"
                            type="password"
                            value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                            borderRadius="1rem"
                            borderColor={bordaInput}
                        />
                    </FormControl>

                    <Stack spacing={4} direction="row" align="start" justify="space-between">
                        <Checkbox colorScheme="whatsapp">Salvar meu login</Checkbox>
                        <Link color={linkColor}>Esqueceu sua senha?</Link>
                    </Stack>

                    {erro && ( <Alert status="error" mt={4}><AlertIcon />{erro}</Alert>)}
                    {logado && ( <Alert status="success" mt={4}><AlertIcon />{logado}</Alert>)}
                    
                    <Button colorScheme="blue" onClick={handleLogar}>Login</Button>
                    
                    <Stack spacing={4} direction="row" align="start" justify="center">
                        <Link color={linkColor} onClick={handleCadastroClick}>Cadastre-se</Link>
                    </Stack>
                </Stack>
            </Flex>
        </HStack>
    )
}

export default Login;