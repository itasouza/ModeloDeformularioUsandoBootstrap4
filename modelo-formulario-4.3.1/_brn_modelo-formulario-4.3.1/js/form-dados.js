$(document).ready(function () {

    //definirDatePicker();

    
    //usando jquery.mask para markara de campos
 
    // $('.cep').mask('00000-000');
    // $('.cpf')
    // $('.cnpj').mask('00.000.000/0000-00', { reverse: true });


    //usando jquery.payment para markara de cartão de crédito
    $('input.numero-cartao').payment('formatCardNumber');
    $('input.expiracao-cartao').payment('formatCardExpiry');
    $('input.codigo-cartao').payment('formatCardCVC');
    $('input.numerico').payment('restrictNumeric');



    // Adicione o seguinte código se você quiser que o nome do arquivo apareça em select
    $(".custom-file-input").on("change", function () {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

    //habilitar popover e tooltip
    $(function () {
        $('[data-toggle="popover"]').popover();
        $('[data-toggle="tooltip"]').tooltip();
    })


    // Adicionar classes ao carregar o documento
    addClasses();
    addClassesListagem();

    // $(window).resize(function () {
    //     // Adicionar sempre que a tela for redimensionada
    //     addClasses();
    //     addClassesListagem();
    // });
    
});

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
   
    //usando sweetalert2
    function GravacaoSucessoSweetalert(){
        swal({
            position: 'top-end',
            showConfirmButton: false,
            toast: true,
            timer: 3000,
            type: 'success',
            title: 'Registro foi gravado com sucesso'
        });   
    }

    //usando sweetalert2
    document.getElementById('btnGravar').onclick = function () {
        swal({
            title: 'Você está certo disso?',
            text: "Está operação vai gravar os dados!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, tenho certeza!',
            cancelButtonText: 'Não Tenho certeza...'
        }).then((result) => {
            if (result.value) {
                GravacaoSucessoSweetalert();
            }
        })
    };


//personalizar o botão para o tamanho da janela
function addClasses() {
    $(".bg-light").each(function () {
        var scre = $("body").width();
        if (scre <= 768) {
            $(".btnPersonalizado").addClass("btn-block");
        } else {
            $(".btnPersonalizado").removeClass("btn-block");
        }

    });
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//personalizar a listagem de dados
function addClassesListagem() {
    $(".bg-light").each(function () {
        var scre = $("body").width();
        if (scre >= 768) {
            $("#listagem").addClass("p-5");
            $("#listagem").removeClass("p-3");
        } else {
            $("#listagem").removeClass("p-5");
            $("#listagem").addClass("p-3");
        }

    });
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//jscolor para selecionar cor na página
function update(jscolor) {
    document.getElementById('receberCor').style.backgroundColor = '#' + jscolor
}

