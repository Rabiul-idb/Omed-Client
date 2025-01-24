const SellerProducts = ({ item, index }) => {
  return (
    <>
      <tr>
        <th>
          <label>{index + 1}</label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20">
                <img src={item.photo} />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.brand_name}</div>
              <div className="text-sm opacity-50">{item.generic_name}</div>
            </div>
          </div>
        </td>
        <td>{item.category}</td>
        <td>{item.brand}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
        <th>{item.discount} %</th>
        <td>{item.date}</td>
      </tr>
    </>
  );
};

export default SellerProducts;
