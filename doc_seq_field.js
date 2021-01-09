function myFunction() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  var count = 0;
  var start = null;
  while (body.findText('<.*>', start) != null) {
    var find = body.findText('<.*>', start);
    var text = find.getElement().asText();
    count++;
    text.setText('<' + count + '>')
    start = find;
  }
}
