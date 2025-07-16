/* 
------------------------------------------ Images ----------------------------------

--> There are two types of images 

    1. Foreground Images : We use them by using img element. 
    2. Background Images : We use them by using CSS background properties. 

--> The img element is used to add image in our HTML document. 

     <img
      src=""
      alt=""
      height=""
      width=""
      title=""
      loading=""
    />

    src : it specifies the location of the image.It stands for source. 

    alt : it stands for alternate text.It displays the text when the image fails
    to load.It is very important for SEO , assistive technologies and accessibility.
    Always give alt attribute even if it's empty.

    title : it is a global attribute that provides information about the html 
    element. 

    height : it sets the height of the image. 

    width : it sets the width of the image. 

--> What is Lazy Loading ? 
    It is a concept/technique which is used to opitmize the web application.Instead of loading 
    all the images at once , browser loads the images one by one.When the user is 
    going to view the image than the browser loads the image.Browser don't loads
    the images that are present below the viewport.When the user is just going to 
    view the image than browser loads the image. 

    loading = "lazy" 

    By default it's value is eager. 

--> What is Map And Area ? 
    Map and Area elements are used to create a hyperlink on a specific part or area
    of an image.

     <img
      src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg"
      alt="landscape image"
      height="400"
      width="550"
      title="landscape image"
      loading="lazy"
      usemap="#landscape-img"
    />

    <map name="landscape-img">
      <area
        shape="rect"
        coords="250,400,0,0"
        title="landscape img"
        href="https:www.pexels.com"
        target="_blank"
      />
    </map>

--> What is Picture ? 
    Picture element is used to provide the support of images on different devices.
    It allows us to provide same image with different formats as well different
    images on different resolutions.

    srcset : it specifies the location of the image. 
    type : it specifies the format of the image. 
    media : it specifies the resolution at which the image should get displayed.

     <picture>
      <source
        srcset="
          https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg
        "
        media="(max-width : 457px)"
        type="image/jpeg"
      />
      
      <img
        src="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg"
        alt="clouds"
        title="clouds"
        height="100%"
        width="500"
        loading="lazy"
      />
    </picture>
*/
