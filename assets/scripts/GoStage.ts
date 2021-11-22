
import { _decorator, Component, Node, log } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('GoStage')
export class GoStage extends Component {

    DoStage(){
        log('Click')
    }
}
