// https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick
let searchLipsticks = async (url1) => {
    const res = await fetch(url1);

    let data = await res.json();
    // console.log(data);
    // appendLipsticks(data);
    return data;
}

let appendLipsticks = (data) => {
    // console.log(data);
        data.slice(0, 4).forEach( ({image_link, name, price}) => {

            let mainDiv = document.createElement('div');
            mainDiv.style.border = '1px solid #eaeaea '
            mainDiv.style.padding = '10px 20px 10px 20px';
            mainDiv.style.textAlign = 'center';
    
            let divImg = document.createElement('img');   
            divImg.style.height = '36%';
            divImg.style.width = '72%';
            divImg.src = image_link;
            divImg.style.cursor = 'pointer';
            divImg.style.border = '1px #efefef solid';
    
            let divText = document.createElement('div');
            divText.style.height = '64%';
    
            let title = document.createElement('p');
            title.innerText = name;
            title.style.height = '24px';
            title.style.color = '#2d3192';
            title.style.cursor = 'pointer';
            title.style.fontWeight = 'bold';
            title.onmouseenter = () => {
                title.style.textDecoration = 'underline';
            }
            title.onmouseleave = () => {
                title.style.textDecoration = 'none';
            }
    
            let amount = document.createElement('p');
            amount.innerHTML = `Rs ${price}/piece`;
            amount.style.fontSize = '20px';
            amount.style.color = '#444';

            let addDiv = document.createElement('div');
            addDiv.style.display = 'flex';
            addDiv.style.justifyContent = 'center';

            let addVerIcon = document.createElement('img');
            addVerIcon.src = './images/check-mark.png';
            addVerIcon.style.width = '20px';
            addVerIcon.style.height = '20px';
    
            let address = document.createElement('p');
            address.innerHTML = `Bravo International`;
            address.style.marginTop = '2px';
            address.style.cursor = 'pointer';
            address.onmouseenter = () => {
                address.style.textDecoration = 'underline';
            }
            address.onmouseleave = () => {
                address.style.textDecoration = 'none';
            }

            addDiv.append(addVerIcon, address);
    
            let secAddress = document.createElement('p');
            secAddress.innerHTML = `New Delhi, Delhi, India`;
            secAddress.style.color = '#777';
            secAddress.style.marginTop = '6px';

            let mobDiv = document.createElement('div');
            mobDiv.style.display = 'flex';
            mobDiv.style.justifyContent = 'center';

            let mobIcon = document.createElement('img');
            mobIcon.src = './images/phone.png';
            mobIcon.style.width = '20px';
            mobIcon.style.height = '20px';
            mobIcon.style.paddingRight = '4px';
    
            let mobNum = document.createElement('p');
            mobNum.innerHTML = `Call 9876543210`;
            mobNum.style.marginTop = '0px';
            mobNum.style.cursor = 'pointer';
            mobNum.onmouseenter = () => {
            mobNum.style.textDecoration = 'underline';
            }
            mobNum.onmouseleave = () => {
            mobNum.style.textDecoration = 'none';
            }

            mobDiv.append(mobIcon, mobNum);
    
            let btn = document.createElement('button');
            btn.innerText = 'Contact Supplier';
            btn.style.padding = '15px 30px 15px 30px';
            btn.style.backgroundColor = '#03776d';
            btn.style.color = '#fff';
            btn.style.border = '1px solid #03776d';
            btn.style.borderRadius = '6px';
            btn.onmouseenter = () => {
                btn.style.transform = 'scale(1.02)';
            }
            btn.onmouseleave = () => {
                btn.style.transform = 'none';
            }
    
            divText.append(title, amount, addDiv, secAddress, mobDiv, btn);
    
            mainDiv.append(divImg, divText);
            // console.log(mainDiv)
    
            // document.getElementById('relProds').append(mainDiv);
            relProds.append(mainDiv);
            // featRecmd.append(mainDiv);
        })
}
// Related Products
let relProds = document.getElementById('relProds');

// Featured Recommendations

let searchFeatRecmd = async (url2) => {
    const res = await fetch(url2);

    let data = await res.json();
    // console.log(data);
    // appendLipsticks(data);
    return data;
}

let featRecmd = document.getElementById('featRecmd');

