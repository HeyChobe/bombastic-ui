# Button

- **Example of Use**

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

- **Allowed Properties**
  - **_bg_** = primary | secondary | ok | cancel | warning | hex-color (#000000) : _string_
  - **_label_** : _string_
  - **_onClick_** : _() => void_
  - **_ghost_** : _boolean_
  - **_disabled_** : _boolean_
  - **_small_** : _boolean_
