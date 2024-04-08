export const Order = ({ products = [], totalAmount, paymentMethod, onBack, onBuy }) => {
 
    return (
      <div className="container mx-auto px-4">
        <div className="order-container">
          <div className="mb-4">
            <p>Hello, this is your order:</p>
            <table className="order-table">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Product</th>
                  <th className="border border-gray-300 px-4 py-2">Weight</th>
                  <th className="border border-gray-300 px-4 py-2">Count</th>
                  <th className="border border-gray-300 px-4 py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.weight}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.count}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mb-4">
            <p>Total amount is: {totalAmount}</p>
            <p>How to pay: {paymentMethod}</p>
          </div>
          <div>
            <button className="bg-green-700 text-white px-4 py-2 rounded mr-4" onClick={onBack}>Back</button>
            <button className="bg-green-700 text-white px-4 py-2 rounded" onClick={onBuy}>Buy</button>
          </div>
        </div>
      </div>
    );
  };
