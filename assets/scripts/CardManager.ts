
import {Card, Cards} from './Cards'
import { _decorator, Component, Scheduler, log } from 'cc';
import { CardController } from './CardController';
const { ccclass, property } = _decorator;


 
@ccclass('CardManager')
export class CardManager extends Component {

    private coloda:Cards
    private hideCards:Array<Card>
    private gameCards:Array<Card>
    
    start () {
        this.coloda = new Cards()
        this.hideCards = new Array<Card>()
        this.gameCards = new Array<Card>()
        
        this.Startgame()
        
    }

    
    Startgame(){
        this.coloda.NewPackCards()
        this.coloda.Shuffle();
        for(let i=0;i<4;i++){
            //раздать карты скрытые
            let card = this.coloda.PullRandomCard()
            this.hideCards.push(card)
            let childnode = this.node.getChildByName('ucard'+i.toString())
            childnode.getComponent(CardController).SetCard(card,true)
        }
        this.scheduleOnce(()=>{
            //перевернуть карты через 3 сек
            for(let i=0;i<this.hideCards.length;i++){
                let childnode = this.node.getChildByName('ucard'+i.toString())
                childnode.getComponent(CardController).SetCard(this.hideCards[i],false)
            } 
            // раздать открытые карты
            for(let i=0;i<4;i++){
                let card = this.coloda.PullRandomCard()
                this.gameCards.push(card)
                let childnode = this.node.getChildByName('card'+i.toString())
                childnode.getComponent(CardController).SetCard(card,true)
            }
        }, 3)
    }
    GoStage(){
        let errors = 0
        let success = 0
        let sel_error = 0
        log('Hide card before:', this.hideCards[0].name,this.hideCards[1].name,this.hideCards[2].name,this.hideCards[3].name)
        // работаем с открытыми картами
        // формируем массив в который добавляются карты для удаления
        let killCard:Array<Card> = new Array<Card>()
        for(let i=0;i<this.gameCards.length;i++){
            let card = this.gameCards[i]
            let childnode = this.node.getChildByName('card'+i.toString())
            if(childnode.getComponent(CardController).IsSelected()){
                let sel_card_name = card.name
                let correct = this.CheckedCard(sel_card_name)
                if(correct){
                    success++
                    // отметить элементы на удаление
                    killCard = killCard.concat(this.hideCards.filter(crd=>crd.name===sel_card_name))
                }else{
                    sel_error++
                    // не убирать из скрытых карту
                }
            }else{
                let des_card_name = card.name
                let noncorrect = this.CheckedCard(des_card_name)
                if(noncorrect){
                    errors++  
                    //убрать из скрытых карту 
                    killCard = killCard.concat(this.hideCards.filter(crd=>crd.name===des_card_name))
                }
            }
        }
        
        // удалить битые карты в скрытых
        for(let k=0;k<killCard.length;k++){
            let idx = this.hideCards.indexOf(killCard[k])
            if(idx>=0){
                this.hideCards.splice(idx,1)
            }
        }

        //добрать набор скрытых карт до 4-х
        let n_ostatok = this.hideCards.length
        let n = 4-n_ostatok
        for(let i=0; i<4;i++){
            let childnode = this.node.getChildByName('ucard'+i.toString())
            if(i>n_ostatok-1){
                let card = this.coloda.PullRandomCard()
                if(typeof(card)!='undefined'){
                    this.hideCards.push(card)
                    childnode.getComponent(CardController).SetCard(card,true)
                    this.scheduleOnce(()=>{
                        childnode.getComponent(CardController).SetCard(card,false)
                    },3)
                }    
                
            }else{
                let card = this.hideCards[i]
                childnode.getComponent(CardController).SetCard(card,false)
            }
        }

        log('----------------------------')
        log('Правильно отмеченных',success)
        log('Неправильно отмеченных',sel_error)
        log('Недоотмеченных',errors)
        log('Hide card now:', this.hideCards[0].name,this.hideCards[1].name,this.hideCards[2].name,this.hideCards[3].name)
    }

    private CheckedCard(cardname:string):boolean{
     
        let fcard = this.hideCards.find(card=>card.name == cardname)
        if(typeof(fcard)!='undefined'){
            return true
        }else{
            return false
        }        
    }

}



