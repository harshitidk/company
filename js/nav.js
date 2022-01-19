function slide()
{
    var burger = document.querySelector('.burger');
    var links = document.querySelector('.links-popup');
    var logo = document.querySelector('.fas');
    var change = document.querySelector('.primal-li-con');
    console.log(logo);

    burger.addEventListener('click', function(){
        links.style.display = 'block';
    })

    links.addEventListener('click', function()
    {
        links.style.display = 'none';
    })

    if(burger.style.display == 'block')
    {
        logo.classList.remove('fa-4x');
        logo.classList.add('fa-2x');
        console.log('working the removing stuff');
    }

    if(burger.style.display == 'none')
    {
        logo.classList.remove('fa-2x');
        logo.classList.add('fa-4x');
    }
}

slide();
console.log('working the main');