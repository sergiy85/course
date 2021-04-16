// ДЗ
// 1 получить данные через fetch https://jsonplaceholder.typicode.com/users
// 2 вывести данные имя - номер телефона в виде списка (ul > li)

// https://jsonplaceholder.typicode.com/users


  const USERS_LINK = 'https://jsonplaceholder.typicode.com/users';

//============ Custom FETCH FN EXAMPLE =========================

  function customFetch(url, settings = {}) {
    settings = Object.assign({
      method: 'GET',
      async: true,
      type: 'json',
      body: {}
    }, settings);

    return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open(settings.method, url, settings.async);
      xhr.responseType = settings.type;
      xhr.withCredentials = true;
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

      if (settings.method !== 'GET') {
        xhr.send(JSON.stringify(settings.body));
      } else {
        xhr.send();
      }

      xhr.onload = () => {
        if (xhr.status < 400) {
          resolve(xhr.response, xhr);
        } else {
          reject(xhr.response, xhr);
        }
      }
      
      xhr.onerror = () => {
        reject(xhr.response, xhr);
      }
    })
  }

const APP_EL = document.getElementById('app');
const UL_EL = document.createElement('ul');
APP_EL.appendChild(UL_EL);

fetch(USERS_LINK).then((response) => response.json()).then((data) => {
  let item = '';
  const items = [];
  data.map((users, index)=>{
    item = `
      <li>${index + 1} - ${users.name} - ${users.phone}</li>
    `;
    items.push(item);
    return items;
  });
  
  UL_EL.innerHTML = items.join("");

}).catch((response) => {
  console.log('REQUEST fetch catch --->', response);
});
