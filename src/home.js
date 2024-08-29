
document.addEventListener("DOMContentLoaded", function() {
    // Get all the elements with the class "event"
    var eventElements = document.querySelectorAll('.event');
    var imageIdIndex = 0; // Index to keep track of the image to reveal
    var timerId = null; // Variable to store the timer ID for easy canceling
  
    // Function to reveal the next image
    function revealNextImage() {
      // Hide all images
      document.querySelectorAll('.service').forEach(function(image) {
        image.style.display = 'none';
      });
  
      // Get the next image ID
      var imageId = eventElements[imageIdIndex].nextElementSibling.id;
      console.log(imageId);
  
      // Reveal the next image
      document.getElementById(imageId).style.display = 'block';
  
      // Update the image ID index
      imageIdIndex = (imageIdIndex + 1) % eventElements.length;
  
      // Set a timeout to reveal the next image after 1 second
      timerId = setTimeout(revealNextImage, 2000);
    }
  
    // Start the automatic image reveal process
    revealNextImage();
  
    // Add click event listener to each "event" element
    eventElements.forEach(function(eventElement) {
      eventElement.addEventListener('click', function() {
        // Prevent the timer from revealing the next image
        clearTimeout(timerId);
  
        // Get the associated image ID
        var imageId = eventElement.nextElementSibling.id;
  
        // Hide all images
        document.querySelectorAll('.service').forEach(function(image) {
          image.style.display = 'none';
        });
  
        // Show the image associated with the clicked "event" element
        document.getElementById(imageId).style.display = 'block';
  
        // Reset the image ID index to the clicked image
        imageIdIndex = eventElements.indexOf(eventElement);
      });
  
      // Add mouseenter event listener to each "event" element to pause the timer
      eventElement.addEventListener('mouseenter', function() {
        clearTimeout(timerId);
      });
  
      // Add mouseleave event listener to each "event" element to resume the timer
      eventElement.addEventListener('mouseleave', function() {
        timerId = setTimeout(revealNextImage, 1000);
      });
    });
  });
  
  
// Get today's date
const today = new Date();

// Get the first day of the month
const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

// Get the Sunday of the first week of the month
const firstSundayOfMonth = new Date(firstDayOfMonth);
firstSundayOfMonth.setDate(firstSundayOfMonth.getDate() - firstSundayOfMonth.getDay());

// Calculate the number of days between today and the first Sunday of the month
const daysSinceFirstSunday = Math.abs((firstSundayOfMonth.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

// Determine the week of the month the coming Sunday belongs to
const weekOfComingSunday = Math.floor((daysSinceFirstSunday + 1) / 7) + 1;
const soon = " (Coming Sunday)"
const wkID = "wk"+ weekOfComingSunday;
console.log(wkID)
if (weekOfComingSunday === 1)
{
  document.querySelector(wkID).innerText = soon;
}
else if(weekOfComingSunday === 2)
{
  document.getElementById(wkID).innerText = soon;
}
else if(weekOfComingSunday === 3)
{
  document.getElementById(wkID).innerText = soon;
}
else if(weekOfComingSunday === 4)
{
  document.getElementById(wkID).innerText = soon;
}

