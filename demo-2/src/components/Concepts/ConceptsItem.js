import ConceptsImage from "./ConceptImage";

const ConceptsItem =(props)=>{

  return(
    <li>
      <ConceptsImage src={props.image} title={props.title}></ConceptsImage>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  )
}
export default ConceptsItem;