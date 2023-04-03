function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");
    if(dots.style.display === "none") {
        dots.style.display="inline";
        btn.innerHTML="Показать ещё";
        more.style.display="none";
    } else {
        dots.style.display="none";
        btn.innerHTML="Скрыть";
        more.style.display="inline";
    }
}
// function readMore() {
//     var dots_second = document.getElementById("dots_second");
//     var more_second = document.getElementById("more_2");
//     var btn_second = document.getElementById("btn_2");
//     if(dots_second.style.display === "none") {
//         dots_second.style.display="inline";
//         btn_second.innerHTML="Показать ещё";
//         more_second.style.display="none";
//     } else {
//         dots_second.style.display="none";
//         btn_second.innerHTML="Скрыть";
//         more_second.style.display="inline";
//     }
// }