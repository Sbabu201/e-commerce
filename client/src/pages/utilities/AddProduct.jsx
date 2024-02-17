
//heloooooo
import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        brand: '',
        price: '',
        discount: '',
        featured: true,
        catagory: ''
    });
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleColorChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedColors([...selectedColors, value]);
        } else {
            setSelectedColors(selectedColors.filter(color => color !== value));
        }
    };

    const handleSizeChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedSizes([...selectedSizes, value]);
        } else {
            setSelectedSizes(selectedSizes.filter(size => size !== value));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const form = {
                name: formData.name,
                description: formData.description,
                catagory: formData.catagory,
                brand: formData.brand,
                price: formData.price,
                discount: formData.discount,
                image1: images,
                size: selectedSizes,
                color: selectedColors,
            }
            console.log('form', form)
            const newitem = await axios.post("/product/addProduct", form);
            console.log('newitem', newitem)
        } catch (error) {
            console.log('error', error)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-20 p-6 bg-white shadow-md rounded-md">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">catagory</label>
                <select
                    id="catagory"
                    name="catagory"
                    value={formData.catagory}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                    <option value="">Select catagory</option>
                    <option value="men">men</option>
                    <option value="women">women</option>
                </select>
            </div>
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

            <div className="mb-4">
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                <select
                    type="text"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                    <option value="">Select brand</option>
                    <option value="hrx">hrx</option>
                    <option value="puma">puma</option>
                    <option value="nike">nike</option>
                    <option value="killer">killer</option>
                    <option value="adidas">adidas</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="discount" className="block text-sm font-medium text-gray-700 mb-1">Discount</label>
                <input
                    type="text"
                    id="discount"
                    name="discount"
                    value={formData.discount}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="featured" className="block text-sm font-medium text-gray-700 mb-1">Featured</label>
                <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={formData.featured}
                    onChange={() => setFormData({ ...formData, featured: !formData.featured })}
                    className="form-checkbox h-6 w-6 text-indigo-600"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="Red"
                            onChange={handleColorChange}
                        /> Red
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Blue"
                            onChange={handleColorChange}
                        /> Blue
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Green"
                            onChange={handleColorChange}
                        /> Green
                    </label>
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">Size</label>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="Small"
                            onChange={handleSizeChange}
                        /> Small
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Medium"
                            onChange={handleSizeChange}
                        /> Medium
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Large"
                            onChange={handleSizeChange}
                        /> Large
                    </label>
                </div>
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
