

# Matrix

## Tests

Review the `matrix.js` file inside the `lib` directory, and then the `matrix.spec.js` file inside the `spec` directory. Review each of the tests, and then start implementing your solutions to make each test pass in `matrix.js`.

## Background

So given a string with embedded newlines like:

> 9 8 7
> 5 3 2
> 6 6 7

representing this matrix:

```
    0  1  2
  |---------
0 | 9  8  7
1 | 5  3  2
2 | 6  6  7
```

your code should be able to spit out:

- A list of the rows,
  reading each row left-to-right while moving top-to-bottom across the rows,
- A list of the columns,
  reading each column top-to-bottom while moving from left-to-right.

The rows for our example matrix:

- 9, 8, 7
- 5, 3, 2
- 6, 6, 7

And its columns:

- 9, 5, 6
- 8, 3, 6
- 7, 2, 7
