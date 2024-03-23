import { compareAsc } from 'date-fns';

export const compareDates = (a: Date, b: Date) => {
  const num = 55555;
  return {
    compareResult: compareAsc(a, b),
    num: num,
  };
};
