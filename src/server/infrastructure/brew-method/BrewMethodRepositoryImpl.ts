import { BrewMethod } from '../../domain/brew-method/BrewMethod';
import { BrewMethodRepository } from '../../domain/brew-method/repositories/BrewMethodRepository';

export class BrewMethodRepositoryImpl implements BrewMethodRepository {
  // @TODO: This is a simple in-memory implementation. Replace with the actual database implementation
  private brewMethods: BrewMethod[] = [];

  async findByName(name: string): Promise<BrewMethod | null> {
    const brewMethod = this.brewMethods.find(
      (bm) => bm.getProperties().name === name
    );
    return brewMethod || null;
  }

  async save(brewMethod: BrewMethod): Promise<void> {
    this.brewMethods.push(brewMethod);
  }
}
