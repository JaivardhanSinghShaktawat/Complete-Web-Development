/* 
-------------------------------- Forms And Inputs ----------------------------------

--> What are Forms ? 
    Forms are used to send the data from the client to the server.
    It's a way to share infromation from the client to the server side. 

    <form action="" method="" enctype></form>

    action : it specifies the path/location where the form data should get submitted.
    method : it specifies the http method to send the data. 
    enctype : it specifies the encryption type to encrypt the data. 

--> label : the label element is used to create a label (title/caption) for the 
    input element.It is very important and helps assistive technologies and screen
    readers.Always use label with input and form elements. 

    <label for="idOfInputElements"></label>

    for : it expects id of some input element to label it. 

--> Inputs : The inputs elements are part of the form. 
    We have different types of inputs. 

    text : it expects text input from the user.  
    number : it expects number input from the user.We can also send data in e. 
    tel : it expects mobile number from the user.
    password : it expects some password input from the user. 
    email : it expects email input from the user.
    month : it outputs month in a calendar format.
    time : it outputs time 
    date : it outpus date
    week : it outputs week
    color : it expects color value from the user.
    url : it expects url input from the user. 
    file : it expect file from the user. 
    checkbox : it is used to select one or multiple options. 
    radio : it is used to select one option from multiple options. 


--> Form And Input Elements Attribute

    name : it is used to identify the input element in the backend.When from is 
    send than the data is sent in key value pairs.The key is the name and value is
    input value. 

    placeholder : it specifies or displays some text until someone starts typing.
    The placeholder displays the text to indicate about the type of the input 
    element. 

    required : it makes the input filed as required to fill. 
    
    checked : it is used in checkbox.It checks the checkbox by default. 

    selected : it is used in select and options.It selects the specified option
    value by default. 

    min : it specifies the minimum number that user can input. 

    max : it specifies the maximum number that user can input. 

    min and max are used in input with type as number or tel. 

    minlength : it specifies he minimum characters that the user can enter. 

    maxlength : it specifies the maximum characters that the user can enter. 

    pattern : it accepts regex and is used to accept a paritcular number. 

    autofocus : it makes the element as focus.We can use this attribute only once
    in the whole form. 

    autocomplete : it suggest some suggestion when we type from the previous 
    input values. 

    readonly : it makes the input element as readonly. 

    disabled : it makes the input element as disabled.

    It's more good to use readonly instead of using disabled.

    value : it specifies the value of the input elements. 

    step : it is a value by which the value of the input elements will get 
    increase. 

    list : it is used to create a dropdown list using datalist with input element. 

--> textarea : it is used to input a large text or message from the user. 

    <textarea rows="" cols="" placeholder=""></textarea>

    Her rows and cols defines the size of the textarea. 

--> progress : it is used to display or output the progress of a task like 
    downloading , uploading , loading etc. 

    <progress value="50" min="5" max="100" step="2"></progress>

--> meter : it specifies the scaler or fractional value. 
    Ex : displaying RAM usage , battery percentage

    min : it specifies the minimum value
    max : it specifies the maximum value
    low : it is the lowest value when the color of the meter get's changed.
    high : it is the highest value after which the color of the meter get's changed. 

    <meter value="40" low="20" high = "80" min="0" max="100"></meter>

--> select and options and optgroup 
    select : it is used to create a dropdown menu. 
    option : it is used to create option for dropdown menu. 
    optgroup : it is used to create sub option 

--> datalist : it is used to create a dropdown list with input element as type text. 

--> output : it is used the result of some calculation. 
    
    for : it specifies the id of the elements for which the calculations should done. 

--> fieldset : it is used to divide the form into multiple parts.
    
    legend : it represents the caption of fieldset or part of the form. 
*/
