let tracker =[];
let suffer = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let playdata = ["a","b","c","d","e","f","g","h","i"];

(function(window, document, undefined){
    window.onload = init;
    
      function init()
      {
        let set = document.getElementById("board");
        for(var p =0;p<9;p++)
        {
          set.children[p].classList.add("square");
          set.children[p].setAttribute("id",p);
          set.children[p].textContent =" ";
          set.children[p].addEventListener("click",function(){oclick(this.id,set)});
          set.children[p].addEventListener("mouseover",function(){hover(this.id,set)});
          set.children[p].addEventListener("mouseout",function(){out(this.id,set)});
        }
      }
    
    })(window, document, undefined);


function oclick(id,hope)
{   

    if (hope.children[id].classList.contains("X")||hope.children[id].classList.contains("O"))
    {
        return;
    }
    if (tracker.length == 0)
    {
        hope.children[id].textContent ="X";
        hope.children[id].classList.add("X");
        tracker.push("X");
        playdata[id] = "X"
    }
    else if (tracker[tracker.length-1]=="X")
    {
        hope.children[id].textContent ="O";
        hope.children[id].classList.add("O");
        tracker.push("O");
        playdata[id] = "O"
        if(tracker.length>2)
            winnercheck(playdata);
    }
    else if ((tracker[tracker.length-1]=="O"))
    {
        hope.children[id].textContent ="X";
        hope.children[id].classList.add("X");
        tracker.push("X");
        playdata[id] = "X"
        if(tracker.length>2)
            winnercheck(playdata);
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

function winnercheck(hope)
{
    for(var i of suffer)
    {
        
        var one = hope[i[0]];
        var two = hope[i[1]];
        if(one == two)
        {
            var three = hope[i[2]];
            if(one == three)
            {
                return windisplay(one);
            }
        }
        
    }
    if(tracker.length == 9)
    {
        return windisplay(1);
    }
}

function windisplay(win)
{
    let winz = document.getElementById("status");
    if (win == "X")
    {
        winz.textContent="Congratulations! X is the Winner!";
        winz.classList.add("you-won");
        winz.classList.add("before");
        winz.classList.add("after");
    }
    else if (win == "O")
    {
        winz.textContent="Congratulations! O is the Winner!";
        winz.classList.add("you-won");
        winz.classList.add("before");
        winz.classList.add("after");
    }
    else
    {
        winz.textContent="Draw!";
    }
    return;
}

