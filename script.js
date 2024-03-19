function calculateEnergy() {
  var windSpeed = parseFloat(document.getElementById('wind-speed').value);
  var trafficDensity = parseFloat(document.getElementById('traffic-density').value);
  var efficiency = parseFloat(document.getElementById('efficiency').value);

  // Calculate energy generation (example formula)
  var energy = (windSpeed * trafficDensity * efficiency) / 100;

  // Display result
  document.getElementById('result').innerText = 'Estimated Energy Generation: ' + energy.toFixed(2) + ' kW';
}