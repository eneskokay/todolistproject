let addingform = document.getElementById("addingform");
let addingtext = document.getElementById("addingtextlaber");
let optionselectform = document.getElementById("optionselectform");
let optionselect = document.getElementById("secenek");
let todo = document.getElementById("todo");
let addSubmit1 = document.getElementById("add1");
let addSubmit2 = document.getElementById("add2");
let listitems = document.getElementsByClassName("right-top-child");
let icerik = document.getElementById("icerik");
let RightTopList = document.getElementById("RightTopList");
let FirstChild = document.querySelector(".right-top-child-first");
let ContainerOfİcerik = document.querySelector(".containeroficerik");
let addinglist = document.getElementById("addinglist");
let remover = document.querySelector(".right-top-remover");



let ArrayOfList = [];
  eventler();

function eventler()  {
searchinput.addEventListener("keyup", key);
}
function key(event) {
const allDivs = document.querySelectorAll(".silici");
const searchinput = document.getElementById("searchinput");
  veri = event.target.value;
  veri = veri.toLowerCase();
  allDivs.forEach(divs);
  function divs(i) {
  const alldivText = i.textContent.toLowerCase();
  if(alldivText.indexOf(veri) === -1) {
    i.classList.add("none");
  }
  else {
    i.classList.remove("none");

  }
  }
}


RightTopList.addEventListener("click", bas); 
function bas(event){
let a = document.querySelector("div#valueoflist.right-top-list-left-box");
  if (event.target == a) {
    ContainerOfİcerik.classList.toggle("none");


    let ListLeftBox = document.getElementsByClassName("YeniListeElemani");
for(let i = 0; i<ListLeftBox.length; i++) {

ListLeftBox[i].addEventListener("click", takeinput); 
function takeinput(event) {
  
  let a = 0;
  for(let m = 0; m<=i; m++) {
    if(ListLeftBox[m].innerText == event.target.innerText) {
      a++;
    }
  }

let k = 0;


for(let f = 0; f<ListLeftBox.length; f++) {
  if(ListLeftBox[f].innerText == event.target.innerText) {
    k++;
  }

  if(a == k) {
      FreeList();
      ArrayOfList[i].TRboolean = true;
    localStorage.setItem("list", JSON.stringify(ArrayOfList));
    location.reload();
      }
   }
}
  }
    FirstChild.classList.toggle("border");
  }
}


addingform.addEventListener("submit", takeinputs);
function takeinputs(event) {


let addingvalue = addingtext.value;
let optionselectdata = WhoIsTrue();

if (addingvalue.length > 0) {
    
    let data = {value : addingvalue, section : optionselectdata, junked: false,id:WhichId()}
    localStorage.setItem(localStorage.length, JSON.stringify(data));

    }

addingtext.value = "";

  let c = localStorage.getItem("list");
  localStorage.removeItem("list");   
  localStorage.setItem("list",c);

  location.reload();

}

function WhichId() {
  ArrayOfList = JSON.parse(localStorage.getItem("list"))
  for(let i = 0; i<ArrayOfList.length; i++) {
    if(ArrayOfList[i].TRboolean == true) {
      s = ArrayOfList[i].id;
    }
  }
  return s;
}




document.addEventListener("DOMContentLoaded", listsirala);



