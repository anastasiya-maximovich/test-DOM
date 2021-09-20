/*
1. Task Задание:
Напишите код, который добавит CSS класс error для элемента DIV, размещенного в текущем документе.
*/

let div = document.querySelector("#firstDiv");
div.classList.add("error");
div.style.backgroundColor = "white";

/*
2. Task Задание:
Не используя CSS классы, поменяйте с помощью JavaScript кода оформление элемента DIV, расположенного на текущей странице.
        
Добавьте:
    >> шрифт - 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    >> сплошную рамку толщиной в 1 px красного цвета
    >> внутренний отступ в 16px
    >> скругление рамки в 8 px
*/
let divStyle = document.querySelector("#withoutStyle");
divStyle.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";;
divStyle.style.border = "1px solid red";
divStyle.style.padding = "16px";
divStyle.style.borderRadius = "8px";
div.style.backgroundColor = "white";


/*
3. Task Задание:
Приложение создает для каждого дня недели div и поменяет какие дни недели являются занятыми.

Создайте div под каждый элемент массива days, значения элементов массива должны быть добавлены как текст в div. Если текст созданного div находится в массиве
busyDays добавьте для такого div дополнительно класс .busy-day
Разместите все созданные в конец тела документа.
*/

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let busyDays = ["Monday", "Thursday", "Friday"];

days.forEach(day => {
    let div = document.createElement("div");
    div.textContent = day;

    if(busyDays.indexOf(day) != -1){ // тут сравниваем если в массиве занятых есть день (не -1)
        div.classList.add("busy-day");
    }
    
    let h2 = document.querySelector("#task3");
    h2.append(div);
})

/*
4. Task Задание:
Напишите сценарий, который добавит класс attention строкам таблицы, в которых во второй колонке находятся значения меньше 100.
*/

let tdsSecond = document.querySelectorAll("td:nth-child(2)");

tdsSecond.forEach(td => {
    if(td.textContent < 100){
        td.parentElement.classList.add("attention");
    }
})

 /*
5. Task Задание:
Внесите правки в данный код.
Уберите использование inline стилей, замените их на работу с классами (недостающие классы добавьте).
*/

