
import { _decorator, Component, Node } from 'cc';
import { Cards } from './Cards';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = InitGame
 * DateTime = Sat Nov 20 2021 13:54:18 GMT+0800 (Иркутск, стандартное время)
 * Author = hardhill
 * FileBasename = InitGame.ts
 * FileBasenameNoExtension = InitGame
 * URL = db://assets/scripts/InitGame.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('InitGame')
export class InitGame extends Component {

    private cards = new Cards()
    start () {
        this.cards.Shuffle()
        let card = this.cards.PullRandomCard()
    }

   
}

