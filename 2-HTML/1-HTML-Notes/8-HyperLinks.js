/* 
-------------------------------------- HyperLinks ----------------------------------

--> What is HyperLink ? 
    It is a text which contains links to other text.It is a text that contains links,
    when we click on this link than we redirect to a new web page.
    We use anchor element to create a hyperlink or hypertext.

    <a href="https://www.google.com" target="_blank" title="Google Search">Search</a>

    href : it specifies the location of the linked content. 
    target : it specifies where the linked content should get displayed. 
    title : it provides additional information when we hover on an element. 

--> Different HyperText or HyperLink 

    1. Download HyperLink or Link
    <a href="image.png" download="nature-image">Download Image</a> |

    2. External HyperLink (Linking or connection external web pages)
    <a href="https://www.google.com" target="_blank" title="Google Search">Search</a>

    3. Internal HyperLink : When we create hyperlink to web page that are present
    on the same server. 
    <a href="index.html">Home</a> | <a href="about.html">About</a> 

    4. HyperLink to some content/section (using id)
    When we want to create hyperlink to some content or section than we use id.
     <header id="header">
      <a href="#footer">Go To Footer</a>
    </header>

    <footer id="footer">
      <a href="#header">Go To Header</a>
    </footer>

    5. Mail HyperLink
    <a href="mailto:yourmail">Mail</a> 

    6. Phone HyperLink
    <a href="tel:+phoneNumber">Contact</a> 

    7. Go to top HyperLink 
    <a href="#">Back To Top</a> 

    8. HyperLink to image 

--> Note : The scroll-behaviour : smooth property can be used to make the scrolling 
    smooth.

*/
