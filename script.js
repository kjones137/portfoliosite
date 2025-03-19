document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const backgrounds = ["#FFF2A8", "lavender", "beige", "blueviolet"];
    const largeNums = [30, 35, 40, 50];
    const smallNums = [3, 4, 5, 6];

    const coordinates = {
        x: undefined,
        y: undefined
    }

    const generateNumber = () => {
        return Math.floor(Math.random() * 4);
    }

    const configureWideElement = newEle => {
        newEle.style.backgroundColor = backgrounds[generateNumber()];
        newEle.style.width = largeNums[generateNumber()] + "px";
        newEle.style.height = smallNums[generateNumber()] + "px";
        newEle.classList.add('line', 'line-wide')
        }

    const configureTallElement = newEle => {
        newEle.style.backgroundColor = backgrounds[generateNumber()];
        newEle.style.width = smallNums[generateNumber()] + "px";
        newEle.style.height = largeNums[generateNumber()] + "px";
        newEle.classList.add('line', 'line-tall')
        }

    const addElement = () => {
        const newEle = document.createElement('div');
        const typeNum = Math.round(Math.random());
        if (typeNum === 0) {
            configureWideElement(newEle);
        } else {
            configureTallElement(newEle);
        }

        newEle.style.left = coordinates.x + 'px';
        newEle.style.top = coordinates.y + 'px';
        header.appendChild(newEle);
    }


    const updateCoordinates = e => {
        if((coordinates.x === undefined || coordinates.y === undefined) || (Math.abs(coordinates.x - e.x) > 50  || Math.abs(coordinates.y - e.y) > 50)) {
        coordinates.x = e.x;
        coordinates.y = e.y;
        addElement();
        }
    }

    header.addEventListener('mousemove', e => {
        updateCoordinates(e);
    })

    const card = document.querySelector('card');


    function expand(element) {
        const width = element.style.width;
        console.log(width);
        element.style.width = "450px";
    }
    card.addEventListener('mouseover', e => {
        expand(e);
    });

    function changeColor(domElement) {
        newColor = ["#FFF2A8", "beige", "blueviolet"][Math.floor(Math.random()*2)];
        domElement.style.color = newColor;
    }


    const thankYouMessage = document.getElementById('thankYouMessage');

    setInterval(()=> {
  
        changeColor(thankYouMessage);
      
      }, 500);
})

