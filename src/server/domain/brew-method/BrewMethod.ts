import { randomUUID } from 'crypto';
import { BrewMethodProperties } from './BrewMethodProperties';

export class BrewMethod {
  private readonly id: string;

  private constructor(
    private readonly properties: BrewMethodProperties,
    id?: string
  ) {
    this.id = id ?? randomUUID();
  }

  public static create(
    properties: BrewMethodProperties,
    id?: string
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
