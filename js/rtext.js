function rtext(){
  function change(text){
    var artext = text.split('');
    var sym = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\x0b\x0c'.split('');
    for(var i in artext){
      if (artext[i] != ' ')
      artext[i] = sym[ Math.floor(Math.random()*sym.length)];
    }
    return artext.join('');
  }
  function mixtext(a,b){
    var fin = a.split('');
    for (var i in fin){
      Math.random()>0.5? fin[i] = b.split('')[i] : void(0);
    }
    return fin.join('');
  }
  $('.rtext').each(function(){
    var el = this;
    !el.hasAttribute("scopestart")?el.setAttribute('scopestart', el.innerHTML ):void(0);
    el.innerHTML = change( el.getAttribute('scopestart') );
    if( !el.intertext ){
      el.intertext = setInterval(function(){
        if(el.innerHTML == el.getAttribute('scopestart')){
          clearInterval(el.intertext);
          el.intertext = false;
        }
        el.innerHTML =  mixtext( el.innerHTML , el.getAttribute('scopestart'));
      }, 100);
    }
  })
}

window.onscroll = function(){
  rtext()
}
