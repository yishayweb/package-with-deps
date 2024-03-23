'use strict';

var moment = require('../../node_modules/moment/moment.js');

const isBeforeMoment = (a, b) => {
    return moment(a).isBefore(b);
};

exports.isBeforeMoment = isBeforeMoment;
//# sourceMappingURL=isBeforeMoment.js.map