let users = [
    {
        balance: '1250.89',
        age: 24,
        name: {
            first: 'Golden',
            last: 'Clements'
        },
        company: 'EWAVES',
        email: 'golden.clements@ewaves.io',
        friends: [
            {
                id: 0,
                name: 'Buchanan Austin'
            },
            {
                id: 1,
                name: 'Richmond Garrison'
            },
            {
                id: 2,
                name: 'Burns Cook'
            },
            {
                id: 3,
                name: 'Sally Mcpherson'
            },
            {
                id: 4,
                name: 'Nina Hood'
            },
            {
                id: 5,
                name: 'Rhonda Anderson'
            },
            {
                id: 6,
                name: 'Mathis Bowen'
            },
            {
                id: 7,
                name: 'Janie Carlson'
            },
            {
                id: 8,
                name: 'Brooke Reilly'
            },
            {
                id: 9,
                name: 'Peters Oliver'
            }
        ],
        favoriteFruit: 'strawberry'
    },
    {
        balance: '3637.94',
        age: 23,
        name: {
            first: 'Francis',
            last: 'Hebert'
        },
        company: 'XPLOR',
        email: 'francis.hebert@xplor.biz',
        friends: [
            {
                id: 0,
                name: 'Clements Glass'
            },
            {
                id: 1,
                name: 'Gutierrez Padilla'
            },
            {
                id: 2,
                name: 'Noelle Wilkinson'
            },
            {
                id: 3,
                name: 'Kim Sampson'
            },
            {
                id: 4,
                name: 'Luz Palmer'
            }
        ],
        favoriteFruit: 'apple'
    },
    {
        balance: '1106.44',
        age: 31,
        name: {
            first: 'Hale',
            last: 'Cross'
        },
        company: 'EARTHPURE',
        email: 'hale.cross@earthpure.us',
        friends: [
            {
                id: 0,
                name: 'Terri Clark'
            },
            {
                id: 1,
                name: 'Marie Joyce'
            },
            {
                id: 2,
                name: 'Howell Moses'
            },
            {
                id: 3,
                name: 'Juarez Marshall'
            },
            {
                id: 4,
                name: 'Corinne Grant'
            },
            {
                id: 5,
                name: 'Chandra Ferrell'
            },
            {
                id: 6,
                name: 'Emily Kidd'
            },
            {
                id: 7,
                name: 'Claudine Pollard'
            },
            {
                id: 8,
                name: 'Walter Cooper'
            },
            {
                id: 9,
                name: 'Isabella Hays'
            }
        ],
        favoriteFruit: 'strawberry'
    },
    {
        balance: '2502.43',
        age: 25,
        name: {
            first: 'Delores',
            last: 'Sykes'
        },
        company: 'ASSITIA',
        email: 'delores.sykes@assitia.com',
        friends: [
            {
                id: 0,
                name: 'Amy Fox'
            },
            {
                id: 1,
                name: 'Laurel Gaines'
            },
            {
                id: 2,
                name: 'Mcguire French'
            },
            {
                id: 3,
                name: 'Savage Rocha'
            },
            {
                id: 4,
                name: 'Durham Fowler'
            },
            {
                id: 5,
                name: 'Jacobson Clay'
            },
            {
                id: 6,
                name: 'Hamilton Pierce'
            },
            {
                id: 7,
                name: 'Johns Jefferson'
            },
            {
                id: 8,
                name: 'Avery Campbell'
            }
        ],
        favoriteFruit: 'strawberry'
    },
    {
        balance: '3651.54',
        age: 21,
        name: {
            first: 'Ryan',
            last: 'Bolton'
        },
        company: 'MOLTONIC',
        email: 'ryan.bolton@moltonic.biz',
        friends: [
            {
                id: 0,
                name: 'Weaver Buchanan'
            },
            {
                id: 1,
                name: 'Francesca Rice'
            },
            {
                id: 2,
                name: 'Sheppard Calhoun'
            },
            {
                id: 3,
                name: 'Schmidt Murray'
            }
        ],
        favoriteFruit: 'apple'
    },
    {
        balance: '1345.79',
        age: 21,
        name: {
            first: 'Carey',
            last: 'Schwartz'
        },
        company: 'UXMOX',
        email: 'carey.schwartz@uxmox.info',
        friends: [
            {
                id: 0,
                name: 'Lilia Wiggins'
            },
            {
                id: 1,
                name: 'Snider Tanner'
            },
            {
                id: 2,
                name: 'Taylor Perez'
            },
            {
                id: 3,
                name: 'Raquel Castaneda'
            },
            {
                id: 4,
                name: 'Burris Mcmahon'
            },
            {
                id: 5,
                name: 'Henderson Osborn'
            },
            {
                id: 6,
                name: 'Carrillo Ortiz'
            },
            {
                id: 7,
                name: 'Herminia Puckett'
            },
            {
                id: 8,
                name: 'Shelby Ware'
            }
        ],
        favoriteFruit: 'banana'
    },
    {
        balance: '3261.11',
        age: 30,
        name: {
            first: 'Trevino',
            last: 'Mullins'
        },
        company: 'TERRASYS',
        email: 'trevino.mullins@terrasys.org',
        friends: [
            {
                id: 0,
                name: 'Corine Deleon'
            },
            {
                id: 1,
                name: 'Alta Walker'
            },
            {
                id: 2,
                name: 'Jeannie Santana'
            },
            {
                id: 3,
                name: 'Velazquez Oneill'
            },
            {
                id: 4,
                name: 'Perry Merrill'
            },
            {
                id: 5,
                name: 'Tabitha Mcintosh'
            },
            {
                id: 6,
                name: 'Shields Castillo'
            }
        ],
        favoriteFruit: 'banana'
    },
    {
        balance: '1659.17',
        age: 20,
        name: {
            first: 'Gilliam',
            last: 'Mendez'
        },
        company: 'ZENTHALL',
        email: 'gilliam.mendez@zenthall.tv',
        friends: [
            {
                id: 0,
                name: 'Nora Ratliff'
            },
            {
                id: 1,
                name: 'Simone Michael'
            },
            {
                id: 2,
                name: 'Lang Rose'
            },
            {
                id: 3,
                name: 'Priscilla Hester'
            },
            {
                id: 4,
                name: 'Stuart Barker'
            },
            {
                id: 5,
                name: 'Florine Mcintyre'
            },
            {
                id: 6,
                name: 'Karin Rosa'
            },
            {
                id: 7,
                name: 'Vinson Rutledge'
            }
        ],
        favoriteFruit: 'strawberry'
    },
    {
        balance: '2340.54',
        age: 32,
        name: {
            first: 'Brewer',
            last: 'Vargas'
        },
        company: 'QIMONK',
        email: 'brewer.vargas@qimonk.co.uk',
        friends: [
            {
                id: 0,
                name: 'Tamera Sharp'
            },
            {
                id: 1,
                name: 'Jackie Parks'
            },
            {
                id: 2,
                name: 'Wanda Merritt'
            },
            {
                id: 3,
                name: 'Castillo Sloan'
            }
        ],
        favoriteFruit: 'apple'
    },
    {
        balance: '1736.91',
        age: 24,
        name: {
            first: 'Newman',
            last: 'Wynn'
        },
        company: 'VISALIA',
        email: 'newman.wynn@visalia.name',
        friends: [
            {
                id: 0,
                name: 'Lopez Mccarthy'
            },
            {
                id: 1,
                name: 'Melinda Diaz'
            },
            {
                id: 2,
                name: 'Silva Shepherd'
            },
            {
                id: 3,
                name: 'Claudia Contreras'
            },
            {
                id: 4,
                name: 'Jenna Golden'
            },
            {
                id: 5,
                name: 'Blair Hayden'
            },
            {
                id: 6,
                name: 'Antonia Woods'
            },
            {
                id: 7,
                name: 'Felecia Greer'
            },
            {
                id: 8,
                name: 'Sherry Howard'
            },
            {
                id: 9,
                name: 'Montgomery Cohen'
            }
        ],
        favoriteFruit: 'apple'
    }
];

function createUserCard(user) {
    let div = document.createElement("div");
    div.classList.add("user-card");
    div.insertAdjacentHTML("beforeend", `<h2>${user.name.first} ${user.name.last}</h2>`);
    div.insertAdjacentHTML("beforeend", `<p>email: ${user.email}</p>`);
    div.insertAdjacentHTML("beforeend", `<p>company: ${user.company}</p>`);
    div.insertAdjacentHTML("beforeend", `<br />friends:`);

    let ul = document.createElement("ul");
    for (const friend of user.friends) {
        ul.insertAdjacentHTML("beforeend", `<li>${friend.name}</li>`);
    }
    if (user.friends.length < 5) {
        div.classList.add("user-less");
    }

    div.append(ul);
    return div;
}

let task5 = document.querySelector("#task5");

users.forEach(user => {
    let card = createUserCard(user);
    task5.append(card);
});



