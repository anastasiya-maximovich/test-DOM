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


