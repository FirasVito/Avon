import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import productsData from '../redux/Products/Products';
import Modal from 'react-bootstrap/Modal';
import { addToCart } from '../redux/Cart/cartSlice';
import { AiFillEye } from 'react-icons/ai';

function CoffretProducts() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const openModal = (image) => {
    const product = productsData.find((item) => item.OffersNo === image);
    setSelectedImage(image);
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Slice the products array based on the current page and products per page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const displayedProducts = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleAcheterClick = (item) => {
    dispatch(addToCart(item));
  };

 

  useEffect(() => {
    // Ensure that the currentPage is valid when the number of products changes
    const maxPage = Math.ceil(productsData.length / productsPerPage);
    if (currentPage > maxPage) {
      setCurrentPage(maxPage);
    }
  }, [productsData, currentPage]);

  return (
    <div>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Nos <span>Coffrets</span>
            </h2>
            <h1> Nos coffrets cadeaux pour chaque fête et chaque occasion</h1>
<hr/>
        
            
          </div>
        </div>
        <div className="btn-box">
        <a href='/Offres'>
          tous les Coffrets
        </a>
      </div>
      </section>

      {/* Modal */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Si vous êtes Ambassadeur, <a  href="https://www.avon-tunisie.com/"> <span className='red' >cliquez ici</span>.</a> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage && (
            <img
              src={require(`../Componenets/BAImages/${selectedImage}.png`)}
              alt="Selected"
              className="modal-image"
              loading="lazy"
            />
          )}
          <hr/>
          <div className="modal-button-container">
            <button
              className="acheter-button"
              onClick={() => handleAcheterClick(selectedProduct)}
            >
              Acheter
            </button>
            <hr />
            <button
              className="acheter-button"
              onClick={() => navigate(`/product/${selectedProduct.OffersNo}`)}
            >
              View More
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CoffretProducts;
