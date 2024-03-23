import moment from 'moment';

export const isBeforeMoment = (a: Date, b: Date) => {
  const str = 'hello there';
  return {
    isBefore: moment(a).isBefore(b),
    str: str,
  };
};
