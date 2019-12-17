import React from 'react';
import ReactDOM from 'react-dom';
// const productComponent=(props)=>{
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
export const api = new WooCommerceRestApi({
  url: 'http://veronica.codingkloud.com/', // Your store URL
  consumerKey: 'ck_0e3d7aae58c8d7d045abde006c59737a90674458', // Your consumer key
  consumerSecret: 'cs_f1fc6f531edbdcfa2c5db4d3e5f1bcf7781bdc84', // Your consumer secret
  version: 'wc/v3' // WooCommerce WP REST API version
});

	api.get("products", {
	  per_page: 20, // 20 products per page
	})
  .then((response) => {
  	// console.log(response);
  	// alert(response.data[0].name);
    const productList= response.data.map((key1,i)=>{
     return <productData id= {response.data[i].id} 
                      name={response.data[i].name}
                       slug={response.data[i].slug} 
                      />
     })
     // console.log(productList)
    	// return (<div><h1> Product List</h1>
	    //    console.log(productList)
     //               {productList}
     //       </div>
     //       )
    // console.log(arrayCommonCard)

  })
  .catch((error) => {
    // Invalid request, for 4xx and 5xx statuses
    console.log(error);
    // console.log("Response Status:", error.response.status);
    // console.log("Response Headers:", error.response.headers);
    // console.log("Response Data:", error.response.data);
  })
  .finally(() => {
    // Always executed.
  });
 
// }
// export default productComponent;