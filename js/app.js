function speedConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputKPH").innerHTML = valNum * 1.609344;
  }