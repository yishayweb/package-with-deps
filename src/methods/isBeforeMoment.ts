import moment from 'moment';

export const isBeforeMoment = (a: Date, b: Date) => {
  const str = 'hello there it in the on 1';
  return {
    isBefore: moment(a).isBefore(b),
    str: str,
  };
};
