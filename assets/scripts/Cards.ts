import { CardFile } from "./CardFile"
import Utils from "./Utils"

export class Cards{
    private cards:Array<Card>
    constructor(){
        this.NewPackCards()
    }
    NewPackCards(){
        // распаковать новую колоду
        this.cards = new Array<Card>()
        this.cards = [...CardFile]
        return this.cards.length
    }
    Shuffle(){
        //перемешать карты
        shuffle(this.cards)
    }
    
    GetCard(cards:Array<Card>,name:string,masti:string):Card{
       let element =  cards.find(crd=>{return (crd.name == name && crd.masti == masti)})
       return element
    }
    PullRandomCard():Card{
        let len = this.cards.length
        let idx = Utils.getRandomInt(0,len-1)
        let cards = this.cards.splice(idx,1)
        if(cards.length>0){
            return cards[0]
        }else{
            return undefined
        }
        
    }
    GetCardsVol(){
        return this.cards.length
    }
}
export type Card = {
    id:string,
    name:string,
    masti:string,
    image:string
}

function shuffle(array:Array<any>) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }