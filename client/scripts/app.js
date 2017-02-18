var app = {
  init() {

  },

  server: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',

  send: function(message) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: app.server,
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
  fetch: function() {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: app.server,
      type: 'GET',
      contentType: 'application/json',
      data: {
        limit: 10,
        order: '-createdAt',
      },
      success: function (data) {
        app.messages = data;
        console.log('chatterbox: Message received');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to get message', data);
      }
    });
  },

  messages: {},

  clearMessages: function() {
    $('#chats').empty();
  },
  renderMessage: function() {
    app.messages.results.forEach(function(message) {
      var $chat = '<div id="message">' + message.text + '</div>';
      $('#chats').append($chat);      
    });
  },  
  renderRoom: function(roomName) {
    var $room = '<div id="room"></div>';
    $('#roomSelect').append($room);
  },
  handleUsernameClick: function() {

  },
  handleSubmit: function() {

  }
};


// Dropdown Button Script

var myFunction = function() {
  document.getElementById('myDropdown').classList.toggle('show');
};

var filterFunction = function() {
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
};


















