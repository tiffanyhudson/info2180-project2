"use strict";

var piece; 
var notify;
var timer;
var elementY;
var elementX;

 window.onload = function()
{
	var puzzleArea = document.getElementById('puzzlearea');
	piece = puzzleArea.getElementsByTagName('div');
	for (var a=0; a<piece.length; a++) 
	{

		piece[a].className = 'puzzlepiece'; 
		piece[a].style.left = (a%4*100)+'px'; 
		piece[a].style.top = (parseInt(a/4)*100) + 'px'; 
		piece[a].style.backgroundPosition= '-' + piece[a].style.left + ' ' + '-' + piece[a].style.top; 
		

		piece[a].onmouseover = function()
		{
			if (checkMove(parseInt(this.innerHTML)))
			{
				this.style.border = "2px solid red";
				this.style.color = "#006600";
				this.style.textDecoration = "underline";
                this.style.backgroundImage=("download.jpg"); 
            }
		}

		piece[a].onclick = function() 
		{
			if (checkMove(parseInt(this.innerHTML)))
			{
				swap(this.innerHTML-1);
				if (finish())
				{
					win(); 
				}
				return;
			};
		}
	
		piece[a].onmouseout = function()
		{
			this.style.border = "2px solid black"; 
			this.style.color = "#000000";
			this.style.textDecoration = "none"; 
		}


	var shuffle = document.getElementById('shufflebutton'); 

	elementX = '300px'; 
	elementY = '300px';

	shuffle.onclick = function() 

	{
		for (var a=0; a<300; a++) 
		{
			var rand = parseInt(Math.random()* 100) %4; 
			if (rand == 0)
			{
				var temp = up(elementX, elementY);
				if ( temp != -1)
				{
					swap(temp);
				}
			}

			if (rand == 1)
			{
				var temp = down(elementX, elementY);

				if ( temp != -1) 

				{
					swap(temp);
				}

			}

			if (rand == 2)
			{
				var temp = left(elementX, elementY);
				if ( temp != -1)
				{
					swap(temp);
				}
			}


			if (rand == 3)
			{
				var temp = right(elementX, elementY);
				if (temp != -1)
				{
					swap(temp);
				}
			}
		}
	};

function checkMove(position) 
	{
		if (left(elementX, elementY) == (position-1))
	{
		return true;
	}

	if (down(elementX, elementY) == (position-1))
	{
		return true;
	}

	if (up(elementX, elementY) == (position-1))
	{
		return true;
	}

	if (right(elementX, elementY) == (position-1))
	{
		return true;
	}
}


function win() 
{
	var body = document.getElementsByTagName('body');
	body[0].style.backgroundImage= ("download.jpg");
	notify = 10; 
	timer= setTimeout(Notify, 200);
	var para=document.getElementsByClassName('explanation');
	para[0].style.visibility="hidden"; 
}

function Notify()
{
	notify --;  

	if (notify == 0) 
	{
		var body = document.getElementsByTagName('body');
		body[0].style.backgroundImage= "none"; 
		alert('Winner! ... Shuffle and Play Again');  
		var para=document.getElementsByClassName('explanation');
	    para[0].style.visibility="visible"; 

		return;
	}

	else  (notify % 2) 

	{
		var body = document.getElementsByTagName('body'); 
	    body[0].style.backgroundImage= ("download.jpg");
	}

    timer= setTimeout(Notify, 200);
};

function finish() 
{

	var flag = true;
	for (var a= 0; a < piece.length; a++)  
	{
		var top = parseInt(piece[a].style.top);
		var left = parseInt(piece[a].style.left);
		if (left != (i%4*100) || top != parseInt(i/4)*100) 
		{
			flag = false;
			break;
		}

	}

	return flag;
}

function left(x, y) 
{

	var cordX = parseInt(x);
	var cordY = parseInt(y);

	if (cordX > 0)
	{
		for (var a= 0; a< piece.length; a++) 
		{
			if (parseInt(piece[a].style.left) + 100 == cordX && parseInt(piece[a].style.top) == cordY)
			{
				return a;
			} 
		}
	}

	else 
	{
		return -1;
	}
}

function right (x, y) 
{

	var cordX = parseInt(x);
	var cordY = parseInt(y);
	if (cordX < 300)
	{
		for (var a =0; a<piece.length; a++){
			if (parseInt(piece[a].style.left) - 100 == cordX && parseInt(piece[a].style.top) == cordY) 
			{
				return a;
			}

		}
	}
	else
	{
		return -1;
	}
}

function up(x, y) 
{

	var cordX = parseInt(x);
	var cordY = parseInt(y);
	if (cordY > 0)
	{

		for (var a=0; a<piece.length; a++)
		{
			if (parseInt(piece[a].style.top) + 100 == cordY && parseInt(piece[a].style.left) == cordX) 
			{
				return a;
			}

		} 
	}

	else 

	{

		return -1;

	}

}


function down (x, y) 
{
	var cordX = parseInt(x);
	var cordY = parseInt(y);

	if (cordY < 300)
	{
		for (var a=0; a<piece.length; a++)
		{
			if (parseInt(piece[a].style.top) - 100 == cordY && parseInt(piece[a].style.left) == cordX) 
			{
				return a;
			}
		}
	}

	else
	{
		return -1;
	}

} 
	

function swap (position) 
{
	var temp = piece[position].style.top;

	piece[position].style.top = elementY;

	elementY = temp;

	temp = piece[position].style.left;

	piece[position].style.left = elementX;

	elementX = temp;
}

