prediction_1 = ""
prediction_2 = ""
Webcam.set({
width:355,
height:305,
image_format: 'png',
png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function modelLoaded() {
    console.log('Model Loaded!');
}
 
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, goResult);
}

funtion gotResult(error, results) {
    if (error) {
        console.log(error);
    } else{
        console.log(results);
        document.getElementById("result_emotion_name1").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        if(results[0].label == "happy")
        {
            document.getElementById("update_emoji").innerHTML = "&#128513;";
        }
        if(results[0].label == "sad")
        {
            document.getElementById("update_emoji").innerHTML = "&#128513;";
        }
        if(results[0].label == "angry")
        {
            document.getElementById("update_emoji").innerHTML = "&#128513;";
        }
        }
    }
}
