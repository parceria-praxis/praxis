$("#cnpj").keydown(function(){
  try {
      $("#cnpj").unmask();
  } catch (e) {}

  var tamanho = $("#cnpj").val().length;

  if(tamanho < 14){
      $("#cnpj").mask("99.999.999/9999-99");
  }
  
  // ajustando foco
  var elem = this;
  setTimeout(function(){
      // mudo a posição do seletor
      elem.selectionStart = elem.selectionEnd = 10000;
  }, 0);
  // reaplico o valor para mudar o foco
  var currentValue = $(this).val();
  $(this).val('');
  $(this).val(currentValue);
});