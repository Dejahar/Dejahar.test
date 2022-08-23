export const booleanFilter = (...values) => {
    return values.filter(Boolean).join(' ');
};