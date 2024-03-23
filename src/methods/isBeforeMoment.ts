import moment from 'moment';

export const isBeforeMoment = (a: Date, b: Date) => {
  const str = 'hello there in';
  return {
    isBefore: moment(a).isBefore(b),
    str: str,
  };
};
