$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })


    $('#btnCancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
    e.preventDefault();

    const urlNewImage = $('#inputURL').val();
    const newItem = $('<li style="display: none"></li>');
    $(`<img src="${urlNewImage}"/>`).appendTo(newItem);
    $(`
        <div class="overlay-imagem-link">
            <a href='${urlNewImage}' target='${urlNewImage}' title="Ver imagem em tamanho real.">
            Ver imagem em tamanho real.
            </a>
        </div>`
    ).appendTo(newItem);
    $(newItem).appendTo('ul');
    $(newItem).fadeIn(1000);

    $('#inputURL').val('');
    })
})