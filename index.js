let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let mili = document.getElementById("mili")
let da = document.getElementById("date");
let mon = document.getElementById("mon");
let ye = document.getElementById("ye");
let we = document.getElementById("we");


setInterval(() => {
    
    let a = new Date;
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    // let milisec = a.getMilliseconds();
    let d = a.getDate();
    let month = a.getMonth();
    // console.log(a.getMonth())
    let year = a.getFullYear()
    let week = a.getDay();
    // console.log(ye)
    // let dat = d.toString();
    // console.log(a)

    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthname = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    hr.innerHTML = String(h).padStart(2, 0);
    min.innerHTML = String(m).padStart(2, 0);
    sec.innerHTML = String(s).padStart(2, 0);
    // mili.innerHTML = String(milisec).padStart(2, 0);
    da.innerHTML = String(d).padStart(2, 0);
    mon.innerHTML = monthname[month];
    ye.innerHTML = year;
    we.innerHTML = weekday[week]
    // da.innerHTML = dat;
}, 1000);
// console.log(a)