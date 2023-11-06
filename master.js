console.log('js ok');

const users = [
    {
        name: "Paul",
        lastname: "Atreides",
        personalData: {
            birthday: "1993-07-25",
            birthplace: "Caladan"
        },
        equipment: [
            {
                name: "Stillsuit",
                price: 50
            },
            {
                name: "Knife",
                price: 10
            },
            {
                name: "Compass",
                price: 25
            },
        ]
    },
    {
        name: "Irulan",
        lastname: "Corrino",
        personalData: {
            birthday: "2002-10-02",
            birthplace: "Kaitan"
        },
        equipment: [
            {
                name: "Lightdress",
                price: 400
            },
            {
                name: "Hidden blade",
                price: 130
            },
            {
                name: "Necklace",
                price: 810
            },
        ]
    },
    {
        name: "Thufir",
        lastname: "Hawat",
        personalData: {
            birthday: "1985-04-22",
            birthplace: "REDACTED"
        },
        equipment: [
            {
                name: "Sword",
                price: 75
            },
        ]
    },
    {
        name: "Gurney",
        lastname: "Halleck",
        personalData: {
            birthday: "1983-01-30",
            birthplace: "Giedi Primo"
        },
        equipment: [
            {
                name: "Baliset",
                price: 245
            },
            {
                name: "Force Shield",
                price: 300
            },
        ]
    },
];

// MY FUNCTIONS 

// TASK 1 

const getAllNames = function () {
    const allUsersName = [];
    for (let i = 0; i < users.length; i++) {
        const name = users[i].name
        const surnames = users[i].lastname
        const fullName = name + ' ' + surnames
        allUsersName.push(fullName)
    }

    return allUsersName
}

// TASK 2

const getAllEquipment = function () {
    const allEquipment = [];
    for (let i = 0; i < users.length; i++) {
        const currentObj = users[i].equipment
        for(let i=0; i < currentObj.length; i++ ){
            const equipment = currentObj[i].name
            allEquipment.push(equipment)
        }
    }

    return allEquipment
}

// TASK 3


const getUserEquipmentPrice = function () {
    const UserEquipmentPrice = [];
    for (let i = 0; i < users.length; i++) { // Qui scorro gli utenti
        let userTotalPrice = 0;
        const currentObj = users[i].equipment
        for(let i = 0; i < currentObj.length; i++ ){ // Scorro gli equipaggiamenti di ogni utente
            const equipment = currentObj[i].price
            userTotalPrice += equipment;
        }
        UserEquipmentPrice.push(userTotalPrice)
    }

    return UserEquipmentPrice
}


// TASK 4 

const getPrieced = function(){
    const prieced = []
    for (let i=0; i < getUserEquipmentPrice().length; i++ ) {
        number = getUserEquipmentPrice()[i]
        singlePriece = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
            number,
          )
          prieced.push(singlePriece)
    }
    return prieced
        
}

// TASK 5 TO FIX 

// const getDateFormatted = function() {
//     const dates = []
//     for (let i=0; i < users.length; i++ ) {
//         userDate = users[i].personalData.birthday
//         const currentDate = new Intl.DateTimeFormat('en-GB', {
//             dateStyle: 'full',
//             timeStyle: 'long',
//             timeZone: 'Australia/Sydney',
//           }).format(userDate)
        
//           dates.push(currentDate)
      
//     }
//     return dates
// }


// INVOCAZIONI 
console.log(getAllNames())

console.log(getAllEquipment())

console.log(getUserEquipmentPrice())

console.log(getPrieced())

// console.log(getDateFormatted())

