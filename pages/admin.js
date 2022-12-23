import { Grid, Text, Link, Input, Button } from "@nextui-org/react";
import { useState } from "react";

import { gtFlg } from "../utils";
const Profile = ({ flag }) => {
  const [input, setInput] = useState({u:null, p:null});
  const submit = () => {
    const {u,p} = input;
    if (u == 'admin' && u == p) {
        prompt(`Hackerman!\nflag:`, gtFlg(55))
    }
  }
  return (
    <section flag={gtFlg(66)}>
        <Grid.Container gap={2} direction="column" alignContent="center" justify="center" alignItems="center">
            <Grid>
                <Input placeholder="username" onChange={({target:{value:u}}) => setInput({...input, u})} />
            </Grid>
            <Grid>
                <Input placeholder="password" onChange={({target:{value:p}}) => setInput({...input, p})} />
            </Grid>
            <Grid>
                <Button onClick={() => submit()}>Enter</Button>
            </Grid>
        </Grid.Container>
    </section>
  );
};

export default Profile;
