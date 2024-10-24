import { useState } from 'react';
import { Input,Button } from "@chakra-ui/react";

const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
      });
  return <>
    <Input placeholder="Email" fontsize={14} type="email"
            value={inputs.email}
            size={"sm"}
            onChange={(e)=> setInputs({...inputs,email:e.target.value})}
            />

            <Input placeholder="Password" fontsize={14} type="password"
              value={inputs.password}
              size={"sm"}
              onChange={(e)=> setInputs({...inputs,password:e.target.value})}
             /> 
             <Button w={"full"} colorScheme="green" size={"sm"} fontsize={14} >
             Log in
             </Button>
         

  </>
}

export default Login;
