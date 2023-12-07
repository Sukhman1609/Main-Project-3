// // SearchComponent.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SearchComponent = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:7000/api/search?q=${searchTerm}`);
//       const searchResults = response.data.results || [];
//       console.log(response.data);
//       navigate('/search-results', { state: { searchResults: response.data } });
//     } catch (error) {
//       console.error('Error searching:', error);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <div>
//       <input
//         type='text'
//         placeholder='search here &#128269;'
//         className='inputsearch'
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         onKeyPress={handleKeyPress}
//         style={{ margin: '80px' }}
//       />
//       {/* <button onClick={handleSearch}>Search</button> */}
//     </div>
//   );
// };

// export default SearchComponent;
