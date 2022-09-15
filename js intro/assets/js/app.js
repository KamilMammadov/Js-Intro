
var vaxt=new Date().getHours();


document.body.style.transition= ".5s"



if (vaxt>=6 && vaxt<=12) {
    alert('sabahin xeyir')
    document.body.style.backgroundColor="yellow"
   
}
else if (vaxt>12 && vaxt<=18) {
    alert('gunortan xeyir')
    document.body.style.backgroundColor="orange"
 
}
else{
    alert('axshamin xeyir')
    document.body.style.backgroundColor="black"
}
