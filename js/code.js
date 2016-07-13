var myObj = {
    firstName: 'Richard Kalehoff'
};

var AdvWeb2 = {
    instructor: {
        fullName: 'Richard Kalehoff'
    },
    name: 'Advanced Web 2',
    numberOfStudents: 16,
    describeClass: function howdy() {
        console.log('There are ' + AdvWeb2.numberOfStudents + ' students in ' + AdvWeb2.name + '.');
    },
    students: [
        {name: 'Sheina M', ufID: 112233, grades: [2, 1, 3]},
        {name: 'Emily A', ufID: 445566, grades: [5, 4, 6]},
        {name: 'Kevin A', ufID: 778899, grades: [8, 7, 9]},
        {name: 'Rebecca H', ufID: 998877, grades: [9, 8, 7]},
        {name: 'Libby R', ufID: 665544, grades: [6, 5, 4]},
        {name: 'Tatiana C', ufID: 332211, grades: [3, 2, 1]}
    ]
};

var classInJsonFormat = JSON.stringify(AdvWeb2);

var regularJavascript = JSON.parse(classInJsonFormat);
