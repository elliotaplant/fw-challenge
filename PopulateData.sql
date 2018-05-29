INSERT INTO CELLS (CELL_ID, CELL) VALUES
(1, 'Men 12-17'),
(2, 'Men 18-24'),
(3, 'Men 25-34'),
(4, 'Men 35-49'),
(5, 'Men 50-54'),
(6, 'Women 12-17'),
(7, 'Women 18-24'),
(8, 'Women 25-34'),
(9, 'Women 35-49'),
(10, 'Women 50-54');

INSERT INTO MARKET (MARKET_ID, MARKET_NAME) VALUES
(1, 'Chicago'),
(2, 'New York'),
(3, 'Los Angeles'),
(4, 'Atlanta'),
(5, 'Roanoke-Lynchburg'),
(6, 'Yourtown');

INSERT INTO MARKET_POP (MARKET_ID, CELL_ID) VALUES
(1, 1),
(1, 2),
(2, 4);

INSERT INTO STATION (STATION_ID, STATION_NAME) VALUES
(1, 'WABC-TV'),
(2, 'WHIJ-TV'),
(3, 'AAAA-TV'),
(4, 'KKKK-TV');

INSERT INTO PROGRAM (PROGRAM_ID, STATION_ID, PROGRAM_NAME, FLIGHT_DATE) VALUES
(1, 1, '10 O''CLOCK NWS', '3/11/1990'),
(2, 1, 'ACCESS HOLLYWD', '8/25/1991'),
(3, 4, 'Jeop', '6/30/1975'),
(4, 3, 'C O''BRIEN-NBC''''Program', '1/1/1989'),
(5, 3, 'Frasier''s', '11/11/1991'),
(6, 4, 'Barney', '9/3/1966'),
(7, 1, 'Just Shoot me', '6/6/1996'),
(8, 4, 'Wheel', '6/30/1975'),
(9, 3, 'Sesame Street', '5/16/1971');
