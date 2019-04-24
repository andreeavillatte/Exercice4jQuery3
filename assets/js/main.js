
//je defini les propriétés de base de mon carré
var height = 10;
var color = 'red';
//je defini le css de base de mon carré
$('.square').css({
    'width': '10px',
    'height': height,
    'background-color': color
});

// Quand le document est ready
$(function () {
    //si je clique sur le bouton button1
    $('#growHeight').click(function () {
        // j'augmente la hauteur de 10
        height += 10;
        // alert(height);
        // si la hauter est plus grande que 100 elle repasse à 10
        if (height > 100) {
            height = 10;
        }
        // on change la hauteure de rectangle avec la valeur de height
        $('.square').css('height', height);
    })
    // en appuyant le button green
    $('#green').click(function () {
        // on change la couleur de rectangle en vert
        $('.square').css('background-color', 'green');
    })
    // en appuyant le button restoreColors
    $('#restoreColors').click(function () {
        // on change la couleur de rectangle en vert
        $('.square').css('background-color', color);
    })
    // en appuyant le button disparaitre
    $('#disapear').click(function () {
        // on fait disparaitre le rectangle avec un effet de mistère
        // on peut utiliser aussi  .hide
        $('.square').fadeToggle();
    })
    // en appuyant le button Reaparaitre
    $('#show').click(function () {
        // on fait aparaitre le rectangle avec un effet de mistère
        // on peut utiliser aussi .show
        $('.square').fadeToggle();
    })
})