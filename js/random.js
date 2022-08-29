const randomUsers = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayRandomUser(data.results))
}
/*
1. new Element gulo jtar modde set korbo, seta age niye aste hobe!!
2. tar por akta for loop used korbo, and setar modde new akta element create korte hobe,
3.j element ta create korbo setar vitore ki ki element add korbo seta innerHTMl or innerText er maddome set korbo,
4.last step holo appendChild korte hobe
*/
const displayRandomUser = users =>{
    const userContainer = document.getElementById('user_container');
    users.forEach(user => {
        // console.log(user)
        // const {name, location, picture} = user;
        const userDiv = document.createElement('div');
        userDiv.classList.add('col');
        userDiv.innerHTML =`
        <div class="card">
            <img src="${user.picture.medium}" class="card-img-top" alt="">
            <div class="card-body">
            <h5 class="card-title fs-1">${user.name.first}</h5>
                <h5 class="card-title fs-3">${user.email}</h5>
                <p>User timezone: ${user.location.timezone.description}</p>
            </div>
        </div>
        `;
        userContainer.appendChild(userDiv);
    });
}
randomUsers();




















