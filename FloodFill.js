"use strict";

/**
 * An image is represented by an m x n integer grid image where image[i][j]
 * represents the pixel value of the image.
You are also given three integers sr, sc, and color.

You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.
 */

const floodFill = function (image, sr, sc, color) {
  // grab original color
  let curColor = image[sr][sc];
  // fail fast
  if (curColor === color) return image;
  // start queue with starting area placed first
  let queue = [[sr, sc]];

  while (queue.length) {
    // grab first values from queue
    const [row, col] = queue.shift();
    // change the color
    if (image[row][col] === curColor) {
      // check if any 4 directional are that color and add length to queue
      image[row][col] = color;
      if (row + 1 < image.length) queue.push([row + 1, col]); //down
      if (row - 1 >= 0) queue.push([row - 1, col]); // up
      if (col + 1 < image[0].length) queue.push([row, col + 1]); // right
      if (col - 1 >= 0) queue.push([row, col - 1]); // left
    }
  }
  return image;
};

floodFill(
  [
    [0, 1, 1],
    [1, 1, 1],
    [1, 0, 1],
  ],
  1,
  2,
  2
);
