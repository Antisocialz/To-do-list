(function(){
  
    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');
       
    
    form.addEventListener('submit',function(e){
      e.preventDefault();
      list.innerHTML += '<li>' + item.value +'     ' +'       <button id="button" value="Effacer">Effacer</button></li>';
      store();
      item.value = "";
    },false)
    
    list.addEventListener('click',function(e){
      var t = e.target;
      if(t.parentNode.classList.contains('checked') && t.value =='Effacer'){
        t.parentNode.remove(t);
      } else if (t.value =='Effacer') {
          let a= confirm('Sure ?')
          
          if (a == true) {
            t.parentNode.remove(t);
          } else if (a == false)  {
            t.classList.remove('checked')
          } 


      } else if (t.classList.contains('checked'))
         {t.classList.remove('checked')
        ;



      }  else 
        t.classList.add('checked');
      
      store();
    },false)
    

    function erase() {
        var t = e.target;
    }


    
    function store() {
      window.localStorage.myitems = list.innerHTML;
    }
    



    function getValues() {
      var storedValues = window.localStorage.myitems;
      if(!storedValues) {
        list.innerHTML = '<li>Make a to do list<button id="button" value="Effacer">Effacer</button></li>'
                         ;
      }
      else {
        list.innerHTML = storedValues;
      }
    }
    getValues();
  })();
