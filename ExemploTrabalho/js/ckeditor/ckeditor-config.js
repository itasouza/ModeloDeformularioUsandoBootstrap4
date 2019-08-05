"use strict";


$(document).ready(function () {


    //usado ClassicEditor
     ClassicEditor.create( document.querySelector('#editor'),{
        language:"pt-br",
     })

     .then( editor => {

             console.log( editor );
             editor.setData( '<p>texto aqui!.</p>' );


             let tamanhoTexto = editor.getDate().length;
             console.log(tamanhoTexto);
     } )
     .catch( error => {
            // console.error( error );
     } );

});