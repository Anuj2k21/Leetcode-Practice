const kthSmallest = (matrix, k) =>  {
    
  const calArray = (arr) => {
    return arr.reduce(function (acc, currentVal) {
      return acc.concat(
        Array.isArray(currentVal) ? calArray(currentVal) : currentVal
      );
    }, []);
  };

  const result = calArray(matrix)
    .sort((a, b) => a - b)
    .filter((item, i) => i === k - 1);

  return result;
};