let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let div = document.createElement("div");
div.id = "out";
document.body.prepend(div);

//variant 1
for(i = 0; i < days.length; i++){
    let day = days[i];

    let p = document.createElement("p");
    p.textContent = day;
    div.append(p);
}

//variant 2
// days.forEach(day => {
//     let p = document.createElement("p");
//     p.textContent = day;
//     div.append(p);
// });

//variant 3
// for(let day of days){
//     let p = document.createElement("p");
//     p.textContent = day;
//     div.append(p);
// }