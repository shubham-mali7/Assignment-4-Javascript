const ratingData = [
  {
    restaurant: "KFC",
    rating: 5,
  },

  {
    restaurant: "Burger King",
    rating: 4,
  },

  {
    restaurant: "KFC",
    rating: 3,
  },

  {
    restaurant: "Domino",
    rating: 2,
  },

  {
    restaurant: "Subway",
    rating: 3,
  },

  {
    restaurant: "Domino",
    rating: 1,
  },

  {
    restaurant: "Subway",
    rating: 4,
  },

  {
    restaurant: "Pizza Hut",
    rating: 5,
  },
];

// a Calculate average ratings for all restaurants

// Set - gives unique value out of given list

const uniqueRestaurant = Array.from(new Set(ratingData.map(({restaurant})=> restaurant)));
console.log(uniqueRestaurant);

var arr = []
 uniqueRestaurant.map((restaurantName)=>{
    const filteredRatingdata = ratingData.filter(obj=>
        obj.restaurant == restaurantName
    )
    let outObj = {
        restaurant : restaurantName,
        averageRating : filteredRatingdata.reduce((accumulator , currentValue)=> accumulator + currentValue.rating ,0)/filteredRatingdata.length
    }  
        arr.push(outObj);
        console.log(Array.from(filteredRatingdata));
});

console.log(arr);

// b. List of all restaurants with average rating greater than or equal to 4

const secondOutput =  arr.filter((item) => {
    return item.averageRating >= 4;
}  )

console.log(secondOutput);


//..................................................Completed................//





