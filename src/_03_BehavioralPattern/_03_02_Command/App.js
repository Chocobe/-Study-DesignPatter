import Button from "./Button.js";
import Light from "./Light.js";
import LightOnCommand from "./LightOnCommand.js";
import LightOffCommand from "./LightOffCommand.js";

const light = new Light();
const button = new Button();

button.press(new LightOnCommand(light));
button.press(new LightOffCommand(light));

button.undo();
button.undo();
button.undo();
button.undo();