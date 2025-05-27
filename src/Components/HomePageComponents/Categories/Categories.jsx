import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCategories } from "../../../Apis/getCategories";
import "../Categories/Categories.css";

const Categories = () => {

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllCategories();
                setCategories(data);
            } catch (error) {
                console.error("Unable to load categories", error);
            }
        }

        fetchData();
    }, []);

    const handleCategoryClick = (id) => {
        navigate(`/product?url=${id}`);
    }

    return (
        <div className="categries">
            {categories.map((value) => {
                return (
                    <div className="categries-content" key={value.id}>
                        <button
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                width: "92%",
                                cursor: "pointer",
                            }}
                            onClick={() => handleCategoryClick(value.id)}>

                            <img className="categries-img" src={`https://ecomerceapis.runasp.net/${value.imagePath}`} alt={value.name} />
                            <p className="categries-para">{value.name}</p>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Categories;