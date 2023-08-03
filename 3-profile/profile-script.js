const user = JSON.parse(sessionStorage.getItem('loggedUser'));
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const saveInfo = document.getElementById('saveinfo-button');
const kebabBtn = document.getElementById('kebeb-bar');
const menu = document.getElementById('menu');

kebabBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log("clicked")
    if(menu.style.display == "flex"){
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
    }
})


console.log(user);
// console.log(fName)
fName.value = user.firstName;
lName.value = user.lastName;

// edit info
saveInfo.addEventListener('click', (e) => {
    e.preventDefault();
    const user = JSON.parse(sessionStorage.getItem('loggedUser'));
    const fName = document.getElementById("fname").value;
    const lName = document.getElementById("lname").value;


    if (fName!='' ||lName!='') {
        // changing in session storage
        let obj = { firstName: fName, lastName: lName, email: user.email, password: user.password }

    sessionStorage.setItem('loggedUser', JSON.stringify(obj));
    console.log('information saved!')

// changing in localStorage
    const localUser = JSON.parse(localStorage.getItem('users'));
    localUser.forEach(person => {
        const user = JSON.parse(sessionStorage.getItem('loggedUser'));
        const fName = document.getElementById("fname").value;
        const lName = document.getElementById("lname").value;

        if (person.email == user.email) {
            let email = person.firstName;
            let password = person.firstName;

            localUser.shift()
            let obj = { firstName: fName, lastName: lName, email: email, password: password }
            localUser.push(obj);
            localStorage.setItem('users', JSON.stringify(obj));
        }
    });
        
    window.location.href = "../4-shop/index.html";
    }else {alert("All fields required!"); return}
    
})

// logout function
let logoutbtn = document.getElementById('logout-btn')
logoutbtn.addEventListener('click', (e) => {
    e.preventDefault()
    sessionStorage.removeItem('loggedUser')
    window.location.href = "../2-login/index.html";
})

// change password
let changepasswordbtn = document.getElementById('changepassword-btn')

changepasswordbtn.addEventListener('click', (e) => {
    e.preventDefault();
    const user = JSON.parse(sessionStorage.getItem('loggedUser'));

    let password = user.password;
    let oldPass = document.getElementById('old-password').value
    let newPass = document.getElementById('new-password').value
    let conPass = document.getElementById('confirm-password').value;

    if (oldPass === password && newPass === conPass) {
// changing in session storage
        let obj = { firstName: user.firstName, lastName: user.lastName, email: user.email, password: newPass }
        sessionStorage.setItem('loggedUser', JSON.stringify(obj));
        console.log('information saved!')

        // changing in local storage
        const localUser = JSON.parse(localStorage.getItem('users'));
    localUser.forEach(person => {
        let newPass = document.getElementById('new-password').value
        if (person.email == user.email) {
            let firstname = person.firstName;
            let lastname = person.firstName;
            let email = person.email;

            localUser.shift()
            let obj = { firstName: firstname, lastName: lastname, email: email, password: newPass }
            localUser.push(obj);
            localStorage.setItem('users', JSON.stringify(obj));
        }
    });

        window.location.href = "../4-shop/index.html";
    }
    else{alert("Something went wrong!")}


})
