$(function () {
    $('li').css('font-size', '20px')
    const h1 = $('h1').html()
    $('h1').css('background-color', 'yellow')
    $('p').css('background-color', 'yellow')
    $('li').css('background-color', 'yellow')
    alert(h1)
    $('h1, p, li').css('background-color', 'yellow')

});

