use('MKUC');

db.getCollection('FinalResult').updateMany(
  {},
  [
    {
      $set: {
        grade: {
          $switch: {
            branches: [
              { case: { $gte: ['$finalPercentage', 90] }, then: 'A' },
              { case: { $gte: ['$finalPercentage', 80] }, then: 'B' },
              { case: { $gte: ['$finalPercentage', 70] }, then: 'C' },
              { case: { $gte: ['$finalPercentage', 60] }, then: 'D' }
            ],
            default: 'F'
          }
        }
      }
    }
  ]
);