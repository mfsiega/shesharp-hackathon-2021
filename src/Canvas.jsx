import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const LETTER_SIZE = 5;
  const X = 0;
  const Y = 1;

  const canvasRef = useRef(null);

  const letterWidths = {
    a: 5,
    l: 4,
    e: 4,
    x: 5,
  };

  const getWordWidth = (word) => {
    let sum = 0;
    for (const letter of word) {
      sum += letterWidths[letter];
    }
    return sum;
  };

  const letterRenderers = {
    a: (x, y, context) => {
      for (const coord of [
        [0, 30],
        [0, 25],
        [0, 20],
        [0, 15],
        [0, 10],
        [0, 5],
        [5, 0],
        [10, 0],
        [15, 0],
        [20, 5],
        [20, 10],
        [20, 15],
        [20, 20],
        [20, 25],
        [20, 30],
        [5, 15],
        [10, 15],
        [15, 15],
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 5;
    },
    b: (x, y, context) => {
      for (const coord of [
        [0, 0],
        [0, 5],
        [0, 10],
        [0, 15],
        [0, 20],
        [0, 25],
        [0, 30],
        [5, 30],
        [10, 30],
        [15, 30],
        [20, 25],
        [20, 20],
        [15, 15],
        [10, 15],
        [20, 10],
        [20, 5],
        [15, 0],
        [10, 0],
        [5, 0],
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 5;
    },
    c: (x, y, context) => {
      for (const coord of [
        [25, 5],
        [20, 0],
        [15, 0],
        [10, 0],
        [5, 5],
        [0, 10],
        [0, 15],
        [0, 20],
        [5, 25],
        [10, 30],
        [15, 30],
        [20, 30],
        [25, 25],
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 6;
    },
    d: (x, y, context) => {
      for (const coord of [
        [0, 0],
        [0, 5],
        [0, 10],
        [0, 15],
        [0, 20],
        [0, 25],
        [0, 30],
        [5, 30],
        [10, 30],
        [15, 30],
        [20, 25],
        [20, 20],
        [20, 15],
        [20, 10],
        [20, 5],
        [15, 0],
        [10, 0],
        [5, 0]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 5;
    },
    e: (x, y, context) => {
      for (const coord of [
        [0, 0],
        [0, 5],
        [0, 10],
        [0, 15],
        [0, 20],
        [0, 25],
        [0, 30],
        [5, 30],
        [10, 30],
        [15, 30],
        [5, 15],
        [10, 15],
        [5, 0],
        [10, 0],
        [15, 0],
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 4;
    },
    f: (x, y, context) => {
      for (const coord of [
        [0, 30],
        [0, 25],
        [0, 20],
        [0, 15],
        [0, 10],
        [0, 5],
        [0, 0],
        [5, 0],
        [10, 0],
        [15, 0],
        [20, 0],
        [5, 15],
        [10, 15],
        [15, 15]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 5
    },
    g: (x, y, context) => {
      for (const coord of [
        [20, 5],
        [15, 0],
        [10, 0],
        [5, 0],
        [0, 5],
        [0, 10],
        [0, 15],
        [0, 20],
        [0, 25],
        [5, 30],
        [10, 30],
        [15, 30],
        [20, 25],
        [20, 20],
        [20, 15],
        [15, 15]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 5
    },
    h: (x, y, context) => {
      for (const coord of [
        [0, 0],
        [0, 5],
        [0, 10],
        [0, 15],
        [0, 20],
        [0, 25],
        [0, 30],
        [20, 0],
        [20, 5],
        [20, 10],
        [20, 15],
        [20, 20],
        [20, 25],
        [20, 30],
        [5, 15],
        [10, 15],
        [15, 15],
        [20, 15]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 5
    },
    i: (x, y, context) => {
      for (const coord of [
        [5, 0],
        [5, 5],
        [5, 10],
        [5, 15],
        [5, 20],
        [5, 25],
        [5, 30],
        [0, 0],
        [10, 0],
        [0, 30],
        [10, 30]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 3
    },
    j: (x, y, context) => {
      for (const coord of [
        [15, 0],
        [15, 5],
        [15, 10],
        [15, 15],
        [15, 20],
        [15, 25],
        [10, 30],
        [5, 30],
        [0, 25]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 4
    },
    l: (x, y, context) => {
      for (const coord of [
        [0, 0],
        [0, 5],
        [0, 10],
        [0, 15],
        [0, 20],
        [0, 25],
        [0, 30],
        [5, 30],
        [10, 30],
        [15, 30],
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 4;
    },
    m: (x, y, context) => {
      for (const coord of [
        [0, 30],
        [0, 25],
        [0, 20],
        [0, 15],
        [0, 10],
        [0, 5],
        [0, 0],
        [5, 5],
        [10, 10],
        [15, 10],
        [20, 5],
        [25, 0],
        [25, 5],
        [25, 10],
        [25, 15],
        [25, 20],
        [25, 25],
        [25, 30]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 6;
    },
    n: (x, y, context) => {
      for (const coord of [
        [0, 30],
        [0, 25],
        [0, 20],
        [0, 15],
        [0, 10],
        [0, 5],
        [0, 0],
        [5, 5],
        [10, 10],
        [15, 15],
        [20, 20],
        [25, 25],
        [25, 30],
        [25, 20],
        [25, 15],
        [25, 10],
        [25, 5],
        [25, 0]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 6;
    },
    o: (x, y, context) => {
      for (const coord of [
        [0, 5],
        [0, 10],
        [0, 15],
        [0, 20],
        [0, 25],
        [5, 30],
        [10, 30],
        [15, 30],
        [20, 25],
        [20, 20],
        [20, 15],
        [20, 10],
        [20, 5],
        [15, 0],
        [10, 0],
        [5, 0]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 5
    },
    s: (x, y, context) => {
      for (const coord of [
        [15, 0],
        [10, 0],
        [5, 0],
        [0, 5],
        [0, 10],
        [5, 15],
        [10, 15],
        [15, 20],
        [15, 25],
        [10, 30],
        [5, 30],
        [0, 30]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 4
    },
    x: (x, y, context) => {
      for (const coord of [
        [0, 0],
        [0, 5],
        [5, 10],
        [10, 15],
        [15, 20],
        [20, 25],
        [20, 30],
        [20, 0],
        [20, 5],
        [15, 10],
        [5, 20],
        [0, 25],
        [0, 30],
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 5;
    },
    " ": (x, y, context) => {
      return 2;
    },
    '#': (x, y, context) => {
      const origFillStyle = context.fillStyle;
      for (const coord of [
        [0, 20],
        [2, 20],
        [4, 20],
        [6, 20],
        [8, 20],
        [10, 20],
        [12, 20],
        [14, 20],
        [16, 20],
        [18, 20],
        [20, 20],
        [22, 20],
        [24, 20],
        [26, 20],
        [28, 20],
        [30, 20]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], 2, 2);
      }
      for (const coord of [
        [2, 10],
        [4, 10],
        [6, 10],
        [8, 10],
        [10, 10],
        [12, 10],
        [14, 10],
        [16, 10],
        [18, 10],
        [20, 10],
        [22, 10],
        [24, 10],
        [26, 10],
        [28, 10],
        [30, 10],
        [32, 10]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], 2, 2);
      }
      for (const coord of [
        [10, 0],
        [10, 2],
        [10, 4],
        [10, 6],
        [10, 8],
        [8, 10],
        [8, 12],
        [8, 14],
        [8, 16],
        [8, 18],
        [8, 20],
        [8, 22],
        [8, 24],
        [6, 26],
        [6, 28],
        [6, 30],
        [6, 32]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], 2, 2);
      }
      for (const coord of [
        [24, 0],
        [24, 2],
        [24, 4],
        [24, 6],
        [24, 8],
        [22, 10],
        [22, 12],
        [22, 14],
        [22, 16],
        [22, 18],
        [22, 20],
        [22, 22],
        [22, 24],
        [20, 26],
        [20, 28],
        [20, 30],
        [20, 32]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], 2, 2);
      }
      context.fillStyle = "#00b29a"
      for (const coord of [
        [0, 22],
        [2, 22],
        [4, 22],
        [6, 22],
        [8, 22],
        [10, 22],
        [12, 22],
        [14, 22],
        [16, 22],
        [18, 22],
        [20, 22],
        [22, 22],
        [24, 22],
        [26, 22],
        [28, 22],
        [30, 22]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], 2, 2);
      }
      for (const coord of [
        [2, 12],
        [4, 12],
        [6, 12],
        [8, 12],
        [10, 12],
        [12, 12],
        [14, 12],
        [16, 12],
        [18, 12],
        [20, 12],
        [22, 12],
        [24, 12],
        [26, 12],
        [28, 12],
        [30, 12],
        [32, 12]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], 2, 2);
      }
      context.fillStyle = origFillStyle
      return 7
    },
    '!': (x, y, context) => {
      for (const coord of [
        [0, 0],
        [0, 5],
        [0, 10],
        [0, 15],
        [0, 20],
        [0, 30]
      ]) {
        context.fillRect(x + coord[X], y + coord[Y], LETTER_SIZE, LETTER_SIZE);
      }
      return 1
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#000000";
    context.strokeStyle = "#202020"
    let xOffset = 0;
    let yOffset = 5;
    for (const word of "hello s#e!".split(" ")) {
      const wordWidth = getWordWidth(word);
      if (xOffset + wordWidth * LETTER_SIZE > props.width) {
        xOffset = 0;
        yOffset += 40;
      }
      for (let letter of word) {
        console.log(letter)
        xOffset +=
          LETTER_SIZE *
          (1 + letterRenderers[letter](xOffset, yOffset, context));
      }
      xOffset += 15;
    }
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
