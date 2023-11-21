use('MKUC');

db.getCollection('Students').insertMany([
  { 'name': 'student 1', 'age': 19, 'dob': new Date('2004-08-27'), 'class': 'MCA', 'currentyear': '1st', 'marksmains': [100, 99], 'markssubs': [100, 100, 99], 'tags': ["Maths", "CS"], 'createddate': Date() },
  { 'name': 'student 2', 'age': 19, 'dob': new Date('2004-08-24'), 'class': 'MCA', 'currentyear': '1st', 'marksmains': [100, 100], 'markssubs': [100, 100, 50], 'tags': ["Maths", "CS"], 'createddate': Date() },
  { 'name': 'student 3', 'age': 19, 'dob': new Date('2004-09-29'), 'class': 'MCA', 'currentyear': '1st', 'marksmains': [100, 89], 'markssubs': [100, 100, 78], 'tags': ["Commerce", "CS"], 'createddate': Date() },
  { 'name': 'student 4', 'age': 19, 'dob': new Date('2004-09-18'), 'class': 'MCA', 'currentyear': '1st', 'marksmains': [100, 50], 'markssubs': [100, 100, 90], 'tags': ["Commerce", "CS"], 'createddate': Date() },
  { 'name': 'student 5', 'age': 19, 'dob': new Date('2004-10-01'), 'class': 'MCA', 'currentyear': '1st', 'marksmains': [100, 90], 'markssubs': [100, 100, 90], 'tags': ["BMaths", "CS"], 'createddate': Date() },
  { 'name': 'student 6', 'age': 20, 'dob': new Date('2003-08-27'), 'class': 'MCA', 'currentyear': '2nd', 'marksmains': [100, 98], 'markssubs': [100, 100, 89], 'tags': ["BMaths", "CS"], 'createddate': Date() },
  { 'name': 'student 7', 'age': 20, 'dob': new Date('2003-08-24'), 'class': 'MCA', 'currentyear': '2nd', 'marksmains': [60, 57], 'markssubs': [80, 60, 64], 'tags': ["Commerce", "CS"], 'createddate': Date() },
  { 'name': 'student 8', 'age': 20, 'dob': new Date('2003-09-29'), 'class': 'MCA', 'currentyear': '2nd', 'marksmains': [100, 76], 'markssubs': [100, 100, 56], 'tags': ["Maths", "CS"], 'createddate': Date() },
  { 'name': 'student 9', 'age': 20, 'dob': new Date('2003-09-18'), 'class': 'MCA', 'currentyear': '2nd', 'marksmains': [80, 54], 'markssubs': [100, 100, 89], 'tags': ["BMaths", "CS"], 'createddate': Date() },
  { 'name': 'student 10', 'age': 20, 'dob': new Date('2003-10-01'), 'class': 'MCA', 'currentyear': '2nd', 'marksmains': [60, 63], 'markssubs': [100, 100, 98], 'tags': ["Commerce", "CS"], 'createddate': Date() },
]);