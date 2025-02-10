import { DomainException } from '@/server/domain/exceptions/DomainException';
import { createSafeActionClient } from 'next-safe-action';

export const actionClient = createSafeActionClient({
  handleServerError: (error) => {
    if (error instanceof DomainException) {
      return {
        error: error.message,
      };
    }

    console.error(error);
    return {
      error: 'An unexpected error occurred',
    };
  },
});
