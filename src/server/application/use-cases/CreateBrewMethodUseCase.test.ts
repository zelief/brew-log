import { BrewMethod } from '@/server/domain/brew-method/BrewMethod';
import { BrewMethodRepository } from '@/server/domain/brew-method/repositories/BrewMethodRepository';
import { BrewMethodProperties } from '@/server/domain/brew-method/value-objects/BrewMethodProperties';
import { describe, expect, it, mock } from 'bun:test';
import { CreateBrewMethodUseCase } from './CreateBrewMethodUseCase';

describe('CreateBrewMethodUseCase', () => {
  const findByName = mock<BrewMethodRepository['findByName']>(() =>
    Promise.resolve(null)
  );
  const save = mock<BrewMethodRepository['save']>(() => Promise.resolve());

  const mockBrewMethodRepository: BrewMethodRepository = {
    findByName,
    save,
  };

  const validBrewMethodDto = {
    name: 'Filter',
    grindSizeMin: 20,
    grindSizeMax: 25,
    minCoffeeDose: 15,
    maxCoffeeDose: 30,
  };

  it('should create a brew method successfully', async () => {
    const useCase = new CreateBrewMethodUseCase(mockBrewMethodRepository);

    // Execute the use case and expect it to complete without throwing
    await useCase.execute(validBrewMethodDto);

    // Verify repository was called correctly
    expect(findByName).toHaveBeenCalledWith('Filter');
    expect(save).toHaveBeenCalledWith(
      expect.objectContaining({
        id: expect.any(String),
        properties: expect.objectContaining({
          name: 'Filter',
          grindSizeMin: 20,
          grindSizeMax: 25,
          minCoffeeDose: 15,
          maxCoffeeDose: 30,
        }),
      })
    );
  });

  it('should throw an error if brew method already exists', async () => {
    // Reset mock calls from previous test
    findByName.mockReset();
    save.mockReset();

    // Mock repository to return an existing brew method
    findByName.mockImplementation(() =>
      Promise.resolve(
        BrewMethod.create(new BrewMethodProperties(validBrewMethodDto), '1')
      )
    );
    const useCase = new CreateBrewMethodUseCase(mockBrewMethodRepository);

    expect(useCase.execute(validBrewMethodDto)).rejects.toThrow(
      'Brew method with this name already exists'
    );

    expect(findByName).toHaveBeenCalledWith('Filter');
    expect(save).not.toHaveBeenCalled();
  });
});
