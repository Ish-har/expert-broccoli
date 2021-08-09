menu_list_array = ["Veg Margherita Pizza","Cheese Pizza","Olive Pizza","Pineapple Pizza"
                    ];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}
//Complete the code
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards>"
for(var i=0;i<menu_list_array.length;i++){

htmldata = htmldata +'"<div class="card>"'+'<img src="pizza.png">'+menu_list_array[i]+'</div>'}
htmldata = htmldata = '</section'
document.getElementById("add_item")
//Complete the code

}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
//Complete the code
}