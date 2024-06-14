import { z } from 'zod';

export const dateChecker = z
	.string()
	.min(10, { message: 'Введите полную дату' })
	.refine((value) => /^[\d.,]+$/.test(value), {
		message: 'Введите корректную дату'
	});

const numberDotString = () =>
	z
		.string({ message: 'Дата обязательна' })
		.min(10, { message: 'Введите полную дату' })
		.refine((value) => /^[\d.,]+$/.test(value), {
			message: 'Введите корректную дату'
		});

// Define the schema for the form
export const dateSchema = z.object({
	date: numberDotString()
});

export const registerSchema = z
	.object({
		email: z
			.string({ required_error: 'Email обязателен' })
			.email({ message: 'Введите корректный Email' }),
		password: z
			.string({ required_error: 'Пароль обязателен' })
			.min(8, { message: 'Пароль должен быть длинее 8 символов' }),
		passwordConfirm: z
			.string({ required_error: 'Подтверждение пароля обязательно' })
			.min(8, { message: 'Пароль должен быть длинее 8 символов' }),
		date: numberDotString()
	})
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Пароль и Подтверждение пароля должны совпадать',
				path: ['password']
			});
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Пароль и Подтверждение пароля должны совпадать',
				path: ['passwordConfirm']
			});
		}
	});

export const loginSchema = z.object({
	email: z
		.string({ required_error: 'Email обязателен' })
		.email({ message: 'Введите корректный Email' }),
	password: z
		.string({ required_error: 'Пароль обязателен' })
		.min(1, { message: 'Пароль обязателен' })
});
