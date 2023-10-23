import ConceptsItem from './conceptsItem'
import Card from './card'

function Concepts(props) {

    for (let i=0; i<3; i++) {
        return ( 
        <Card className="concepts">
        <ConceptsItem 
        title={props.items[i].title}
        image={props.items[i].image}
        decription={props.items[i].description}
        />
        <ConceptsItem 
        title={props.items[i+1].title}
        image={props.items[i+1].image}
        decription={props.items[i+1].description}
        />
        <ConceptsItem 
        title={props.items[i+2].title}
        image={props.items[i+2].image}
        decription={props.items[i+2].description}
        />
        </Card>
        )
    }

//  //    Or Using
// return(
//     <Card className="concepts">
//         <ConceptsItem 
// title={props.items[0].title}
// image={props.items[0].image}
// decription={props.items[0].description}
// />
// <ConceptsItem 
// title={props.items[1].title}
// image={props.items[1].image}
// decription={props.items[1].description}
// />
// <ConceptsItem 
// title={props.items[2].title}
// image={props.items[2].image}
// decription={props.items[2].description}
// />
// </Card>
// )
}

export default Concepts