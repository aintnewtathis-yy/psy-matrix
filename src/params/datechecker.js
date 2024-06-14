import { dateChecker } from '$lib/schemas';

export function match(value) {
    return dateChecker.safeParse(value).success
}
