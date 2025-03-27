// 📄 Sorting Algorithms in JavaScript
// Includes: Bubble Sort, Insertion Sort, Selection Sort
// Time & Space complexities added

// 🔥 Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    let temp;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j+1]
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  // 🔥 Insertion Sort
  function insertionSort(arr) {
    let n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
  
      // Move elements greater than key to one position ahead
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  
  // 🔥 Selection Sort
  function selectionSort(arr) {
    let n = arr.length;
    let temp;
  
    for (let i = 0; i < n; i++) {
      let min_index = i;
  
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[min_index]) {
          min_index = j;
        }
      }
  
      // Swap the minimum element with current element
      temp = arr[i];
      arr[i] = arr[min_index];
      arr[min_index] = temp;
    }
    return arr;
  }
  
  // ✅ Example Usage
  const arr1 = [6, 0, 3, 5, 7];
  const arr2 = [19, 2, 3, 17, 23, 10];
  const arr3 = [78, 67, 56, 62, 70];
  
  console.log("Bubble Sort Result:", bubbleSort([...arr1]));
  console.log("Insertion Sort Result:", insertionSort([...arr2]));
  console.log("Selection Sort Result:", selectionSort([...arr3]));
  
  /*
  📌 Time & Space Complexity Summary
  
  Algorithm       | Time Complexity (Best) | Time (Avg) | Time (Worst) | Space | Stability
  ---------------|:--------------------:|:---------:|:------------:|:-----:|:--------:
  Bubble Sort    | O(n)                | O(n^2)    | O(n^2)      | O(1)  | Stable
  Insertion Sort | O(n)                | O(n^2)    | O(n^2)      | O(1)  | Stable
  Selection Sort | O(n^2)              | O(n^2)    | O(n^2)      | O(1)  | Not Stable
  */