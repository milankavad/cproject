

window.addEventListener('wheel',function(e){
var one = document.getElementById("one");

    if(e.deltaY>100){
        // one.classlist.add("two");
        one.classList.add('two');
        // console.log(one.classList);
    }
    else{
        // one.classlist.remove("one");
        one.classList.remove('');

        // console.log("hello")

    }
});