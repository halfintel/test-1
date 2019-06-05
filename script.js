$(function() {
$(window).load(function() {
  // задаёт стандартные значения в форме
  const $number1 = $("#number1");
  const $number2 = $("#number2");
  
  $number1.val(0.1);
  $number2.val(0.2);
});
});

// считает сумму чисел в форме
function form__summ(thisItem) {
  const $item = $(thisItem);
  let firstNumber = $item.siblings('.form__label').children('#number1').val();
  let secondNumber = $item.siblings('.form__label').children('#number2').val();
  
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  
  if (
    !Number.isNaN(firstNumber) 
	&& !Number.isNaN(secondNumber) 
  ) {
    const summ = firstNumber + secondNumber;
    alert(summ.toFixed(1));
  } else {
    alert('введены не числа');
  }
}
