console.log("HELLO")

document.addEventListener('DOMContentLoaded', function() {
   // Get the text elements
   const text1 = document.getElementById('text1');
   const text2 = document.getElementById('text2');
   const text3 = document.getElementById('text3');
   // Get the image elements
   const img1 = document.getElementById('img1');
   const img2 = document.getElementById('img2');
   const img3 = document.getElementById('img3');

   // Set up click event for text1
   if (text1) {
       text1.addEventListener('click', function() {
           img1.style.display = 'block'; // Show img1
           img2.style.display = 'none';  // Hide img2
           img3.style.display = 'none';  // Hide img3
           console.log(1)
       });
   }

   // Set up click event for text2
   if (text2) {
       text2.addEventListener('click', function() {
         document.getElementById('img1').style.display = 'none';   // Hide img1
           img2.style.display = 'block';  // Show img2
           img3.style.display = 'none';   // Hide img3
       });
   }

   // Set up click event for text3
   if (text3) {
       text3.addEventListener('click', function() {
           img1.style.display = 'none';   // Hide img1
           img2.style.display = 'none';   // Hide img2
           img3.style.display = 'block';  // Show img3
       });
   }
});