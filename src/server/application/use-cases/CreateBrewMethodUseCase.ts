import { DomainException } from '@/server/domain/exceptions/DomainException';
import { BrewMethod } from '../../domain/brew-method/BrewMethod';
import { BrewMethodProperties } from '../../domain/brew-method/BrewMethodProperties';
import { BrewMethodRepository } from '../../domain/brew-method/BrewMethodRepository';

export interface CreateBrewMethodDTO {
  name: string;
  grindSizeMin: number;
  grindSizeMax: number;
  minCoffeeDose: number;
  maxCoffeeDose: number;
}

export class CreateBrewMethodUseCase {
  constructor(private readonly brewMethodRepository: BrewMethodRepository) {}

  async execute(dto: CreateBrewMethodDTO): Promise<void> {
    const properties = new BrewMethodProperties({
      name: dto.name,
      grindSizeMin: dto.grindSizeMin,
      grindSizeMax: dto.grindSizeMax,
      minCoffeeDose: dto.minCoffeeDose,
      maxCoffeeDose: dto.maxCoffeeDose,
    });

    // Check if brew method with same name already exists
    const existingBrewMethod = await this.brewMethodRepository.findByName(
      properties.name
    );
    if (existingBrewMethod) {
      throw new DomainException('Brew method with this name already exists');
    }

    const brewMethod = BrewMethod.create(properties);

    await this.brewMethodRepository.save(brewMethod);
  }
}
