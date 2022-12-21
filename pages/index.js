
import { Grid, Row } from "@nextui-org/react";
import Base from '../components/Base';
export default function Home() {
  return (
    <Grid.Container>
      <Row gap={2}>
        <Grid.Container
          xs={12}
          gap={0}
          alignContent="center"
          justify="center"
          style={{ height: "100vh" }}
          direction="column"
        >
          <Grid>
            <Base />
          </Grid>
        </Grid.Container>
      </Row>
    </Grid.Container>
  );
}
