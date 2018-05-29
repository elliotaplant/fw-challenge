FREEWHEEL PROGRAMMING TEST
==========================

Overview
--------
The FreeWheel programming test is intended to be a simple test of dev
candidates' programming ability, using a series of three questions. 
Although the sample source code is VB6, candidates are expected to 
take the test using whatever programming language they prefer, 
ideally C# or JavaScript. 

The test is expected to be taken in 2 hours or less. Points will
be awarded per question based on fulfilling the stated requirements,
with bonus points awarded for going beyond the requirements,
providing especially novel solutions, and so forth.

Question 1
----------
The function ProcessProgramName should retrieve all the program names 
from the PROGRAM_NAME column in the PROGRAM table, process them, and 
display them in alphabetical order. 

When displaying the program names, an apostrophe (') should be 
added to the beginning and the end of each program name. If there are 
any apostrophes *within* a program name, then an additional apostrophe 
should be added before the existing apostrophe(s). 

Use a comma (",") to separate each program name. For example, the 
string 'Test1','Test''2','Test3' is the proper output given input 
values of Test1, Test3, and Test'2. 

Please implement the function ProcessProgramName so that it produces
the correct output.

Question 2
----------
The form frmProgram is a simple user interface. When you choose a 
station from the station list and click the Update button, the code 
should go to the PROGRAM table, find a record with the earliest 
FLIGHT_DATE for the chosen station, and display its information in 
the text boxes on the form. 

If there are multiple records with the same earliest FLIGHT_DATE 
for the chosen station, it should display the first PROGRAM_NAME 
in alphabetical order. The record's FLIGHT_DATE should be displayed
in the format of "Jan 01, 2000". 

Please implement the business logic and a simple UI for choosing
a station and viewing the output.

Question 3
----------
There are 6 records in the MARKET table and 10 records in the CELLS 
table, so the MARKET_POP table should have 60 records -- one record
per market and cell. Assuming that the MARKET_POP table is not empty,
please implement business logic to populate the missing records. 
