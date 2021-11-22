import Utils from "./Utils"


const CARDS = [{
    id:"1",
    name:"10",
    masti:"clubs",
    image:"10_of_clubs"
    },
    {
    id:"2",
    name:"10",
    masti:"diamonds",
    image:"10_of_diamonds"
    },
    {
    id:"3",
    name:"10",
    masti:"hearts",
    image:"10_of_hearts"
    },
    {
    id:"4",
    name:"10",
    masti:"spades",
    image:"10_of_spades"
    },
    {
    id:"5",
    name:"2",
    masti:"clubs",
    image:"2_of_clubs"
    },
    {
    id:"6",
    name:"2",
    masti:"diamonds",
    image:"2_of_diamonds"
    },
    {
    id:"7",
    name:"2",
    masti:"hearts",
    image:"2_of_hearts"
    },
    {
    id:"8",
    name:"2",
    masti:"spades",
    image:"2_of_spades"
    },
    {
    id:"9",
    name:"3",
    masti:"clubs",
    image:"3_of_clubs"
    },
    {
    id:"10",
    name:"3",
    masti:"diamonds",
    image:"3_of_diamonds"
    },
    {
    id:"11",
    name:"3",
    masti:"hearts",
    image:"3_of_hearts"
    },
    {
    id:"12",
    name:"3",
    masti:"spades",
    image:"3_of_spades"
    },
    {
    id:"13",
    name:"4",
    masti:"clubs",
    image:"4_of_clubs"
    },
    {
    id:"14",
    name:"4",
    masti:"diamonds",
    image:"4_of_diamonds"
    },
    {
    id:"15",
    name:"4",
    masti:"hearts",
    image:"4_of_hearts"
    },
    {
    id:"16",
    name:"4",
    masti:"spades",
    image:"4_of_spades"
    },
    {
    id:"17",
    name:"5",
    masti:"clubs",
    image:"5_of_clubs"
    },
    {
    id:"18",
    name:"5",
    masti:"diamonds",
    image:"5_of_diamonds"
    },
    {
    id:"19",
    name:"5",
    masti:"hearts",
    image:"5_of_hearts"
    },
    {
    id:"20",
    name:"5",
    masti:"spades",
    image:"5_of_spades"
    },
    {
    id:"21",
    name:"6",
    masti:"clubs",
    image:"6_of_clubs"
    },
    {
    id:"22",
    name:"6",
    masti:"diamonds",
    image:"6_of_diamonds"
    },
    {
    id:"23",
    name:"6",
    masti:"hearts",
    image:"6_of_hearts"
    },
    {
    id:"24",
    name:"6",
    masti:"spades",
    image:"6_of_spades"
    },
    {
    id:"25",
    name:"7",
    masti:"clubs",
    image:"7_of_clubs"
    },
    {
    id:"26",
    name:"7",
    masti:"diamonds",
    image:"7_of_diamonds"
    },
    {
    id:"27",
    name:"7",
    masti:"hearts",
    image:"7_of_hearts"
    },
    {
    id:"28",
    name:"7",
    masti:"spades",
    image:"7_of_spades"
    },
    {
    id:"29",
    name:"8",
    masti:"clubs",
    image:"8_of_clubs"
    },
    {
    id:"30",
    name:"8",
    masti:"diamonds",
    image:"8_of_diamonds"
    },
    {
    id:"31",
    name:"8",
    masti:"hearts",
    image:"8_of_hearts"
    },
    {
    id:"32",
    name:"8",
    masti:"spades",
    image:"8_of_spades"
    },
    {
    id:"33",
    name:"9",
    masti:"clubs",
    image:"9_of_clubs"
    },
    {
    id:"34",
    name:"9",
    masti:"diamonds",
    image:"9_of_diamonds"
    },
    {
    id:"35",
    name:"9",
    masti:"hearts",
    image:"9_of_hearts"
    },
    {
    id:"36",
    name:"9",
    masti:"spades",
    image:"9_of_spades"
    },
    {
    id:"37",
    name:"ace",
    masti:"clubs",
    image:"ace_of_clubs"
    },
    {
    id:"38",
    name:"ace",
    masti:"diamonds",
    image:"ace_of_diamonds"
    },
    {
    id:"39",
    name:"ace",
    masti:"hearts",
    image:"ace_of_hearts"
    },
    {
    id:"40",
    name:"ace",
    masti:"spades",
    image:"ace_of_spades"
    },
    // {
    // id:"41",
    // name:"ace",
    // masti:"spades2",
    // image:"ace_of_spades2"
    // },
    {
    id:"42",
    name:"blackjoker",
    masti:"",
    image:"black_joker"
    },
    {
    id:"43",
    name:"jack",
    masti:"clubs",
    image:"jack_of_clubs2"
    },
    // {
    // id:"44",
    // name:"jack",
    // masti:"clubs2",
    // image:"jack_of_clubs2"
    // },
    {
    id:"45",
    name:"jack",
    masti:"diamonds",
    image:"jack_of_diamonds2"
    },
    // {
    // id:"46",
    // name:"jack",
    // masti:"diamonds2",
    // image:"jack_of_diamonds2"
    // },
    {
    id:"47",
    name:"jack",
    masti:"hearts",
    image:"jack_of_hearts2"
    },
    // {
    // id:"48",
    // name:"jack",
    // masti:"hearts2",
    // image:"jack_of_hearts2"
    // },
    {
    id:"49",
    name:"jack",
    masti:"spades",
    image:"jack_of_spades2"
    },
    // {
    // id:"50",
    // name:"jack",
    // masti:"spades2",
    // image:"jack_of_spades2"
    // },
    {
    id:"51",
    name:"king",
    masti:"clubs",
    image:"king_of_clubs2"
    },
    // {
    // id:"52",
    // name:"king",
    // masti:"clubs2",
    // image:"king_of_clubs2"
    // },
    {
    id:"53",
    name:"king",
    masti:"diamonds",
    image:"king_of_diamonds2"
    },
    // {
    // id:"54",
    // name:"king",
    // masti:"diamonds2",
    // image:"king_of_diamonds2"
    // },
    {
    id:"55",
    name:"king",
    masti:"hearts",
    image:"king_of_hearts2"
    },
    //{
    // id:"56",
    // name:"king",
    // masti:"hearts2",
    // image:"king_of_hearts2"
    // },
    {
    id:"57",
    name:"king",
    masti:"spades",
    image:"king_of_spades2"
    },
    // {
    // id:"58",
    // name:"king",
    // masti:"spades2",
    // image:"king_of_spades2"
    // },
    {
    id:"59",
    name:"queen",
    masti:"clubs",
    image:"queen_of_clubs2"
    },
    // {
    // id:"60",
    // name:"queen",
    // masti:"clubs2",
    // image:"queen_of_clubs2"
    // },
    {
    id:"61",
    name:"queen",
    masti:"diamonds",
    image:"queen_of_diamonds2"
    },
    // {
    // id:"62",
    // name:"queen",
    // masti:"diamonds2",
    // image:"queen_of_diamonds2"
    // },
    {
    id:"63",
    name:"queen",
    masti:"hearts",
    image:"queen_of_hearts2"
    },
    // {
    // id:"64",
    // name:"queen",
    // masti:"hearts2",
    // image:"queen_of_hearts2"
    // },
    {
    id:"65",
    name:"queen",
    masti:"spades",
    image:"queen_of_spades2"
    },
    // {
    // id:"66",
    // name:"queen",
    // masti:"spades2",
    // image:"queen_of_spades2"
    // },
    {
    id:"67",
    name:"redjoker",
    masti:"",
    image:"red_joker"
    },
    ]
export class Cards{
    private cards:Array<Card>
    constructor(){
        this.NewPackCards()
    }
    NewPackCards(){
        // распаковать новую колоду
        this.cards = CARDS
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