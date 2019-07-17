
function print (a,cb1){
    let newCut = [];
    for(let i =0;i<5;i++){
        newCut.push(a.articles[i])
    }
    console.log(newCut)
      cb1(newCut)
}
