import { BrewMethodProperties } from './value-objects/BrewMethodProperties';

export class BrewMethod {
  private constructor(
    private readonly properties: BrewMethodProperties,
    private readonly id: string
  ) {}

  public static create(
    properties: BrewMethodProperties,
    id: string
  ): BrewMethod {
    return new BrewMethod(properties, id);
  }

  public getProperties(): BrewMethodProperties {
    return this.properties;
  }

  public getId(): string {
    return this.id;
  }
}
