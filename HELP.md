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
