let cl = console.log;

let  restaurant= document.getElementById("food");
let searchBar = document.getElementById("search");

let foodArray = [
    {
        img : "./assets/image/biryani2.jpg",
        menu: "biryani",
        prize : "Rs.400/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/image/chicken2.jpg",
        menu: "chicken-masala",
        prize : "Rs.500/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/image/samosa2.jpg",
        menu: "samosa",
        prize : "Rs.200/-",
        weight : "12 piece",
    },
    {
        img : "./assets/image/vada2.jpg",
        menu: "vada",
        prize : "Rs.100/-",
        weight : "5 piece",
    },
    {
        img : "./assets/image/vadapav2.jpg",
        menu: "vadapav",
        prize : "Rs.200/-",
        weight : "5 piece Kg",
    },
    {
        img : "./assets/image/wine2.jpg",
        menu: "wine",
        prize : "Rs.1000/-",
        weight : "1 ltr",
    },
    {
        img : "./assets/image/vegthali2.jpg",
        menu: "vegthali",
        prize : "Rs.600/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/image/juice2.jpg",
        menu: "juice",
        prize : "Rs.100/-",
        weight : "2 glass",
    },
    {
        img : "./assets/image/snaks2.jpg",
        menu: "snak",
        prize : "Rs.100/-",
        weight : "2 plates",
    },
    {
        img : "./assets/image/beer2.jpg",
        menu: "beer",
        prize : "Rs.500/-",
        weight : "500ml",
    },
    {
        img : "./assets/image/biscuits2.jpg",
        menu: "biscuits",
        prize : "Rs.100/-",
        weight : "2 packs",
    },


];

function restaurantData(array){
    array.forEach(ele =>{
    restaurant.innerHTML += `
    <div class="col-md-4">
    <img src="${ele.img}">
    <span>${ele.menu}</span>
    <h3>${ele.prize}</h3>
    <h4>${ele.weight}</h4>
    </div>`;
})
}
restaurantData(foodArray);


searchBar.addEventListener("keyup", filterData);

function filterData(e){
    if(e.key === "Enter"){
        restaurant.innerHTML="";
      e.target.value.toLowerCase();
      let newfoodArray = foodArray.filter(food =>{
          let a= e.target.value;
          return food.menu.toLowerCase().includes(a);
      })
    //   cl(newfoodArray);

    restaurantData(newfoodArray);
    }

}