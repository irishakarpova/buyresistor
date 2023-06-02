import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { MainBar } from './components/app-bar';
import { commerce } from './lib/commerce';
import { useEffect, useState } from 'react';
import { Cart } from './components/cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResistorsK from './components/resistors_k';
import ResistorsM from './components/resistors_m';
import ResistorsR from './components/resistors_r';
import Capacitors from './components/capacitors';
import ResistorsCS from './components/resistors_c _s';
import ResistorsCB from './components/resistors_c _b';
import ResistorsCM from './components/resistors_c _m';
import ElCapacitors from './components/el_capacitors';
import { Checkout } from './components/checkout/checkoutform';
import { Categories } from './components/categories';
import { Typography } from '@mui/material';
import { Test } from './components/test';

function App() {
  const [categories, setCategories] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchCategory = async () => {
    const { data } = await commerce.categories.list();
    setCategories(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCart = async () => {
    const data = await commerce.cart.retrieve();
    setCart(data);
  };
  useEffect(() => {
    fetchCart();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    const cart = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };
  const handleUpdateCartQty = async (productId, quantity) => {
    const cart = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const cart = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCart = async (productId) => {
    setCart(await commerce.cart.empty(productId));
  };
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainBar loading={loading} totalItems={cart.total_items} />

        <Routes>
          <Route
            exact
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
                handleAddToCart={handleAddToCart}
              />
            }
          ></Route>
          <Route
            exact
            path="/test"
            element={
              <Test />
              // <Capacitors
              //   cart={cart}
              //   handleAddToCart={handleAddToCart}
              //   categories={categories}
              // />
            }
          ></Route>

          <Route
            exact
            path="1-4w-metal-film-resistors-1-910k"
            element={
              <ResistorsK
                cart={cart}
                handleAddToCart={handleAddToCart}
                categories={categories}
              />
            }
          ></Route>
          <Route
            exact
            path="1-4w-metal-film-resistors-1-10m"
            element={
              <ResistorsM
                cart={cart}
                handleAddToCart={handleAddToCart}
                categories={categories}
              />
            }
          ></Route>
          <Route
            exact
            path="1-4w-metal-film-resistors-0-910"
            element={
              <ResistorsR
                cart={cart}
                handleAddToCart={handleAddToCart}
                categories={categories}
              />
            }
          ></Route>

          <Route
            exact
            path="1-8w-carbon-film-resistors"
            element={
              <ResistorsCS
                cart={cart}
                handleAddToCart={handleAddToCart}
                categories={categories}
              />
            }
          ></Route>
          <Route
            exact
            path="1w-carbon-film-resistors"
            element={
              <ResistorsCB
                cart={cart}
                handleAddToCart={handleAddToCart}
                categories={categories}
              />
            }
          ></Route>
          <Route
            exact
            path="1-2w-carbon-film-resistors"
            element={
              <ResistorsCM
                cart={cart}
                handleAddToCart={handleAddToCart}
                categories={categories}
              />
            }
          ></Route>
          <Route
            exact
            path="1w-carbon-film-resistors"
            element={
              <ResistorsCB
                cart={cart}
                handleAddToCart={handleAddToCart}
                categories={categories}
              />
            }
          ></Route>
          <Route
            exact
            path="radial-electrolytic-capacitors"
            element={
              <ElCapacitors
                cart={cart}
                handleAddToCart={handleAddToCart}
                categories={categories}
              />
            }
          ></Route>

          <Route
            exact
            path="/checkout"
            element={
              <Checkout
                order={order}
                handleCaptureCheckout={handleCaptureCheckout}
                cart={cart}
                error={errorMessage}
              />
            }
          ></Route>
          <Route
            exact
            path="/"
            element={<Categories categories={categories} />}
          ></Route>
          <Route
            exact
            path="/"
            element={
              <Categories
                cart={cart}
                handleAddToCart={handleAddToCart}
                categories={categories}
                loading={loading}
              />
            }
          ></Route>
        </Routes>

        {!loading && (
          <Typography m={6} variant="caption" color="textSecondary">
            © Copyright 2023 AAParts & Chec (Chec Platform, Inc). All rights
            reserved.
          </Typography>
        )}
      </ThemeProvider>
    </Router>
  );
}

export default App;
