let mergeSort = (arr) =>{
    let initial = 0
    let final = arr.length
    let half = Math.ceil(arr.length / 2)
    let leftArr = arr.slice(initial, half)
    let rightArr = arr.slice(half, final)
    if(arr.length == 1){
        return arr
    }
    else{
        return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
        )

    }
}
let merge = (leftArr, rightArr) =>{
    let newLeftArr = [...leftArr]
    let newRightArr = [...rightArr]
    let resultArr = []

    console.log(newLeftArr)
    do{
        console.log(newLeftArr)
        console.log(newRightArr)

    if(newLeftArr[0] < newRightArr[0]){
        resultArr.push(newLeftArr[0])
        newLeftArr.shift()
    }
    else{
        resultArr.push(newRightArr[0])
        newRightArr.shift()
    }
} while(newLeftArr.length > 0 && newRightArr.length > 0)

if(newLeftArr.length > 0){
    for(let i = 0; i < newLeftArr.length; i++){
        resultArr.push(newLeftArr[i])
    }
}
else{
    for(let i = 0; i < newRightArr.length; i++){
        resultArr.push(newRightArr[i])
    }
}

return resultArr
}