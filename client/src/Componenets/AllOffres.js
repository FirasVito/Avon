import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  useSelector } from "react-redux";

import productsData from '../redux/Products/Products';
import Modal from 'react-bootstrap/Modal';
import { addToCart } from '../redux/Cart/cartSlice';


function Products() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const openModal = (image) => {
    const product = productsData.find((item) => item.OffersNo === image);
    setSelectedImage(image);
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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

  // Slice the products array based on the current page and products per page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const displayedProducts = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const prevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };
  const totalQte = useSelector((state)=>state.cart.cartTotalQuantity)

  return (
    <div>
       <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html"><img width={200} src="images/logo.png" alt="#" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Accueil <span className="sr-only">(current)</span></a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">Coffrets </a>
              </li> */}
              <li className="nav-item  active">
                <a className="nav-link" href="/Offres">Offres</a>
              </li>
           
              <li className="nav-item">
                <a className="nav-link" href="/products">Femme</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Homme">Homme</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Enfants">Enfants</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/Cheveux">Cheveux</a>
              </li>
             
            
         
             
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                 <div>    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style={{enableBackground: 'new 0 0 456.029 456.029'}} xmlSpace="preserve">
                    <g>
                      <g>
                        <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                                    c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                                    C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                                    c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                                    C457.728,97.71,450.56,86.958,439.296,84.91z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                                    c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg> 
                  <span className='cartcss'>{totalQte} </span> 
                  </div>
              
                </a>
              </li>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Nos <span>Offres</span>
            </h2>
            <p>Page {currentPage}</p> {/* Display current page number */}
            <div className="row">
              {displayedProducts.map((product) => (
                <div key={product.OffersNo} className="col-sm-6 col-md-4 col-lg-4">
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
                        src={require(`../Componenets/BAImages/${product.OffersNo}.png`)}
                        alt={product.DescriptionOffre}
                      />
                    </div>
                    <hr />
                    <hr />
                    <div className="detail-box">
                      <h5>{product.DescriptionOffre}</h5>
                      <h5> <span className='green'>{product.PrixResultatOffre}DT</span> </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="btn-box">
          <button className='bttn'
            disabled={currentPage === 1} 
            onClick={prevPage}
          >
            Précédent
          </button>
          <button
        className='bttn'
            disabled={displayedProducts.length < productsPerPage}
            onClick={nextPage}
          >
          Suivant
          </button>
        </div>
        
      </section>

      {/* Modal */}
      <Modal show={showModal} onHide={closeModal} centered>
       
        <Modal.Body>
          {selectedImage && (
             <Modal.Header closeButton>
             <Modal.Title>{selectedProduct && selectedProduct.DescriptionOffre}</Modal.Title>
           </Modal.Header>,
            <img
              src={require(`../Componenets/BAImages/${selectedImage}.png`)}
              alt="Selected"
              className="modal-image"
            />
          )}
                    <hr/>

          <div className="modal-button-container">
          <hr/>

            <button
              className="acheter-button"
              onClick={() => handleAcheterClick(selectedProduct)}>
              Acheter
            </button>
            <hr />
            <button
              className="acheter-button"
              onClick={() => navigate(`/product/${selectedProduct.OffersNo}`)}>
              View More
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Products;
