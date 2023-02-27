/*const obj= {
    mID : document.querySelector("#my-id"),
    fID : document.querySelector("#f-id"),
    conBtn : document.querySelector("#conn"),
    msg : document.querySelector("#msg"),
    send : document.querySelector("#send"),
    Cdisplay : document.querySelector("#main")
};
var conn = new Peer();
var Aconn = undefined;

conn.on("open",(id)=> {
  obj.mID.value = id;
});
conn.on("connection",(NAConn)=>{
    if(Aconn != undefined)Aconn.close();
    obj.fID.value=NAConn.peer;
    Aconn = NAConn;
    Aconn.on("data",displayFriendMSG);
});
obj.conBtn.addEventListener("click", () => {
    if (obj.fID.value.length > 0) {
        if (Aconn != undefined) Aconn.close();
        Aconn = conn.connect(obj.fID.value);
    }
});

obj.send.addEventListener("click", () => {
    if (Aconn != undefined) {
        if (obj.msg.value.length > 0) {
            sendData(obj.msg.value);
            displayMyMSG();
            obj.msg.value = "";
        }
    } 
});


function displayMyMSG(){
    obj.Cdisplay.insertAdjacentHTML("beforeend", `
    <div class="my-msg">
        <div>
            <div class="title">${obj.mID}</div>
            <div class="content-msg">${obj.msg}</div>
        </div>
    </div>
    `)
}



function displayFriendMSG(data) {
    obj.Cdisplay.insertAdjacentHTML("beforeend", 
    `<div class="friend-msg">
        <div>
            <div class="title">${obj.fID}</div>
            <div class="content-msg">
                ${data}
            </div>
        </div>
    </div>`)
}

function sendData(data) {
    if(Aconn != undefined){
        Aconn.send(data);
    }
}*/
const obj= {
    mID : document.querySelector("#my-id"),
    fID : document.querySelector("#f-id"),
    conBtn : document.querySelector("#conn"),
    msg : document.querySelector("#msg"),
    send : document.querySelector("#send"),
    Cdisplay : document.querySelector("#main")
};
var conn = new Peer();
var Aconn = undefined;

conn.on("open",(id)=> {
  obj.mID.value = id;
});
conn.on("connection",(NAConn)=>{
    if(Aconn != undefined)Aconn.close();
    obj.fID.value=NAConn.peer;
    Aconn = NAConn;
    Aconn.on("data",displayFriendMSG);
});
obj.conBtn.addEventListener("click", () => {
    if (obj.fID.value.length > 0) {
        if (Aconn != undefined) Aconn.close();
        Aconn = conn.connect(obj.fID.value);
    }
});

obj.send.addEventListener("click", () => {
    if (Aconn != undefined && Aconn.open) {
        if (obj.msg.value.length > 0) {
            sendData(obj.msg.value);
            displayMyMSG();
            obj.msg.value = "";
        }
    } 
});


function displayMyMSG(){
    obj.Cdisplay.insertAdjacentHTML("beforeend", `
    <div class="my-msg">
        <div>
            <div class="title">${obj.mID.value}</div>
            <div class="content-msg">${obj.msg.value}</div>
        </div>
    </div>
    `)
}



function displayFriendMSG(data) {
    obj.Cdisplay.insertAdjacentHTML("beforeend", 
    `<div class="friend-msg">
        <div>
            <div class="title">${obj.fID.value}</div>
            <div class="content-msg">
                ${data}
            </div>
        </div>
    </div>`)
}

function sendData(data) {
    if(Aconn != undefined && Aconn.open){
        Aconn.send(data);
    }
}

