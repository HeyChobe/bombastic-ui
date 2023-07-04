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

- **_bg_** = primary | secondary | ok | cancel | warning | hex-color (#000000) : _string_
- **_label_** : _string_
- **_onClick_** : _() => void_
- **_ghost_** : _boolean_
- **_disabled_** : _boolean_
- **_small_** : _boolean_

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

# ComboBox

```javascript

import { ComboBox } from "bombastic-ui";
import { useState } from "react";

const options = [
  { label: "pizza", value: 1 },
  { label: "hamburger", value: "hamburger" },
  { label: "tacos", value: "tacos" },
];

export default function MyPage(){
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

# ProgressBar

```javascript
import { ProgressBar } from "bombastic-ui";

<ProgressBar width="76%" bgColor="green" />;
```
