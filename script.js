// const nonCheckout = [159, 162, 163, 165, 166, 168, 169]

// // Function to generate a random number between 74 and 170
// function getRandomCheckout() {
//     return Math.floor(Math.random() * (170 - 74 + 1)) + 74;
//   }
  
//   // Function to update the checkout display with data from JSON
//   async function updateCheckout() {
//     console.log('Button clicked, updating checkout...'); // Debugging line
  
//     const checkoutDiv = document.getElementById('checkout');
  
//     // Fetch the JSON file (assuming it's stored as data.JSON in the same directory)
//     try {
//       const response = await fetch('data.json'); // Change this path if data.JSON is in a different folder
      
//       // Check if the fetch was successful
//       if (!response.ok) {
//         throw new Error('Failed to load JSON data');
//       }
  
//       const data = await response.json();
  
//       // Generate a random checkout number
//       const randomCheckout = getRandomCheckout();
//       console.log('Random checkout number:', randomCheckout); // Debugging line
  
//       // Get the checkout data for the random number
//       const checkoutData = data.checkouts[randomCheckout.toString()]; // Ensure to use .toString() to match JSON keys
  
//       // Check if checkoutData exists
//       if (checkoutData) {
//         const firstDart = checkoutData.first_dart;
//         const secondDart = checkoutData.second_dart;
//         const thirdDart = checkoutData.third_dart ? checkoutData.third_dart : ''; // Handle null dart
  
//         // Update the div with the darts sequence
//         checkoutDiv.innerHTML = `${randomCheckout}: ${firstDart}, ${secondDart}, ${thirdDart}`;
//       } else {
//         checkoutDiv.innerHTML = `No checkout available for ${randomCheckout}`;
//       }
//     } catch (error) {
//       console.error('Error fetching or processing data:', error); // Show error in console
//       checkoutDiv.innerHTML = 'Error loading checkouts';
//     }
//   }
  
//   // Add an event listener to the button
//   document.getElementById('random-checkout').addEventListener('click', updateCheckout);
  
const nonCheckout = [159, 162, 163, 165, 166, 168, 169];
const dartImage = `<img src="Dart_img.png" style="width: 35px; height: 35px;">`;

// Function to generate a random number between 74 and 170
function getRandomCheckout() {
  let randomCheckout;
  do {
    randomCheckout = Math.floor(Math.random() * (170 - 74 + 1)) + 74;
  } while (nonCheckout.includes(randomCheckout)); // Keep generating until it's not in the nonCheckout array
  return randomCheckout;
}

// Function to update the checkout display with data from JSON
async function updateCheckout() {
  console.log('Button clicked, updating checkout...'); // Debugging line

  const checkoutDiv = document.getElementById('checkout');

  // Fetch the JSON file (assuming it's stored as data.JSON in the same directory)
  try {
    const response = await fetch('data.json'); // Change this path if data.JSON is in a different folder

    // Check if the fetch was successful
    if (!response.ok) {
      throw new Error('Failed to load JSON data');
    }

    const data = await response.json();

    // Generate a random checkout number
    const randomCheckout = getRandomCheckout();
    console.log('Random checkout number:', randomCheckout); // Debugging line

    // Get the checkout data for the random number
    const checkoutData = data.checkouts[randomCheckout.toString()]; // Ensure to use .toString() to match JSON keys

    // Check if checkoutData exists
    if (checkoutData) {
      const firstDart = checkoutData.first_dart;
      const secondDart = checkoutData.second_dart;
      const thirdDart = checkoutData.third_dart ? checkoutData.third_dart : ''; // Handle null dart

      // Update the div with the darts sequence
      checkoutDiv.innerHTML = `
      <div><strong>🎯${randomCheckout}</strong></div>
      ${dartImage} ${firstDart}, 
      ${dartImage} ${secondDart}, 
      ${thirdDart ? `${dartImage} ${thirdDart}` : ''}
    `;
    

    } else {
      checkoutDiv.innerHTML = `No checkout available for ${randomCheckout}`;
    }
  } catch (error) {
    console.error('Error fetching or processing data:', error); // Show error in console
    checkoutDiv.innerHTML = 'Error loading checkouts';
  }
}

// Add an event listener to the button
document.getElementById('random-checkout').addEventListener('click', updateCheckout);
