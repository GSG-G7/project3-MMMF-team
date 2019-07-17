let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9357b6f9cbd64246abcf2c26886e6979'
// request(url,print)
const select = (selector)=>document.querySelector(selector);
const newElement = (element)=>document.createElement(element);
const blog = document.getElementsByClassName('plog-container')[0],
      img = document.getElementById('test-img');



function createElm(array){
    for(let i =0;i<array.length;i++){
       let parentDiv = document.createElement('DIV'),
           newImg = document.createElement('IMG'),
           contentDiv = document.createElement('DIV'),
           title = document.createElement('H1'),
           para = document.createElement('P');
           newImg.classList.add('news-img')
           parentDiv.style.display = 'flex';
           contentDiv.appendChild(title);
           contentDiv.appendChild(para);
           parentDiv.appendChild(contentDiv);
           parentDiv.appendChild(newImg);
           blog.appendChild(parentDiv);
           newImg.setAttribute('src',array[i].urlToImage);
   
   }
//    console.log(array[0].urlToImage)
//     img.src = array[0].urlToImage;
   }

xhr(url,print)