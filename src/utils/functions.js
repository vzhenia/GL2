function parseJSON(response) {
    return response.json();
  }

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

export function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}

export function calcQueryWant(state, PARAMS, INGREDS){
  let ingredsListInit = state.ingreds, lenIngreds = ingredsListInit.length;
  let ingredsList = [];
  //re-composing ingredsList according to its labels
  for (let i=0; i < lenIngreds; i++) {
    for (let j=0; j < INGREDS.length; j++)
      if (ingredsListInit[i] === INGREDS[j].type){
        let values = Object.keys(INGREDS[j].value);
        let k = Math.floor(Math.random()*values.length);
        ingredsList.push(values[0].toString());
        ingredsList.push(values[k].toString());
    }
  }
  let paramsList = [], requestList = [];
  const min=45, max=55;
  // eslint-disable-next-line
  PARAMS.map(({name, value}) => {
    let param;
    let i = parseInt(state[name], 10);
    if (i < min) {
      param = value[0][Math.floor(i/min*value[0].length)];
      paramsList.push(param);
    } else if (i > max){
      param = value[1][Math.ceil((i-max)/(100-max)*(value[1].length))-1];
      paramsList.push(param);
    }
  })

  let lenParams = paramsList.length;
  if (lenParams > 0 && lenIngreds > 0){
    // eslint-disable-next-line
    ingredsList.map((elt) => {
      for (let j=0; j<lenParams; j++){
        let iterList = [elt, paramsList[j]];
        requestList.push(iterList);
      }
    })
  }
  else if (lenParams > 0){
    // eslint-disable-next-line
    paramsList.map((elt) => {
      for (let j=0; j<lenParams; j++){
        if (lenParams === 1){
            requestList.push([elt]);
          }

        else if (elt !== paramsList[j]) {
          let iterList = [elt, paramsList[j]];
          let check = requestList.map((e) => {
            return e[0] === paramsList[j] && e[1] === elt;
          });
          if (!check.includes(true)){
            requestList.push(iterList);
          }
        }
      }
    });
  }
  else if (lenIngreds > 0){
    // eslint-disable-next-line
    ingredsList.map((elt) => {
      requestList.push([elt, '']);
    })
  }

  //console.log('requestList=', requestList);
  if (requestList.length === 0){
    console.log("go to top rated!");
  }
  return requestList;
}

export function calcQueryHave(state){
  const paramsList = state.haveFridge.concat(state.haveMeat, state.havePollo, state.haveFish, state.haveVeges);
  let lenParams = paramsList.length;
  let requestList = [];

  if (lenParams === 0){
    console.log("go to top rated!");
  }
  else {
    // eslint-disable-next-line
    paramsList.map((elt) => {
      for (let j=0; j<lenParams; j++){
        if (lenParams === 1){
            requestList.push([elt]);
          }
        else if (elt !== paramsList[j]) {
          let iterList = [elt, paramsList[j]];
          let check = requestList.map((e) => {
            return e[0] === paramsList[j] && e[1] === elt;
          });
          if (!check.includes(true)){
            requestList.push(iterList);
          }
        }
      }
    });
  }
  //console.log('requestList=', requestList);
  if (requestList.length === 0){
    console.log("go to top rated!");
  }
  //requestList-array of arrays (for query of recipe list),
  //paramsList-flat array (for matching of avail/missing ingreds)
  return [requestList, paramsList];
}
