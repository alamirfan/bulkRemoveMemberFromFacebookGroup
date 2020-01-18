var removeMemberFromGroup = (function () {
  // Leave these number of members. The top 5 members won't be removed
  // Change this according to your need
  var leaveNumberOfMember = 5;
  var removeMemberFromGroup = {};
  var memberRemovalStarted;

  function findClass() {
    var element = $("u:contains('3-dots-h')")[0];
    var iElement = element.closest('i');
    var iClass = $(iElement).attr('class').split(' ').join('.');
    var className = '.'+iClass;
    return className;
  }

  function clickMenuButton(className, index) {
      $(className)[index].click();
  }

  function clickRemoveFromGroup() {
  		var len = $('._54nf li a').length;
      $('._54nf li a')[len - 2].click();
  }

  function clickConfirm() {
     $('._5lnf button').click();
     setTimeout(clickCloseOnPopup, 3000);
  }

  function clickCloseOnPopup() {
      var popupLength = $('.autofocus.layerCancel').length;
      if(popupLength > 0) {
       $('.autofocus.layerCancel')[0].click();
       clickConfirm();
      }
  }

  function removeMember() {
      var className = findClass();
      var totalMember  = $(className).length;
      if(totalMember > leaveNumberOfMember) {
        clickMenuButton(className, totalMember - 1);
        clickRemoveFromGroup();
        setTimeout(clickConfirm, 2000);
      } else {
        removeMemberFromGroup.stop();
      }
      console.log("Total Member Left: ", totalMember);
  }

  removeMemberFromGroup.start = function () {
    console.log("Member removal started");
    memberRemovalStarted = setInterval(removeMember, 5000);
  }

  removeMemberFromGroup.stop = function () {
    console.log("Member removal stopped");
    clearTimeout(memberRemovalStarted);
  }

  return removeMemberFromGroup;
}) ();

// To start the removal
removeMemberFromGroup.start();

//To stop the removal. Remove this code while running above
removeMemberFromGroup.stop();
