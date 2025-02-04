/* const user = {
  name: 'Ivan',
  age: 18,
  city: 'Kazan',
  country: 'Russia'
}

console.log(user.name)

const tom = {
  tommy: {
    age:23,
    name:'Tommy',
    city:'Moscow'
  }
}

console.log(tom.tommy.age) */

/* const user = {
  Ivan: {
    age: 18,
    isAdmin: true,
    helloWorld(name) {
      console.log(`Иван пригласил на день рождение ${name}`)
    }
  }
}

console.log(user.Ivan)
user.Ivan.helloWorld('Егора') */


/* Мы сщздали массивв и поместили туда 4 объекта , потом мы создали цыкл при котором мы обратились ко всем объектам внутри массива и users[i].name 
позволило нам вывести в консоле все имена , подробнее расписал всё в тетради №2 */

/* const users = [
  {
    name: 'ivan',
    age: 18,
    isAdmin: false
  },
  {
    name: 'Tommy',
    age: 45,
    isAdmin: true
  },
  {
    name: 'Georgy',
    age: 37,
    isAdmin: true
  },
  {
    name: 'Mars',
    age: 33,
    isAdmin: false
  }
]

users.push({
  name: 'Ann',
  age: 37,
  isAdmin: true
})

for (i = 0; i < users.length; i++) {
console.log(users[i].name)
} */

/* HomeWork */
/* №1 */
const myName = {
  name: 'ivan',
  age: 18,
  city: 'Kazan',
  country: 'Russia',
  hobby: 'wrestling'
}
console.log(myName)

/* №2 */
const user = {
  city: 'Kazan',
  country: 'Russia',
  hobby: 'wrestling',
  sayHello(name) {
    console.log(`Hello ${name}`)
  }
}
console.log(user)
user.sayHello('Tom')

/* №3 */
const users = [
  {
    name: 'ivan',
    age: 18,
    isAdmin: false
  },
  {
    name: 'Tommy',
    age: 45,
    isAdmin: true
  },
  {
    name: 'Georgy',
    age: 37,
    isAdmin: true
  },
  {
    name: 'Mars',
    age: 33,
    isAdmin: false
  }
]
for (i = 0; i < users.length; i++) {
  console.log(users[i].isAdmin = true + 1)
}
