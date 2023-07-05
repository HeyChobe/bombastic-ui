# Button

```javascript
import { Button } from "bombastic-ui";

<Button
  bg="primary"
  label="Primary Ghost Button"
  small
  ghost
  onClick={() => console.log("hola")}
/>;
```

## Allowed Properties

| Prop     	| Description                                               	| Type     	| Default                           	| Allowed Inputs                                      	|
|----------	|-----------------------------------------------------------	|----------	|-----------------------------------	|-----------------------------------------------------	|
| bg       	| Property that changes button background color             	| string   	| "primary"                         	| ["primary", "secondary", "ok", "cancel", "warning"] 	|
| label    	| String content of the  Button component                   	| string   	| "button"                          	| any string                                          	|
| onClick  	| Propert that gives the button an action                   	| function 	| console.warn("No event provided") 	| functions                                           	|
| ghost    	| Property that adjust the visibility of the Button element 	| boolean  	| false                             	| [true, false]                                       	|
| disabled 	| Property that shows if Button component can be used       	| boolean  	| false                             	| [true, false]                                       	|
| small    	| Property that adjust the size of the Button               	| boolean  	| false                             	| [true, false]                                       	|

# Checkbox

```javascript
import { Checkbox } from "bombastic-ui";

<Checkbox
  checked={valueState}
  disabled={false}
  ghost={false}
  color="primary"
  onChange={() => setValueState(!valueState)}
/>;
```

## Allowed Properties

| Prop     	| Description                                              	| Type     	| Default    	| Allowed Inputs                                     	|
|----------	|----------------------------------------------------------	|----------	|------------	|----------------------------------------------------	|
| Checked  	| Property that tells you if a box has been checked or not 	| Boolean  	| False      	| [True, False]                                      	|
| Disabled 	| Property that shows if a box can be used or not          	| Boolean  	| False      	| [True, False]                                      	|
| Ghost    	| Property that changes the visibility of the component    	| Boolean  	| False      	| [True, False]                                      	|
| Color    	| Property that changes color of the checkbox              	| string   	| "primary"  	| ["primary", "secondary", "ok", "cancel","warning"] 	|
| OnChange 	| Function to checkbox component dispatch                  	| Function 	| () => void 	| Functions                                          	|

# Title

```javascript
import { Title } from "bombastic-ui";

<Title h={1} label="Hola a todos" mode="center" />;
```

## Allowed Properties

|    Prop    |              Description              |         Type         |  Default  |                             Allowed Inputs                              |
| :--------: | :-----------------------------------: | :------------------: | :-------: | :---------------------------------------------------------------------: |
|     h      | Represents the level of html "h" tag  |        number        |     1     |                            1\|2\|3\|4\|5\|6                             |
|   label    | String content of the title component |        string        |  "Title"  |                                 strings                                 |
|   italic   |           Italic font style           |       boolean        |   false   |                               false\|true                               |
| underlined |        Underlined front style         |       boolean        |   false   |                               false\|true                               |
|   strong   |           Font weight style           |       boolean        |   true    |                               false\|true                               |
|    mode    |             Text position             |        string        |  "left"   |                  "left"\|"right"\|"center"\|"justify"                   |
|   color    |              Font color               | string\|color inputs | "primary" | "primary"\|"secondary"\|"ok"\|"cancel"\|"warning"\|hex color\|rgb color |
|  onClick   |   Event handler for onClick action    |       function       | (e)=>void |                                functions                                |

# Input Text

```javascript
import { InputText } from "bombastic-ui";
import { useState } from "react";

export default function MyPage() {
  const [value, setValue] = useState("");

  return (
    <InputText
      placeholder="hola"
      value={value}
      color="green"
      labelColor="red"
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```
## Allowed Properties

| Prop        	| Description                                                	| Type     	| Default          	| Allowed Inputs                                      	|
|-------------	|------------------------------------------------------------	|----------	|------------------	|-----------------------------------------------------	|
| placeholder 	| Property that holds a text to show before typing something 	| String   	| "Type something" 	| Any strings                                         	|
| onChange    	| Event handler for onChange actions                         	| Function 	| void             	| Functions                                           	|
| value       	| Property that contains the text that will go in the input  	| any      	|        ""        	| Any                                                 	|
| color       	| Property that changes the color of text                    	| string   	| "primary"        	| ["primary", "secondary", "ok", "cancel", "warning"] 	|
| disabled    	| Property that shows if component can be shown              	| boolean  	| "false"          	| ["true","false"]                                    	|
| labelColor  	| Prperty that changes text input text color                 	| string   	| "dark"           	| ["dark", "light"]                                   	|

