// Starting table data:
const CELLS = [
  {
    CELL_ID: 1,
    CELL: 'Men 12-17'
  }, {
    CELL_ID: 2,
    CELL: 'Men 18-24'
  }, {
    CELL_ID: 3,
    CELL: 'Men 25-34'
  }, {
    CELL_ID: 4,
    CELL: 'Men 35-49'
  }, {
    CELL_ID: 5,
    CELL: 'Men 50-54'
  }, {
    CELL_ID: 6,
    CELL: 'Women 12-17'
  }, {
    CELL_ID: 7,
    CELL: 'Women 18-24'
  }, {
    CELL_ID: 8,
    CELL: 'Women 25-34'
  }, {
    CELL_ID: 9,
    CELL: 'Women 35-49'
  }, {
    CELL_ID: 10,
    CELL: 'Women 50-54'
  }
];

const MARKET = [
  {
    MARKET_ID: 1,
    MARKET_NAME: 'Chicago'
  }, {
    MARKET_ID: 2,
    MARKET_NAME: 'New York'
  }, {
    MARKET_ID: 3,
    MARKET_NAME: 'Los Angeles'
  }, {
    MARKET_ID: 4,
    MARKET_NAME: 'Atlanta'
  }, {
    MARKET_ID: 5,
    MARKET_NAME: 'Roanoke-Lynchburg'
  }, {
    MARKET_ID: 6,
    MARKET_NAME: 'Yourtown'
  }
];

// Class to represent table in DB
class MarketPopTable {
  constructor() {
    // Store market pop records in an object
    // This is not exactly like the SQL table, but by serializing the ID's as strings,
    //  the keys act like a clustered primary key
    this.marketPopTable = {
      // Example entry:
      // "1,2": { marketId: 1, CELL_ID: 2 }
    };

    // Initialize the table with a few records for this example
    this.insertMarketPopRecord(1, 1)
    this.insertMarketPopRecord(1, 2)
    this.insertMarketPopRecord(2, 4)
  }

  // Method to add the missing records in the market pop table by iterating over the possible cells and markets
  populateMissingMarketPopRecords() {
    CELLS.forEach(({CELL_ID}) => {
      MARKET.forEach(({MARKET_ID}) => {
        if (!this.hasRecord(MARKET_ID, CELL_ID)) {
          this.insertMarketPopRecord(MARKET_ID, CELL_ID)
        }
      });
    });
  }

  // Create the seialized string "index" based on the marketId and the cellId
  serializePrimaryKey(marketId, cellId) {
    return `${marketId},${cellId}`;
  }

  // Finds whether a (MARKET_ID, CELL_ID) record is in the MARKET_POP table yet
  hasRecord(marketId, cellId) {
    const serializedPrimaryKey = this.serializePrimaryKey(marketId, cellId);
    return serializedPrimaryKey in this.marketPopTable;
  }

  // Mock method for inserting rows into table - would be async in real environment
  insertMarketPopRecord(marketId, cellId) {
    const serializedPrimaryKey = this.serializePrimaryKey(marketId, cellId);
    this.marketPopTable[serializedPrimaryKey] = {
      MARKET_ID: marketId,
      CELL_ID: cellId
    };
  }

  // Finds the number of rows in the table
  size() {
    return Object.keys(this.marketPopTable).length;
  }
}

// Use the MarketPopTable class to run and test an example instance
const marketPopTable = new MarketPopTable();

// Expect the table to start with 3 rows
console.assert(marketPopTable.size() === 3);

// Expect the table to have the record (1, 2)
console.assert(marketPopTable.hasRecord(1, 2));

// Expect the table NOT to have the record (5, 8)
console.assert(!marketPopTable.hasRecord(5, 8));

// Fill out the missing records
marketPopTable.populateMissingMarketPopRecords();

// Expect the table to now have 60 rows
console.assert(marketPopTable.size() === 60);

// Expect the table to still have the record (1, 2)
console.assert(marketPopTable.hasRecord(1, 2));

// Expect the table to now have the record (5, 8)
console.assert(marketPopTable.hasRecord(5, 8));

// Notify the user that the tests passed
console.log('Tests Passed');
