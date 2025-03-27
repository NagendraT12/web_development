// 🟢 Bubble Sort in JavaScript
// 🔥 Time Complexity: O(n^2) in worst & average case, O(n) in best case (when array is already sorted)

// Step 1: Create an array
const arr = [6, 0, 3, 5, 7];

// Step 2: Find length of the array
let n = arr.length;

// Step 3: Declare a temporary variable to swap values
let temp;

// Step 4: Apply Bubble Sort
// Outer loop → Runs n times
for (let i = 0; i < n; i++) {

  // Inner loop → It compares adjacent elements
  // It runs till (n - i - 1) because after every pass, the last element is sorted
  for (let j = 0; j < n - i - 1; j++) {

    // If left element is greater than right element → Swap them
    if (arr[j] > arr[j + 1]) {

      // Swap logic
      temp = arr[j];           // Store left element in temp
      arr[j] = arr[j + 1];     // Move right element to left position
      arr[j + 1] = temp;       // Place temp (left element) to right position
    }
  }
}

// Step 5: Print the sorted array
console.log("Sorted Array:", arr);
