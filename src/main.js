const natalia = {
    name:"Natalia",
    age:20,
    cursosAprobados:[
        "Curso 001",
        "Curso 002",
        "Curso 003"
    ],
    aprobarCurso: function(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);        
    }
};

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //Esta es una forma, sin embargo se utilizará por 'prototipo'
    /*
    this.aprobarCurso = function(nuevoCurso){
        this.cursosAprobados.push(nuevoCursito);
    }
    */
}

Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student("Juanita Pedrozo", 16,[
    "Curso AA1",
    "Curso AA2",
    "Curso AA3"
]);


class StudentClass{
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguelito = new StudentClass("Miguel",18,[
    "POO1",
    "POO2",
    "POO3"
]);

class StudentClassConPropiedades{
    constructor({name, 
        age, 
        cursosAprobados = [],
        twitter,
        instagram
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.twitter = twitter;
        this.instagram = instagram;
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguelito2 = new StudentClassConPropiedades({
    age:34,
    name:"Leonel",
    instagram:"lp",
    twitter:"lpq"
});

const juan1 = {
    name: "JuanDC",
    username: "juandc",
    points:100,
    socialMedia : {
        twitter: "asdf",
        ins:"asdf",
        fb:"asdfsfd"
    },
    approvedCourses : [
        "asdf",
        "asdf"
    ]
}

const miguel1 = {
    name: "JuanDC",
    username: "juandc",
    points:100,
    socialMedia : {
        twitter: "asdf",
        ins:"asdf",
        fb:"asdfsfd"
    },
    approvedCourses : [
        "asdf",
        "asdf"
    ]
}




