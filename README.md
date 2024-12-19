# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




<!-- / import React, { useEffect, useState } from "react";
// let Cards = () => {
//   // State to store products from API
//   let [api, setapi] = useState({ users: [] });

//   // State to store counts for each product
//   let [count, setcount] = useState({});

//   // State for search query
//   let [search, setsearch] = useState("");

//   // Fetch products from API
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((val) => {
//         setapi({ users: val });
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   // Increment count for a specific product
//   let increment = (id) => {
//     setcount((prevCount) => ({
//       ...prevCount,
//       [id]: (prevCount[id] || 0) + 1, // Increment the count of the specific product
//     }));
//   };

//   // Decrement count for a specific product
//   let decrement = (id) => {
//     setcount((prevCount) => ({
//       ...prevCount,
//       [id]: Math.max((prevCount[id] || 0) - 1, 0), // Ensure count does not go below 0
//     }));
//   };

//   // Reset count for a specific product
//   let reset = (id) => {
//     setcount((prevCount) => ({
//       ...prevCount,
//       [id]: 0, // Reset count for the specific product
//     }));
//   };

//   return (
//     <>
//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search products"
//         value={search}
//         onChange={(e) => setsearch(e.target.value)} // Update search query
//       />

//       <div className="fake">
//         {/* Filter products based on title (or category or description) */}
//         {api.users
//           .filter((x) =>
//             x.title.toLowerCase().includes(search.toLowerCase()) // Filter based on search query in title
//           )
//           .map((x) => (
//             <div key={x.id} className="fakestore_cards">
//               <div className="image">
//                 <img src={x.image} alt={x.title} />
//               </div>
//               <h5 className="center">{x.category}</h5>
//               <div className="cont">
//                 <h1 className="title">{x.title}</h1>
//                 <h3>
//                   <span className="dollar">$ </span>
//                   {x.price}
//                 </h3>
//                 <div className="rating_div">
//                   <h4 className="star">{x.rating.rate} ⭐</h4>
//                   <h4>{x.rating.count}</h4>
//                 </div>
//                 <p>
//                   <span className="about_product">About Product:</span>
//                   {x.description}
//                 </p>
//                 {/* Increment/Decrement buttons */}
//                 <button className="btn" onClick={() => increment(x.id)}>
//                   +
//                 </button>
//                 <span>
//                   <button className="btn">{count[x.id] || 0}</button>
//                 </span>
//                 <button className="btn" onClick={() => decrement(x.id)}>
//                   -
//                 </button>
//                 <br />
//                 {/* Reset Button */}
//                 <button
//                   className="btn"
//                   id="clear_cart"
//                   onClick={() => reset(x.id)}
//                 >
//                   Clear Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// };

// export default Cards; -->