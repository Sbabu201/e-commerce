import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        brand: '',
        price: '',
        discount: '',
        gender: '',
        featured: true
    });

    const handleFileUpload = async (e) => {
        setLoading(true);
        const files = e.target.files;

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
            formData.append("upload_preset", "soumya");

            try {
                // Upload image to Cloudinary
                const res = await axios.post("https://api.cloudinary.com/v1_1/dwztqzfeh/image/upload", formData)
                // Add the uploaded image URL to the images array
                setImages(prevImages => [...prevImages, res.data.url]);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
        setLoading(false);
    };

    const [colors, setColors] = useState({
        red: {
            small: { size: '', quantity: '' },
            medium: { size: '', quantity: '' },
            large: { size: '', quantity: '' }
        },
        blue: {
            small: { size: '', quantity: '' },
            medium: { size: '', quantity: '' },
            large: { size: '', quantity: '' }
        },
        green: {
            small: { size: '', quantity: '' },
            medium: { size: '', quantity: '' },
            large: { size: '', quantity: '' }
        },
        white: {
            small: { size: '', quantity: '' },
            medium: { size: '', quantity: '' },
            large: { size: '', quantity: '' }
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSizeChange = (color, size, value) => {
        setColors(prevColors => ({
            ...prevColors,
            [color]: {
                ...prevColors[color],
                [size]: {
                    ...prevColors[color][size],
                    size: value
                }
            }
        }));
    };

    const handleQuantityChange = (color, size, value) => {
        setColors(prevColors => ({
            ...prevColors,
            [color]: {
                ...prevColors[color],
                [size]: {
                    ...prevColors[color][size],
                    quantity: value
                }
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = {
            ...formData,
            colors: colors,
            image1: images
        };


        console.log('productData', productData);
        // console.log('colors', colors);
        // console.log('images', images)
        try {
            const response = await axios.post("/product/addProduct", productData);
            // console.log(response.data);
            // Handle success, display message, or redirect
        } catch (error) {
            console.error('Error adding product:', error);
            // Handle error, display error message
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-20 p-6 bg-white shadow-md rounded-md">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">description</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                {/* <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">category</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                /> */}
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">category</label>
                <select
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                    <option value="">Select category</option>
                    <option value="shoe">shoe</option>
                    <option value="shirt">shirt</option>
                    <option value="pants">pants</option>
                    <option value="belt">belt</option>
                    <option value="kurta">kurta</option>
                    <option value="t-shirt">t-shirt</option>
                </select>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                <select
                    type="text"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                    <option value="">Select brand</option>
                    <option value="hrx">hrx</option>
                    <option value="puma">puma</option>
                    <option value="nike">nike</option>
                    <option value="killer">killer</option>
                    <option value="adidas">adidas</option>
                </select>
                <div>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileUpload}
                    />
                    {loading && <p>Uploading images...</p>}
                    <div>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Uploaded ${index}`}
                                style={{ width: '100px', height: '100px', margin: '10px' }}
                            />
                        ))}
                    </div>
                </div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">gender</label>
                <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                    <option value="">Select gender</option>
                    <option value="men">men</option>
                    <option value="women">women</option>
                </select>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">price</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="discount" className="block text-sm font-medium text-gray-700 mb-1">discount</label>
                <input
                    type="text"
                    id="discount"
                    name="discount"
                    value={formData.discount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />

            </div>
            {/* Add other form fields like description, category, brand, price, discount, featured */}
            <div className="mb-4">
                <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                {Object.keys(colors).map((color) => (
                    <div key={color} className="mb-4">
                        <h2 className="text-lg font-medium mb-2">{color}</h2>
                        {Object.keys(colors[color]).map((size) => (
                            <div key={size} className="flex items-center mb-2">
                                <label htmlFor={`${color}-${size}`} className="mr-2">{size}</label>
                                <input
                                    type="text"
                                    id={`${color}-${size}`}
                                    value={colors[color][size].size}
                                    onChange={(e) => handleSizeChange(color, size, e.target.value)}
                                    className="w-24 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                                <label htmlFor={`${color}-${size}-quantity`} className="ml-4 mr-2">Quantity</label>
                                <input
                                    type="number"
                                    id={`${color}-${size}-quantity`}
                                    value={colors[color][size].quantity}
                                    onChange={(e) => handleQuantityChange(color, size, e.target.value)}
                                    className="w-24 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Add Product
                </button>
            </div>
        </form>
    );
};

export default AddProduct;
