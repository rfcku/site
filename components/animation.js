import React, { useRef, useEffect } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";

import styles from "./styles.module.css";

const imgs = [
  "https://drscdn.500px.org/photo/126979479/w%3D440_h%3D440/v2?webp=true&v=2&sig=09ea71b0ddb91e24a59cecfb79a0189a2ab575d10372d3e8d3258e38f97a6a49",
  "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
  "https://drscdn.500px.org/photo/188823103/w%3D440_h%3D440/v2?webp=true&v=3&sig=af23265ed9beaeeeb12b4f8dfed14dd613e5139495ba4a80d5dcad5cef9e39fd",
  "https://drscdn.500px.org/photo/216094471/w%3D440_h%3D440/v2?webp=true&v=0&sig=16a2312302488ae2ce492fb015677ce672fcecac2befcb8d8e9944cbbfa1b53a",
  "https://drscdn.500px.org/photo/227760547/w%3D440_h%3D440/v2?webp=true&v=0&sig=d00bd3de4cdc411116f82bcc4a4e8a6375ed90a686df8488088bca4b02188c73",
  "https://drscdn.500px.org/photo/126979479/w%3D440_h%3D440/v2?webp=true&v=2&sig=09ea71b0ddb91e24a59cecfb79a0189a2ab575d10372d3e8d3258e38f97a6a49",
  "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
];

export default function Animation() {
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);

    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
  const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

  const wheel = (y) => {
    const imgHeight = window.innerWidth * 0.3 - 20;
    return `translateY(${
      -imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))
    }px`;
  };

  const domTarget = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  );

  const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }));

  useGesture(
    {
      onDrag: ({ active, offset: [x, y] }) =>
        api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
      onWheel: ({ event, offset: [, y] }) => {
        event.preventDefault();
        wheelApi.set({ wheelY: y });
      },
    },
    { domTarget, eventOptions: { passive: false } }
  );
  return (
    <div className={styles.container}>
      <animated.div
        ref={domTarget}
        className={styles.card}
        style={{
          transform: "perspective(600px)",
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}
      >
        <animated.div style={{ transform: wheelY.to(wheel) }}>
          {imgs.map((img, i) => (
            <div key={i} style={{ backgroundImage: `url(${img})` }} />
          ))}
        </animated.div>
      </animated.div>
    </div>
  );
}
