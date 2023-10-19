import $ from 'jquery';
import './zabuto_calendar';

$(document).ready(function() {
  $("#date-popover").popover({
    html: true,
    trigger: "manual"
  });
  $("#date-popover").hide();
  $("#date-popover").click(function(e) {
    $(this).hide();
  });

  $("#my-calendar").zabuto_calendar({
    action: function() {
      return myDateFunction(this.id, false);
    },
    action_nav: function() {
      return myNavFunction(this.id);
    },
    ajax: {
      url: "show_data.php?action=1",
      modal: true
    },
    today: true,
    language: "fr",
    legend: [{
        type: "text",
        label: "Special event",
        badge: "00"
      },
      {
        type: "block",
        label: "Regular event",
      }
    ]
  });

  function myDateFunction(id, fromModal) {
      
    if (fromModal) {
        $("#" + id + "_modal").modal("hide");
    }
    var date = $("#" + id).data("date");
    var hasEvent = $("#" + id).data("hasEvent");
    if (!hasEvent && !fromModal) {
        return false;
    }
    $("#date-popover").show();
  }
  
  function myNavFunction(id) {
    $("#date-popover").hide();
    var nav = $("#" + id).data("navigation");
    var to = $("#" + id).data("to");
    console.log('nav ' + nav + ' to: ' + to.month + '/' + to.year);
  }
});
