
/*
Задание:
Напишите сценарий, который поменяет цвет текста элементов div, на тот, который указан в качестве значения атрибута data-color
*/

let divElems = document.querySelectorAll("div");

for(div of divElems){
    div.style.color = div.dataset.color;
}


/*
Задание:
Посчитайте сумму значений атрибутов data-value и my-attribute всех элементов на текущей странице и отобразите ее пользователю.
*/

let total = 0;
total += getSumOfAttributes("my-attribute");
total += getSumOfAttributes("data-value");

//alert(total);

function getSumOfAttributes(attributeName) {
    let sum = 0;

    let eleme = document.querySelectorAll("[" + attributeName + "]"); // поиск по селекутору [data-value] и т.д.

    for (const el of eleme) {
        const attrValue = el.getAttribute(attributeName); // getAttribute возвращате строку
        sum += Number(attrValue); 
    } 
    return sum;
}

/* Задание:
Напишите сценарий, который удалит на странице элементы с атрибутом data-remove
*/

let divRemove = document.querySelectorAll("[data-remove]");

for(rem of divRemove){
    //console.log(rem);
    rem.remove();
}

/*
Задание:
Для элементов с атрибутом data-status="expired" сделайте рамку красного цвета. Для элементов с атрибутом data-status="completed" выведите рамку зеленого цвета.
*/

let divStatus = document.querySelectorAll("[data-status]");

for(div of divStatus){
    div.dataset.status === "expired"? div.style.border = "2px solid red": div.style.border = "2px solid green"; 
}

 /*
Задание:
Напишите сценарий, который свойства объекта user выведет в элементы на странице, которые помечены атрибутами data-bind.
При этом значение атрибута это имя свойства, значение которого должно отобразится в элементе.
Например, в <div data-bind="firstName"></div> должно отобразится значение свойства firstName объекта user
Попробуйте написать универсальную функцию, которая сможет выводить любой объект с любыми свойствами в разметку в соответствующие элементы, помеченные атрибутом.
Для обхода свойств объекта, можно использовать цикл for in
*/

let user = {
    firstName: "Jhon",
    lastName: "Doe",
    age: "25",
}

let test = {
    prop1: "1111",
    prop2: "2222",
}

function bindProperties(obj) {

    for (const propName in obj) {
        // данная проверка нужна для того чтобы игнорировать свойства прототипа
        if (Object.hasOwnProperty.call(obj, propName)) {
            const value = obj[propName];

            const element = document.querySelector(`[data-bind="${propName}"]`);
            element.textContent = value;
        }
    }
}

bindProperties(user);
bindProperties(test);