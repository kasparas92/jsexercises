function toggleForm() {
  document.getElementById('Form').style.display = 'block';

  var id = document.getElementById('id').value;
  document.getElementById('stdid').innerHTML = id;

  var name = document.getElementById('name').value;
  document.getElementById('legend').innerHTML = name;

  var sci1 = document.getElementById('sci1').value;
  document.getElementById('sc1').innerHTML = sci1;

  var sci2 = document.getElementById('sci2').value;
  document.getElementById('sc2').innerHTML = sci2;

  var sci3 = document.getElementById('sci3').value;
  document.getElementById('sc3').innerHTML = sci3;

  var sum = parseInt(sci1) + parseInt(sci2) + parseInt(sci3);
  document.getElementById('tsc').innerHTML = sum;

  var percentage = (sum / 30) * 100;
  document.getElementById('psc').innerHTML = percentage.toFixed(2);

  if (percentage >= 50) {
    document.getElementById('result').innerHTML = 'Student passed exam';
    document.getElementById('result').style.color = 'green';
  } else {
    document.getElementById('result').innerHTML = 'Student failed exam';
    document.getElementById('result').style.color = 'red';
  }
}

function RemoveForm() {
  document.getElementById('Form').style.display = 'none';
}
