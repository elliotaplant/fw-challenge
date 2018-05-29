/*
The function ProcessProgramName should retrieve all the program names
from the PROGRAM_NAME column in the PROGRAM table, process them, and
display them in alphabetical order.

Note that the function uses camel case with first letter capitalization, following
standard JS best practices

@input: programNames
  - array of program name strings

@output: string of apostrophe-comma-apostrophe separated program names
*/


function processProgramName(programNames) {
  const processedProgramNames = programNames
    // Process each program name to double existing apostrophes sure it has appropriate apostrophe setup
    .map(name => replaceAll(name, "'", "''"))
    // Add apostrophes to either end of the name as well
    .map(processedName => `'${processedName}'`);

  // Sort the processed names alphabetically while ignoring apostrophes
  const sortedProgramNames = processedProgramNames.sort(aphaSortNoApostrophes);

  // Join the program names together with commas
  return sortedProgramNames.join(',');
}


/*
Utility methods
*/

// Replaces all instances of 'find' with 'replace' within 'parent'
function replaceAll(parent, find, replace) {
  return parent.split(find).join(replace);
}

// Alphabetically sorts two strings while ignoring apostrophes
function aphaSortNoApostrophes(strA, strB) {
  const aNoPunctuation = replaceAll(strA, "'", '');
  const bNoPunctuation = replaceAll(strB, "'", '');
  if (aNoPunctuation > bNoPunctuation) {
    return 1;
  } else if (aNoPunctuation < bNoPunctuation) {
    return -1;
  } else {
    return 0;
  }
}

module.exports = {
  processProgramName,
  replaceAll,
  aphaSortNoApostrophes
}
