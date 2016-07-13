var CarLot = (function (makeCar) {

  var options = document.getElementById('output');

    makeCar.buildCar = function (carCard) {
      var myBorder = document.getElementsByClassName('border');
      var carImage;
      var thing = makeCar.getInventory();
      var newCar;
      var counter = 0;

      thing.forEach(function (value, i) {
        options.innerHTML +=
        '<div class="col-md-4">' +
          '<article class="border">' +
            '<h2 class="headings">' +
              value.make +
            '</h2>' +
            '<h3 class="headings">' +
              ': ' + value.model +
            '</h3>' +
            '<div>' +
              '<h5 class="headings">Color: </h5>' + value.color +
            '</div>' +
            '<div>' +
              '<h5 class="headings">Year: </h5>' + value.year +
            '</div>' +
            '<div>' +
              '<h5 class="headings">Price: </h5>' + value.price +
            '</div>' +
            '<div>' +
              '<h5 class="headings">Available: </h5>' + value.purchased +
            '</div>' +
            '<div>' +
              '<h5 class="headings">Description: </h5>' + value.description +
            '</div>' +
          '</article>' +
        '</div>'
      });
      for (var i = 0; i < myBorder.length; i++) {
        var articles = document.getElementsByTagName('article');
        articles[i].setAttribute('id', 'card'+counter++);

        thing.forEach(function (value, i) {
          myBorder[i].style.border = '3px solid';
          myBorder[i].style.borderColor = value.color;
        });
        var selectedCard = document.getElementById(articles[i].id);
        console.log(selectedCard);
        selectedCard.addEventListener('click', function(event) {
          this.style.border = '5px solid' + value.color;
          this.style.borderColor = value.color;
          console.log(this);
        })
      };
    }
  return makeCar;
})(CarLot);
