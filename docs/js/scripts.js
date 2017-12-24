console.log('script.js');
//var player = videojs('my-player');
var options = {};

// var player = videojs('my-player', options, function onPlayerReady() {
//   videojs.log('Your player is ready!');

//   // In this context, `this` is the player that was created by Video.js.
//   this.play();

//   // How about an event listener?
//   this.on('ended', function() {
//     videojs.log('Awww...over so soon?!');
//   });
// });

// player.upnext({
//   timeout : 5000,
//   headText : 'Up Next',
//   cancelText: 'Cancel',
//   getTitle : function() { return 'Next video title' },
//   next : function () { performActionAfterTimeout() }
// });

function getTitle(){
  console.log('get Title Function had been called up');
  return "Hi, this is a title";
}

function next(){
  console.log('next Function had been called up');
  alert("Video ended");
}

var player = videojs('my-player', {
}, function() {
  videojs.log('Your player is ready!');

  console.log('before set upnext');
  player.upnext({
    timeout : 5000,
    getTitle : getTitle,
    next : next
  });
});


player.thumbnails({
  0: {
    src: 'https://s20.postimg.org/pcioadogd/image.jpg',
    width: '50px'
  },
  2: {
    src: 'https://s20.postimg.org/9r1cqfznh/image.jpg'
  }
});
// var root = 'https://jsonplaceholder.typicode.com';

// $.ajax({
//   url: root + '/posts/1',
//   method: 'GET'
// }).then(function(data) {
//   console.log('inside then in ajax call');
//   console.log(data);
// });
