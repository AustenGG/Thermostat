$(document).ready(function() {
  var thermostat = new Thermostat();
  getCurrentTemperature();

  $('#temp-up').click(function() {
    thermostat.up();
    getCurrentTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    getCurrentTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.resetTemperature();
    getCurrentTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    getCurrentTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    getCurrentTemperature();
  })

  function getCurrentTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
    };
});
