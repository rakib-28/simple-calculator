let result;
document.querySelector("#calculate1").addEventListener("click", function () {
  let firstvalue = document.getElementById("fnum").value;
  let lastvalue = document.getElementById("lnum").value;
  result = Number(firstvalue) + Number(lastvalue);
  outputDecoration();
});
document.querySelector("#calculate2").addEventListener("click", function () {
  let firstvalue = document.getElementById("fnum").value;
  let lastvalue = document.getElementById("lnum").value;
  result = Number(firstvalue) - Number(lastvalue);
  outputDecoration();
});
document.querySelector("#calculate3").addEventListener("click", function () {
  let firstvalue = document.getElementById("fnum").value;
  let lastvalue = document.getElementById("lnum").value;
  result = Number(firstvalue) * Number(lastvalue);
  outputDecoration();
});
document.querySelector("#calculate4").addEventListener("click", function () {
  let firstvalue = document.getElementById("fnum").value;
  let lastvalue = document.getElementById("lnum").value;
  result = Number(firstvalue) / Number(lastvalue);
  outputDecoration();
});
document.querySelector("#reset").addEventListener("click", function () {
  document.getElementById("fnum").value = "";
  document.getElementById("lnum").value = "";
  document.getElementById("ans").textContent = "";
});

const outputDecoration = function () {
  if (result > -Infinity && result < Infinity) {
    document.getElementById("ans").textContent = result;
    document.getElementById("ans").style.color = "Green";
  } else {
    document.getElementById("ans").textContent = "Error";
    document.getElementById("ans").style.color = "#c22a2a";
  }
};
