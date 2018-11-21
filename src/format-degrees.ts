export const formatDegrees = (
	degrees: number,
	includeMinutes: boolean = true,
	includeSeconds: boolean = false,
): string => {
	if (!includeMinutes) {
		return `${Math.round(degrees)}\xb0`;
	} else if (!includeSeconds) {
		const minutes = (degrees % 1) * 60;
		return `${Math.floor(degrees)}\xb0 ${Math.round(minutes)}'`;
	} else {
		const minutes = (degrees % 1) * 60;
		const seconds = ((degrees * 60) % 1) * 60;
		return `${Math.floor(degrees)}\xb0 ${Math.floor(minutes)}' ${Math.round(seconds)}"`;
	}
};

export const formatLatitude = (
	latitude: number,
	includeMinutes: boolean = true,
	includeSeconds: boolean = false,
): string => (
	formatDegrees(Math.abs(latitude), includeMinutes, includeSeconds)) +
	' ' + (latitude >= 0 ? 'N' : 'S'
);

export const formatLongitude = (
	longitude: number,
	includeMinutes: boolean = true,
	includeSeconds: boolean = false,
): string => (
	formatDegrees(Math.abs(longitude), includeMinutes, includeSeconds)) +
	' ' + (longitude >= 0 ? 'E' : 'W'
);
