function myFunction() {
  var calendarName = 'Work';
  var events = getEvents('2018-11-1', '2018-12-1');   // default calendar if don't send the last parameter
  var ss = SpreadsheetApp.create("Calendar Summary");
  Logger.log(ss.getUrl());
  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    ss.getRange('A' + (i+1)).setValue(event.getTitle());
    ss.getRange('B' + (i+1)).setValue(event.getDescription());
  }
}

function getEvents(start, end, name) {
  var a = start.split('-');
  start = new Date(a[0], a[1]-1, a[2]);
  a = end.split('-');
  end = new Date(a[0], a[1]-1, a[2]);
  var calendar = name ? CalendarApp.getCalendarsByName(name)[0] : CalendarApp.getDefaultCalendar();
  return calendar.getEvents(start, end);
}

