import useSwr from "swr";
import { useSession } from "next-auth/react";
import { Grid, Card, Text, Container, Row, Col } from "@nextui-org/react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const API_URL = "http://localhost:4000";
export const fetcher = (url) =>
  fetch(`${API_URL}${url}`).then((res) => res.json());

export default function Home() {
  const { data: session } = useSession();
  // const { data, error } = useSwr("/all", fetcher);
  // if (error) return <div></div>
  // if (!data) return <div>Loading...</div>;
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
            <Grid.Container
              direction="row"
              alignContent="center"
              justify="center"
              display="flex"
              // style={{ height: "blue", border: "1px solid black" }}
            >
              <Grid>
                <Col>
                  <AiFillGithub size="3em" />
                </Col>
              </Grid>
              <Grid>
                <Col>
                  <AiFillTwitterCircle size="3em" />
                </Col>
              </Grid>
              <Grid>
                <Col>
                  <AiFillInstagram size="3em" />
                </Col>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid align="center" justify="center">
            <Text h1>@rfcku</Text>
          </Grid>
        </Grid.Container>
      </Row>
    </Grid.Container>
  );
}