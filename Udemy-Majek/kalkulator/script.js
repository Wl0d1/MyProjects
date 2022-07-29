const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const error = document.querySelector('.error-text');
const popup = document.querySelector('.popup');


const showError = (input, msg) => {
    
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text')

    formBox.classList.add('error');
    errorMsg.textContent = msg;
}

const clearError = input => {
    const formBox = input.parentElement
    formBox.classList.remove('error');
}

const everythingClear = (e) => {
    e.preventDefault();
    // [userName, password, password2, email].forEach(el => {
    //     el.value = '';
    // })
    username.value = '' 
    password.value = '' 
    password2.value = '' 
    email.value = '' 
};


const checkForm = input => {
 
    input.forEach(el => {
        if(el.value === '') {
  
            showError(el, el.placeholder)
        } else {
            clearError(el)
        }
    })
}

const checkLength = (input, min) => { 

    if (input.value.length < min) {
        showError(input, `${input.previousElementSibling.innerText.slice(0,-1)} składa się z min. ${min} znaków`)
    }
 }

const checkPassword = (password,password2) => {
    if(password.value !== password2.value) {
        showError(password2,'Hasła do siebie nie pasują.')
    }
}

const checkEmail = (email) => {
    
    const re = (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    if (re.test(email.value)) {
        clearError(email)
    } else {
        showError(email,'E-mail jest niepoprawny')
    }
}

const checkErrors = () => {
    const allInputs = document.querySelectorAll('.form-box');
    let errorCount = 0;

    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount++;
        }
    })

    if (errorCount === 0) {
        popup.classList.add('show-popup')
    } 
    console.log(errorCount)
}

// const pass = () => {
//     if (password === password2) {
//         console.log('hasła sie zgadzają')
//     } else {
//         console.log('hasła są odmienne')
//     }
// }

clearBtn.addEventListener('click', everythingClear);
sendBtn.addEventListener('click', e => {
    e.preventDefault();
    checkForm([username, password ,password2 , email]);
    checkLength(username, 3);
    checkLength(password, 8);
    checkPassword(password,password2);
    checkEmail (email);
    checkErrors();
})
