let urlNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9357b6f9cbd64246abcf2c26886e6979';
let urlCurrncy = 'https://api.exchangeratesapi.io/latest';
const inputField = document.getElementById('search-input');
const select = (selector)=>document.querySelector(selector);
const newElement = (element)=>document.createElement(element);
const blog = document.getElementsByClassName('plog-container')[0],
      img = document.getElementById('test-img'),
      selectBox =document.querySelector('.currency__box'),
      moanyNumber = document.querySelector('.currency__value');


function createElm(array){
    for(let i =0;i<array.length;i++){
       let parentDiv = document.createElement('DIV'),
           newImg = document.createElement('IMG'),
           contentDiv = document.createElement('DIV'),
           title = document.createElement('H1'),
        link = document.createElement('a');
        para = document.createElement('P');
        newImg.classList.add('news-img')
        parentDiv.style.display = 'flex';
        
        // by moh h 1 line button
        contentDiv.classList.add('header-div');
        contentDiv.appendChild(title);
        contentDiv.appendChild(para);
        contentDiv.appendChild(link);
        parentDiv.appendChild(contentDiv);
        parentDiv.appendChild(newImg);
        blog.appendChild(parentDiv);
        parentDiv.classList.add('plog-container-new');
        title.textContent = array[i].title;
        title.classList.add('plog-container-new-title');
        para.textContent = array[i].description; 
        para.classList.add('plog-container-new-desciption');
        link.textContent = 'Read more'; 
        link.setAttribute('href',array[i].url)
        link.setAttribute('target','_blank')
        newImg.setAttribute('src',array[i].urlToImage);
        newImg.alt ="image-news";

        }
   } 

function addListener (selctor,eventName,callback){
    document.querySelector(selctor).addEventListener(eventName,callback);
}
xhr(urlNews, (res) => {
    const arr = format(res);
            createElm(arr);
})
addListener('#submit-btn',"click",()=>{
    let search = inputField.value;
    blog.textContent = '';
    let urlNewsSerch = `https://newsapi.org/v2/everything?q=${search}&apiKey=9357b6f9cbd64246abcf2c26886e6979`
    xhr(urlNewsSerch, (res) => {
        const arr = format(res);
                createElm(arr);
    })
})




// selectBox.addEventListener('click',(e)=>{
//     let cone = e.target.value;
//     console.log(abj.rates.cone)
// })
addListener('.currency__box','click',(e)=>{
    xhr(urlCurrncy ,(abj)=>{
        let cone =e.target.value;
        moanyNumber.textContent =  abj.rates[cone] ;
        console.log(abj.rates )

    })
})
