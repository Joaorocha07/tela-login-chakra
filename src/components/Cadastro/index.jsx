import React, { useState } from "react";

import { 
    Button, 
    Flex, 
    FormControl, 
    FormLabel, 
    HStack, 
    Heading, 
    Image, 
    Input, 
    Stack,
    Link,
    AlertIcon,
    Alert
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const Cadastro = () => {

    const [erro, setErro] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirm, setSenhaConfirm] = useState(""); 
    const [dataNascimento, setDataNascimento] = useState(""); 

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/");
    }

    const handleCadastrar = () => {

        if(!nome) {
            setErro("digite seu nome!");
            return;
        }
        
        if (!/\S+@\S+\.\S+/.test(email)) {
            setErro("Digite um e-mail válido.");
            return;
        }
    
        if (senha !== senhaConfirm) {
            setErro("As senhas não coincidem.");
            return;
        }
    
        if (senha.length < 8) {
            setErro("A senha deve ter pelo menos 8 caracteres.");
            return;
        }

        if (!nome || !email || !senha || !senhaConfirm || !dataNascimento) {
            setErro("Preencha todos os campos obrigatórios.");
            return;
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
                        Faça cadastro 
                    </Heading>
                    
                    <FormControl id="nome">
                        <FormLabel>Nome</FormLabel>
                        <Input
                            type="text" 
                            placeholder="Nome"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                        />
                    </FormControl>
                    
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
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                        />
                    </FormControl>
                    
                    <FormControl id="senhaConfirm">
                        <FormLabel>Senha</FormLabel>
                        <Input 
                            placeholder="Confirme a senha"
                            type="password"
                            value={senhaConfirm}
                            onChange={(event) => setSenhaConfirm(event.target.value)}
                        />
                    </FormControl>
                    
                    <FormControl id="dataNascimento">
                        <FormLabel>Data de Nascimento</FormLabel>
                        <Input 
                            type="date"
                            value={dataNascimento}
                            onChange={(event) => setDataNascimento(event.target.value)}
                        />
                    </FormControl>
                    
                    <Stack spacing={4} direction="row" align="start" justify="space-between">
                        <Link color="purple.500" onClick={handleLoginClick}>Já tem conta?</Link>
                    </Stack>
                    
                    {erro && ( <Alert status="error" mt={4}><AlertIcon />{erro}</Alert>)}
                    
                    <Button colorScheme="purple" onClick={handleCadastrar}>Cadastrar</Button>
                </Stack>
            </Flex>
        </HStack>
    )
}

export default Cadastro;