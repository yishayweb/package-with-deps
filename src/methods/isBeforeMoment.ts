import moment from 'moment';

export const isBeforeMoment = (a: Date, b: Date) => {
  return moment(a).isBefore(b);
};
