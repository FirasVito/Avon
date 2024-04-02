import React, { useState } from 'react';
import './AddGifts.css'; // Import CSS if you have any
import productsData from '../../redux/Products/Gifts';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function AddGifts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productsPerPage = 9;
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
  return (
    
<main>
	<div class="book">
		<div class="book-cover">
		
		</div>
		<div class="book-content">
			<h3>Idées Cadeaux</h3>
      <div className="row">
  {displayedProducts.map((product) => (
    <div key={product.OffersNo} className="col-sm-6 col-lg-6">
      <Card className="mb-3">
        <Card.Img
          variant="top"
          src={require(`../../Componenets/BAImages/${product.OffersNo}.png`)}
          alt={product.DescriptionOffre}
        />
        <Card.Body>
          <Card.Title>{product.DescriptionOffre}</Card.Title>
          <Card.Text> 
            <span className='green'>{product.PrixResultatOffre}DT</span>
          </Card.Text>
          <Button onClick={() => openModal(product.OffersNo)} variant="primary">
            Voir
          </Button>
        </Card.Body>
      </Card>
    </div>
  ))}
</div>
		</div>
	</div>
  <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body>
          {selectedImage && (
            <>
              <h1>{selectedProduct.DescriptionOffre}</h1>
              <img
                src={require(`../../Componenets/BAImages/${selectedImage}.png`)}
                alt="Selected"
                className="modal-image"
              />
              <p>{selectedProduct.PrixResultatOffre}DT</p>
            </>
          )}
        </Modal.Body>
      </Modal>
</main>
  );
}

export default AddGifts;
