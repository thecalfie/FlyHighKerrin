alert("Please be seated and take a moment to remember Kerrin Lee Wright. Once you are ready press OK and play the song at the bottom.") 
document.getElementById('playButton').addEventListener('click', function() {
            var audio = document.getElementById('audio');
            audio.play().catch(function(error) {
                console.error('Error attempting to play audio:', error);
            });
            this.style.display = 'none';  // Hide the button after clicking
        });

var quoteBox = document.getElementById("quote");
var mediabox = document.getElementById("media");
var quoteNumber = 0;
var mediaNumber = 0;
var quotes = ["<h3>In Loving Memory of<br>Kerrin Lee Wright</h3>","The strongest person I have ever known, most loving mother to Alexi, the best we could have asked for. Always loved her family with a passion and would protect them at any cost. - Mom (Debra)", " Words cannot express the depth of my sorrow and the void you've left in our lives. You fought so bravely, and your strength and grace in the face of adversity were nothing short of inspiring. Our little girl will always know the incredible woman her mother was loving, compassionate, and endlessly caring. I promise to keep your memory alive in her heart and mine, sharing with her all the wonderful moments and love we shared. Your spirit will forever be a guiding light in our lives. I love you, now and always. - Loving Husband (Gareth)", "Loved life and a strong spirit. Passionate in all she did. Lived life to the fullest. Will always be loved and remembered in our hearts - Mother-in-law (Karen)","Something I really love about my sister is her beautiful smile. It was a smile more warm than 1000 sunrises and more comforting than 1000 hugs. Fly High Kezzy I love you - Brother (Tristan)", "I love Kerrin for her straight forward honesty always. Always spoke only the truth. It takes a brave person to live your truth, and stand by it. Kerrin was truth and strength and passion. I admire her always for that openess that few can attain and live by. I will always love Kerrin and all that she was and will always be with us forever. Rest easy Kerrin - Aunt (Mandy)","When Kerrin and Gareth lived with us, this one time Kerrin and I found a dead moth and we tied it to a string and we clipped it to my mom without her knowing! The way she was streaming and running, kerrin and I burst out laughing I will never forget that moment. That was one of the many amazing memories I remember of Kerrin. She was such a fun person, sometimes she could be very straight forward but that's what I loved about her.  I will miss her so much, but I know she is happy and in peace<br> - Cousin (Annabelle)", "What I love about, Kerrin is that she loved her beautiful daughter with all her heart - Dad (Craig)", "Kerrin our 1st precious grandchild. We have and always will hold many many precious memories of you. Our special angel. Your fiesty happy spirit made you who you are. Forever in our hearts love Granny - Granny (Glendyr)","My favorite memory was Kerrin going to the front of the church on her own barefoot. When the pastor gave an opportunity to accept Jesus as her Lord and Savior. This brought great joy to my heart and especially at this time knowing she is in heaven now - Grandpa (Jeff)","if a million people love you, i will be one of them.<br>& if one person loves you, it will be me;<br>but if nobody loves you, know i am no longer here.<Br> youll always be my big sister kez, & i will always love you. - Sister (Caeyla)","To my big sister, Kerrin we will always keep you in our heart. Your presence in my life was a gift that I will forever be grateful for. Ill always remember the memories and all the fun we had. Ill miss your love and kindness, Ill miss the way we used to joke together, ill miss the way we teased each other, Ill miss our arguments. You will forever be in my heart. I Love you kezz<br> - Brother (Jarred)","Kerrin I was so happy to see you a couple of weeks ago and see you smile, I know you struggled in pain and now that pain is gone and you are with the angels, you will be missed so much but know that your beautiful girl Alexi is surrounded by so much love and she will be so well cared for for , rest in peace my first born neice, we will love you forever - Aunt (Sharron)", "You were one of the fiercest people I know, unapologetically yourself. You are one of the strongest human beings there is and your life was cut short. For what reason we never know! To watch on for the past 2 years of pain you went through, the hospital stays, the chemo, the loosing your hair and you still soldiered on until your very last breath. We as a family have a huge hole in our hearts, you will be missed forever and always, we love you so much! Rest in peace my beautiful niece xx Jono and Debbie - Aunt (Debbie), Uncle (Jono)", "Kerrin, you were a strong and feisty woman that never gave up. You are a true fighter. I will never forget the day you ran into the house after your scan and I shouted it's a girl and you said yes. It was one of the proudest days. You were an amazing woman, wife, friend, mother, daughter, and sister. You were like a daughter to me and I will forever love you and forever think of you. Thank you for all the years of love and friendship not only to me but to Chanel, Bridie, and Juan. We will forever love you. - Aunt (Bron)"];

var medias = ["LovingMemory.png","KezMom.png", "KezGar.jpg","Karen&Kez.jpg","KezTris.png", "KezMandy.jpg","KezBelle.jpg","KezDad.png","KezGran.jpg","KezGrams.jpg","KezCae.jpg","KezJar.jpg", "KezSharron.jpg", "KezJonoDebbie.jpg","KezBron.png"];



    quoteBox.innerHTML=quotes[quoteNumber]
    
    mediabox.style.background="url(Image/"+medias[mediaNumber] + ")";
    mediabox.style.backgroundSize="cover";
    mediabox.style.backgroundRepeat="no-repeat";
    mediabox.style.backgroundPosition="center";
    

function updateBoxAndMedia() {
    // Update quote
    if (quoteNumber == quotes.length - 1) {
        quoteNumber = 0;
    } else {
        quoteNumber++;
    }
    quoteBox.innerHTML = quotes[quoteNumber];

    // Update media
    if (mediaNumber == medias.length - 1) {
        mediaNumber = 0;
    } else {
        mediaNumber++;
    }
    mediabox.style.background = "url(Image/" + medias[mediaNumber] + ")";
    mediabox.style.backgroundSize = "cover";
    mediabox.style.backgroundRepeat = "no-repeat";
    mediabox.style.backgroundPosition = "center";

    console.log("Quote Number: " + quoteNumber);
    console.log("Media Number: " + mediaNumber);
}

setInterval(updateBoxAndMedia, 22000);
