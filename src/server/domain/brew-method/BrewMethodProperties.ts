import { DomainException } from '../exceptions/DomainException';

interface BrewMethodPropertiesParams {
  name: string;
  grindSizeMin: number;
  grindSizeMax: number;
  minCoffeeDose: number;
  maxCoffeeDose: number;
}

export class BrewMethodProperties {
  public readonly name: string;
  public readonly grindSizeMin: number;
  public readonly grindSizeMax: number;
  public readonly minCoffeeDose: number;
  public readonly maxCoffeeDose: number;

  public constructor(params: BrewMethodPropertiesParams) {
    this.name = params.name;
    this.grindSizeMin = params.grindSizeMin;
    this.grindSizeMax = params.grindSizeMax;
    this.minCoffeeDose = params.minCoffeeDose;
    this.maxCoffeeDose = params.maxCoffeeDose;
    this.validate();
  }

  private validate(): void {
    if (this.grindSizeMin > this.grindSizeMax) {
      throw new DomainException(
        'Minimum grind size must be lower than maximum grind size'
      );
    }

    if (this.minCoffeeDose > this.maxCoffeeDose) {
      throw new DomainException(
        'Minimum coffee dose must be lower than maximum coffee dose'
      );
    }
  }
}
