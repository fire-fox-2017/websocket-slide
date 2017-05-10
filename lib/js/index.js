 
 // Initialize Firebase
var config = {
  apiKey: "AIzaSyBVNc5IWxsjhsjlulEQhe5uhOZEI4pGTxs",
  authDomain: "slide-presentation-3e337.firebaseapp.com",
  databaseURL: "https://slide-presentation-3e337.firebaseio.com",
  storageBucket: "slide-presentation-3e337.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database();

function changeSlide(slideId, urlImg) {
  firebase.database().ref('slide/' + slideId).set({
    urlImage : urlImg
  });
}
 
var readSlide = firebase.database().ref('slide/' + '001');
	readSlide.on('value', function(data) {
	app.index = data.val().index
	console.log('vue', app.index);
}); 

 var app = new Vue({
   el: '#app',
   data:{
     index : 0,
     slide : ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg']
   },
   methods:{
     next(){
       var data = this.slide.length
       if(this.index >= data - 1){
         this.index = data - 1
       } else {
        this.index++
       }
       changeSlide('001', this.index)
       // console.log(this.index);
     },
     prev(){
       if(this.index > 0){
         this.index--
       } else {
         this.index = 0
       }
       changeSlide('001', this.index)
       console.log(this.index);
     }
   },
   created: function(){
     changeSlide('001', this.index)
     console.log(changeSlide('001', this.index));
   }
 })