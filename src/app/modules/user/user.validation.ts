import { z } from 'zod';

const createUserNameValidationSchema = z.object({
  firstName: z
    .string({
      required_error: 'First Name is required',
    })
    .min(1, { message: 'First Name must be at least 1 character' })
    .max(20, { message: 'First Name cannot exceed 20 characters' })
    .trim()
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),

  lastName: z
    .string({
      required_error: 'Last Name is required',
    })
    .min(1, { message: 'Last Name must be at least 1 character' })
    .max(20, { message: 'Last Name cannot exceed 20 characters' })
    .trim()
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
});

const createUserValidationSchema = z.object({
  user: z.object({
    name: createUserNameValidationSchema.required(),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email('Invalid Email Format')
      .trim(),
    password: z.string({
      required_error: 'Password is required',
    }),
    phone: z.string({
      required_error: 'Phone Number is required',
    }),
    address: z.string({
      required_error: 'Address is required',
    }),
    role: z.string().default('user'),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First Name must be at least 1 character' })
    .max(20, { message: 'First Name cannot exceed 20 characters' })
    .trim()
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    })
    .optional(),
  lastName: z
    .string()
    .min(1, { message: 'Last Name must be at least 1 character' })
    .max(20, { message: 'Last Name cannot exceed 20 characters' })
    .trim()
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    })
    .optional(),
});

const updateUserValidationSchema = z.object({
  user: z.object({
    name: updateUserNameValidationSchema,
    phone: z.string().optional(),
    address: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserValidationSchema,
  updateUserValidationSchema,
};
