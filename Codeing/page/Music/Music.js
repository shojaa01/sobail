const ASK = document.getElementById('ASK');
const ASKA = document.getElementById('ASKA');
const ASKB = document.getElementById('ASKB');
const Back = document.getElementById('back');
const text = document.getElementById('Text');



ASKA.addEventListener('click' , FunkASK = () =>{
    ASK.style.display='flex';
    // console.log("click");
    text.innerHTML="گاهی ممکن است به دلیل شلوغی رستوران ، روز های خاص ، موزیک نامناسب از پخش موزیک شما خودداری کنیم ";
})
ASKB.addEventListener('click' , FunkASK = () =>{
    ASK.style.display='flex';
    text.innerHTML="از جمله دلایل کم بودن موزیک : شلوغی رستوران ، مناسب نبودن آهنگ برای صدای زیاد ";
    // console.log("click");
})
Back.addEventListener('click' , FunkASK = () =>{
    ASK.style.display='none';
    // console.log("click");
})
