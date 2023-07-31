const btn = document.getElementById("btn");
btn.addEventListener("click", displayAge);

function displayAge() {
    const cd = new Date();
    var d1 = cd.getDate();
    var m1 = 1 + cd.getMonth();
    var y1 = cd.getFullYear();
    const d2 = document.getElementById("indate").value;
    const m2 = document.getElementById("inmonth").value;
    const y2 = document.getElementById("inyear").value;
    var months=[31,28,31,30,31,30,31,31,30,31,30,31];

    if(d2>d1)
    {
        d1=d1+months[m1-1];
        m1--;
    }
    if(m2>m1)
    {
        m1=m1+12;
        y1--;
    }
    if(d2>0&&m2>0&&y2>0)
    {
        var d=d1-d2;
        var m=m1-m2;
        var y=y1-y2;
        document.getElementById("ans").innerHTML=`You are ${y} years, ${m} months and ${d} days old`;
    }
    else{
        window.alert("Invalid inputs");
    }

}
