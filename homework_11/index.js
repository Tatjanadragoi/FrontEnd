// 1. Сделайте запрос по адресу https://reqes.in/api/users?page=1, обработайте ответ и выведите в консоль только тех юзеров у которых в поле last_name не менее 5ти символов



// fetch('https://reqres.in/api/users?page=1')

// .then(response => response.json())
// .then(data => {
//  const lastNames = data.data.some(({last_name}) => {
//     if(last_name.length >= 5) {
//         console.log(last_name)
//     }
// })


// })

//----------------------------------------------------------------------------------------------------------------------------

// 2. Сделайте запрос по адресу https://reqes.in/api/users?page=1, обработайте ошибку этого запроса и выведите в консоль Не удалось загрузить данные

// fetch('https://reqres.in/api/users?page=1')
// .then((response) => {
//     if(!responce.ok) {
//         throw new Error ("Не удалось загрузить данные")
//     }
//     return response.json();

// })

// .then((data) => {
//     console.log(data)
// })
// .catch(() => {
//     console.error("Не удалось загрузить данные")
// })


//----------------------------------------------------------------------------------------------------------------------

// 3. Cделайте запрос https://reqres.in/api/users?page=1, ПОСЛЕ чего найдте id пользователя под именем и фамилией Emma Wong, сделайте следующий запрос на https://reqres.in/api/users/${id}, ПОСЛЕ выведите данные пользователя в консоль


// fetch('https://reqres.in/api/users?page=1')

// .then(response => response.json())
// .then(data => {
    
//     const emmaWong = data.data.find(({first_name, last_name}) =>
//     first_name === "Emma" && last_name === "Wong" );
//     if (emmaWong) {
//         console.log("Emma was found")
//     }
//     return emmaWong
// })
//     .then((emma) => {
//         return fetch(`https://reqres.in/api/users/${emma.id}`)
//     })
//     .then((responseObj) => responseObj.json())
//     .then(({data}) => {
//         console.log('Emmas data:', data);
//     })
