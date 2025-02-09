import { createSafeActionClient } from 'next-safe-action';

export const actionClient = createSafeActionClient({
  handleServerError: (error) => {
    console.error(error);
    return {
      error: 'An unexpected error occurred',
    };
  },
});
