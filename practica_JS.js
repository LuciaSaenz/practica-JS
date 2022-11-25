import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
},
]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

function getAnswerFromConsole() {
  const promise = new Promise((resolve, reject) => {
    rl.question("Elija una opción del menú anterior: ", (option) => { 
      rl.pause();         
        resolve(option);        
      });
    });
    return promise;
  }

let working = true
while (working){
  console.log("MENU\n 1- Mostrar en formato de tabla todos los alumnos\n 2- Mostrar por consola la cantidad de alumnos que hay en clase\n 3- Mostrar por consola todos los nombres de los alumnos\n 4- Eliminar el último alumno de la clase\n 5- Eliminar un alumno aleatoriamente de la clase\n 6- Mostrar por consola todos los datos de los alumnos que son chicas\n 7- Mostrar por consola el número de chicos y chicas que hay en la clase\n 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas\n 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años\n 10- Añadir un alumno nuevo con los siguientes datos\n 11- Mostrar por consola el nombre de la persona más joven de la clase\n 12- Mostrar por consola la edad media de todos los alumnos de la clase\n 13- Mostrar por consola la edad media de las chicas de la clase\n 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas\n 15- Ordenar el array de alumnos alfabéticamente según su nombre")
  
  const answer = await getAnswerFromConsole() 
     

switch(answer) {
case '1':
  console.table(students)
  break
case '2':
  console.log(students.length)
  break
case '3':
  students.forEach(student => console.log(student.name))
  break
case '4':
  students.pop()
  break
case '5':
  const ri = Math.floor(Math.random() * (students.length));
  students.splice(ri, 1)
  break
case '6':
  const girls = students.filter(student => student.gender === 'female')
  console.log(girls)
  break
case '7':
  const nGirls = students.filter(student => student.gender === 'female')
  const nBoys = students.filter(student => student.gender === 'male')
  console.log('Cantidad de chicos: ' + nBoys.length + '\nCantidad de chicas: ' + nGirls.length)
  break
case '8':
  const allGirls = students.every(student => student.genre === 'female')
  console.log(allGirls)
  break
case '9':
  const twenties = students.filter(student => student.age >= 20 && student.age <=25)
  twenties.forEach(student => console.log(student.name))
  break
case '10':
  let newStudent = {}
    newStudent.age = (Math.floor(Math.random() * 31) + 20)
    newStudent.examScores = []
    newStudent.gender = availableGenders[Math.floor(Math.random() * availableGenders.length)]
    if (newStudent.gender == 'male'){
      newStudent.name = availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)]
    } else {
      newStudent.name = availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)]
    }  
    students.push(newStudent)         
  break
case '11':
  const minAge = Math.min.apply(null, students.map(function(a){return a.age;}))
  const youngest = students.filter(student => student.age === minAge)
  youngest.forEach(student => console.log(student.name))
  break
case '12':
  const average = students.reduce((sum, n) => sum + n.age, 0) / students.length;
  console.log(average)
  break
case '13': 
  const onlyGirls = students.filter(student => student.gender === 'female')
  const avGirls = onlyGirls.reduce((sum, n) => sum + n.age, 0) / onlyGirls.length;
  console.log(avGirls)
  break
case '14':
  students.forEach(student => student.examScores.push(parseInt(Math.floor(Math.random() * 11))))
  break
case '15':
  students.sort((a, b) => a.name.localeCompare(b.name))
  break
default:
  console.log('Opcion no válida')
  working = false
  break
}
}  

