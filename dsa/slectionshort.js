// 🟢 Selection Sort in JavaScript
// 🔥 Time Complexity: O(n^2) in all cases (Best, Average, Worst)

// Step 1: Create an array
const arr = [78, 67, 56, 62, 70];

// Step 2: Find length of the array
let n = arr.length;

// Step 3: Declare a temporary variable for swapping
let temp;

// Step 4: Apply Selection Sort
for (let i = 0; i < n; i++) {

  // Assume current index has the minimum element
  let min_index = i;

  // Inner loop → To find the actual minimum element in remaining array
  for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[min_index]) {
      min_index = j; // Update min_index if smaller element found
    }
  }

  // After inner loop → Swap the minimum element with current element
  temp = arr[i];
  arr[i] = arr[min_index];
  arr[min_index] = temp;
}

// Step 5: Print the sorted array
console.log("Sorted Array:", arr);
