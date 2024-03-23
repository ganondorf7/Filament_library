document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the class "item"
    var items = document.querySelectorAll(".item");

    // Loop through each item
    items.forEach(function(item) {
        // Get references to elements within the current item
        var h3Element = item.querySelector(".h3");
        var videoElement = item.querySelector(".video");

        // Initially hide the video
        videoElement.style.display = "none";

        // Add event listener for mouseenter to show video
        h3Element.addEventListener("mouseenter", function() {
            console.log("Mouse entered");
            videoElement.style.display = "block";
            videoElement.play();
        });

        // Add event listener for mouseleave to hide video
        h3Element.addEventListener("mouseleave", function() {
            console.log("Mouse left");
            videoElement.style.display = "none";
            videoElement.pause();
        });
    });
});

