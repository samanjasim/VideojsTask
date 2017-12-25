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
    next : next
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