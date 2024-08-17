/// <reference path="../js/crud.d.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create an object with the type RowElement
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

// Create a constant variable for the new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with age
const updatedRow: RowElement = {
    ...row,
    age: 23
};

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);