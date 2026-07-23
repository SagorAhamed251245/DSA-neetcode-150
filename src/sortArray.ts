export function sortArray(nums: number[]): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const heap: number[] = Array.from(map.keys());

  // Step 3: Min-Heap বানালাম - O(k)
  buildMinHeap(heap);

  nums.length = 0;

  // Step 4: Heap থেকে smallest বের করে nums এ বসালাম - O(k log k)
  while (heap.length > 0) {
    const smallest = extractMin(heap);
    const count = map.get(smallest);

    if (count === undefined) {
      continue;
    }

    for (let i = 0; i < count; i++) {
      nums.push(smallest);
    }
  }

  return nums;
}

function buildMinHeap(heap: number[]): void {
  const n: number = heap.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyDown(heap, n, i);
  }
}

function extractMin(heap: number[]): number {
  const min: number = heap[0]!;
  const last: number | undefined = heap.pop();

  if (last !== undefined && heap.length > 0) {
    heap[0] = last;
    heapifyDown(heap, heap.length, 0);
  }

  return min;
}

function heapifyDown(heap: number[], size: number, index: number): void {
  let smallest: number = index;
  const left: number = 2 * index + 1;
  const right: number = 2 * index + 2;

  if (left < size && heap[left]! < heap[smallest]!) {
    smallest = left;
  }
  if (right < size && heap[right]! < heap[smallest]!) {
    smallest = right;
  }

  if (smallest !== index) {
    const temp: number = heap[index]!;
    heap[index] = heap[smallest]!;
    heap[smallest] = temp;
    heapifyDown(heap, size, smallest);
  }
}
