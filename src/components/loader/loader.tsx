import * as React from "react";

// import { calculateRgba } from "@/utils/helpers/colors";
// import { parseLengthAndUnit, cssValue } from "@/utils/helpers/unitConverter";
// import { LoaderSizeProps } from "@/interfaces/loader";
// import { createAnimation } from "@/utils/helpers/animation";
// import styles from '@/styles/loader.module.css';

function Loader({
  loading = true,
  color = "",
  speedMultiplier = 1,
  cssOverride = {},
  size = 50,
  ...additionalprops
}: LoaderSizeProps): JSX.Element | null {
  // const { value, unit } = parseLengthAndUnit(size);
  // console.log(value, unit, "loader", cssValue(size), size);

  // const wrapper: React.CSSProperties = {
  //   display: "inherit",
  //   position: "relative",
  //   width: cssValue(size),
  //   height: cssValue(size),
  //   transform: "rotate(165deg)",
  //   ...cssOverride,
  // };

  // const thickness = value / 5;

  // const lat = (value - thickness) / 2;

  // const offset = lat - thickness;

  // const colorValue = calculateRgba(color, 0.75);

  // const before = createAnimation(
  //   "HashLoader",
  //   `0% {width: ${thickness}px; box-shadow: ${lat}px ${-offset}px ${colorValue}, ${-lat}px ${offset}px ${colorValue}}
  //   35% {width: ${cssValue(size)}; box-shadow: 0 ${-offset}px ${colorValue}, 0 ${offset}px ${colorValue}}
  //   70% {width: ${thickness}px; box-shadow: ${-lat}px ${-offset}px ${colorValue}, ${lat}px ${offset}px ${colorValue}}
  //   100% {box-shadow: ${lat}px ${-offset}px ${colorValue}, ${-lat}px ${offset}px ${colorValue}}`,
  //   "before"
  // );

  // const after = createAnimation(
  //   "HashLoader",
  //   `0% {height: ${thickness}px; box-shadow: ${offset}px ${lat}px ${color}, ${-offset}px ${-lat}px ${color}}
  //   35% {height: ${cssValue(size)}; box-shadow: ${offset}px 0 ${color}, ${-offset}px 0 ${color}}
  //   70% {height: ${thickness}px; box-shadow: ${offset}px ${-lat}px ${color}, ${-offset}px ${lat}px ${color}}
  //   100% {box-shadow: ${offset}px ${lat}px ${color}, ${-offset}px ${-lat}px ${color}}`,
  //   "after"
  // );


  // const style = (i: number): React.CSSProperties => {
  //   return {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     display: "block",
  //     width: `${value / 5}${unit}`,
  //     height: `${value / 5}${unit}`,
  //     borderRadius: `${value / 10}${unit}`,
  //     transform: "translate(-50%, -50%)",
  //     animationFillMode: "none",
  //     animation: `${i === 1 ? before : after} ${2 / speedMultiplier}s infinite`,
  //   };
  // };

  if (!loading) {
    return null;
  }

  return (
    <div className="loader-hash h-screen flex items-center justify-center">
      <span {...additionalprops}>
        <span />
        <span  />
      </span>
    </div>
  );
}

export default Loader;