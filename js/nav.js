function slide()
{
    var burger = document.querySelector('.burger');
    var links = document.querySelector('.links');

    burger.addEventListener('click', function(){
        links.classList.toggle('toggle-links');
    })
}

slide();