function myFunction() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Sheet1");
  var data = sheet.getDataRange().getValues();
  data.forEach(function (row) {
    Logger.log(row);
    var recipient = 'asdf';
    var subject = 'f';
    var body = `Hello
Best
${row[0]}
Wish`;

    GmailApp.sendEmail(recipient, subject, body);
  });
}
