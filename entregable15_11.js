
class ProductManager {

    constructor(){
      this.products = [
        {
          id:1, 
          title:'Mi Producto',
          description:'Mi description',
          price:200,
          thumbnail:'www.google.com',
          code:2505,
          stock:20
        }
      ]
    }
  
    getProducts = () => {return this.products}
  
    getProductById(id) {
      const objs = this.getProducts();
      const wanted = objs.find(o => o.id === id);
      return wanted ? wanted : new Error('Not found'); 
    }
  
    getProductByCode(code){
      const products = this.products;
      const exists = products.find(p => p.code === code);
      return exists ? exists : false;
    }
  
    isValidProduct(product){
      if(
        !product.title ||
        !product.description ||
        !product.price ||
        !product.thumbnail || 
        !product.code ||
        !product.stock
      ) return false
      return true;
    }
  
    getNextId = () => {
      const count = this.products.length
      if(count > 0) {
        const lastProduct = this.products[count-1]
        const id = lastProduct.id +1
        return id
      }else{
        return 1
      }
    }
  
    addProducts = (product) => {
      if(this.getProductByCode(product.code)) throw new Error('Product with this code already exists'); // SI EXISTE UN PRODUCTO CON CODIGO, LANZO ERROR
      if(!this.isValidProduct(product)) throw new Error('Fields missing');
      const newProduct = {
        ...product,
        id: this.getNextId(),
      }
      this.products.push(newProduct);
    }
  }



  