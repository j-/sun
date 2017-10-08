export function getJulianDay(date: Date) {
	const a = date.getUTCMonth() < 2 ? 1 : 0;
	const y = date.getUTCFullYear() + 4800 - a;
	const m = (date.getUTCMonth() + 1) + 12 * a - 3;
	return (
		date.getUTCDate() +
		Math.floor((153 * m + 2) / 5) +
		365 * y +
		Math.floor(y / 4) -
		Math.floor(y / 100) +
		Math.floor(y / 400) -
		32045
	);
}

export function getJulianDate(date: Date) {
	return (
		getJulianDay(date) +
		(date.getUTCHours() - 12) / 24 +
		date.getUTCMinutes() / 1440 +
		date.getUTCSeconds() / 86400
	);
}

export function getJdn(jd: number) {
	return jd - 2451545;
}
