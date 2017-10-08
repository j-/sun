import { between } from './helpers';

describe('between()', () => {
	it('handles numbers inside the range', () => {
		expect(between(0, 100, 50)).toBe(50);
		expect(between(0, 100, 1)).toBe(1);
	});

	it('handles numbers on the border of the range', () => {
		expect(between(0, 100, 0)).toBe(0);
		expect(between(0, 100, 100)).toBe(0);
	});

	it('handles numbers before the range', () => {
		expect(between(0, 100, -50)).toBe(50);
		expect(between(0, 100, -100)).toBe(0);
		expect(between(0, 100, -200)).toBe(0);
		expect(between(100, 200, 50)).toBe(150);
	});

	it('handles numbers after the range', () => {
		expect(between(0, 100, 50)).toBe(50);
		expect(between(0, 100, 100)).toBe(0);
		expect(between(0, 100, 200)).toBe(0);
		expect(between(100, 200, 250)).toBe(150);
	});
});