let appendFeatRecmd = (data) => {
    // console.log(data);
    data.slice(0, 4).forEach( ({image_link, name, price}) => {

        let mainDiv = document.createElement('div');
        mainDiv.style.border = '1px solid #eaeaea '
        mainDiv.style.padding = '10px 20px 10px 20px';
        mainDiv.style.textAlign = 'center';

        let divImg = document.createElement('img');   
        divImg.style.height = '36%';
        divImg.style.width = '72%';
        divImg.src = image_link;
        divImg.style.cursor = 'pointer';
        divImg.style.border = '1px #efefef solid';

        let divText = document.createElement('div');
        divText.style.height = '64%';

        let title = document.createElement('p');
        title.innerText = name;
        title.style.height = '24px';
        title.style.color = '#2d3192';
        title.style.cursor = 'pointer';
        title.style.fontWeight = 'bold';
        title.onmouseenter = () => {
            title.style.textDecoration = 'underline';
        }
        title.onmouseleave = () => {
            title.style.textDecoration = 'none';
        }

        let amount = document.createElement('p');
        amount.innerHTML = `Rs ${price}/piece`;
        amount.style.fontSize = '20px';
        amount.style.color = '#444';

        let addDiv = document.createElement('div');
        addDiv.style.display = 'flex';
        addDiv.style.justifyContent = 'center';

        let addVerIcon = document.createElement('img');
        addVerIcon.src = './images/check-mark.png';
        addVerIcon.style.width = '20px';
        addVerIcon.style.height = '20px';

        let address = document.createElement('p');
        address.innerHTML = `Bravo International`;
        address.style.marginTop = '2px';
        address.style.cursor = 'pointer';
        address.onmouseenter = () => {
            address.style.textDecoration = 'underline';
        }
        address.onmouseleave = () => {
            address.style.textDecoration = 'none';
        }

        addDiv.append(addVerIcon, address);

        let secAddress = document.createElement('p');
        secAddress.innerHTML = `New Delhi, Delhi, India`;
        secAddress.style.color = '#777';
        secAddress.style.marginTop = '6px';

        let mobDiv = document.createElement('div');
        mobDiv.style.display = 'flex';
        mobDiv.style.justifyContent = 'center';

        let mobIcon = document.createElement('img');
        mobIcon.src = './images/phone.png';
        mobIcon.style.width = '20px';
        mobIcon.style.height = '20px';
        mobIcon.style.paddingRight = '4px';

        let mobNum = document.createElement('p');
        mobNum.innerHTML = `Call 9876543210`;
        mobNum.style.marginTop = '0px';
        mobNum.style.cursor = 'pointer';
        mobNum.onmouseenter = () => {
            mobNum.style.textDecoration = 'underline';
        }
        mobNum.onmouseleave = () => {
            mobNum.style.textDecoration = 'none';
        }

        mobDiv.append(mobIcon, mobNum);

        let btn = document.createElement('button');
        btn.innerText = 'Contact Supplier';
        btn.style.padding = '15px 30px 15px 30px';
        btn.style.backgroundColor = '#03776d';
        btn.style.color = '#fff';
        btn.style.border = '1px solid #03776d';
        btn.style.borderRadius = '6px';
        btn.onmouseenter = () => {
            btn.style.transform = 'scale(1.02)';
        }
        btn.onmouseleave = () => {
            btn.style.transform = 'none';
        }

        divText.append(title, amount, addDiv, secAddress, mobDiv, btn);

        mainDiv.append(divImg, divText);
        // console.log(mainDiv)

        // document.getElementById('relProds').append(mainDiv);
        featRecmd.append(mainDiv);
        // featRecmd.append(mainDiv);
    })
}

const url1 = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx&product_type=lipstick'
const url2 = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=lipstick`

window.addEventListener('load', function () {
            searchLipsticks(url1).then( (data) => {
                relProds.innerHTML = null;
                appendLipsticks(data);
            });
    });

    window.addEventListener('load', function () {
        searchFeatRecmd(url2).then( (data) => {
            featRecmd.innerHTML = null;
            appendFeatRecmd(data);
        });
    });    





    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        centeredSlides: false,
       
        paginationClickable: true,
        

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },



     
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });



    
    // import section


   
import {home_homeservicecontactabout ,lastfootersectionjs } from "./component/allscript.js";
document.querySelector('#secondnavabrjs').innerHTML = home_homeservicecontactabout();
document.querySelector('#lastfootersection').innerHTML = lastfootersectionjs();

