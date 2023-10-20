import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "My first book",
    price: 6,
    description: "The first book that I have ever wrote"
  },
  {
    id: "p2",
    title: "My second book",
    price: 5,
    description: "The second book that I have ever wrote"
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (<ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))}

      </ul>
    </section>
  );
};

export default Products;
