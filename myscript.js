for (i = 0; i < 33; i++) {

  var mybox = document.createElement('a-entity');

  var myrotate = document.createElement('a-animation');
  myrotate.setAttribute('attribute', 'rotation');
  myrotate.setAttribute('dur', '15000');
  myrotate.setAttribute('to', '0 360 0');
  myrotate.setAttribute('begin', 'click');

  mybox.appendChild(myrotate);

  mybox.setAttribute('geometry', 'primitive:box');

  var x = (Math.random()*10).toString();
  var y = (Math.random()*10).toString();
  var z = (Math.random()*10).toString();

  mybox.setAttribute ('position', x+" "+y+" "+z);

  var myscene = document.querySelector('a-scene');

  myscene.appendChild(mybox);

}