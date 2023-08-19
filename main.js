prediction_1 = "";


Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90

});
  
camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
  console.log('ml5.version:', ml5.version);
  
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gPa6lT7eC/model.json',modelLoaded);

  function modelLoaded(){
    console.log('Model Loaded!');
  }

  function speak()
  {
        var synth = window.speechSynthesis;
        speak_data_1 = "The first prediction is "+prediction_1;
        
        var utterThis= new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
  }

  function predict()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResults);
  }
  
  function gotResults(error, results){
    if (error){
      console.error(error);
    }else {
      console.log(results);
      document.getElementById("result_emotion_name1").innerHTML = results[0].label;
      prediction_1 = results[0].label;
      speak();

      if (results[0].label=="Good"){
        document.getElementById("result_emoji1").innerHTML = "&#128076;";
      }
      
      if (results[0].label=="Amazing"){
        document.getElementById("result_emoji1").innerHTML = "&#128077;";
      }
       
      if (results[0].label=="Victory"){
        document.getElementById("result_emoji1").innerHTML = "&#9996;";
      }

     
    }

  }
  
  

