import { Grid, Col, Link } from "@nextui-org/react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export default function Social({handleClick, strt }) {
    
    return (
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
                    <AiFillGithub size="2em" onClick={ ()=> {strt(true);handleClick(98) }}  />
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
                    <AiFillTwitterCircle size="2em" onClick={ ()=> {strt(true);handleClick(98) }}  />
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
                    <AiFillInstagram size="2em" onClick={ ()=> {strt(true);handleClick(98) }}  />
                  </Link>
                </Col>
              </Grid>
            </Grid.Container>
    )
}