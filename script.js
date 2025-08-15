    const pop = document.querySelector('.pop')
    const aside = document.querySelector('.pop>aside')
    const div = document.querySelector('._center')
function myClose(){
    aside.style.opacity='0'
    div.style.top='-700px'
    
    setTimeout(() => {
        pop.remove()
    }, 1000);
}