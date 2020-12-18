const initializeData = (path) => {
  try {
    return require(`${path}`).default;
  } catch (err) {
    return [];
  }
};

export default initializeData;
