window.onload = function() {
  
}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
function getRandomMeal (){

    let data = '';
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => displayRandomMeal(data.meals))
}


const displayRandomMeal = (x) => {
  console.log(x);
    const displayBox = document.getElementById('display-box')
    x.map((meal, index) => {
      
      const div = document.createElement('div')
      div.classList.add('display-box')
      const foodName = document.createElement('h2')
      foodName.id = 'foodTitle'
      const foodT = document.createTextNode(`${meal.strMeal}`)
      foodName.appendChild(foodT)
      const text1 = document.createTextNode(`${meal.strInstructions}`)
      const image = document.createElement('img')
      image.src=`${meal.strMealThumb}`
      div.appendChild(foodName)
      div.append(image)
      div.appendChild(text1)
      displayBox.append(div)

      
    })
  }
  const reset = () => {
    document.getElementById('display-box').innerHTML = ''
    
    }