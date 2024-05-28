import { z } from 'zod';
const numberDotString = () =>
    z.string().refine(value => /^[\d.,]+$/.test(value), {
        message: 'Введите корректную дату',
    });    

// Define the schema for the form
export const dateSchema = z.object({
    date: numberDotString(),
});

