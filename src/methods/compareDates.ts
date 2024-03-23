import { compareAsc } from 'date-fns';

export const compareDates = (a: Date, b: Date) => {
  return compareAsc(a, b);
};
