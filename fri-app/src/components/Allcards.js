import Card from './Card';
import one from '../assets/img/dress.jpg';
import two from '../assets/img/mens.jpg';
import three from '../assets/img/womens.jpg';
import four from '../assets/img/mall.jpg';
function Allcards(){
    return(
        <div style={{display: "inline-flex"}}>
            <Card img={one}/>
            <Card img={two}/>
            <Card img={three}/>
            <Card img={four}/>
        </div>
    )
}

export default Allcards;