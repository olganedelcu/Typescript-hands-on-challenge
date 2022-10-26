function combinations(str) {
    let index = str.indexOf("?");
    if(index == -1) return result.push(str); // Base Case
    
    let strAsArray = str.split("") // [1, ?, 1, ?]
    let addOneToMe = strAsArray.slice() // [1, ?, 1, ?] new instance
    let addZeroToMe = strAsArray.slice() // [1, ?, 1, ?] new instance

    addOneToMe.splice(index, 1, "1") // [1, 1, 1, ?]
    addZeroToMe.splice(index, 1, "0") // [1, 0, 1, ?]

    combinations(addOneToMe.join(""))
    combinations(addZeroToMe.join(""))
}

combinations("1?1?")
//console.log(result)