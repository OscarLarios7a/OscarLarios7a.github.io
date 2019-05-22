/*declacion de los Elemenos a Utilizar para el Menu*/
//la Clase getElementById es utilizado para cargar un elemento de mi html a traves de los id declarados en mi html
let nav=document.getElementById('nav');
let menu=document.getElementById('enlaces'); 
let abrir=document.getElementById('open');
let botones=document.getElementsByClassName('btn-header');
let cerrado=true;
/** Declaracion de Funciones **/
//funcion para la carga de menu nav 
function menus(){
    let Desplazamiento_Actual=window.pageYOffset;
    if (Desplazamiento_Actual<=300) {
        nav.classList.remove('nav2');
        nav.className=('nav1');
        nav.style.transition='1s';
        menu.style.top='80px';
        abrir.style.color='var(--fondo)';
    } else {
        nav.classList.remove('nav1');
        nav.className=('nav2');
        nav.style.transition='1s';
        menu.style.top='100px';
        abrir.style.color='var(--color2)';
    }
}
//funcion para mostrar el menu nav en responsive
function nav_responsive(){
    if (cerrado) {
        menu.style.width='70vw';
        cerrado=false;
    } else {
        menu.style.width='0%';
        menu.style.overflow='hidden';
        cerrado= true;
    }
}


/** Declaraciones de Eventos **/
//declaracion de un evento Load
window.addEventListener('load',function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
menus();
});
//declaracion de un evento Scroll 
window.addEventListener('scroll',function(){
    console.log(window.pageYOffset);
    menus();
});
//declaracion de un evento click nav
window.addEventListener('click',function(){
    nav_responsive();
});
//declaracion de un evento Reajuste Pantalla
window.addEventListener('resize',function(){
    if(screen.width>=700){
        cerrado=true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('hidden');
    }
});
//declaracion de un click 
window.addEventListener('click',function(){
    console.log(e.target);
    if(cerrado==false){
        let span=document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width='0%';
            menu.style.overflow='hidden';
            cerrado=true;
        }
    }
});