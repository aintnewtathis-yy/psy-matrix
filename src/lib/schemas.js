import { z } from 'zod';
const numberDotString = () =>
    z
        .string({ message: 'Дата обязательна'})
        .min(10, { message: 'Введите полную дату' })
        .refine(value => /^[\d.,]+$/.test(value), {
        message: 'Введите корректную дату',
    });    

// Define the schema for the form
export const dateSchema = z.object({
    date: numberDotString(),
});

export const successSchema = z.object({
    name: z
		.string()
        .min(1, { message: 'Имя обязательно' }),
    date: numberDotString(),
    messanger: z
        .string()
        .min(1, { message: 'Средство связи обязательно' })
        .regex(/^[a-zA-Z0-9]*$/, { message: 'Используйте буквы либо цифры без специальных знаков' })
});

