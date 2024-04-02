function countFroyoFlavors() {
  // Prompt the user for froyo flavors separated by commas
  const flavorsInput = prompt(
    "Please enter your froyo flavors separated by commas:"
  );

  // Parse the user's input into an array
  const flavorsArray = flavorsInput.split(",");

  // Object to keep track of observed flavors
  const flavorCounts = {};

  // Update the object as it iterates through the array
  for (let i = 0; i < flavorsArray.length; i++) {
    let flavor = flavorsArray[i];

    // If the flavor is already in the object, increment its count, else initialize it with count 1
    if (flavor in flavorCounts) {
      flavorCounts[flavor]++;
    } else {
      flavorCounts[flavor] = 1;
    }
  }

  console.table(flavorCounts);
}

// Call the function
countFroyoFlavors();
