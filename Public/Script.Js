function DefaultClick(Text){
let userName = document.getElementById(Text) ;
if (userName.value =="UseName"){
    userName.value='';
} 
else if(userName.value =="")userName.value ="UseName" 
else userName.value = userName.value+userName.Text;
}
function DefaultPassword(ID){
    let id = document.getElementById(ID);
    if(id.value=='PassWord'){
        id.value='';
    }
    else {
        id.value = id.value+id.Text;
    }
}