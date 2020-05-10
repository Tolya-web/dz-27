function validateForm() 
{
var validateFlag = true; //Возращаемая функцией логическая переменная
for (var i=0; i<6; i++) //Проверяем первые 10 поля формы
{
var countElem = document.anketa.elements[i];
if (countElem.value == '') //Текущий элемент пустой?
{ //Если да, то
var validateFlag = false; //Устанавливаем флаг в false
alert('Заполните все поля');
break; //Цикл можно не продолжать
}
}
if (validateFlag) //Если вся анкета заполнена
alert('Спасибо за заполнение')
return validateFlag;
}
document.querySelector('#anketas').addEventListener('submit', function(event){
    var name = document.querySelector('#name').value;
    var lastname = document.querySelector('#lastname').value;
    var patronymic = document.querySelector('#patronymic').value;
    var age = document.querySelector('#age').value;
    var experience = document.querySelector('#experience').value;
    var year = document.querySelector('#year').value;
    var D2 = document.querySelector('#D2').value;
    var ch = document.querySelector('#ch').checked;


    var anketa = new Anketa(name, lastname, patronymic, age, experience, year, D2, ch);
    var viewanketa = new ViewAnketa();

    if(name === '' || lastname === '' || patronymic === '' || age === '' || experience === '' || year === '' || D2 === ''  ){

    } else{
        viewanketa.addAnketa(anketa);
      
        viewanketa.clear();
    };

    event.preventDefault();
});