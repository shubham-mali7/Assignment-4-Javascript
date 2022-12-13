// const ratingData = [
//   {
//     restaurant: "KFC",
//     rating: 5,
//   },

//   {
//     restaurant: "Burger King",
//     rating: 4,
//   },

//   {
//     restaurant: "KFC",
//     rating: 3,
//   },

//   {
//     restaurant: "Domino",
//     rating: 2,
//   },

//   { restaurant: "Subway", rating: 3 },

//   {
//     restaurant: "Domino",
//     rating: 1,
//   },

//   {
//     restaurant: "Subway",
//     rating: 4,
//   },

//   {
//     restaurant: "Pizza Hut",
//     rating: 5,
//   },
// ];

// // a Calculate average ratings for all restaurants

// const total = ratingData.length;
// console.log(total);

// // avg = 5+4+3+2+3+1+4+5/8

// const values = Object.values(ratingData);
// console.log(values);

// const ratingAll = (func = () => {
//   return values.map((item) => {
//     return item.rating;
//   });
// });
// let arr = [];
// arr = ratingAll();
// console.log(arr);

// const final = arr.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });

// console.log(final);

// const avg = (final / total).toFixed(2);
// console.log(`average rating for all restaurants is ${avg}`);

// //.................................................................................

// // example of set 

// let words = ['a','a','b','b','c']

// const unique = new Set(words);
// console.log(unique);
 
//...................................................................................................
// const uniqueRestaurant = Array.from(new Set(ratingData.map(({restaurant})=>restaurant)));

// const uniqueRestaurant = new Set(ratingData.map(({restaurant})=>restaurant))


// console.log(Array.from(uniqueRestaurant));
// var arr = [];
// uniqueRestaurant.map((restaurantName)=>{
//     const filteredRatingdata = ratingData.filter(obj=>
//         obj.restaurant == restaurantName
//     )
//     const outObj = {
//         restaurant : restaurantName,
//         averageRating : filteredRatingdata.reduce((accumulator, currentValue)=> accumulator + currentValue.rating ,0)
//     }
//     arr.push(outObj);

// });


// console.log(arr);



// Be alert and use common sense dumbass! if you want to be a great developer!