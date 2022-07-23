let son1 = +prompt("1-sonni kiriting")
let son2 = +prompt("2-sonni kiriting")
let son3 = +prompt("3-sonni kiriting")

if(son1 < son2 && son1 > son3 || son1 < son3 && son1 > son2 ){
    alert(son1);

}else if (son2 > son1 && son2 < son3  || son2 < son1 && son2 > son3){
    alert(son2);
}        
else if(son3 > son1 && son3 < son2 || son3 < son1 && son3 > son2 ){
    alert(son3);
}else {
    alert("Xarflar qatnashishi mumkin emas !");
}




