import { BrewMethod } from '../BrewMethod';

export interface BrewMethodRepository {
  save(brewMethod: BrewMethod): Promise<void>;
  findByName(name: string): Promise<BrewMethod | null>;
}
