let tracker =[];

(function(window, document, undefined){
    window.onload = init;
    
      function init()
      {
        let set = document.getElementById("board");
        for(var p =0;p<9;p++)
        {
          set.children[p].setAttribute("class","square");
          set.children[p].setAttribute("id",p);
          set.children[p].addEventListener("click",function(){oclick(this.id,set)});
        }
      }
    
    })(window, document, undefined);


function oclick(id,hope)
{   
    console.log(tracker);
    if (tracker.length == 0)
    {
        hope.children[id].textContent ="X";
        hope.children[id].setAttribute("class","square.X");
        tracker.push("X");
    }
    else if (tracker[tracker.length-1]=="X")
    {
        hope.children[id].textContent ="O";
        hope.children[id].setAttribute("class","square.O");
        tracker.push("O");
    }
    else if ((tracker[tracker.length-1]=="O"))
    {
        hope.children[id].textContent ="X";
        hope.children[id].setAttribute("class","square.X");
        tracker.push("X");
    }
}