function updateStation() {
  // Find the station selctor on the DOM
  const stationSelect = document.getElementById('station-select');

  // Get the value of the selected station as an INT to match DB
  const stationId = parseInt(stationSelect.value);

  // Find the programs on that station from the programTable. Note that `programTable` is in this
  // scope because of this line in frmProgram.html:
  // <script type="text/javascript" src="programTable.js"></script>
  const stationsPrograms = programTable.filter(program => program.STATION_ID === stationId);

  // Sort the stations programs first by 
  console.log('stationsPrograms', stationsPrograms);
}
