let autocomplete = (obj, el, field = null) => {
  let output = [];
  if (field !== null) {
    output = convertObjToArray(obj, field);
  } else {
    output = obj;
  }

  if (Array.isArray(output)) {
    el.innerHTML = '';
    output.forEach(name => {
      let opt = document.createElement("option");
      opt.text = name;
      opt.value = name;
      el.append(opt, null);
    });
  }
}

let convertObjToArray = (obj, field) => {
  let arrayOutput = [];
  let recurseObj = (obj, field) => {
      for (const prop in obj) {
        if(typeof(obj[prop]) == "object"){
          recurseObj(obj[prop], field);
        } else {
          if(prop == field) {
              arrayOutput.push(obj[prop]);
          }
        }
      }
    };
  recurseObj(obj, field);
  return arrayOutput;
}

export {
  autocomplete
};