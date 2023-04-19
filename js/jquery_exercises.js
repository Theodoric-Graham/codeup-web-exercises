$(function () {
    $('h1').click(() => {
        $('h1').css('background-color', 'red')
    })

    $('p').dblclick(() => {
        $('p').css('font-size', '18px')
    })

    $('li').hover(() => {
        $('li').css('color', 'red')
    }, () => {
        $('li').css('color', 'black')

    })

});

