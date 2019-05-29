function cong(){
    var s1 = document.getElementById('so1').value;
    var s2 = document.getElementById('so2').value;
    var tong = parseInt(s1)+ parseInt(s2);
    document.getElementById('ketqua').innerHTML="Tong la:"+tong;
}
function tru(){
    //lay du lieu
    var s1 = document.getElementById('so1').value;
    var s2 = document.getElementById('so2').value;
    var hieu = parseInt(s1)- parseInt(s2);
    document.getElementById('ketqua').innerHTML="hieu la:"+hieu;
}




function xuly(pheptinh){
    var s1 = document.getElementById('so1').value;
    var s2 = document.getElementById('so2').value;

    var ketqua;
    switch (pheptinh) {
        case 'cong':
            var tong =  parseInt(s1) + parseInt(s2);
            ketqua = "Tong la:" +tong;
            break;
        case 'tru':
            var hieu = parseInt(s1) - parseInt(s2);
            ketqua = "Hieu la:" +hieu;
            break;
        default:
            break;
    }
    var result = document.getElementById('ketqua');
    result.style.position = 'relative';
    result.style.top = '100px';
    result.innerHTML = ketqua;
}