# Accordion

```javascript
import { Accordion } from "bombastic-ui";

<Accordion
  title={"HOla"}
  description={
    "asdf ashdfkj sdjfkh skdjf lfkjashdfjk shdkjfhsdkj skdfjhs djsfsdk  s d fdf sd skdjf"
  }
  bg="light"
/>;
```
## Allowed Properties

| Prop        	| Description                                      	| Type   	| Default                               	| Allowed Inputs   	|
|-------------	|--------------------------------------------------	|--------	|---------------------------------------	|------------------	|
| Title       	| Property that contains the title of the element  	| String 	| "Title"                               	| Any strings      	|
| Description 	| Property contains the description of the element 	| String 	| "This is an example of the paragraph" 	| Any strings      	|
| bg          	| Property that changes accordion background color 	| String 	| "Dark"                                	| ["Light","Dark"] 	|

# ComboBox

```javascript

import { ComboBox } from "bombastic-ui";
import { useState } from "react";

const options = [
  { label: "pizza", value: 1 },
  { label: "hamburger", value: "hamburger" },
  { label: "tacos", value: "tacos" },
];

export default function MyPage()
    const [comboBoxValue, setComboBoxValue] = useState("")

    return(
        ...
        <ComboBox theme="light" options={options} onChange={setComboBoxValue} />
        ...
    )
```

## Allowed Properties

|     Prop     |                                                                                              Description                                                                                              |                        Type                         |                       Default                        |                   Allowed Inputs                    |
| :----------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------: | :--------------------------------------------------: | :-------------------------------------------------: |
|    theme     |                                                                                    Default options colors provided                                                                                    |                       string                        |                        "dark"                        |                   "dark"\|"light"                   |
|  themeColor  |                                                                   Overwrite the default colors provided to make a custom component                                                                    |                       string                        |                          ""                          |                hexColors\|rgbColors                 |
| placeholder  |                                                                           Placeholder text to identify the custom combobox                                                                            |                       string                        |                  "Select an option"                  |                       strings                       |
| labelBgColor | When the placeholder is focus, it moves to the top of the input to act like a label. This property changes the background color to make a transparent effect between the borders and background page. |                       string                        |                          ""                          |                hexColors\|regColors                 |
|   options    |                                                                            Labels and values to select inside the combobox                                                                            |  Array of {label: string, value: string \| number}  | [{label: "Option 1", value: 1}, {label: "Option 2"}] |  Array of {label: string, value: string \| number}  |
|   onChange   |                                                                              Function to use the setStateAction dispatch                                                                              | Dispatch<SetStateAction<string\|number\|undefined>> |                          -                           | Dispatch<SetStateAction<string\|number\|undefined>> |

# Avatar

```javascript
import { Avatar } from "bombastic-ui";

//Avatar with image
<Avatar
    alt="example"
    src="https://depor.com/resizer/CeJO5MssLNlQ7i6Ty30J5JZRcLQ=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/IJFZ5ZGT2NAJJOWIRBXBUZRSCI.jpg"
    pointer/>

//Avatar without image
<Avatar letter="CC" pointer />
```

## Allowed Inputs

|  Prop   |                     Description                      |  Type   | Default |    Allowed Inputs    |
| :-----: | :--------------------------------------------------: | :-----: | :-----: | :------------------: |
|   alt   |          Alt text when image doesn't appear          | string  |    -    |       strings        |
|   src   |                     Image source                     | string  |    -    |       strings        |
| pointer |      Cursor pointer when hover Avatar component      | boolean |  false  |     false\|true      |
|  width  |                 Width of the circle                  | string  | "100px" |       strings        |
| height  |                 Height of the circle                 | string  | "100px" |       strings        |
| letter  | Letter that appears when Avatar exists without image | string  |    -    |       strings        |
| bgColor |  Background Color for Avatar component with letters  | string  |    -    | hexColors\|rgbColors |

