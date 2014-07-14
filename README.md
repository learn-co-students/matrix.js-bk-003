---
languages: javascript
tags: 3d structure
---

# Matrix
## Getting Started

Run `npm install`

## Tests

Run `grunt watch` then edit your files. Grunt will watch for changes. Grunt
will only run tests that start with `it`. When you finish passing a test,
remove the `x` from `xit` to convert it to a runnable test.

## Background

So given a string with embedded newlines like:

> 9 8 7
> 5 3 2
> 6 6 7

representing this matrix:

```plain
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
