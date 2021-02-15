let autocomplete = (obj, el, field = null) => {
  let inner = [];
  if (field !== null) {
    inner = convertObjToArray(obj, field, inner);
  } else {
    inner = obj;
  }

  if (Array.isArray(inner)) {
    el.innerHTML = '';
    inner.forEach(name => {
      let opt = document.createElement("option");
      opt.text = name;
      opt.value = name;
      el.append(opt, null);
    });
  }
}

let convertObjToArray = (obj, field) => {
  let innerField = [];
  let recurseObj = (obj, field) => {
      for (const prop in obj) {
        if(typeof(obj[prop]) == "object"){
          recurseObj(obj[prop], field);
        } else {
          if(prop == field) {
              innerField.push(obj[prop]);
          }
        }
      }
    };
  recurseObj(obj, field);
  return innerField;
}

export {
  autocomplete
};