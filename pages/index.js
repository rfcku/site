import useSwr from "swr";
import { useSession } from "next-auth/react";
import { Grid, Card, Text, Container, Row, Col, Link } from "@nextui-org/react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const API_URL = "http://localhost:4000";
import Animation from "../components/animation";

const UID = "6b857a0d-6e25-4863-9ef4-c5aa23dcb45c";

export const fetcher = (url) => fetch(`${url}`).then((res) => res.json());

export default function Home() {
  const { data: session } = useSession();
  const { data, error } = useSwr(
    `https://api.countapi.xyz/hit/${UID}`,
    fetcher
  );
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
            <Grid align="center" justify="center">
              <Text
                h1
                size={60}
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 100%",
                }}
                weight="bold"
              >
                @rfcku
              </Text>
            </Grid>
            <Grid.Container
              direction="row"
              alignContent="center"
              justify="center"
              display="flex"
              // style={{ height: "blue", border: "1px solid black" }}
            >
              <Grid>
                <Col>
                  <Link
                    color="secondary"
                    href="https://github.com/rfcku"
                    target={"_blank"}
                  >
                    <AiFillGithub size="2em" />
                  </Link>
                </Col>
              </Grid>
              <Grid>
                <Col>
                  <Link
                    color="secondary"
                    href="https://twitter.com/rfcku"
                    target={"_blank"}
                  >
                    <AiFillTwitterCircle size="2em" />
                  </Link>
                </Col>
              </Grid>
              <Grid>
                <Col>
                  <Link
                    color="secondary"
                    href="https://www.instagram.com/rfcku/"
                    target={"_blank"}
                  >
                    <AiFillInstagram size="2em" />
                  </Link>
                </Col>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid align="center" justify="center">
            <small>visits: {data && data.value}</small>
          </Grid>
        </Grid.Container>
      </Row>
    </Grid.Container>
  );
}
