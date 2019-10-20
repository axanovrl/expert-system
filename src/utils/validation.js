export const required = value =>
  value || typeof value === "number" ? undefined : "Поле не было заполнено";

const maxLength = max => value =>
  value && value.length > max ? `Должно быть менее ${max} символов` : undefined;

export const maxLength15 = maxLength(15);

const minLength = min => value =>
  value && value.length < min
    ? `Должно быть более ${min} символов `
    : undefined;

export const minLength2 = minLength(2);

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Неверный формат почты"
    : undefined;

const minLengthPassword = min => value =>
  value && value.length < min
    ? `Должно быть больше ${min} символов`
    : undefined;

export const minLengthPassword8 = minLengthPassword(8);
