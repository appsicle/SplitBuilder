const findNextId = (array) => {
  let bestId = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].id >= bestId) {
      bestId = Math.max(bestId, array[i].id);
    }
  }
  return bestId + 1;
};

const indexOfId = (id, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return i;
    }
  }

  return -1;
};

export { findNextId, indexOfId };
