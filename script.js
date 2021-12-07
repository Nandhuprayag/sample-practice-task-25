console.log("hello!");

let mydiv=document.getElementById('demo');mydiv.style.display="flex";
mydiv.style.width="1000px";mydiv.style.height="2400px";mydiv.style.flexWrap="wrap";
mydiv.style.border="2px solid grey";mydiv.style.backgroundColor="pink";

let mycart=document.getElementById('clear');mycart.style.border="2px solid brown";
mycart.style.width="300px";mycart.style.height="800px";mycart.style.backgroundColor="#cddc39";
mycart.innerText="CART";mycart.style.textAlign="center";
mycart.style.float="right";
mydiv.appendChild(mycart);

let mytotal=document.createElement('div');mytotal.style.textAlign="center";
mytotal.innerText=("Total ="+ " "+0);mytotal.style.width="120px";mytotal.style.height="40px";
mytotal.style.backgroundColor="white";mytotal.style.border="1px solid red";
mycart.appendChild(mytotal);




async function getdata()
{
    try {
         var myapi=await fetch('https://fakestoreapi.com/products');
         var mydata=await myapi.json();
         console.log(mydata);
         for(let i=0;i<mydata.length;i++)
         {
             var mycard=document.createElement('div');mycard.style.border="2px solid #cddc39";
             mycard.style.width="25%";mycard.style.height="300px";mycard.style.backgroundColor="green";
             mycard.innerText=(mydata[i].title);
             mycard.setAttribute("id",i);

             var myprice=document.createElement('p');
             myprice.innerHTML=mydata[i].price;
             mycard.appendChild(myprice);

             var flag=document.createElement("img");
             flag.setAttribute("src",mydata[i].image);
             flag.setAttribute("width","50px");
             mycard.appendChild(flag)
             
             let mybutton=document.createElement('button');
             mybutton.innerText="Add to CART";mybutton.style.textAlign="right";
             mycard.appendChild(mybutton);
            //  mybutton.setAttribute("id",i);
            mybutton.addEventListener('click',function()
            {
                this.style.display="none";
                setTimeout(function()
                {
                    
                    
                    var innertitle_box=document.createElement('div')
                    innertitle_box.style.width="290px";innertitle_box.style.height="50px";
                    innertitle_box.style.border="2px solid black";innertitle_box.style.backgroundColor="white";
                     mycart.appendChild(innertitle_box)
                    
                    let mytitle=document.createElement('div');
                    mytitle.innerText=mydata[i].title;
                    innertitle_box.appendChild(mytitle);
                   
                    var innerprice_box=document.createElement("div");
                    innerprice_box.style.width="290px";innerprice_box.style.height="50px";
                    innerprice_box.style.border="2px solid brown";innerprice_box.style.backgroundColor="white";
                    mycart.appendChild(innerprice_box);

                    var price=document.createElement("div");
                    price.innerText=mydata[i].price;price.setAttribute("id",i);
                    innerprice_box.appendChild(price);

                    var total=document.createElement('div');total.style.border="1px solid green";
                    total.style.width="150px";total.style.height="50px";total.style.backgroundColor="white";
                    total.setAttribute("id",i);
                    total.innerText=("Total ="+mydata[i].price);
                   
                    mycart.appendChild(total);


                },1000)
            })

             mydiv.appendChild(mycard);
       }
       


    } catch (error) {
        console.log(error);
    }
}
getdata();


function cal(x)
{
    x.style.display="none";
}


document.body.appendChild(mydiv);





// var capital=document.createElement('p');
//                 capital.innerText="CART"
//                 mycart.appendChild(capital);
                
//                 var innertitle_box=document.createElement('div')
//                  innertitle_box.style.width="290px";innertitle_box.style.height="50px";
//                  innertitle_box.style.border="2px solid black";innertitle_box.style.backgroundColor="white";
//                 mycart.appendChild(innertitle_box);
                 
//                 var data=document.createElement('div');
//                  data.innerText=mydata[i].title;
//                 innertitle_box.appendChild(data);

//                 var innerprice_box=document.createElement("div");
//                 innerprice_box.style.width="290px";innerprice_box.style.height="50px";
//                 innerprice_box.style.border="2px solid black";innerprice_box.style.backgroundColor="white";
//                 mycart.appendChild(innerprice_box);

//                 var price=document.createElement("div");
//                 price.innerText=mydata[i].price;price.setAttribute("id",i);
//                 innerprice_box.appendChild(price);
                
//                 var total=document.createElement('div');
//                 total.style.width="200px";total.style.height="60px";
//                 total.style.backgroundColor="white";total.style.border="1px solid black";
//                 total.innerText=0;
//                 mycart.appendChild(total);