import ConceptsItem from "./ConceptsItem";

const Concepts = (props) => {
    console.log(props)
    
  return (
    <ul>
      <ConceptsItem title={props.item[0].title} image={props.item[0].image} description={props.item[0].description}></ConceptsItem>
      <ConceptsItem title={props.item[1].title} image={props.item[1].image} description={props.item[1].description}></ConceptsItem>
      <ConceptsItem title={props.item[2].title} image={props.item[2].image} description={props.item[2].description}></ConceptsItem>
    </ul>
  );
};

export default Concepts;
