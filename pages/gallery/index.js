
import { Grid, Row } from "@nextui-org/react";
import Image from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const importAll = (r) => {
    return r.keys().map(r);
};

const images = importAll(
    require.context("../../public/media/gallery", false, /\.(png|jpe?g|svg)$/)
);

const photos = images.map((image) => ({
    ...image.default,
    href: image.default.src,
    height: 250,
    width: 250,
    rows: 3,
    cols: 3,
    title: "Image",
    link: "https://opensea.io/collection/rfcku",
}));

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
        <ImageList
        variant="quilted"
        cols={9}
        >
            {photos.map((item) => (
                <ImageListItem key={item.src} cols={item.cols || 1} rows={item.rows || 1}>
                    <Image 
                        alt=""
                        key={item.src}
                        src={item.src}
                        onClick={() =>  window.open(item.link)}
                        width={250} 
                        height={250} 
                    />
                </ImageListItem>
            ))}
        </ImageList>
        </Grid.Container>
      </Row>
    </Grid.Container>
  );
}
