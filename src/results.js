//Доступ по адресу
const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url, header)


//Проверка на ошибки
ES.onerror = error => {
    ES.readyState ? progress.textContent = "Some error" : null;
}


//Сообщения
const progressCats = document.getElementById('progress-Cats')
const progressDogs = document.getElementById('progress-Dogs')
const progressParrots = document.getElementById('progress-Parrots')
const progressAnimals = document.getElementById('progress-Animals')

ES.onmessage = message => {
    votesObj = JSON.parse(message.data)
    all = votesObj.cats + votesObj.parrots + votesObj.dogs
    cats_per = votesObj.cats/all
    parrot_per = votesObj.parrots/all
    dogs_per = votesObj.dogs/all

    progressCats.style.cssText = `width: ${cats_per*100}%`
    progressCats.textContent = `${votesObj.cats}`

    progressDogs.style.cssText = `width: ${dogs_per*100}%`
    progressDogs.textContent = `${votesObj.dogs}`
    
    progressParrots.style.cssText = `width: ${parrot_per*100}%`
    progressParrots.textContent = `${votesObj.parrots}`

    progressAnimals.style.cssText = `width: ${all}%`
    progressAnimals.textContent = `${all}`
}


//Закрытие окна результатов
const closeWindow = () => {
    document.getElementById('btnClose');
    document.location.href = "../index.html";
};