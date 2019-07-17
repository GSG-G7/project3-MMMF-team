function xhr(url, cb) {
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          let responses = JSON.parse(xhr.responseText);
         cb(responses);
      }
   };
   xhr.open('GET', url);
   xhr.send();
}


