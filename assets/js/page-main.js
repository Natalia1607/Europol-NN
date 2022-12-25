/* scrolled header */
window.onscroll = function() {
    var scrollCurrent = window.pageYOffset;
    const header = document.querySelector('header')
    if (scrollCurrent>=100) {
        header.classList.add('scrolled')
    }
    
    else {
        header.classList.remove('scrolled')
    }
}

/* adaptive hover schemwork */
function toggle_visibility(list) {
    var e = document.getElementById(list);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }

/* calculactor */

function rangeFunc(vol) {
    var output = document.querySelector('#fader');
    output.value = vol;

    const options = document.querySelector('#options');
    const volu = document.querySelector('#volu');
    const result = document.querySelector('#result');

    const calculation = (event) => {
        const optionValue = options.value;
        const value = volu.value;
        var newValue = 0;
        if (optionValue==70) {
            if (value<100) {
                newValue = value*600
            }
            if (value>=100 && value<150) {
                newValue = value*580
            }
    
            if (value>=150 && value<250) {
                newValue = value*550
            }
    
            if (value>=250) {
                newValue = value*530
            }
            result.value = newValue;
        }

        if (optionValue==80) {
            if (value<100) {
                newValue = value*650
            }
            if (value>=100 && value<150) {
                newValue = value*630
            }
    
            if (value>=150 && value<250) {
                newValue = value*600
            }
    
            if (value>=250) {
                newValue = value*580
            }
            result.value = newValue;
        }

        if (optionValue==90) {
            if (value<100) {
                newValue = value*700
            }
            if (value>=100 && value<150) {
                newValue = value*680
            }
    
            if (value>=150 && value<250) {
                newValue = value*650
            }
    
            if (value>=250) {
                newValue = value*630
            }
            result.value = newValue;
        }
    }
    
    if (volu) {
        volu.addEventListener('input', calculation)
    }

    if (options) {
        volu.addEventListener('change', calculation)
    }

    const container = document.querySelector('#width').clientWidth;  
    if (container>450) {
        output.style.left = vol - 30 + 'px';
    }

    else {
        output.style.left = vol - 80 + 'px'; /* для адаптива */
        if (vol<70) {
            output.style.left = vol - 30 + 'px';
        }
    }
}
