class StationUpdator {
  constructor(programTable) {
    // Stores it's own version of the programTable.
    // Typically this would come from a network request
    this.programTable = programTable;

    // Also stores a sorted version of the program table as a lazy-computed cache
    this.sortedProgramTable = null;

    // Constant date formatting to display date ("January 01, 2000")
    this.DATE_FORMAT = { year: 'numeric', month: 'long', day: '2-digit' };
  }

  updateStation() {
    // Get the value of the selected station from the UI
    const stationId = this.getStationId();

    // Get the earliest program for that station
    const earliestProgram = this.earliestProgramForStation(stationId);

    if (earliestProgram) {
      // Set the UI to display the new earliest station
      this.setProgramName(earliestProgram.PROGRAM_NAME);

      // Format the date before appending it to UI
      const flightDate = new Date(earliestProgram.FLIGHT_DATE);
      const formattedFlightDate = flightDate.toLocaleDateString('en-US', this.DATE_FORMAT);
      this.setFlightDate(formattedFlightDate);
    } else {
      // We were unable to find the earliest program for this station, so display an error
      this.setProgramName('Unable to find earliest program');
      this.setFlightDate('');
    }
  }

  // Gets the selected station ID from the UI
  getStationId() {
    return parseInt(document.getElementById('station-select').value);
  }

  // Sets the program name in the UI
  setProgramName(name) {
    document.getElementById('program-name').textContent = name;
  }

  // Sets the program flight date in the UI
  setFlightDate(date) {
    document.getElementById('flight-date').textContent = date;
  }

  // Finds the earliest program for a station
  earliestProgramForStation(stationId) {
    // Lazily creates the sortedProgramTable only when it is required to improve page load time
    if (!this.sortedProgramTable) {
      this.sortedProgramTable = this.programTable.sort(this.sortProgramsByStartDateAlpha);
    }

    // Finds the first program that matches the station we're looking for, or null if it can't find it
    return this.sortedProgramTable.find(program => program.STATION_ID === stationId);
  }

  // Sorts programs first chronologically by FLIGHT_DATE then alphabetically by PROGRAM_NAME
  sortProgramsByStartDateAlpha(programA, programB) {
    const startDateA = new Date(programA.FLIGHT_DATE);
    const startDateB = new Date(programB.FLIGHT_DATE);

    if (startDateA > startDateB) {
      return 1;
    } else if (startDateA < startDateB) {
      return -1;
    } else {
      if (programA.PROGRAM_NAME > programB.PROGRAM_NAME) {
        return 1;
      } else if (programA.PROGRAM_NAME < programB.PROGRAM_NAME) {
        return -1;
      }
    }
    return 0;
  }
}
