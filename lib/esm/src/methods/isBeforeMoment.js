import moment from '../../node_modules/moment/moment.js';

const isBeforeMoment = (a, b) => {
    return moment(a).isBefore(b);
};

export { isBeforeMoment };
//# sourceMappingURL=isBeforeMoment.js.map
