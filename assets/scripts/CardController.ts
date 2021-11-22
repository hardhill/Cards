
import { _decorator, Component, Node, resources, Sprite, SpriteFrame, log, Vec2, Vec3 } from 'cc';
import { Card } from './Cards';
const { ccclass, property } = _decorator;


 
@ccclass('CardController')
export class CardController extends Component {
    private card:Card
    private open:boolean
    private selected:boolean
    start(){
        this.selected = false
        this.node.on(Node.EventType.MOUSE_DOWN,()=>{
            let name = this.node.name
            this.SelectCard(name)
        },this)
    }

    public SetCard(card:Card, open:boolean = false){
        if(!open){
            resources.load('cards/cardbackside/spriteFrame', SpriteFrame,(err,data)=>{
                this.node.getComponent(Sprite).spriteFrame = data;
            })
        }else{
            let path = 'cards/'+card.image+'/spriteFrame'
            resources.load(path,SpriteFrame,(err,spriteFrame)=>{
                this.node.getComponent(Sprite).spriteFrame = spriteFrame
            })
        }
    }

    SelectCard(name:string){
        if(name == 'card0'||name=='card1'||name=='card2'||name=='card3'){
            if(!this.selected){
                this.node.translate(new Vec3(0,-30,0))
                
            }else{
                this.node.translate(new Vec3(0,30,0))
            }
            this.selected = !this.selected
        }
    }
    
    public IsSelected():boolean{
        return this.selected
    }
}


