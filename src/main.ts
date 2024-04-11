// Step 1: Create A Typescript Project
// Create a node project but intializing npm your your project's folder
// Make it a Typescript Project by install TypeScript
// Configure your .tsconfig to align with our recommended options for this project
// Use npm to install uuid and the uuid types
// Step 2: Create Some Types
// Create a Type to describe a Item
// id as a string
// name as a string
// price as a number
// description as a string

type Item = {
    id:string,
    name:string,
    price:number,
    description:string
}

type User = {
    id:string,
    name:string,
    age:number,
    cart: Item[]
}

function createuser(name:string,age:number):User{
    return {
        id:uuidv4(),
        name,
        age,
        cart:[]
    }
}

function createItem(name:string,price:number,description:string):Item{
    return {
        id:uuidv4(),
        name,
        price,
        description
    }
}

function addToCart(user:User,item:Item):void{
    user.cart.push(item);
}

function removeFromCart(user:User,item:Item):void{
    const keyToRemove: keyof Item = item;
    delete user.cart[keyToRemove];

}

function removeQuantityFromCart(user:User,item:Item,quantity:number):void{
    const keyToRemove: keyof Item = item;
    user.cart[keyToRemove].quantity -= quantity;
}

function carTotal(user:User):number{
    return user.cart.reduce((total,item)=> total+item.price,0);
}

function printCart(user:User):void{
    console.log(user.cart);
}