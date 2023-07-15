<div align="center"><br>
  <img src="https://raw.githubusercontent.com/easyontop/easyontop.github.io/main/SonicwareV4.png"/>
  <br/>
  <a href="https://www.npmjs.com/package/sonicware.js"><img src="https://img.shields.io/npm/v/sonicwareutils.png"/></a>
  <a href="https://www.npmjs.com/package/sonicware.js"><img src="https://raster.shields.io/npm/dt/sonicwareutils.png"/></a>
  <img src="https://raster.shields.io/badge/Sonicware%20V4-00aa00.png"/><br>
</div>

## Discord

### MessageMenu
```js
const { MessageMenu } = require("sonicware.js");
// any thing here / command run
MessageMenu(message, [ /* EMBEDS HERE */ ])
```

### ActionRow
```js
const { ActionRow } = require("sonicware.js");
TextChannel.send({
    components: [new ActionRow().addComponent( /* InteractionObject */).toJSON()]
})
```

### Button, ChannelSelect, StringSelect, TextInput
*Normal usage but recommended to use `.toJSON()` at the end*
