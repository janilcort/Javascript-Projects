let favorites = {
      color: "Blue",
      fruit: "Mango",
      movie: "Inception",
      sport: "Soccer"
    };

    // Function to display one value from the dictionary
    function showFavoriteFruit() {
      // Access the 'fruit' value and display it
      document.getElementById("Dictionary").innerHTML = "Favorite Fruit: " + favorites.fruit;
    }

    delete favorites.fruit;
    document.getElementById("Dictionary").innerHTML = favorites.fruit;

    