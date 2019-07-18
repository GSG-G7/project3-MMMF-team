(function() {
   //**********************    variable declaration
   const url = {
      apiKey: '9357b6f9cbd64246abcf2c26886e6979',
      urlNews: () =>
         `https://newsapi.org/v2/top-headlines?country=us&apiKey=${url.apiKey}`,
      search: search =>
         `https://newsapi.org/v2/everything?q=${search}&apiKey=${url.apiKey}`,
      urlCurrncy: () => 'https://api.exchangeratesapi.io/latest'
   };
   const inputField = select('#search-input');
   const blog = select('.plog-container');
   const img = select('#test-img');
   const selectBox = select('.currency__box');
   const moanyNumber = select('.currency__value');

   //**********************    executable code

   xhr(url.urlNews(), res => {
      const arr = format(res);
      createElm(arr);
   });

   addListener('#submit-btn', 'click', () => {
      let search = inputField.value;
      blog.textContent = '';
      let urlNewsSerch = url.search(search);
      xhr(urlNewsSerch, res => {
         const arr = format(res);
         createElm(arr);
      });
   });

   addListener('.currency__box', 'click', e => {
      xhr(url.urlCurrncy(), abj => {
         let cone = e.target.value;
         moanyNumber.textContent = abj.rates[cone];
         console.log(abj.rates);
      });
   });

   //**********************    function declaration

   function select(selector) {
      return document.querySelector(selector);
   }

   function createElement(element) {
      return document.createElement(element);
   }

   function createElm(array) {
      for (let i = 0; i < array.length; i++) {
         let [
            parentDiv,
            newImg,
            contentDiv,
            title,
            link,
            para
         ] = createElements(['DIV', 'IMG', 'DIV', 'H1', 'a', 'P']);
         newImg.classList.add('news-img');
         parentDiv.style.display = 'flex';
         appendChilds(contentDiv, [title, para, link]);
         appendChilds(parentDiv, [contentDiv, newImg]);
         contentDiv.classList.add('header-div');
         blog.appendChild(parentDiv);
         parentDiv.classList.add('plog-container-new');
         title.textContent = array[i].title;
         title.classList.add('plog-container-new-title');
         para.textContent = array[i].description;
         para.classList.add('plog-container-new-desciption');
         link.textContent = 'Read more';
         link.setAttribute('href', array[i].url);
         link.setAttribute('target', '_blank');
         newImg.setAttribute('src', array[i].urlToImage);
         newImg.alt = 'image-news';
      }
   }

   function addListener(selctor, eventName, callback) {
      document.querySelector(selctor).addEventListener(eventName, callback);
   }

   function appendChilds(parent, elements) {
      elements.forEach(elem => {
         parent.appendChild(elem);
      });
   }

   function createElements(elements) {
      return elements.map(elem => {
         return createElement(elem);
      });
   }
})();
