function populatePage (inventory) {
  // Loop over the inventory and populate the page
  CarLot.getInventory();

  // var testBtn = document.getElementById('testingThings').addEventListener('click', function() {
    console.log(inventory);
    CarLot.buildCar();

  // })

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}
CarLot.loadInventory(populatePage);
// Load the inventory and send a callback function to be
// invoked after the process is complete
