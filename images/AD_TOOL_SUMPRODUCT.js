/**
 * Anti-Dumping Weighted Average Price Calculation Tool (SUMPRODUCT Formula Version)
 * Function: Iterates through codes in Column E and generates a SUMPRODUCT 
 * weighted average formula on the last row of each unique code group.
 */

function writeSumproductFormulasFinal() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  
  // ==========================================
  // [CONFIGURATION: Modify here if column positions change]
  // ==========================================
  var col_Code = 5;          // Column E: Product Code column index (A=1)
  var col_Qty = 28;          // Column AB: Quantity column index
  var col_Price = 42;        // Column AP: Adjusted Price column index
  var col_Output = 45;       // Column AS: Target column for formula insertion
  
  var colName_Qty = "AB";    // Column letter for Quantity
  var colName_Price = "AP";  // Column letter for Price
  
  var startRow = 21;         // Starting row of the raw data
  // ==========================================

  var lastRow = sheet.getLastRow();
  if (lastRow < startRow) {
    SpreadsheetApp.getUi().alert("No valid data rows found.");
    return;
  }

  // Read all codes to determine group boundaries
  var codes = sheet.getRange(1, col_Code, lastRow + 1, 1).getValues(); 
  
  // Clear existing formulas in the output column (Column AS)
  sheet.getRange(startRow, col_Output, lastRow - startRow + 1, 1).clearContent();
  
  var groupStartRow = startRow;

  for (var i = startRow; i <= lastRow; i++) {
    var currentCode = codes[i-1][0].toString().trim();
    // Get the next row's code; if at the end of the sheet, use a special identifier
    var nextCode = (i < lastRow) ? codes[i][0].toString().trim() : "END_OF_DATA";

    // Logic: If the current code is not empty and differs from the next code, 
    // the current row is the final row of that specific product group.
    if (currentCode !== "" && currentCode !== nextCode) {
      var groupEndRow = i;
      
      // Generate SUMPRODUCT formula string
      // Example: =SUMPRODUCT(AP22:AP24, AB22:AB24) / SUM(AB22:AB24)
      var formula = "=SUMPRODUCT(" + colName_Price + groupStartRow + ":" + colName_Price + groupEndRow + 
                    ", " + colName_Qty + groupStartRow + ":" + colName_Qty + groupEndRow + 
                    ") / SUM(" + colName_Qty + groupStartRow + ":" + colName_Qty + groupEndRow + ")";
      
      // Write the formula to the output column
      sheet.getRange(groupEndRow, col_Output).setFormula(formula);
      
      // Set the starting row for the next group
      groupStartRow = i + 1;
    } else if (currentCode === "") {
      // Skip empty code rows and update the start row for the next potential group
      groupStartRow = i + 1;
    }
  }
  
  SpreadsheetApp.getUi().alert("Formula generation complete! Please check the cells in Column AS.");
}

/*
================================================================================
【MAINTENANCE GUIDE】
================================================================================
If the investigating authority updates the template and column positions change, 
please update the "CONFIGURATION" section of the code:

| Variable Name     | Meaning                | How to Determine                             |
| :---------------- | :--------------------- | :------------------------------------------- |
| col_Code          | Product Code Index     | Count from A: A=1, B=2, C=3, D=4, E=5...     |
| col_Qty           | Quantity Column Index  | Column AB corresponds to index 28            |
| col_Price         | Adj. Price Index       | Column AP corresponds to index 42            |
| col_Output        | Result Column Index    | Column AS corresponds to index 45            |
| colName_Qty       | Qty Column Letter      | e.g., "AB" (Must be in double quotes)        |
| colName_Price     | Price Column Letter    | e.g., "AP" (Must be in double quotes)        |
| startRow          | Data Starting Row      | The row number where actual data begins      |

Note: In Google Sheets, go to "Extensions" -> "Apps Script" to paste and save this code.
================================================================================
*/