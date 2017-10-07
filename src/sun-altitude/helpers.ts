export function between(min: number, max: number, val: number) {
  const diff = max - min;
  return (val + diff) % diff + min;
}

export function angleToQuadrant(angle: number) {
  angle = between(0, 360, angle);
  if (angle < 90) {
    return 1;
  } else if (angle < 180) {
    return 2;
  } else if (angle < 270) {
    return 3;
  } else {
    return 4;
  }
}

export function toRadians(angle: number) {
  return angle * Math.PI / 180;
}

export function toAngle(rad: number) {
  return rad * 180 / Math.PI;
}

export function angleSin(x: number) {
  return Math.sin(toRadians(x));
}

export function angleCos(x: number) {
  return Math.cos(toRadians(x));
}

export function angleTan(x: number) {
  return Math.tan(toRadians(x));
}

export function angleAtan(x: number) {
  return toAngle(Math.atan(x));
}

export function angleAsin(x: number) {
  return toAngle(Math.asin(x));
}
