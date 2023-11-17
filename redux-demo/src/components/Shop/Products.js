import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "First Book I have a wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "Second Book I have a wrote",
  },
  {
    id: "p3",
    price: 10,
    title: "My Third Book",
    description: "Third Book I have a wrote",
  },
  {
    id: "p4",
    price: 11,
    title: "My Fourth Book",
    description: "Fourth Book I have a wrote",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
