// Задание:
// Напишите сценарий, который удалит строки таблицы, в которых во второй колонке находятся значения меньше 100.
// (В прошлом уроке были рассмотрены примеры, показывающие как получить доступ к родительским элементам, так как 
// удалять нужно не ячейку td, в которой находится значение, а строку tr, в которой расположена эта ячейка).

let tdsSecond = document.querySelectorAll("td:nth-child(2)"); //каждый второй td CSS

for(let td of tdsSecond){
    if(td.textContent < 100){
        td.parentElement.remove();
    }
}

//variant2
// let trs = document.querySelectorAll("tr");

// for(tr of trs){
//     if(tr.lastElementChild.textContent < 100){
//         tr.remove();
//     }
// }

