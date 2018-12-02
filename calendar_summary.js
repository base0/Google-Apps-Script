function myFunction() {
  var calendarName = 'Work';
  var events = getEvents('2018-11-1', '2018-12-1', calendarName);   // default calendar if don't send the last parameter
  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    Logger.log(event.getTitle());
    Logger.log(event.getDescription());
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

