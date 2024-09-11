// components/SocialMediaButtons.js
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaLine } from 'react-icons/fa';

export default function SocialMediaButtons({ size = 24, scale = "sm" }) {
  return (
    scale == "xl" ?
      <div className="flex space-x-10">
        <a href="https://www.facebook.com/ptnsngc" target="_blank" rel="noopener noreferrer" className="border-r-2 border-gray-300 pr-10 pl-10 text-blue-600 hover:text-blue-800">
          <FaFacebookF size={size} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="border-r-2 border-gray-300 pr-10 text-blue-400 hover:text-blue-600">
          <FaTwitter size={size} />
        </a>
        <a href="https://www.instagram.com/phuptn.sc?igsh=MWdtZTkxZDhsZmF0eA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="border-r-2 border-gray-300 pr-10 text-pink-500 hover:text-pink-700">
          <FaInstagram size={size} />
        </a>
        <a href="https://www.linkedin.com/in/phuthanet-sangachat-9292a8327/" target="_blank" rel="noopener noreferrer" className="border-r-2 border-gray-300 pr-10 text-blue-700 hover:text-blue-900">
          <FaLinkedinIn size={size} />
        </a>
        <a href="https://line.me/ti/p/9CrpJe14XT" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 pr-10">
          <FaLine size={size} />
        </a>
      </div>
      : <div className="flex space-x-4">
        <a href="https://www.facebook.com/ptnsngc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <FaFacebookF size={size} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
          <FaTwitter size={size} />
        </a>
        <a href="https://www.instagram.com/phuptn.sc?igsh=MWdtZTkxZDhsZmF0eA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
          <FaInstagram size={size} />
        </a>
        <a href="https://www.linkedin.com/in/phuthanet-sangachat-9292a8327/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
          <FaLinkedinIn size={size} />
        </a>
        <a href="https://line.me/ti/p/9CrpJe14XT" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
          <FaLine size={size} />
        </a>
      </div>
  );
}
