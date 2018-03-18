const rewire = (rewireClass, rewireElement, newValue) => {
  rewireClass.__Rewire__(rewireElement, newValue);
};

const rewireFunction = (rewireClass, rewireElement, expectedReturn) => {
  const mockFunction = jest.fn().mockReturnValue(expectedReturn);

  rewire(rewireClass, rewireElement, mockFunction);
};

const rewireVariable = (rewireClass, rewireElement, expectedReturn) => {
  rewire(rewireClass, rewireElement, expectedReturn);
};

export { rewireFunction, rewireVariable };
