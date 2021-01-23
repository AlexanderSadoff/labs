"use strict";

//заполнение таблицы
let storage = [];
$(document).ready(function (){
    fetch('http://localhost:3000/guide')
        .then(function(response) {
            return response.json();
        })
        .then( function (myJson) {
            storage = (myJson);
            for(let k = 0; storage.length;++k){
                if (storage[k] !== null){
                    $('#guides').append(addRow(k,storage[k]));
                }
            }

        });

});


//get item
function getItem(){
    const name = $("#Name").val();
    const age = $("#Age").val();
    const item = {
        name: name,
        age: age
    }
    return (item);
}

//обращение к серву
function summon(method, ending, item){
    return fetch('http://localhost:3000/'+ending,{
        method: method,
        body: item,
        headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    }).then(res => res.json());
}

//создание URLencoded тела запроса
function getBody(){
    const item = getItem();
    const Url = new URLSearchParams(item);
    return Url;
}

//добавление строки
function add(){
    const item = getItem();
    fetch('http://localhost:3000/guide')
        .then(function(response) {
            return response.json();
        })
        .then( function (myJson) {
            let len = 0;
            if (Object.keys(myJson).length !==0) {
                len = Object.keys(myJson).length - 1;
            }
            $('#guides').append(addRow(len,item));
        });
    summon('POST', 'guide', getBody());
}


//создаем строки
function addRow(id, item){
    const row = $('<tr/>');
    row.attr('id',id);
    const col = [id, item.name, item.age];
    for (const k of col){
        const newCol = $('<td/>',{text:k});
        row.append(newCol);
    }
    const deleteButton = $('<button>Delete</button>').click(function (){
        let ID = $(this).parent().attr('id');
        summon('DELETE','guide/'+ID,);
        $(this).parent().remove();
    });

    const editButton = $('<button>Edit</button>').click(function (){
        let ID = $(this).parent().attr('id');
        $(this).parent().children('td').eq(1).text($("#Name").val());
        $(this).parent().children('td').eq(2).text($("#Age").val());
        summon('PUT', 'guide/'+ID, getBody())
    });
    row.append(deleteButton);
    row.append(editButton);
    return(row);
}


//поиск по ID
function search(){
    const ID = $('#ID').val();
    fetch('http://localhost:3000/guide/'+ID)
        .then(function(response) {
            return response.json();
        })
        .then( function (myJson) {
            if (myJson.deleted == 1){
                alert('NotFound')
            } else{
                alert('Имя - '+myJson.name+', возраст - '+myJson.age)
            }
        });
}
