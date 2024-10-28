//Задание 1
//1. Реализация элемента "Счетчик нажатий на кнопку"
//Создайте на странице кнопку с текстом "Нажми меня".
//Под кнопкой отобразите текст, который будет показывать количество нажатий на
//кнопку.
//Подсказка: Используйте событие click , чтобы увеличивать счетчик каждый раз при нажатии на кнопку.

//let count = 0;
//let clickbutton = document.getElementById("click-button");
//let disp = document.getElementById("counter");
 
//clickbutton.onclick = function () {
 //           count++;
//disp.innerHTML = count;}

function incrementValue(){
   let value = parseInt(document.getElementById('number').value, 10);
   value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}



//Задание 2
//Реализация реактивной валидации поля формы
//Создайте форму с полем для ввода email и кнопку для отправки.
//Реализуйте реактивную валидацию для email-поля, которая проверяет корректность
//введенного email в реальном времени.
//Если email введен неверно, отображайте сообщение "Некорректный email" и делайте
//кнопку "Отправить" неактивной.
//Подсказка: Используйте событие input для отслеживания изменений в поле формы.

 
//const emailInput = document.getElementById("email");
 //const errorMessage = document.getElementById("errorMessage");
//const submitBtn = document.getElementById("submitBtn");
  
    emailInput.addEventListener('input', function validate () {  
    const emailValue = emailInput.value;  
    if ( ! emailInput.value ) {
      document.document.getElementById( 'label[for="email"]' );
       valid = false;
      } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
      if (!emailPattern.test(emailValue)) {  
      button.disabled = true;
       console.log("Некорректное значение!");
   } else {
  button.disabled = false;
           
   }  
  }   
});






 
