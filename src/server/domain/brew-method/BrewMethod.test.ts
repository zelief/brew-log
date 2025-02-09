import { describe, expect, it } from 'bun:test';
import { BrewMethod } from './BrewMethod';
import { BrewMethodProperties } from './value-objects/BrewMethodProperties';

describe('BrewMethod', () => {
  it('should create a BrewMethod', () => {
    const brewMethod = BrewMethod.create(
      new BrewMethodProperties({
        name: 'Espresso',
        grindSizeMin: 3,
        grindSizeMax: 20,
        minCoffeeDose: 12,
        maxCoffeeDose: 30,
      }),
      'test-id'
    );

    expect(brewMethod).toBeDefined();
    expect(brewMethod.getProperties()).toEqual(
      new BrewMethodProperties({
        name: 'Espresso',
        grindSizeMin: 3,
        grindSizeMax: 20,
        minCoffeeDose: 12,
        maxCoffeeDose: 30,
      })
    );
    expect(brewMethod.getId()).toBe('test-id');
  });
});
