import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Maq from './JsonFemme/Maq';
import Modal from 'react-bootstrap/Modal';
import { addToCart } from '../../../../redux/Cart/cartSlice';
import b1 from '../../img/0108200_1.png';
import Spinner from '../../../Spinner';

function Maquillage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductPath, setSelectedProductPath] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(Maq);

  const openModal = (image) => {
    const product = filteredProducts.find((item) => item.OffersNo === image);
    setSelectedImage(image);
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Filter out products without an image
  const displayedProducts = filteredProducts.filter((product) => {
    try {
      require(`../../img/${product.OffersNo}_1.png`);
      return true;
    } catch (err) {
      return false;
    }
  });

  // Calculate the index of the last product to display
  const indexOfLastProduct = currentPage * productsPerPage;
  // Calculate the index of the first product to display
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Get the current page of products
  const currentProducts = displayedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleAcheterClick = (item) => {
    dispatch(addToCart(item));
    setSelectedProductPath(`/product/${item.OffersNo}`);
  };

  const prevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can change this to 'auto' for instant scrolling
    });
  };

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can change this to 'auto' for instant scrolling
    });
  };

  const prevBtn = useRef(null);
  const nextBtn = useRef(null);

  // Function to handle search input changes
  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    // Filter products based on the search query
    const filtered = Maq.filter((product) =>
      product.DescriptionOffre.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset the current page when searching
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <section className="product_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <main>
                <Spinner />
              </main>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <section className="product_section layout_padding">
            <div className="container">
              <div className="heading_container heading_center">
                <h2>
                  <span>MAQUILLAGES</span>
                </h2>
                <p>Page {currentPage}</p>

                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Rechercher"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                  />
                </div>
                <div className="row">
                  {currentProducts.map((product) => (
                    <div
                      key={product.OffersNo}
                      className="col-sm-6 col-md-4 col-lg-4"
                    >
                      <div className="box">
                        <div className="option_container">
                          <button
                            className="acheter-button"
                            onClick={() => openModal(product.OffersNo)}
                          >
                            Voir
                          </button>
                        </div>
                        <div className="img-box">
                          <img
                            src={require(`../../img/${product.OffersNo}_1.png`)}
                            alt="Selected"
                            className="modal-image"
                            loading="lazy" // Add this line to enable lazy loading

                            onError={(e) => {
                              e.target.src = b1;
                            }}
                          />
                        </div>
                        <hr />
                        <hr />
                        <div className="detail-box">
                          <h5>{product.DescriptionOffre}</h5>
                          <h5>
                            {' '}
                            <span className="green">
                              {product.PrixResultatOffre}DT
                            </span>{' '}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="btn-box">
            <button className='bttn' disabled={currentPage === 1} onClick={prevPage} ref={prevBtn}>Précédent</button>
                <button className='bttn' disabled={currentProducts.length < productsPerPage} onClick={nextPage} ref={nextBtn}>Suivant</button>
             
            </div>
          </section>
          <Modal show={showModal} onHide={closeModal} centered>
          {selectedImage && (      <Modal.Header closeButton>
          <Modal.Title>{selectedProduct && selectedProduct.DescriptionOffre}</Modal.Title>
        </Modal.Header>)}
            <Modal.Body>
              {selectedImage && (
                <img
                  src={require(`../../img/${selectedImage}_1.png`)}
                  alt="Selected"
                  className="modal-image"
                  onError={(e) => {
                    e.target.src = b1;
                  }}
                />
              )}
              <div className="modal-button-container">
                <button
                  className="acheter-button"
                  onClick={() => handleAcheterClick(selectedProduct)}
                >
                  Acheter
                </button>
                <hr />
              </div>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default Maquillage;
