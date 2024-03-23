'use strict';

var dateFns = require('date-fns');

const compareDates = (a, b) => {
    return dateFns.compareAsc(a, b);
};

exports.compareDates = compareDates;
//# sourceMappingURL=compareDates.js.map
