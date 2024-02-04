//Create date variable
var date = new Date()

//Load HTML DOM
let display_date = 'Date: ' + date.toLocaleDateString()

//Define variable to store predicted emotion
$(document).ready(function() {
    $("#display_date").html(display_date)
})

let predicted_emotion
//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call
let input_text = {'text': $('#text').val()}
        $.ajax({
            type: 'POST',
            url: '/predict-emotion',
            data: JSON.stringify(input_text),
            data_type: 'json',
            content_type: 'application/json',
            success: function(result)
            
              {
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url

                // Result Received From Flask ----->JavaScript
                
                // Display Result Using JavaScript----->HTML
                $('#prediction').html(predicted_emotion)
                $('#prediction').css('display', block)
                $('#emo_img_url').attr('src', emo_url)
                $('#emo_img_url').css('display', block)
            },
            //Error function
            error: function(result) {
                alert(result.responseJSON.message)
            }
        });
    });
})

