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
