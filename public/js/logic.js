
function format(a,cb1){
    let newCut = [];
    for(let i =0;i<5;i++){
        newCut.push(a.articles[i])
    }

      cb1(newCut); // for create Element functions
}
