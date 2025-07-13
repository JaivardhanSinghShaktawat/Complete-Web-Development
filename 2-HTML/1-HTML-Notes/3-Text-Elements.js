/* 
--------------------------------- Text Elements ------------------------------------

--> What is White Space Collapsing ? 
    HTML ignores all the whitespaces and new line and truncates them into
    a single space.This is called as white space collapsing.

--> Heading Elements : It is used to give heading to some content or section like 
    newspaper.
    It contains 6 heading tags. 
    h1 is the largest and h6 is the smallest.

    <h1>Heading 1</h1>
    <h1>Heading 2</h1>
    <h1>Heading 3</h1>
    <h1>Heading 4</h1>
    <h1>Heading 5</h1>
    <h1>Heading 6</h1>

--> p : it stands for paragraph element.It is used to represent some text or 
    paragraph.
    Don't put block elements inside p element.

    <p>it contains paragraph content</p>

--> pre : it displays the pre-formatted text.It displays the text as it is without 
    formatting. 

    <pre>
      coding 
        is fun and 
      i like coding.
    </pre>

--> center : it is used to center an element.It is deprecated and not used anymore.

    <center>it is the center content.</center>

--> address : it is used to display address of an element.It displays the font in 
    monospace fonts.
    We use pre with address element to display the address. 

    Ex : 

    <pre>
      <address>
       hello world ,
       hello world,
       10
      </address>
    </pre>

--> sup : it stands for superscript.It is used to display something in power. 
    <p>21<sup>st</sup>August</p>
    <p>e=mc<sup>2</sup></p>
  
--> sub : it stands for subscript.It is used to display something in base. 
    <p>H<sub>2</sub>O</p>

--> kbd : it stands for keyboard input.It expects keyboard input. 

    <p>Press <kbd>Ctrl + S</kbd> to save the file</p>

--> code : it is used to display a computer program in monospace fonts.
    It is generally used with pre text.

    Ex : 
    <pre style="background-color: #eee"> 
        <code>
        #include&lt;iostream&gt; 
        using namespace std ; 

        int main(){
            cout &lt;&lt; &quot;hello world&quot; &lt;&lt; endl ; 
            return 0 ; 
        }
     </code>
    </pre>

--> samp : it is used to display the output of a computer program. 

    <p>
      <samp> Output : Error on line no. 32 </samp>
    </p>

--> small : it displays the text in small font size.  

    <p>
      <small>This is smaller text</small>
    </p>

--> var : it is used to display the variable in an expression or equation.

    Ex : 

    <p><var>e</var>=<var>m</var><var>c</var><sup>2</sup></p>

--> hr : it stands for horizontal rule.It creates a horizontal rule. 

    <hr>

--> br : it stands for break line.It is used to break the line. 

    <br>

--> abbr : it stands for abbreviation.It is used to display some abbreviation.

    <p>
      <abbr title="HyperText Markup Language">HTML</abbr>
      is a markup language which is used to structure the content of a web page.
    </p>


--> dfn : it stands for definition.It is used to display definition. 

    <p>
      <abbr title="HyperText Markup Language">HTML</abbr>
      stands for <dfn>HyperText Markup Language</dfn>
    </p>

--> hgroup : it is used to combine any heading with one or more paragraphs.
   
    <hgroup>
      <h2>coding is fun</h2>
      <p>Yes , coding is definitely fun</p>
    </hgroup>

--> mark : it is used to represent the highlighted text in yellow color. 

    <p><mark>coding is fun</mark></p>

--> ins : it is stands for inserted text.

--> del : it is used to represent the deleted text. 
    Both del and ins are used together.The deleted text is swap with the inserted
    text. 

    <p>
      HTML is <del>Hello World</del>
      <ins><dfn>Hypertext Markup Language</dfn></ins>
    </p>

--> strong : it is used to give strong importance to a word. 
    it changes the color of the text to bold. 
    
    <p>It has very <strong>strong importance</strong></p>

--> em : it is used to give stressed emphasis to a word. 
    it makes the text as italic. 

    <p>It has very <em>stressed emphasis</em></p>

--> b : it makes the text as bold. 

    <p><b>it is bold text</b></p>
 
--> i : it makes the text as italic.

    <p><i>it is italic text</i></p>

--> Note : Try to avoid the use of b and i element.Use either CSS to make the text 
    as italic or bold or use strong and em. 

--> u : it is used to underline the text. 

    <p><u>HTML</u> is <dfn>HyperText Markup Language</dfn></p>

--> s : it is creates a line through the text. 

    <p>HTML is not <s>Hello World</s></p>

--> bdo : it stands for bi-directional override.It is used to change the direction of
    the text. 

    <p><bdo dir="rtl">coding</bdo></p>
    Output : gnidoc

--> time : it is used to represent the time , date , year , month. 

    <p>
      <time datetime="2021-01-05 20:00">January 5 2021 08:00pm</time>
    </p>

--> ruby : it is used to display the pronounciation , translation and annotation of 
    eastern asian characters. 

    We use rp and rt elements with ruby. 

    <p>
      <ruby>
        Hello World
        <rp>(</rp>
        <rt>“हैलो वर्ल्ड”</rt>
        <rp>)</rp>
      </ruby>
    </p>

    The rp stands for ruby parenthesis and rt stands for ruby text.

--> noscript : it displays the text when the JavaScript of your browser is disabled
    or your browser don't support JavaScript. 

    <p>
      <noscript
        >Your browser either don't support JavaScript or your JavaScript is
        disabled</noscript
      >
    </p>

--> q : it is used to dispaly the short quoted text.It is inline level element.
    It displays the text in double quotes.  

    <p >It is short quotes text</p>

--> cite : it represents the title of a creative work like book , song , movie , author
    etc. 

     <blockquote>
        &quot;You can do anything&quot; 
        <cite>Someone</cite>
    </blockquote>

--> blockquote : it displays the long quoted text.It is block level element.It 
    displays the text without quotes but we can use html entity.

    Here in both the cite attribute points to the resource from where the content
    has been taken or used.

     <blockquote>
        &quot;You can do anything&quot; 
        <cite>Someone</cite>
    </blockquote>

--> base : it represents the base url of all the relative paths. 

    It is put at the top in head element after the meta elements and before the
    link element. 

    <base href="/img/" target="_blank" >

*/
