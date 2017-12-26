var options = {};

function getTitle(){
  return "Hi, this is a title";
}

function next(){
  alert("Video ended");
}

var player = videojs('my-player', {
}, function() {
  player.upnext({
    timeout : 5000,
    getTitle : getTitle,
    next : next,
    showTime: 3,
  });
});


player.thumbnails({
  0: {
    src: 'https://s20.postimg.org/pcioadogd/image.jpg',
    width: '100px'
  },
  200: {
    src: 'https://s20.postimg.org/9r1cqfznh/image.jpg',
  },
  800: {
    src: "https://s20.postimg.org/5558i3lu5/image.jpg"
  }, 
  1400: {
    src: 'https://s20.postimg.org/i2a4v1ja5/image.jpgg',
  }, 
  2000: {
    src: 'https://s20.postimg.org/7s7pvubf1/image.jpg'
  }, 
  2600: {
    src: "https://s20.postimg.org/y0iul70nh/image.jpg"
  }, 
  3200: {
    src: "https://s20.postimg.org/e5wsz260d/image.jpg"
  }, 
  3800: {
    src: "https://s20.postimg.org/zfkf9wu0t/image.jpg"
  },
  4400: {
    src: "https://s20.postimg.org/72oxjgvfx/image.jpg"
  }
});

// console.log('start working on event');

// var Component = videojs.getComponent('Component');
// console.log('Component= ', Component);
// var myComponent = new Component(player);
// console.log('myComponent= ', myComponent);
// var myFunc = function() {
//   var myComponent = this;
//   console.log('myFunc called');
// };
// myComponent.on('eventType', myFunc);
// myComponent.trigger('eventType');
// logs 'myFunc called'

// myComponent.off('eventType', myFunc);
// myComponent.trigger('eventType');

player.overlay({
  content:  '<a href="#" class="img-overlay-container"> ' + 
              '<img src="https://yt3.ggpht.com/proxy/MVg9cxKZ3pNBdv7JcKlAiDKex1KMMsfeaN6uKi0nITF3uOCzo9po6FZ95cArM2PVr_PDuG9OJKPKR_Ul4K8=-w480-h360" class="img-responsive">' +
              '<div class="overlay-desc">' + 
                '<p>This is Desc for the Video </p>' +
              '</div>' +
            '</a>',
  isUpNext: true,
  overlays: [
    {
    
        // This overlay appears at 3 seconds and disappears at 15 seconds.
        start: 3,
        end: 15,
    }, 
    // {
    
    //     // This overlay appears at 7 seconds and disappears at 22 seconds.
    //     start: 12,
    //     end: 22,
    //     align: 'top-right'
    // }
  ]
});

// TODO: the code for shown the Next .
// setTimeout(function() {
//   player.trigger('ended');
// }, 3000);

// TODO: you sould make the player Variable in Window With NoCofiict to be shaerd between Files