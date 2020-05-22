const voteCat = document.querySelector ('.cats');
const voteDog = document.querySelector ('.dogs');
const voteParrot = document.querySelector ('.parrots');
const linkWrapper = document.querySelector ('.buttons');
const btnResults = document.querySelector ('.results');

//Нажатие кнопок для голосования:
//Коты
voteCat.addEventListener('click', () => { 
    postDataCats();
    response();
    afterClick();
});

postDataCats = () => {
    let animalCat = {
        name: 'cats',
        number: 1
    };
    let responseCat = fetch('https://sf-pyw.mosyag.in/sse/vote/cats', {method: 'POST'});
};


//Собаки
voteDog.addEventListener('click', () => {
    postDataDogs();
    response();
    afterClick();
});

postDataDogs = () => {
    let animalDog = {
        name: 'dogs',
        number: 1
    };
    let responseDog = fetch('https://sf-pyw.mosyag.in/sse/vote/dogs', {method: 'POST'});
};


//Попугаи
voteParrot.addEventListener('click', () => {
    postDataParrots();
    response();
    afterClick();
});

postDataParrots = () => {
    let animalParrot = {
        name: 'parrots',
        number: 1
    };
    let responseParrot = fetch('https://sf-pyw.mosyag.in/sse/vote/parrots', {method: 'POST'});
};


//Повторяющиеся функции
response = () => {
    alert("Спасибо, Ваш голос учтён. Вы можете просмотреть результат голосования, пройдя по ссылке после после закрытия диалогового окна");
}

afterClick = () => {
    linkWrapper.innerHTML = '<div class="w-75 h-50 shadow p-3 mb-5 bg-white rounded d-flex flex-column justify-content-around align-items-center"><div class="w-100 d-flex justify-content-center align-items-center"><a href="./pages/results.html" class="w-75 btn btn-primary btn-lg active" role="button" aria-pressed="true">Результаты голосования</a></div><div class="w-75"><button type="button" id="btnRepeat" onclick="repeat()" class="btn btn-secondary btn-lg btn-block">Вернуться на главную</button></div></div><div d-flex justify-content-around><div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div><div class="spinner-grow text-success" role="status"><span class="sr-only">Loading...</span></div><div class="spinner-grow text-warning" role="status"><span class="sr-only">Loading...</span></div></div>';
};

//Вернуться на главную = обновить страницу
const repeat = () => {
    document.getElementById('btnRepeat');
    document.location.reload(true);
};
