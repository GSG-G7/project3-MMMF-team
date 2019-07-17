function xhr(url, cb) {
   const search = document.querySelector('.search-query'); // string
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          let obj = JSON.parse(xhr.responseText);
         cb(obj,createElm);
      }
   };
   xhr.open('GET', url);
   xhr.send();
}
