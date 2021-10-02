var canvas=new fabric.Canvas("myCanvas");
block_width=500;
block_height=500;
player_X=10;
player_Y=10;
var block_object="";
function new_image(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(block_object);
        
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;

	if(keyPressed == '82')
	{
        //key=r
		player_X=40;
	    new_image("gr.png");
	}
	if(keyPressed == '71')
	{
		//key=g
		new_image("br.png");
	}
	
	if(keyPressed == '89')
	{
		player_X=70;
		//key=y
		new_image("yr.png");
	}
	if(keyPressed == '80')
	{
		player_X=130
		//key=p
		new_image("pr.png");
	}
	if(keyPressed == '66')
	{
		player_X=20
		//key=b
		new_image("rr.png");
	}
}