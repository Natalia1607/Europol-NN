/* mobile menu */

const menuBtn = document.querySelector('.header__toggle');
const menu = document.querySelector('.main-menu');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('is-active');
	menu.classList.toggle('is-active');
}); 

/* modal window */

const modal = document.querySelector('#modal');
const btnOpen = document.querySelectorAll('.modal--open');
const btnClose = document.querySelector('#modal--close');
const body = document.body;

for (let i = 0; i < btnOpen.length; i++) {
    btnOpen[i].onclick = function() {
        modal.style.display = "block";
        body.style.overflow = "hidden";
        document.querySelectorAll('.form__field')[0].querySelector('.input-field').focus();
    };
};

btnClose.onclick = function() {
  modal.style.display = "none";
  body.style.overflow = "visible";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/* scroll */

window.onscroll = function() {
    const scrollCurrent = window.pageYOffset;
    const header = document.querySelector('header');
    if (scrollCurrent>=100) {
        header.classList.add('scrolled');
    }
    
    else {
        header.classList.remove('scrolled');
    }
};

/* mask phone */

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

  });

});

