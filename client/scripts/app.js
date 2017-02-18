var app = {
  init() {

  },
  send(message) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  fetch() {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: undefined,
      type: 'GET',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  clearMessages() {
    $('#chats').empty();
  },
  renderMessage(message) {
    var $chat = '<div id="message"></div>';
    $('#chats').append($chat);
  },  
  renderRoom(roomName) {
    var $room = '<div id="room"></div>';
    $('#roomSelect').append($room);
  },
  handleUsernameClick() {

  },
  handleSubmit() {

  }
};

// Dropdown Button Script

function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  div = document.getElementById('myDropdown');
  a = div.getElementsByTagName('a');
  for (i = 0; i < a.length; i++) {
    if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = '';
    } else {
      a[i].style.display = 'none';
    }
  }
}


















