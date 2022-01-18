const texts = ["Luxury Digital Marketing Services      ", "Just on your fingertips     "];
var count = 0;
var index = 0;
var currenttext = '';
var letter = '';

function type()
{
    if(count == texts.length)
    {
        count = 0;
    }                                                                                                                                                                                                                                                                                                                                                                                               
    currenttext = texts[count];
    letter = currenttext.slice(0, ++index);

    document.querySelector('.top-h').textContent = letter;

    if(letter.length == currenttext.length)
    {
        index = 0;
        count++;
    }
    setTimeout(type,200);
}

type();