import axios from 'axios';
import React, { useState } from 'react';
import '../styles/SearchImages.css';

function SearchImages({ setData }) {
    let [searchData, setSearchData] = useState('');

    function resetImages() {
        axios.get("https://api.unsplash.com/photos", {
            params: {
                client_id: process.env.REACT_APP_ACCESS_KEY,
                per_page: 20
            }
        }).then(response => {
            setData(response.data)
        })
            .catch(error => console.log(error))

            setSearchData('');

    }


    function getImages() {

        axios.get("https://api.unsplash.com/search/photos", {
            params: {
                client_id: process.env.REACT_APP_ACCESS_KEY,
                query: searchData,
                per_page: 20
            }
        }).then(response => {
            console.log(response.data.results)
            setData(response.data.results)
        })
            .catch(error => console.log(error))


    }

    return (
        <div className='searchArea'>
            <input className='inputArea'
                onChange={e => setSearchData(e.target.value)} type='text' value={searchData} placeholder='Search for images...' />
            <button className='btn' onClick={getImages}>Search</button>
            <button className='btn' onClick={resetImages}>Reset</button>
        </div>
    )
}

export default SearchImages;