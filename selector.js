var h = document.getElementById("main");
console.log(h);
console.log(h.innerHTML)
h.innerHTML="good job ram"
console.log(h.innerHTML);

var p1 = document.getElementsByTagName("p")
console.log(p1.length);
console.log(p1[0].innerHTML);

for(let i=0;i<p1.length; i++){

console.log(p1[i].innerHTML)
p1[i].innerHTML ="my custom paragraph"+i

}

var list = document.getElementsByClassName("second");
console.log(list[0].innerHTML);