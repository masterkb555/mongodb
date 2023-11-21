use('MKUC');

const youngerDobCheck = db.getCollection('Students').find({
  'dob': { $gte: new Date('2004-01-01'), $lt: new Date('2004-12-31') }
}).count();
console.log(`${youngerDobCheck} Students Born in 2004.`);

const elderDobCheck = db.getCollection('Students').find({
  'dob': { $gte: new Date('2003-01-01'), $lt: new Date('2003-12-31') }
}).count();
console.log(`${elderDobCheck} Students Born in 2003.`);

use('MKUC');
db.getCollection('Students').find({
  'dob': { $gte: new Date('2004-01-01'), $lt: new Date('2004-12-31') }
});