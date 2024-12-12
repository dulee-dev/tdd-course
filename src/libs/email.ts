const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const checkIsEmail = (text: string): boolean => {
  return emailRegExp.test(text);
};