function listsirala() { 
  
  if (localStorage.getItem("list") === null) {
    let c = [{value:"Default", TRboolean:true, id:0}];
    localStorage.setItem("list", JSON.stringify(c));
  }

yazdir();


let completebuttonclick = document.getElementsByClassName("complebuttoncontainer-svg");
let arrayNew = [];
for (c = 1; c<localStorage.length; c++) {
  if(localStorage.getItem(c) !== null)  {
    arrayNew.push(JSON.parse(localStorage.getItem(c)));
  }
}
for (let h = 0; h<completebuttonclick.length; h++) {
        completebuttonclick[h].addEventListener('click', compleclicked);
        function compleclicked(event) {
          let a = completebuttonclick[h].parentElement.parentElement.getElementsByTagName("p")[0].innerText;
          let o = 0;
          for (let i = 0; i<=h; i++) {
            if(completebuttonclick[i].parentElement.parentElement.getElementsByTagName("p")[0].innerText == a) {
              o++;
          }
        }
        let t = 0;
            for (let i = 0; i<arrayNew.length; i++) {
              if(arrayNew[i].value == a && arrayNew[i].section == WhoIsTrue()) {
                t++;
                if (t==o){
                if(arrayNew[i].junked == true){
                arrayNew[i].junked = false;
              }
              else {
                arrayNew[i].junked = true;
               }
              }
             }
            }
          for (let i = 1; i<=arrayNew.length; i++) {
            ii = arrayNew[i-1];
            localStorage.setItem(i, JSON.stringify(ii));
          }
          location.reload();
        }
      }




      
let removebuttonclick = document.getElementsByClassName("remove");


for(let i = 0; i<removebuttonclick.length; i++) {

  removebuttonclick[i].addEventListener("click", removeclick);
  function removeclick(event) {
      let allDivs = document.querySelectorAll('.data .whiteboxes .silici');
    let a = removebuttonclick[i].parentElement.parentElement.getElementsByTagName("p")[0].innerText;
    let o = 0;
    for (let m = 0; m<=i; m++) {
      if(completebuttonclick[m].parentElement.parentElement.getElementsByTagName("p")[0].innerText == a) {
        o++;
    }
  }
  
  let t = 0;
    for (let i = 0; i<arrayNew.length; i++) {
        if(arrayNew[i].value == a && arrayNew[i].section == WhoIsTrue()) {
    t++;
    if (t == o) {
        arrayNew.splice(i,1);
        break;
      }
    }
  }
  
  window.localStorage.clear();
    for (let i = 1; i<=arrayNew.length; i++) {
      ii = arrayNew[i-1];
      localStorage.setItem(i, JSON.stringify(ii));
      }
    localStorage.setItem("list", JSON.stringify(ArrayOfList));
    location.reload();
  }
}


let ArrayOfListVAR = []; 


ArrayOfListVAR.push(JSON.parse(localStorage.getItem("list")));
ArrayOfListVAR = ArrayOfListVAR[0];
for (i = 0; i<ArrayOfListVAR.length; i++) { 
  let value = ArrayOfListVAR[i].value;
  if (ArrayOfListVAR[i].TRboolean == true) {
    document.getElementById("valueoflist").innerText = value;
    let renk = "true";
    AddListUI(value, renk);
  }
  else{
    AddListUI(value);
  }
}
return ArrayOfListVAR;
}





function AddListUI(deger, renk) { 
  let icerik = document.getElementById("icerik");
  let div = document.createElement("div");
  if(renk == "true") {
  div.innerHTML = `<div class='right-top-child drop' style="background-color:rgb(83, 142, 182);"><div class='right-top-list-left-box YeniListeElemani' >${deger}</div></div>`;
  }
  else {
  div.innerHTML = `<div class='right-top-child drop'><div class='right-top-list-left-box YeniListeElemani'>${deger}</div></div>`;
  }
  icerik.appendChild(div);
}






    






ArrayOfList = JSON.parse(localStorage.getItem("list")); 
remover.addEventListener("click",function(event){
  ArrayOfList = JSON.parse(localStorage.getItem("list"));
  let arrayNew = [];

  for (c = 1; c<localStorage.length; c++) {
    if(localStorage.getItem(c) !== null)  {
      arrayNew.push(JSON.parse(localStorage.getItem(c)));
  }
}
  let silinen;
  for (i = 0; i<ArrayOfList.length; i++)  {
    if(ArrayOfList[i].TRboolean == true) {
      let b = ArrayOfList[i].id;
      silinen = b;
      if(b > 0) {
        ArrayOfList.splice(i, 1);
        let l = 0;
        while(l < arrayNew.length) {
          if(arrayNew[l].id == b) {
            arrayNew.splice(l, 1);
        }
          else{
            l++;
          }
        }
      }
      else {
        FreeList();
        location.reload();
      }
    }
  }

  window.localStorage.clear();

let a = ArrayOfList.length -1;
ArrayOfList[a].TRboolean = true;
for(let i = 0; i<ArrayOfList.length; i++) {
  ArrayOfList[i].id = i;
}
  
  for(let t = 0; t<arrayNew.length; t++) {
  
   if(arrayNew[t].id > silinen) {
    arrayNew[t].id -= 1;
  }
}


for (let i = 1; i<=arrayNew.length; i++) {
  ii = arrayNew[i-1];
  localStorage.setItem(i, JSON.stringify(ii));
}


localStorage.setItem("list", JSON.stringify(ArrayOfList));

    location.reload();
       }
)
 







