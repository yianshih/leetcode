/**

[Medium]

289. Walls and Gates (Islands and Treasure)


m×n 2D grid initialized with these three possible values:

-1 - A water cell that can not be traversed.
0 - A treasure chest.
INF - A land cell that can be traversed. We use the integer 2^31 - 1 = 2147483647 to represent INF.
Fill each land cell with the distance to its nearest treasure chest. If a land cell cannot reach a treasure chest than the value should remain INF.

Assume the grid can only be traversed up, down, left, or right.

Modify the grid in-place.
 
*/

const wallsAndGates = (grid) => {
  const INF = Infinity;

  let round = 0;

  // cells
  let stack = new Set();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 0) {
        stack.add(`${r},${c}`);
      }
    }
  }

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (stack.size > 0) {
    const nextStack = new Set();

    stack.forEach((pos) => {
      const [r, c] = pos.split(",").map(Number);

      grid[r][c] = round;

      directions.forEach(([d_r, d_c]) => {
        const nextRow = r + d_r;
        const nextCol = c + d_c;
        if (
          grid?.[nextRow]?.[nextCol] === INF &&
          !stack.has(`${nextRow},${nextCol}`)
        ) {
          nextStack.add(`${nextRow},${nextCol}`);
        }
      });
    });

    stack = nextStack;
    round++;
  }

  return grid;
};

export const main = async () => {
  const INF = Infinity;

  // [
  //   [3,-1,0,1],
  //   [2,2,1,-1],
  //   [1,-1,2,-1],
  //   [0,-1,3,4]
  // ]
  console.log(
    wallsAndGates([
      [INF, -1, 0, INF],
      [INF, INF, INF, -1],
      [INF, -1, INF, -1],
      [0, -1, INF, INF],
    ])
  );
  // [
  //   [ 3, -1, 0, 1 ],
  //   [ 2, 2, 1, -1 ],
  //   [ 1, -1, -1, -1 ],
  //   [ 0, -1, Infinity, Infinity ]
  // ]
  console.log(
    wallsAndGates([
      [INF, -1, 0, INF],
      [INF, INF, INF, -1],
      [INF, -1, -1, -1],
      [0, -1, INF, INF],
    ])
  );
  // [
  //   [2, 3, 4],
  //   [1, -1, 3],
  //   [0, 1, 2],
  // ];
  console.log(
    wallsAndGates([
      [INF, INF, INF],
      [INF, -1, INF],
      [0, INF, INF],
    ])
  );
};
