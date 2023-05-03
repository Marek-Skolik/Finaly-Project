import SingleProduct from "../SingleProduct/SingleProduct";

const SalePage = () => {
    return (
      <div className="container">
        <h1 className="text-center">BLACK FRIDAY</h1>
        <div className="d-flex flex-wrap">
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
        </div>
      </div>
    );
  };
  
  export default SalePage;