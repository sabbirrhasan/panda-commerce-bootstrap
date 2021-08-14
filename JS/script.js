// No: 1
// document.body.style.backgroundColor = 'lightblue';

// No: 1
// const categoriesSection = document.getElementById('categories-section');
// categoriesSection.style.color = 'lightblue';

// const shoesSection = document.getElementById('shoes-section');
// shoesSection.style.color = 'lightblue';

// const bagpackSection = document.getElementById('bagpack-section');
// bagpackSection.style.color = 'lightblue';
const h1 = document.getElementsByTagName('h1');
console.log(h1);
for (const h1Tag of h1) {
    h1Tag.style.color = 'lightblue';
};


// No: 3
const bagpack = document.getElementById('bagpack');
bagpack.style.backgroundColor = 'tomato';
bagpack.style.borderRadius = '10px';


// No: 4
// const cardOne = document.getElementById('card-one');
// cardOne.style.borderRadius = '30px';
// const cardTwo = document.getElementById('card-two');
// cardTwo.style.borderRadius = '30px';
// const cardThree = document.getElementById('card-three');
// cardThree.style.borderRadius = '30px';
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
};

// No: 5
function clicked() {
    console.log('I am clicked');
};


// No: 6
// const pandaButtonOne = document.getElementById('panda-btn-one');
// const pandaButtonTwo = document.getElementById('panda-btn-two');
// const pandaButtonThree = document.getElementById('panda-btn-three');

// pandaButtonOne.addEventListener('click', function () {
//     pandaButtonOne.style.display = 'none';
// });
// pandaButtonTwo.addEventListener('click', function (event) {
//     pandaButtonTwo.style.display = 'none';
// });
// pandaButtonThree.addEventListener('click', function () {
//     pandaButtonThree.style.display = 'none';
// });
const buttons = document.getElementsByTagName('button');
console.log(buttons);
for (const button of buttons) {
    button.addEventListener('click', function () {
        button.style.display = 'none';
    })
};

// No: 7
const submitBtn = document.getElementById('submit-btn');
const inputText = document.getElementById('input-text');

inputText.addEventListener('keyup', function () {
    if (inputText.value == 'email') {
        submitBtn.removeAttribute('disabled');
    }
    else {
        submitBtn.setAttribute('disabled', true);
    }
});

// No: 8
function setNewImageOne() {
    document.getElementById('change-image-one').src = 'images/shoes/shoe-2.png';
};
function setOldImageOne() {
    document.getElementById('change-image-one').src = 'images/shoes/shoe-1.png';
};
function setNewImageTwo() {
    document.getElementById('change-image-two').src = 'images/shoes/shoe-3.png';
};
function setOldImageTwo() {
    document.getElementById('change-image-two').src = 'images/shoes/shoe-2.png';
};
function setNewImageThree() {
    document.getElementById('change-image-three').src = 'images/shoes/shoe-1.png';
};
function setOldImageThree() {
    document.getElementById('change-image-three').src = 'images/shoes/shoe-3.png';
};

// Extra Practice
function changeImage() {
    document.getElementById('change-img-one').src = 'images/bags/bag-2.png';
}


// No: 9
function bgColorChange() {
    document.getElementById('subscribe-container').style.backgroundColor = '#e83e8c';
}

