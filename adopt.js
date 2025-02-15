(function() {
    const buttons = document.querySelectorAll(".btn");
    const storeItems = document.querySelectorAll(".store-item");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;

            storeItems.forEach((item) => {
                if (filter === "all") {
                    item.style.display = "block";
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                }
            });
        });
    });
})();

(function() {
    const searchBox = document.querySelector("#search-item");
    const storeItems = document.querySelectorAll(".store-item");

    searchBox.addEventListener('keyup', (e) => {
        const searchFilter = e.target.value.toLowerCase().trim();

        storeItems.forEach((item) => {
            if (item.textContent.toLowerCase().includes(searchFilter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
})();


  // Get the button element by its class
  const adoptButton = document.querySelector('.adoptbtn');

  // Add a click event listener to the button
  adoptButton.addEventListener('click', function() {
    // Show an alert when the button is clicked
    alert('Adopted!'); // You can customize the alert message as needed
  });

