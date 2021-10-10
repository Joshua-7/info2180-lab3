(function(window, document, undefined){
    window.onload = init;
    
      function init()
      {
        var set = document.getElementById("board");
        for(var p =0;p<9;p++)
        {
          set.children[p].setAttribute("class","square");  
        }
      }
    
    })(window, document, undefined);



function setup()
{
    var set = document.getElementById("board");
    console.log(set);
}