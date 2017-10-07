import {
  getJdn,
  getJulianDate,
} from './julian-date';

import {
  angleToQuadrant,
  angleAsin,
  angleAtan,
  angleCos,
  angleSin,
  angleTan,
  between,
} from './helpers';

const AXIAL_TILT = 23.439;

export function getEclipticLong(l: number, g: number) {
  return l + 1.915 * angleSin(g) + 0.02 * angleSin(2 * g);
}

export function getRightAscension(eclipticLong: number) {
  return angleAtan(angleCos(AXIAL_TILT) * angleTan(eclipticLong));
}

export function getHourAngle(jd: number, longitude: number, rightAscension: number) {
  return between(0, 360, getGst(jd) + longitude - rightAscension);
}

export function getDeclination(eclipticLong: number) {
  return angleAsin(angleSin(AXIAL_TILT) * angleSin(eclipticLong));
}

export function getSunAltitude(date: Date, latitude: number, longitude: number) {
  const jd = getJulianDate(date);
  const jdn = getJdn(jd);
  const l = between(0, 360, 280.460 + 0.9856474 * jdn);
  const g = between(0, 360, 357.528 + 0.9856003 * jdn);
  const ecLong = getEclipticLong(l, g);
  let rAsc = getRightAscension(ecLong);
  while (angleToQuadrant(ecLong) !== angleToQuadrant(rAsc)) {
    rAsc += rAsc < ecLong ? 90 : -90;
  }
  const dec = getDeclination(ecLong);
  const ha = getHourAngle(jd, longitude, rAsc);
  return (
    angleAsin(angleSin(latitude) * angleSin(dec) +
    angleCos(latitude) * angleCos(dec) * angleCos(ha))
  );
}

export function getLastJdMidnight(jd: number) {
  if (jd >= Math.floor(jd + 0.5)) {
    return Math.floor(jd - 1) + 0.5;
  } else {
    return Math.floor(jd) + 0.5;
  }
}

export function getUtHours(jd: number, lastJdMidnight: number) {
  return 24 * (jd - lastJdMidnight);
}

export function getGstHours(jdnMidnight: number, utHours: number) {
  const gmst = 6.697374558 + 0.06570982441908 * jdnMidnight + 1.00273790935 * utHours;
  return between(0, 24, gmst);
}

export function getGst(jd: number) {
  const jdm = getLastJdMidnight(jd);
  return 15 * getGstHours(getJdn(jdm), getUtHours(jd, jdm));
}
