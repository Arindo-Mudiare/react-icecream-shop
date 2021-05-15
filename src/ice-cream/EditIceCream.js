import React, { useEffect, useRef, useState } from 'react';
import Helmet from 'react-helmet';
import LoaderMessage from '../structure/LoaderMessage';
import { getMenuItem, putMenuItem } from '../data/iceCreamData';
import PropTypes from 'prop-types';
import IceCreamImage from './IceCreamImage';
// import 'bootstrap/dist/css/bootstrap.min.css';

const EditIceCream = ({ match, history }) => {
  const isMounted = useRef(true);
  const [menuItem, setMenuItem] = useState({
    price: '0.00',
    inStock: true,
    quantity: '0',
    description: '',
    iceCream: {},
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getMenuItem(match.params.menuItemId)
      .then(({ id, price, inStock, quantity, description, iceCream }) => {
        if (isMounted.current) {
          setMenuItem({
            id,
            price: price.toFixed(2),
            inStock,
            quantity: quantity.toString(),
            description,
            iceCream,
          });
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (err.response.status === 404 && isMounted.current) {
          history.replace('/');
        }
      });
  }, [match.params.menuItemId, history]);

  const onChangeHandler = e => {
    let newMenuItemData = {
      ...menuItem,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    };

    if (e.target.name === 'quantity') {
      newMenuItemData.inStock = e.target.value !== '0';
    }

    if (e.target.name === 'inStock' && !e.target.checked) {
      newMenuItemData.quantity = '0';
    }

    setMenuItem(newMenuItemData);
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    const { id, price, inStock, quantity, description, iceCream } = menuItem;

    const submitItem = {
      id,
      iceCream: { id: iceCream.id },
      price: parseFloat(price),
      inStock,
      quantity: parseInt(quantity),
      description,
    };
    putMenuItem(submitItem).then(() => {
      history.push('/');
    });
  };

  return (
    <main>
      <Helmet>
        <title>Update this Jollof | Ultimate Jollof</title>
      </Helmet>
      <h3 className="text-center">Update this Jollof</h3>
      <LoaderMessage
        loadingMessage="Loading ice cream"
        doneMessage="Ice cream loaded"
        isLoading={isLoading}
      />
      {!isLoading && (
        <div className="container d-flex justify-content-center my-5">
          <IceCreamImage
            iceCreamId={menuItem.iceCream.id}
            className="img-smol"
          />
          <div className="">
            <dl>
              <dt>Name :</dt>
              <dd>{menuItem.iceCream.name}</dd>
            </dl>
            <form className="form-horizontal" onSubmit={onSubmitHandler}>
              <div>
                <div className="form-group">
                  <label className="control-label col-sm-4" htmlFor="">
                    Description:
                  </label>
                  <div className="">
                    <textarea
                      name="description"
                      rows="3"
                      className="form-control"
                      value={menuItem.description}
                      onChange={onChangeHandler}
                    ></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-check-label" htmlFor="">
                    In Stock :
                  </label>
                  <div className="">
                    <input
                      type="checkbox"
                      name="inStock"
                      className="form-check-input"
                      checked={menuItem.inStock}
                      onChange={onChangeHandler}
                    />
                    <div className="checkbox-wrapper-checked"></div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="">
                    Quantity
                  </label>
                  <div className="">
                    <select
                      name="quantity"
                      className="form-control"
                      value={menuItem.quantity}
                      onChange={onChangeHandler}
                    >
                      <option value="0">0</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                      <option value="50">50</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-4" htmlFor="">
                    Price :
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="number"
                      name="price"
                      step="0.01"
                      className="form-control"
                      value={menuItem.price}
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <button
                  className="btn btn-danger mt-2 form-control"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

EditIceCream.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }),
};
export default EditIceCream;
