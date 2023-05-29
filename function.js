



resetBtn = document.getElementById('resetBtn');
const buttonBox = document.getElementById('buttonBox');



createButtonverse(10);

function createButtonverse(buttons) {
    for (let i = 0; i < buttons; i++) {
        const randomButton = document.createElement('button');
        randomButton.innerHTML = 'rcg';
        buttonBox.appendChild(randomButton);
          
     
      }
      
    }



