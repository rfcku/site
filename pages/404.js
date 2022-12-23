import { Grid, Text, Link, Input, Button } from "@nextui-org/react";

import { gtFlg } from "../utils"
export default function Custom404() {
    return (
        <div>
            <Grid.Container direction="column" alignContent="center" align="center" justify="center">
                <Grid>
                    <Text h1>404</Text>
                </Grid>
                <Grid>
                    <Text>flag: {gtFlg(42)}</Text>
                </Grid>
            </Grid.Container>
        </div>
    )
  }