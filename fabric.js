var canvas = new fabric.Canvas('myCanvas');
var block_width = 30;
var block_height=30;
var player_x = 10;
var player_y = 10;
var player_image = "";
var block_image= "";
function player_update(){
    fabric.Image.fromUrl("player.png" , function(Img){
        player_image = Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(150);
        player_image.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_image);
    });
}

function newImage(getImage){
    fabric.Image.fromUrl(getImage , function(Img){  
        block_image = Img;
        block_image.scaleToWidth(block_width);
        block_height.scaleToHeight(block_height);
        block_image.set({
            top: player_y,
            left: player_x
        });
    canvas.add(block_image);
    });

}