import { describe, expect, it } from 'bun:test';
import { BrewMethodProperties } from './BrewMethodProperties';

describe('BrewMethodProperties', () => {
  it('should create a BrewMethodProperties object', () => {
    const brewMethodProperties = new BrewMethodProperties({
      name: 'Espresso',
      grindSizeMin: 3,
      grindSizeMax: 20,
      minCoffeeDose: 12,
      maxCoffeeDose: 30,
    });

    expect(brewMethodProperties).toBeDefined();
    expect(brewMethodProperties.name).toBe('Espresso');
    expect(brewMethodProperties.grindSizeMin).toBe(3);
    expect(brewMethodProperties.grindSizeMax).toBe(20);
    expect(brewMethodProperties.minCoffeeDose).toBe(12);
    expect(brewMethodProperties.maxCoffeeDose).toBe(30);
  });

  it('should throw an error if the grind size min is greater than the grind size max', () => {
    expect(
      () =>
        new BrewMethodProperties({
          name: 'Espresso',
          grindSizeMin: 20,
          grindSizeMax: 3,
          minCoffeeDose: 10,
          maxCoffeeDose: 20,
        })
    ).toThrow('Minimum grind size must be lower than maximum grind size');
  });

  it('should throw an error if the min coffee dose is greater than the max coffee dose', () => {
    expect(
      () =>
        new BrewMethodProperties({
          name: 'Espresso',
          grindSizeMin: 3,
          grindSizeMax: 20,
          minCoffeeDose: 30,
          maxCoffeeDose: 12,
        })
    ).toThrow('Minimum coffee dose must be lower than maximum coffee dose');
  });
});
