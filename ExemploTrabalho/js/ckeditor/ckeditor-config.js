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


     DecoupledEditor.create( document.querySelector('.document-editor__editable'),{
        language:"pt-br",
     })
     .then( editor => {
         const toolbarContainer = document.querySelector('.document-editor__toolbar');
  
         toolbarContainer.appendChild(editor.ui.view.toolbar.element);
  
         window.editor = editor;

         editor.setData("The Flavorful Tuscany Meetup");
     } )
     .catch( err => {
         console.error( err );
     } );

});

