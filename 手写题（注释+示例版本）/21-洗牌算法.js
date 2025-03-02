function shuffle(arr){
    let n = arr.length
    for(let i=0;i<n;i++){
        let index = Math.floor(Math.random()*(i+1));
        [arr[i],arr[index]]=[arr[index],arr[i]];
    }
    return arr;
}