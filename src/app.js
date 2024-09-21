import "./styles.css";
import { ContextMenu } from "./menu";
import { ClicksModule } from "./modules/clicks.module";
import { BackgroundModule } from "./modules/background.module";
import { ShowTime } from "./modules/time.module";
import { GuessNumberModule } from "./modules/guessNumber.module";

const menu = new ContextMenu("#menu");

const clicksModule = new ClicksModule();
const backgroundModule = new BackgroundModule();
const showTime = new ShowTime();
const guessNumber = new GuessNumberModule();

menu.add(clicksModule);
menu.add(backgroundModule);
menu.add(showTime);
menu.add(guessNumber);
