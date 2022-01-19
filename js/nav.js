function slide()
{
    var burger = document.querySelector('.burger');
    var links = document.querySelector('.links-popup');

    burger.addEventListener('click', function(){
        links.style.display = 'block';
    })

    links.addEventListener('click', function()
    {
        links.style.display = 'none';
    })
}

slide();