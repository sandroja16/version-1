(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');


                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }

        });
    }


    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));



})();

const text_1 = document.getElementById('text_1');
const tema_1 = document.getElementById('tema_1');
const text_2 = document.getElementById('text_2');
const tema_2 = document.getElementById('tema_2');
const text_3 = document.getElementById('text_3');
const tema_3 = document.getElementById('tema_3');
const text_4 = document.getElementById('text_4');
const tema_4 = document.getElementById('tema_4');
const text_5 = document.getElementById('text_5');
const tema_5 = document.getElementById('tema_5');

tema_1.addEventListener('click',
  function () {
    text_1.style.display = 'block';
    text_2.style.display = 'none';
    text_3.style.display = 'none';
    text_4.style.display = 'none';
    text_5.style.display = 'none';
  }
);

tema_2.addEventListener('click',
  function () {
    text_1.style.display = 'none';
    text_2.style.display = 'block';
    text_3.style.display = 'none';
    text_4.style.display = 'none';
    text_5.style.display = 'none';
  }
);

tema_3.addEventListener('click',
  function () {
    text_1.style.display = 'none';
    text_2.style.display = 'none';
    text_3.style.display = 'block';
    text_4.style.display = 'none';
    text_5.style.display = 'none';
  }
);

tema_4.addEventListener('click',
  function () {
    text_1.style.display = 'none';
    text_2.style.display = 'none';
    text_3.style.display = 'none';
    text_4.style.display = 'block';
    text_5.style.display = 'none';
  }
);

tema_5.addEventListener('click',
  function () {
    text_1.style.display = 'none';
    text_2.style.display = 'none';
    text_3.style.display = 'none';
    text_4.style.display = 'none';
    text_5.style.display = 'block';
  }
);

