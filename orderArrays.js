const inputArray= [10,6,2,15,11,7,21,8]
const outputArray= [21,2,15,6,11,7,10,8]

const newArray = inputArray.concat(outputArray)

const orderNumbers = newArray.reduce((acc, item) => {
    if(!acc.includes(item)){
      acc.push(item)
    }
    return acc
},[])
orderNumbers.sort((a,b)=>a-b)
console.log(orderNumbers)
