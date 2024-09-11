// pages/contact.js
import SocialMediaButtons from "@/components/SocialMediaButtons";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form data submitted:", formData);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <div className="mt-8 rounded-md shadow-sm py-2">
                <label
                    htmlFor="button"
                    className="mb-1 block text-sm font-medium text-white"
                >
                    SocialMedia
                </label>
                <div
                    id="button"
                    className="bg-white py-4 px-4 rounded-md shadow-sm w-max"
                >
                    <SocialMediaButtons size={60} scale="xl" />
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-input"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-input"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-white"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-input"
                        rows={4}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
