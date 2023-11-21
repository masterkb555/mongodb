use('MKUC');
db.getCollection('FinalResult').aggregate([
     { $project: { classYear: { $concat: [ '$class', ' - ', '$currentyear' ] } } }
]);

use('MKUC');
db.getCollection('FinalResult').aggregate([
       { $project: { name: 1, yearSubstring: { $substr: [ "$currentyear", 0, 1 ] } } }
]);

use('MKUC');
db.getCollection('FinalResult').aggregate([
       { $project: { Class: { $toLower: "$class" }, Name: { $toUpper: "$name" } } }
]);

use('MKUC');
db.getCollection('FinalResult').aggregate([
       { $project: { name: 1, comparisonResult: { $strcasecmp: [ "$grade", 'A' ] } } }
]);