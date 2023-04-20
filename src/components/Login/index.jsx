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
    Stack 
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";


const Login = () => {

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
                    src="https://inspirationfeed.com/wp-content/uploads/2016/08/mobile_wallpaper_by_maria_shanina-min.png" 
                    h="full"
                    objectFit="cover" 
                    w="full" 
                />
            </Flex>
            <Flex w="full" h="full" alignItems="center" justifyContent="center">
                <Stack w="full" maxW="md" spacing={4} p={6}>
                    <Heading fontSize="2xl" color="purple.500" textAlign="center"> 
                        Faça login em sua conta
                    </Heading>

                    <FormControl id="email">
                        <FormLabel>E-mail</FormLabel>
                        <Input 
                            type="email"
                            placeholder="Email" 
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </FormControl>

                    <FormControl id="senha">
                        <FormLabel>Senha</FormLabel>
                        <Input 
                            placeholder="Senha"
                            type="password"
                            value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                        />
                    </FormControl>

                    <Stack spacing={4} direction="row" align="start" justify="space-between">
                        <Checkbox colorScheme="purple">Salvar meu login</Checkbox>
                        <Link color="purple.500">Esqueceu sua senha?</Link>
                    </Stack>

                    {erro && ( <Alert status="error" mt={4}><AlertIcon />{erro}</Alert>)}
                    {logado && ( <Alert status="success" mt={4}><AlertIcon />{logado}</Alert>)}
                    
                    <Button colorScheme="purple" onClick={handleLogar}>Login</Button>
                    
                    <Stack spacing={4} direction="row" align="start" justify="center">
                        <Link color="purple.500"  onClick={handleCadastroClick}>Cadastre-se</Link>
                    </Stack>
                </Stack>
            </Flex>
        </HStack>
    )
}

export default Login;