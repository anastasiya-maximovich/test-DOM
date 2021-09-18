let days = [{ name: "Sunday", isWorkDay: false },
    { name: "Monday", isWorkDay: true },
    { name: "Tuesday", isWorkDay: true },
    { name: "Wednesday", isWorkDay: true },
    { name: "Thursday", isWorkDay: true },
    { name: "Friday", isWorkDay: true },
    { name: "Saturday", isWorkDay: false }];

let workDays = document.querySelector("#workingDays"),
    daysOff = document.querySelector("#daysOff");

for(let day of days){
    let p = document.createElement("p");
    p.textContent = day.name;

    if(day.isWorkDay === true? workDays.append(p) : daysOff.append(p));
}

//variant2
        //  function createParagraph(text) {
        //      let element = document.createElement("p");
        //      element.innerText = text;
        //      return element;
        //  }

        // let workDays = document.querySelector("#workingDays"),
        // daysOff = document.querySelector("#daysOff");
    
 
        //  for (const day of days) {
        //      if(day.isWorkDay) {
        //          workDays.append(createParagraph(day.name));
        //      }
        //      else {
        //          daysOff.append(createParagraph(day.name));
        //      }
        //  }
     