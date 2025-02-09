'use server';

import { actionClient } from '@/lib/safe-action';
import { CreateBrewMethodUseCase } from '@/server/application/use-cases/CreateBrewMethodUseCase';
import { BrewMethodRepositoryImpl } from '@/server/infrastructure/brew-method/BrewMethodRepositoryImpl';
import { z } from 'zod';

const createBrewMethodSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  grindSizeMin: z.number().min(1, 'Minimum grind size must be at least 1'),
  grindSizeMax: z.number().min(1, 'Maximum grind size must be at least 1'),
  minCoffeeDose: z.number().min(1, 'Minimum coffee dose must be at least 1'),
  maxCoffeeDose: z.number().min(1, 'Maximum coffee dose must be at least 1'),
});

export const createBrewMethodAction = actionClient
  .schema(createBrewMethodSchema)
  .action(async ({ parsedInput }) => {
    const brewMethodRepository = new BrewMethodRepositoryImpl();
    const createBrewMethodUseCase = new CreateBrewMethodUseCase(
      brewMethodRepository
    );

    await createBrewMethodUseCase.execute({
      name: parsedInput.name,
      grindSizeMin: parsedInput.grindSizeMin,
      grindSizeMax: parsedInput.grindSizeMax,
      minCoffeeDose: parsedInput.minCoffeeDose,
      maxCoffeeDose: parsedInput.maxCoffeeDose,
    });

    return { success: true };
  });
