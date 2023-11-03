
// Dog ინდექსი 0
// Cat ინდექსი 1
// Rabbit ინდექსი 2
// Hamster ინდექსი 3
// Parrot ინდექსი 4


// ოთხკუდხედში გადაეცემა ინდექსი


// ! ციკლები (Loops)

//? While ციკლი (While Loop) (While True)
//? ის იმუშავებს მანამდე, სანამ პირობა არის ჭეშმარიტი

//* while () {
    // ? კოდი რომელიც გაეშვება მაშინ, როდესაც პირობა არის ჭეშმარიტი
//* }

//? მაგალითი
let userAge = 18;
while (userAge < 20) {
    console.log("ცუდი მაგალითი ლუპის, ეს არის უკონტროლო ციკლი");

    // ციკლი რომ არ იყოს უკონტროლო, გვესაჭიროება break თვისება. (მუხრუჭი )
    break;
}

// იტერაცია არის, ის რამდენჯერაც ციკლი გამოიტანს შედეგს
let itteraionCount = 0;

while(itteraionCount <= 10){
    console.log(`იტერირდა ${itteraionCount}-ჯერ`);

    //! ყოველ იტერაციაზე ერთგვარი თვალ ვაწარმოო, შესაბამისად ყოველ იტერაციაზე უნდა გავზარდოთ ჩვენი
    //! itteraionCount-ი 1-ით

    //? 1-ის მომატებას ყოველ იტერაციაზე
    itteraionCount++;
}

let animals = ["Dog", "Cat", "Rabbit", "Hamster", "Parrot", "Turtle", "Fish", "Snake", "Lizard", "Spider"];

console.log("===========While Loop============")


let index = 0;
while(index < animals.length){
    // console.log(animals[0])
    // console.log(animals[1])
    // console.log(animals[2])
    // console.log(animals[3])
    // console.log(animals[4])
    // console.log(animals[index])
    console.log(animals[index])
    index++
}

// for ციკლი (For Loop)


//? for loop ის სტრუქტურა
//? პირველი ნაწილი ჩვენი ლუპის.
//? არის ინდექსის გამოცხადება!

// მეორე ნაწილი არის პირობის დაწერა!
// for (let i = 0; i < 100; i++) {
//     console.log(i)
// }

//* 1 ეტაპი
//? ვსაზღვრავთ ციკლის დასაწყისს, საიდან უნდა დაიწყოს ჩვენი ციკლი
// for (let i = 0;)

//* 2 ეტაპი
//? ვუმატებთ ზღვარს სადამდე უნდა შესრულდეს ჩვენი ციკლი
// for (let i = 0; i < 100;)

//* 3 ეტაპი
//? ყოველ იტერაციაზე (შედეგის გამოტანაზე) ვცვლით საწყისს საზღვარს ვუმატებთ 1ს. რადგან ციკლი უკონტროლო არ იყოს, და მუდამ არ გაეშვას.
// for (let i = 0; i < 100; i++)

//* 4 ეტაპი (საბოლოო)
//? ვუმატებთ კოდის ჩასაწერ არეალს, ფრჩხილებს სადაც დაიწერება ლოგიკა
// for (let i = 0; i < 100; i++){
//     console.log(i)
// }

console.log("===========For Loop============")

//? მაგალითი
// for (let i = 0; i < animals.length; i++){
//     console.log(animals[i])
// }



// ბიჯის კონტროლი ციკლებში
// i++ ნიშნავს მიუმატე 1
// += ის მეშვეობით მე შემიძლია გამოვიტანო ნებისმიერი რამ, ნებისმიერი ბიჯით
for(let i = 0; i <= 100; i+=50){
    console.log(i)
}
console.log("===========Users into HTML============")

// მასივი
let usersList = ["Brad Pitt","Johnny Depp","George","First Name","User Name", "Random User123"];

let userList = document.getElementById("users-list");

for(let i =0; i <usersList.length; i++){

    // შეინახე ყველა ის წინა მნიშვნელობა, და უბრალოდ დაამატე, არ წაშალო არაფერი
    userList.innerHTML += `<li> ${usersList[i]} </li>`
}


let producstList = [
    {
        productName: "Iphone 12",
        productPrice: 1699,
        productImage: "https://alta.ge/images/thumbnails/900/650/detailed/223/102519_1.png.jpg",
        productDescription: "მთავარი გვერდი/კომპიუტერული და საოფისე ტექნიკა"
    },
    {
        productName: "Apple MacBook Pro 13 M2 8-core CPU and 10-core GPU (8GB/256GB) SSD - Space Gray", 
        productPrice: 4299,
        productImage: "https://alta.ge/images/thumbnails/900/650/detailed/253/GEGE_MacBookPro-13-inch-M2_Q322_Space_Gray_PDP-Image-1_uuxn-mv.jpg.jpg",
        productDescription: "მთავარი გვერდი/კომპიუტერული"
    },
    {
        productName: "TP-LINK TL-WR840N",
        productPrice: 49,
        productImage: "https://alta.ge/images/thumbnails/900/650/detailed/162/75590_1.jpg.jpg",
        productDescription: "მთავარი გვერდი/კომპიუტერული და საოფისე ტექნიკა"
    },
]


let productContainer = document.getElementById("products-container");

for (let i = 0; i < producstList.length; i++) {
    productContainer.innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${producstList[i].productImage}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${producstList[i].productName}</h5>
          <p class="card-text">${producstList[i].productPrice}$</p>
          <p class="card-text"><small class="text-body-secondary">${producstList[i].productDescription}</small></p>
        </div>
      </div>
    </div>
  </div>`
}