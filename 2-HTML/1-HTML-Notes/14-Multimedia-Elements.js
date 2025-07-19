/* 
--------------------------------- Multimedia Elements ------------------------------

--> How to add audio in HTML ? 
    audio element is used to add audio in our HTML document. 

    <audio src="" controls autoplay muted loop preload="auto">
    </audio>

    src : it specifies the location of the audio file.
    controls : it provides controls to the audio player. 
    muted : it mutes the audio when it is auto played. 
    autoplay : it plays the audio when the web page loads. 
    loop : it loops the audio. 
    preload : it determines how to preload the audio when the web page loads.

    preload has three values. 

    1. none : it means not to preload anything when the web page loads.It is the
    default value. 

    2. metadata : it tells the browser to preload the metadata about the audio 
    file such as audio length and basic information. 

    3. auto : it tells the browser to preload the complete audio file with all the
    information. 

--> How to add video in HTML ? 
    Video element is used to add Video in our HTML document. 

    <video src="" controls autoplay muted loop preload="auto" poster="image.jpeg">
    </video>

    src : it specifies the location of the video file.
    controls : it provides controls to the video player. 
    muted : it mutes the audio of the video when it is auto played. 
    autoplay : it plays the video when the web page loads. 
    loop : it loops the video. 
    preload : it determines how to preload the video when the web page loads.

    preload has three values. 

    1. none : it means not to preload anything when the web page loads.It is the
    default value. 

    2. metadata : it tells the browser to preload the metadata about the video 
    file such as video length and basic information. 

    3. auto : it tells the browser to preload the complete video file with all the
    information. 

--> embed : it is used to embed external multimedia content such as pdf , audio , 
    video , plugins etc. 

    object : it also used to embed external multimedia content. 

    Note : The main usecase of embed and object was to embed external plugins to 
    add some feature to the browser.

    Plugin : a piece of program that adds some functionality to the browser.
    Plugins are now not supported by the browser , hence embed and object are 
    not used.

    Don't use embed and object to add audio , video , pdf , images etc.
    Use audio , video , img , iframe element for that. 

--> We can also use audio and video with source element to provide different 
    formats of audio and video for multiple device supports. 

--> svg : it stands for scalable vector graphics.It is used to create 2D shapes and
    diagrams.It has good quality and have smaller size.

     <svg height="500" width="500">
      <circle
        cx="200"
        cy="200"
        r="5"
        fill="red"
        stroke-width="4"
        stroke="gray"
      ></circle>
      </svg>

*/
