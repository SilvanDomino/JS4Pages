let cal_list = document.getElementById("cal_list");

let today = new Date(2025, 9, 1);
let firstday = new Date(today.getFullYear(), today.getMonth(), 1);

for(let i = 1; i < firstday.getDay(); i++){
    let dayEl = document.createElement("li");
    dayEl.classList.add("calender_item_nomonth");
    cal_list.appendChild(dayEl);
}
for(let i = 1; i < 31; i++){
    let dayEl = document.createElement("li");
    dayEl.classList.add("calender_item");
    dayEl.innerText = i;
    cal_list.appendChild(dayEl);
}

while(cal_list.childElementCount % 7 != 0){
    let dayEl = document.createElement("li");
    dayEl.classList.add("calender_item_nomonth");
    cal_list.appendChild(dayEl);
}