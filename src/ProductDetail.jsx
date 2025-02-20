import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductData } from './api';
import Loading from './Loading';
import BackButton from './BackButton';
import NoMatching from './NoMatching';

function ProductDetail({ onAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductData(id);
        setProduct(productData);
      } catch (error) {
        console.error("API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleCountChange = (event) => {
    setCount(+event.target.value);
  };

  const handleButtonClick = () => {
    onAddToCart(id, count);
  };

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NoMatching />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-block mb-6">
          <BackButton />
        </Link>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <img
                className="w-full h-64 object-contain rounded-lg"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-widest">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-2">
                  {product.title}
                </h1>
                <p className="text-gray-700 mt-4">{product.description}</p>
                <div className="mt-6">
                  <span className="text-2xl font-semibold text-gray-900">
                    Rs.{product.price}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={count}
                    onChange={handleCountChange}
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md text-center"
                  />
                  <button
                    onClick={handleButtonClick}
                    className="ml-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;