use('MKUC');

db.getCollection('Students').aggregate([
  {
    '$addFields': {
      'totalMarksMain': {
        '$sum': '$marksmains'
      },
      'totalMarksSubs': {
        '$sum': '$markssubs'
      },
    }
  }, {
    '$addFields': {
      'finalMarks': {
        '$add': [
          '$totalMarksMain', '$totalMarksSubs'
        ]
      }
    }
  }, {
    '$addFields': {
      'finalPercentage': {
        '$divide': [
          '$finalMarks', 5
        ]
      }
    }
  }, {
    '$out': 'FinalResult'
  }
]);

use('MKUC');
db.getCollection('Students').aggregate([
  {
    $sort: { "name": -1 }
  },
  {
    $project: {
      "name": 1,
    }
  },
  {
    $limit: 10
  }
]);

