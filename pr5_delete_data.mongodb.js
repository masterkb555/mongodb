//db.getMongo().getDBNames().forEach(function(i){db.getSiblingDB(i).dropDatabase()})

use('MKUC');

db.getCollection('Students').deleteMany({ 'class': 'MCA', 'currentyear': '2nd', });
db.getCollection('Students').deleteOne({ 'name': "student 1" });