function ViewAnketa(){

};

ViewAnketa.prototype.addAnketa = function(anketa){
    var listHome = document.querySelector('#list-anketas');
    var ulList = document.createElement('tr');

    ulList.innerHTML = `<td>${anketa.name}</td><td>${anketa.lastname}</td><td>${anketa.patronymic}</td><td>${anketa.age}</td><td>${anketa.experience}</td><td>${anketa.year}</td><td>${anketa.D2}</td><td>${anketa.ch}</td><td><button onclick='anketaDelete(this);'>Удалить Анкету</button></td>`;

    listHome.appendChild(ulList);
};

function anketaDelete(btn){
    var p = btn.parentElement.parentElement;
    p.remove();

};

ViewAnketa.prototype.getMessage = function(message, name){
    var block = document.createElement('div');
    block.className = name;
    block.innerHTML = message;

    var container = document.querySelector('.container');
    var form = document.querySelector('#anketas');

    container.insertBefore(block, form);    
};

ViewAnketa.prototype.clear = function(){
    document.querySelector('#name').value = '';
    document.querySelector('#lastname').value = '';
    document.querySelector('#patronymic').value = '';
    document.querySelector('#age').value = '';
    document.querySelector('#experience').value = '';
    document.querySelector('#year').value = '';
    document.querySelector('#D2').value = '';
    document.querySelector('#ch').value = '';
};