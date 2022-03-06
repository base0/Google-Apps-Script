function myFunction() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Sheet1');
  var data = sheet.getDataRange().getValues();
  data.forEach(function (row) {
    const TEXTS = ['name', 'paper']  
    replace(TEXTS, row)
  });
}

function replace(froms, tos) {
  const SLIDE_ID = '1OrdpasltN9KawNZZaslJWon5P4V9HqH3sTv0UbTkZRbge4';
  const FOLDER_ID = '1fUMwmFbRRiq---asdfTnhZs-4TwiJTJ6T4bK7';

  const TEMP_ID = DriveApp.getFileById(SLIDE_ID).makeCopy().getId();
  var presentation = SlidesApp.openById(TEMP_ID);

  for (var i = 0; i < froms.length; i++) {
    presentation.replaceAllText(froms[i], tos[i]);
  }

  presentation.saveAndClose();

  var pdf = DriveApp.getFileById(TEMP_ID).getBlob().getAs('application/pdf')
  pdf.setName(tos[0]);
  DriveApp.getFolderById(FOLDER_ID).createFile(pdf);
  DriveApp.getFileById(TEMP_ID).setTrashed(true);
}
