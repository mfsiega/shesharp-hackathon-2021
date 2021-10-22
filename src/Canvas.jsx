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
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#000000";
    context.strokeStyle = "#202020"
    let xOffset = 0;
    let yOffset = 0;
    for (const word of "jig if half bag bad cable alex".split(" ")) {
      const wordWidth = getWordWidth(word);
      if (xOffset + wordWidth * LETTER_SIZE > props.width) {
        xOffset = 0;
        yOffset += 40;
      }
      for (let letter of word) {
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
