import moment from 'moment';

export const isBeforeMoment = (a: Date, b: Date) => {
  const str = 'hello there it in the on 1';
  const strIn = '';
  return {
    isBefore: moment(a).isBefore(b),
    str: strIn || str,
  };
};
