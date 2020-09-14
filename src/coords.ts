export interface Coords {
	latitude: number;
	longitude: number;
}

export const isNorth = (latitude: number) => (
	latitude >= 0
);

export const isEast = (longitude: number) => (
	longitude >= 0
);

export const isSouth = (latitude: number) => (
	latitude < 0
);

export const isWest = (longitude: number) => (
	longitude > 0
);
