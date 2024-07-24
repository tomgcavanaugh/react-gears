import React from "react";

const sin = (x: number): any => {
  return trunc(Math.sin((2 * Math.PI * x) / 360));
};

const cos = (x: number): any => {
  return trunc(Math.cos((2 * Math.PI * x) / 360));
};

const trunc = (x: number): any => {
  return x.toFixed(3).substring(0, 5);
};

const path = (
  toothCount: number,
  toothHeight: number,
  outsideDegrees: number,
  insideDegrees: number,
  holeRadius: string | number
) => {
  const pitchAngle = 360 / toothCount;
  const rampAngle = (pitchAngle - outsideDegrees - insideDegrees) / 2;
  const r = 1 - toothHeight;
  let text = "M0,-1";
  let angle = 0;
  for (let i = 0; i < toothCount; i++) {
    angle += outsideDegrees / 2;
    text += "A1,1,0,0,1," + sin(angle) + "," + -cos(angle);
    angle += rampAngle;
    text += "L" + trunc(r * sin(angle)) + "," + trunc(-r * cos(angle));
    angle += insideDegrees;
    text +=
      "A" +
      trunc(r) +
      "," +
      trunc(r) +
      ",0,0,1," +
      trunc(r * sin(angle)) +
      "," +
      trunc(-r * cos(angle));
    angle += rampAngle;
    text += "L" + sin(angle) + "," + -cos(angle);
    angle += outsideDegrees / 2;
    text += "A1,1,0,0,1," + sin(angle) + "," + -cos(angle);
  }

  text +=
    "L0," +
    -holeRadius +
    "A" +
    holeRadius +
    "," +
    holeRadius +
    ",0,1,0,0," +
    holeRadius +
    "A" +
    holeRadius +
    "," +
    holeRadius +
    ",0,1,0,0," +
    -holeRadius +
    "Z";
  return text;
};

const DEFAULT_NUMTEETH = 10;
const DEFAULT_TOOTHHEIGHT = 0.2;
const DEFAULT_OUTSIDEDEGREES = 13;
const DEFAULT_INSIDEDEGREES = 15;
const DEFAULT_HOLERADIUS = 0.3;

export interface GearProps {
  numTeeth: number | undefined;
  toothHeight: number | undefined;
  outsideDegrees: number | undefined;
  insideDegrees: number | undefined;
  holeRadius: number | undefined;
}

export const Gear: React.FC<GearProps> = ({
  numTeeth,
  toothHeight,
  outsideDegrees,
  insideDegrees,
  holeRadius,
}) => {
  console.log(numTeeth);

  numTeeth ??= DEFAULT_NUMTEETH;
  toothHeight ??= DEFAULT_TOOTHHEIGHT;
  outsideDegrees ??= DEFAULT_OUTSIDEDEGREES;
  insideDegrees ??= DEFAULT_INSIDEDEGREES;
  holeRadius ??= DEFAULT_HOLERADIUS;

  const pathString = path(
    numTeeth,
    toothHeight,
    outsideDegrees,
    insideDegrees,
    holeRadius
  );

  return (
    <div>
      <svg viewBox="-1.1, -1.1, 2.2, 2.2">
        6
        <path d={pathString}>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 0 0"
            to="360 0 0"
            dur="60s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};
