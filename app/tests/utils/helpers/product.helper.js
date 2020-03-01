module.exports = {
  checkProductDetailResponse: (res, payload = {}) => {
    const { productId } = payload;
    res.body.data.should.have.property('product_id').eql(productId);
    res.body.data.should.have.property('product_link');
    res.body.data.should.have.property('product_title');
    res.body.data.should.have.property('product_price');
    res.body.data.should.have.property('product_description');
    res.body.data.should.have.property('product_images');
  },
  checkProductListResponse: (res) => {
    res.body.data[0].should.have.property('product_id');
    res.body.data[0].should.have.property('product_link');
    res.body.data[0].should.have.property('product_title');
    res.body.data[0].should.have.property('product_price');
    res.body.data[0].should.have.property('product_description');
    res.body.data[0].should.have.property('product_images');
  },
};
