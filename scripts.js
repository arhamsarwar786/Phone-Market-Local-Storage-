
///////////////////////////////////    Hide  Show   Divs All    //////////////////////////////////


// $(".mainOppo").css({"display":"none"})  
$(".oppo").css({"display":"none"})
$(".hwauie").css({"display":"none"})
$(".vivo").css({"display":"none"})
$(".techno").css({"display":"none"})

$(".product1").click(function(){
    $(".oppo").css({"display":"block"})
    $(".main").css({"display":"none"})
})


$(".product2").click(function(){
    $(".hwauie").css({"display":"block"})
    $(".main").css({"display":"none"})
})

$(".product3").click(function(){
    $(".vivo").css({"display":"block"})
    $(".main").css({"display":"none"})
})
$(".product4").click(function(){
    $(".techno").css({"display":"block"})
    $(".main").css({"display":"none"})
})

$("#addCart").click(function(){
    $(".oppo").hide()
    $(".main").show()  
})
$("#addCart1").click(function(){
    $(".hwauie").hide()
    $(".main").show()  
})
$("#addCart2").click(function(){
    $(".vivo").hide()
    $(".main").show()
})
$("#addCart3").click(function(){
    $(".techno").hide()
    $(".main").show()
})


var numbering=0


var i=0
var counter1=0;
var j=0
var counter2=0
var k=0
var counter3=0
var l=0
var counter4=0
function _main(){
    $(".showCounter1 p").text(`
    ${counter1}        
    `)
    $(".showCounter2 p").text(`
    ${counter2}        
    `)
    $(".showCounter3 p").text(`
    ${counter3}            
    `)
    $(".showCounter4 p").text(`
    ${counter4}        
    `)

$(".numbering").text(`${numbering}`)

document.querySelector(".data1 h2").innerHTML=`
      Price :  ${i}  Rs      
      `
      document.querySelector(".data2 h2").innerHTML=`
      Price : ${j}  Rs      
      `
      document.querySelector(".data3 h2").innerHTML=`
      Price : ${k}  Rs      
      `
      document.querySelector(".data4 h2").innerHTML=`
      Price : ${l}  Rs      
      `
    var TotalSum=`${i+j+k+l}`
    console.log(TotalSum);
    number=JSON.stringify(TotalSum)
    localStorage.setItem("key",number)
    
    
    
    var output=localStorage.getItem("key")
    $("#SUM").text(`Total Amount : ${JSON.parse(output)} Rs`)

}
_main()



////////////////////////////////////  Add Functions  //////////////////////////////////////





function _add1(){
i=i+47000
counter1++;
numbering++;
_main()
}
function _add2(){
j=j+38000
counter2++;
numbering++;

_main()    
}
function _add3(){
k=k+54000
counter3++;
numbering++;
_main()    
}
function _add4(){
    l=l+23000
    counter4++;
    numbering++;
    _main()    
    }

////////////////////////////////////  Remove Functions  //////////////////////////////////////

function _remove1(){
i=i-47000
counter1--;
numbering--;
_main()    
}
function _remove2(){
j=j-38000
counter2--;
numbering--;
_main()    
}
function _remove3(){
k=k-54000
counter3--;
numbering--;
_main()    
}
function _remove4(){
    l=l-23000
    counter4--;
    numbering--;
    _main()    
    }





////////////////////////////////////////////   OPPO Script   //////////////////////////////////////////////

var image1=document.querySelector(".mobileDiv img")
function change_image(getImage){
    // image.src=getImage.src
    image1.src=getImage.src
    console.log(getImage.src);
}
$(".zoomer").elevateZoom();



// Hwauie Phone //

var image2=document.querySelector(".mobileDivHua img")
function change_image1(getImage){
    // image.src=getImage.src
    image2.src=getImage.src
    console.log(getImage.src);
}
$(".zoomer1").elevateZoom();


// VIVO Phone

var image3=document.querySelector(".mobileDivVivo img")
function change_image2(getImage){
    // image.src=getImage.src
    image3.src=getImage.src
    console.log(getImage.src);
}
$(".zoomer2").elevateZoom();



//  TECHNO Phone



var image4=document.querySelector(".mobileDivTechno img")
function change_image3(getImage){
    // image.src=getImage.src
    image4.src=getImage.src
    console.log(getImage.src);
}
$(".zoomer3").elevateZoom();