optionselectform.addEventListener("submit", ListSubmit);
function ListSubmit(event) {
  let list = JSON.parse(localStorage.getItem("list"));
  let addingvalue = {value: addinglist.value, TRboolean: true, id:list.length}
  FreeList();

  ArrayOfList.push(addingvalue);

  if(addinglist.value.length > 0) {
    localStorage.setItem("list", JSON.stringify(ArrayOfList));
    }

  }



function FreeList() { 
  ArrayOfList = JSON.parse(localStorage.getItem("list"));
  console.log(ArrayOfList)
  for(let i=0; i<ArrayOfList.length; i++) {
    ArrayOfList[i].TRboolean = false;
  }
  console.log(ArrayOfList)
}






function WhoIsTrue() {
  let result;
  ArrayOfList = JSON.parse(localStorage.getItem("list"))
  ArrayOfList.forEach(Myfunction);
  function Myfunction(items, index, arr) {
      if(arr[index].TRboolean == true) {
        result = arr[index].value;
      }
  }
  return result;
}














function yazdir(){
result = {};


let listarray = [];
listarray= JSON.parse(localStorage.getItem("list"));


for (let i = 1; i < localStorage.length; i++){



  let icerik = document.querySelector(".list");
  let div = document.createElement("div");
  let index = WhoIsTrue();
  let gorunum = false;


let getitem = JSON.parse(localStorage.getItem(i));
  if(getitem.section == index && getitem.id == WhichId()) {
    gorunum = true;
    result[i] = JSON.parse(localStorage.getItem(i));
    if(JSON.parse(localStorage.getItem(i)).junked == false) {
      div.innerHTML = `<div class="data whiteboxes silici">
      <div class="complebuttoncontainer"><svg class="complebuttoncontainer-svg"><path class="complebutton" d="M8.63 0.05c2.37,0 4.52,0.96 6.07,2.51 1.55,1.55 2.51,3.7 2.51,6.07 0,2.37 -0.96,4.52 -2.51,6.07 -1.55,1.55 -3.7,2.51 -6.07,2.51 -2.37,0 -4.52,-0.96 -6.07,-2.51 -1.55,-1.55 -2.51,-3.7 -2.51,-6.07 0,-2.37 0.96,-4.52 2.51,-6.07 1.55,-1.55 3.7,-2.51 6.07,-2.51zm5.33 3.25c-1.36,-1.36 -3.25,-2.21 -5.33,-2.21 -2.08,0 -3.97,0.84 -5.33,2.21 -1.36,1.36 -2.21,3.25 -2.21,5.33 0,2.08 0.84,3.97 2.21,5.33 1.36,1.36 3.25,2.21 5.33,2.21 2.08,0 3.97,-0.84 5.33,-2.21 1.36,-1.36 2.21,-3.25 2.21,-5.33 0,-2.08 -0.84,-3.97 -2.21,-5.33z"/></svg></div>
      <p class="todo">${JSON.parse(localStorage.getItem(i)).value}</p>
      <div class="removebutton"><svg class="remove"><g><path d="M8.92 0.35c2.37,0 4.51,0.96 6.06,2.51 1.55,1.55 2.51,3.7 2.51,6.06 0,2.37 -0.96,4.51 -2.51,6.06 -1.55,1.55 -3.7,2.51 -6.06,2.51 -2.37,0 -4.51,-0.96 -6.06,-2.51 -1.55,-1.55 -2.51,-3.7 -2.51,-6.06 0,-2.37 0.96,-4.51 2.51,-6.06 1.55,-1.55 3.7,-2.51 6.06,-2.51zm5.33 3.25c-1.36,-1.36 -3.25,-2.21 -5.33,-2.21 -2.08,0 -3.97,0.84 -5.33,2.21 -1.36,1.36 -2.21,3.25 -2.21,5.33 0,2.08 0.84,3.97 2.21,5.33 1.36,1.36 3.25,2.21 5.33,2.21 2.08,0 3.97,-0.84 5.33,-2.21 1.36,-1.36 2.21,-3.25 2.21,-5.33 0,-2.08 -0.84,-3.97 -2.21,-5.33z"/><rect class="fil0" x="3.24" y="7.76" width="11.37" height="2.33"/></g></svg></div>
      </div>`;
    }
    else {
      div.innerHTML = `<div class="data whiteboxes silici">
      <div class="complebuttoncontainer"><svg class="complebuttoncontainer-svg"><g style="fill:green;" >
      <path class="complebutton" style="fill:green; transform:scale(1.37);" d="M8.87 0.05c2.44,0 4.64,0.99 6.24,2.58 1.6,1.6 2.58,3.8 2.58,6.24 0,2.44 -0.99,4.64 -2.58,6.24 -1.6,1.6 -3.8,2.58 -6.24,2.58 -2.44,0 -4.64,-0.99 -6.24,-2.58 -1.6,-1.6 -2.58,-3.8 -2.58,-6.24 0,-2.44 0.99,-4.64 2.58,-6.24 1.6,-1.6 3.8,-2.58 6.24,-2.58zm5.48 3.34c-1.4,-1.4 -3.34,-2.27 -5.48,-2.27 -2.14,0 -4.08,0.87 -5.48,2.27 -1.4,1.4 -2.27,3.34 -2.27,5.48 0,2.14 0.87,4.08 2.27,5.48 1.4,1.4 3.34,2.27 5.48,2.27 2.14,0 4.08,-0.87 5.48,-2.27 1.4,-1.4 2.27,-3.34 2.27,-5.48 0,-2.14 -0.87,-4.08 -2.27,-5.48z"/>
      <path class="complebutton" style="fill:green; transform:scale(1.37);" d="M4.02 8.82c0,0 2.46,1.5 3.62,4.34 0,0 2.41,-5.07 6.08,-8.52 0,0 -1.91,-0.96 -6.09,5.72 0,0 -1.88,-2.37 -3.61,-1.54z"/>
     </g></svg></div>
      <p class="todo"><s>${JSON.parse(localStorage.getItem(i)).value}</s></p>
      <div class="removebutton"><svg class="remove"><g style="fill:red;"><path  d="M8.92 0.35c2.37,0 4.51,0.96 6.06,2.51 1.55,1.55 2.51,3.7 2.51,6.06 0,2.37 -0.96,4.51 -2.51,6.06 -1.55,1.55 -3.7,2.51 -6.06,2.51 -2.37,0 -4.51,-0.96 -6.06,-2.51 -1.55,-1.55 -2.51,-3.7 -2.51,-6.06 0,-2.37 0.96,-4.51 2.51,-6.06 1.55,-1.55 3.7,-2.51 6.06,-2.51zm5.33 3.25c-1.36,-1.36 -3.25,-2.21 -5.33,-2.21 -2.08,0 -3.97,0.84 -5.33,2.21 -1.36,1.36 -2.21,3.25 -2.21,5.33 0,2.08 0.84,3.97 2.21,5.33 1.36,1.36 3.25,2.21 5.33,2.21 2.08,0 3.97,-0.84 5.33,-2.21 1.36,-1.36 2.21,-3.25 2.21,-5.33 0,-2.08 -0.84,-3.97 -2.21,-5.33z"/><rect class="fil0" x="3.24" y="7.76" width="11.37" height="2.33"/></g></svg></div>
      </div>`;
    }
    icerik.appendChild(div);
  }
  if (gorunum == true) {
    let none = document.querySelector(".list").classList.remove("none");
    }
  }
}





