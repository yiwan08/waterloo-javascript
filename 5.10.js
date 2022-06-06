// Anonymous functions
// Not given a name --> function()

window.onload = startFunction;

function startFunction() {
  document.getElementById('replacehere').textContent='Replacement text.';
}

// IS EQUIVALENTLY TO:  

window.onload = function() {
  document.getElementById('replacehere').textContent='Replacement text.';
}
