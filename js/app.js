/*declacion de los Elemenos a Utilizar para el Menu*/
//la Clase getElementById es utilizado para cargar un elemento de mi html a traves de los id declarados en mi html
let nav=document.getElementById('nav');
let menu=document.getElementById('enlaces'); 

function menus(){
    let Desplazamiento_Actual=window.pageYOffset;
    if (Desplazamiento_Actual<=300) {
        nav.classList.remove('nav2');
        nav.className=('nav1');
        nav.style.transition='1s';
    } else {
        nav.classList.remove('nav1');
        nav.className=('nav2');
        nav.style.transition='1s';
    }
}
window.addEventListener('scroll',function(){
    console.log(window.pageYOffset);
    menus();
});