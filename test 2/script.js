let shoppinglist=["Bread", "Milk", "Sugar", "Rice"]

console.log(shoppinglist)
console.log(shoppinglist[0])
console.log(shoppinglist[3])

shoppinglist.push("Cooking Oil")
console.log(shoppinglist)

shoppinglist.shift()
console.log(shoppinglist)

shoppinglist[1] = "Tea Leaves";
console.log(shoppinglist);

console.log(`Total items: ${shoppinglist.length}`);