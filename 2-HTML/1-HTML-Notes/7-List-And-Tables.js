/* 
--------------------------------- List And Tables ----------------------------------

--> What are Lists ? 
    Lists are used to arrange items.

    There are four types of lists

    1. Ordered List
    2. Unordered List
    3. Description List
    4. Nested List

--> 1. Ordered List : It is the list where list items are organized and structured in 
    a specific order. 

    <ol type="1" start="5">
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
      <li value="4">List Item 4</li>
      <li>List Item 5</li>
    </ol>

--> 2. Unordered List : It is the list where list items are not organized and not 
    structured.

    <ul type="disc">
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
      <li>List Item 4</li>
      <li>List Item 5</li>
    </ul>

--> 3. Description List : It is the which is used to describe the content of the list
    items.

    <dl>
      <dt>What is Programming?</dt>
      <dd>Programming means to program a computer</dd>
      <dt>HTML stands for ?</dt>
      <dd><dfn>HyperText Markup Language</dfn></dd>
    </dl>

--> 4. Nested List : It is the list where the list items contains another list as 
    child and so on.

    <ol>
      <li>
        <ul>
          <li>List Item 01</li>
          <li>List Item 02</li>
          <li>List Item 03</li>
          <li>List Item 04</li>
          <li>
            <ol>
              <li>List Item 001</li>
              <li>List Item 002</li>
              <li>List Item 003</li>
              <li>List Item 004</li>
              <li>List Item 005</li>
              <li>List Item 006</li>
            </ol>
          </li>
        </ul>
      </li>
    </ol>

--> What are Tables ? 
    Tables are used to store the tabular data or the data that is present in form of 
    rows and columns. 

    caption : it is used to give the title of the table element.

    colspan : it is used to span or increase the column size. 
    rowspan : it is used to span or increase the row size. 

    colgroup : it is used to combine or group together the col elements.
    <colgroup>
        <col class="first-column" span="1" />
        <col class="second-column" span="1" />
        <col class="third-column" span="1" />
    </colgroup>

    colgroup can also be used to style a specific or group of columns but it is 
    generally used to wrap or group together multiple columns.

    col : it is used to style a specific or group of columns. 

    <col class = "first-column" span = "1"/>
    span = "number of columns you want to select to apply styles"

    thead : it contains the header part of the table. 
    tbody : it contains the body part of the table. 
    tfoot : it contains the footer part of the table. 

    tr : it represents the table row which contains multiple table cell or table 
    data. 

    td : it represents the table data. 

*/