# ImageCard

```javascript
import { ImageCard } from "bombastic-ui";

<ImageCard
  title="Titulo"
  text="Este es mi texto, la verdad super chivo"
  titleButton="Ver mas"
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
  alt="alt image"
  theme="light"
/>;
```
## Allowed Properties

| Prop          	| Description                                            	| Type   	| Default                   	| Allowed Inputs   	|
|---------------	|--------------------------------------------------------	|--------	|---------------------------	|------------------	|
| Title         	| Property that contains the Title of the imageCard      	| string 	| "Title"                   	| Any string       	|
| text          	| Property that contains text to describe imageCard      	| string 	| "Example of text content" 	| Any string       	|
| titleButton   	| Property that contains text for the button             	| string 	| "Go Somewhere"            	| Any string       	|
| src           	| Property that contains an image link                   	| string 	| ""                        	| Any string       	|
| alt           	| Contains an alternative description for the imageCard  	| string 	| ""                        	| Any string       	|
| theme         	| it sets how is the imageCard will look with our themes 	| string 	| "dark"                    	| ["dark","light"] 	|
| bgButtonColor 	| Property that changes the color of the button          	| string 	| ""                        	| RGB colors       	|

# ProgressBar

```javascript
import { ProgressBar } from "bombastic-ui";

<ProgressBar width="76%" bgColor="green" />;
```
## Allowed Properties

| Prop          	| Description                                            	| Type   	| Default                   	| Allowed Inputs   	|
|---------------	|--------------------------------------------------------	|--------	|---------------------------	|------------------	|
| width         	| Property that sets the width of the progress bar      	| int    	| "Title"                   	| [1-100]      	|
| bgColor        	| Property that changes the color of the bar            	| string 	| ""                        	| RGB colors       	|

# Rating

```javascript
import { Rating } from "bombastic-ui";

<Rating
  color="warning"
  disabled={false}
  readonly={false}
  value= {valueState}
  onChange={(e) => setValueState(e.value)}
/>;
```

## Allowed Properties

| Prop     	| Description                                                  	| Type     	| Default    	| Allowed Inputs                                     	|
|----------	|--------------------------------------------------------------	|----------	|------------	|----------------------------------------------------	|
| Color    	| Property that changes color of the text                      	| Boolean  	| "primary"  	| ["primary", "secondary", "ok", "cancel","warning"] 	|
| readOnly 	| Property that allows to write or just read                   	| Boolean  	| False      	| [True, False]                                      	|
| disabled 	| Property the rating is avilable to the user                  	| Boolean  	| False      	| [True, False]                                      	|
| value    	| Property that contains the number that will appear on rating 	| any      	| 0          	| Int                                                	|
| OnChange 	| Function that allows to make changes to rating component     	| Function 	| () => void 	| Functions                                          	|

# SearchBar

```javascript
import { SearchBar } from "bombastic-ui";

<SearchBar
  color="primary"
  disabled={false}
  onChange={(e) => setValueState(e.value)}
  onSubmit={(e) => submit(e.value)}
/>;
```

## Allowed Properties

| Prop     	| Description                                                                   	| Type     	| Default          	| Allowed Inputs                                      	|
|----------	|-------------------------------------------------------------------------------	|----------	|------------------	|-----------------------------------------------------	|
| Color    	| Property that changes the color of the Search Bar component                   	| string   	| "primary"        	| ["primary", "secondary", "ok", "cancel", "warning"] 	|
| Disabled 	| Property that disables the searchbar so user cant search                      	| Boolean  	| false            	| [true, false]                                       	|
| onChange 	| Function that handles the response of what the user searched when its typing  	| Function 	| (e: any) => void 	| Function                                            	|
| onSubmit 	| Function that handles the response of what the user searched when its entered 	| Function 	| (e: any) => void 	| Function                                            	|

# Pagination

```javascript
import { Pagination } from "bombastic-ui";
import {useState} from "react"

export default function MyPage() {

    const [pagination, setPagination] = useState("")

    return(
    ...
    <Pagination total={10} onChange={setPagination} page={pagination} />;
    ...
    )
}
```
