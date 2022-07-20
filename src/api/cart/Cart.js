export let cartList = [];

const cart = class {
  addToCart = (productId, count) => {
    cartList.push({ productId: productId, count: count });
  };

  deleteFromCart = (productId) => {
    cartList = cartList.filter((product) => product.productId !== productId);
    console.log(cartList);
  };

  changeCount = (productId, count) => {
    cartList = cartList.map((product) => {
      if (product.productId === productId) {
        product.count = count;
      }
      return product;
    });
  };

  isInCart = (productId) => {
    let inCart = cartList.filter((product) => product.productId === productId);
    return inCart.length === 0 ? false : true;
  };

  getCountCart = (productId) => {
    let inCart = cartList.filter((product) => product.productId === productId);
    return inCart.length === 0 ? 0 : inCart[0].count;
  };

  getCartList = () => {
    return cartList;
  };
};

export default cart;
