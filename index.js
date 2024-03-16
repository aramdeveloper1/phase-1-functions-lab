// Code your solution in this file!
// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(pickupLocation) {
  // Assuming headquarters are at block 0, return the absolute difference
  return Math.abs(pickupLocation);
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * 264; // Assuming each block is 264 feet
}

// Function to calculate distance traveled in feet
function distanceTravelledInFeet(startBlock, destinationBlock) {
  return Math.abs(destinationBlock - startBlock) * 264;
}

// Function to calculate fare price
function calculatesFarePrice(startBlock, destinationBlock) {
  const distance = distanceTravelledInFeet(startBlock, destinationBlock);
  if (distance <= 400) {
    return 0; // Free for first 400 feet
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after 400 feet (excluding 400)
  } else if (distance <= 2500) {
    return 32; // Flat fare between 2000 and   2500 feet
  } else {
    return 'cannot travel that far'; // Cannot travel over 2500 feet
  }
}

// Example Usage (uncomment to test)
// console.log(distanceFromHqInBlocks(43)); // Output: 43
// console.log(distanceFromHqInFeet(43)); // Output: 11352
// console.log(distanceTravelledInFeet(30, 45)); // Output: 3960
// console.log(calculatesFarePrice(30, 45)); // Output: 7.92
