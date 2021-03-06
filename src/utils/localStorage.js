export const loadState = () => {
  try {
    const serState = localStorage.getItem('state');
    if (serState === null) {return undefined;}
    return JSON.parse(serState);
  }
  catch(err) {
    console.log(err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serState = JSON.stringify(state);
    localStorage.setItem('state', serState);
  }
  catch(err) {console.log(err);}
};
