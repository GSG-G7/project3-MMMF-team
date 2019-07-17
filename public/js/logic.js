
function print (a,cb1){
    const obj = JSON.parse(a);
    console.log(obj)
    let newCut = [];
    for(let i =0;i<5;i++){
      newCut.push(obj.articles[i])  
    }
      cb1(newCut)
}
