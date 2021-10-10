let tracker =[];

(function(window, document, undefined){
    window.onload = init;
    
      function init()
      {
        let set = document.getElementById("board");
        for(var p =0;p<9;p++)
        {
          set.children[p].classList.add("square");
          set.children[p].setAttribute("id",p);
          set.children[p].addEventListener("click",function(){oclick(this.id,set)});
          set.children[p].addEventListener("mouseover",function(){hover(this.id,set)});
          set.children[p].addEventListener("mouseout",function(){out(this.id,set)});
        }
      }
    
    })(window, document, undefined);


function oclick(id,hope)
{   
    if (tracker.length == 0)
    {
        hope.children[id].textContent ="X";
        hope.children[id].classList.add("X");
        tracker.push("X");
    }
    else if (tracker[tracker.length-1]=="X")
    {
        hope.children[id].textContent ="O";
        hope.children[id].classList.add("O");
        tracker.push("O");
    }
    else if ((tracker[tracker.length-1]=="O"))
    {
        hope.children[id].textContent ="X";
        hope.children[id].classList.add("X");
        tracker.push("X");
    }
}

function hover(id,hope)
{
    hope.children[id].classList.add("hover");
}

function out(id,hope)
{
    hope.children[id].classList.remove("hover");
}