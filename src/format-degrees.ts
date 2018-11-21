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
