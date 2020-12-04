import React, { Component} from "react";
import Card from "../components/Card";



class Deck extends Component{
constructor(props){
       super(props)
       this.state ={
        cards:[]
       }

       this.animation_in_progess = false;
}

componentDidMount(){
    let new_cards = [];
    let center = {
        x: parseFloat(this.deck.style.width) / 2,
        y: parseFloat(this.deck.style.height) / 2

    }
    let total_number_of_card =9;
    let middle_card_by_index = Math.floor(total_number_of_card / 2);
    let new_x = 0;
    let new_y = 0;
    let new_zIndex = 0;
    let new_scale = 1;


    for(let i=0; i<10; i++){
        if(i < middle_card_by_index){// left side deck
            new_x = center.x - (300 * (middle_card_by_index - i));
            new_y = center.y

            new_x = new_x + ((0.333 * 300) * (middle_card_by_index - i));

            new_zIndex = i;

            new_scale = Math.pow(0.95, (middle_card_by_index - i));

        }else{
            new_x = center.x + (300 * (i - middle_card_by_index));
            new_y = center.y

            new_x = new_x - ((0.333 * 300) * (i - middle_card_by_index));


            new_zIndex = i * (-1.0);

            new_scale = Math.pow(0.95, (i - middle_card_by_index));
        }
        new_cards.push(
            <Card
             color={colors[i]}
             x={new_x}
             y={new_y}
             z_index={i === middle_card_by_index ? 100 : new_zIndex} 
             scale={new_scale}
             picsum_image = {`https://picsum.photos/${300 + (20 * i)}/200`}
              />
        );
    }
   this.setState({cards:new_cards});
}



handle_next = () =>{
if(!this.animation_in_progess){

    this.animation_in_progess =true;
    let last_card_left = this.deck.children[this.deck.children.length ].style.left;
    let last_card_zIndex = this.deck.children[this.deck.children.length ].style.zIndex;
    let last_card_transform = this.deck.children[this.deck.children.length ].style.transform;



    for(let i = this.deck.children.length - 1; i > 0; i--){
        this.deck.children[i].style.transitionDuration = '1.0s';
        this.deck.children[i].style.left = this.deck.children[i - 1].style.left;
        this.deck.children[i].style.zIndex = this.deck.children[i - 1].style.zIndex;
        this.deck.children[i].style.transform = this.deck.children[i - 1].style.transform;
    }

    this.deck.children[0].style.transitionDuration = '0.2s';
    this.deck.children[0].style.transform = `translate(-50%, -50%) scale(0)`;

    setTimeout(() => {
        this.deck.children[0].style.transitionDuration = '0.0s';
    this.deck.children[0].style.left = last_card_left
    this.deck.children[0].style.zIndex = last_card_zIndex

    this.deck.appendChild( this.deck.children[0]);
    
    setTimeout(() => {
        this.deck.children[this.deck.children.length -1].style.transitionDuration = '0.2s';
        this.deck.children[this.deck.children.length -1].style.transform = last_card_transform;

        this.animation_in_progess =false;
},100);

},700);

}else{
    return;
}


}

handle_previous = () =>{
    if(!this.animation_in_progess){

        this.animation_in_progess =true;
        let first_card_left = this.deck.children[this.deck.children.length -1].style.left;
        let first_card_zIndex = this.deck.children[this.deck.children.length -1].style.zIndex;
        let first_card_transform = this.deck.children[this.deck.children.length -1].style.transform;
    
    
    
        for(let i = 0 ; i < this.deck.children.length - 1; i++){
            this.deck.children[i].style.transitionDuration = '1.0s';
            this.deck.children[i].style.left = this.deck.children[i + 1].style.left;
            this.deck.children[i].style.zIndex = this.deck.children[i + 1].style.zIndex;
            this.deck.children[i].style.transform = this.deck.children[i + 1].style.transform;
        }
    
        this.deck.children[this.deck.children.length - 1].style.transitionDuration = '0.2s';
        this.deck.children[this.deck.children.length - 1].style.transform = `translate(-50%, -50%) scale(0)`;
    
        setTimeout(() => {
        this.deck.children[this.deck.children.length - 1].style.transitionDuration = '0.0s';
        this.deck.children[this.deck.children.length - 1].style.left = first_card_left
        this.deck.children[this.deck.children.length - 1].style.zIndex = first_card_zIndex
    
        this.deck.insertBefore( this.deck.children[this.deck.children.length - 1], this.deck.children[0]);
        
        setTimeout(() => {
            this.deck.children[0].style.transitionDuration = '0.2s';
            this.deck.children[0].style.transform = first_card_transform;
    
            this.animation_in_progess =false;
    },100);
    
    },700);
    
    }else{
        return;
    }
    

}


render(){
return(
    <div className = 'deck'>
   ?
    <button className = 'deck-arrow' style={styles.deck_arrow} onClick={this.handle_previous}>Previous</button>
    <button  className = 'deck-arrow' style={styles.deck_arrow} onClick={this.handle_next}>Next</button>
    {/* <button  className = 'deck-arrow' style={styles.deck_arrow} onClick={this.handle_next}>Next</button> */}
    <div ref={ref_id => this.deck = ref_id} style={styles.deck}>
         {this.state.cards}
    </div>

    </div>
)

}

}
const colors = [
    'red',
    'blue',
    'green',
    'purple',
    'white',
    'orange',
    'pink',
    'grey',
    'yellow'
]

const styles ={
    deck:{
         position: 'absolute',
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         height: '300px',
         width: '300px',
        //  backgroundColor: 'green'
    },
    deck_arrow:{
        // display : 'none'
    }
 }
 


export default Deck;
