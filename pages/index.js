import useSwr from "swr";
import Script from "next/script";
import { useSession } from "next-auth/react";
import { Grid, Card, Text, Container, Row, Col } from "@nextui-org/react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const API_URL = "http://localhost:4000";
import Animation from "../components/animation";

export const fetcher = (url) => fetch(`${url}`).then((res) => res.json());

export default function Home() {
  const { data: session } = useSession();
  const { data, error } = useSwr(
    "https://api.countapi.xyz/hit/6b857a0d-6e25-4863-9ef4-c5aa23dcb45c",
    fetcher
  );
  console.log("data", data, error);
  // if (error) return <div></div>
  // if (!data) return <div>Loading...</div>;

  return (
    <Grid.Container>
      <div className="container">
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GYZJJ8LCHY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GYZJJ8LCHY');
          `}
        </Script>
      </div>
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
            <small>visits: {data && data.value}</small>
          </Grid>
        </Grid.Container>
      </Row>
    </Grid.Container>
  );
}
