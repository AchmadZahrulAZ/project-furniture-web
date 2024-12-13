import React from 'react';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#23262F] text-white py-8 px-4">
      <div className="container mx-auto">
        {/* Bagian Atas: Logo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="text-2xl font-bold mb-4 md:mb-0">FurniShop</div>

          {/* Icons Sosial Media */}
          <div className="flex justify-center md:justify-end space-x-4 w-full md:w-auto">
            <FacebookShareButton url="https://www.furnishop.com">
              <div className="w-12 h-12 bg-[#6D5DD3] rounded-full flex items-center justify-center">
                <FacebookIcon size={24} round />
              </div>
            </FacebookShareButton>

            <TwitterShareButton url="https://www.furnishop.com">
              <div className="w-12 h-12 bg-[#6D5DD3] rounded-full flex items-center justify-center">
                <TwitterIcon size={24} round />
              </div>
            </TwitterShareButton>

            <LinkedinShareButton url="https://www.furnishop.com">
              <div className="w-12 h-12 bg-[#6D5DD3] rounded-full flex items-center justify-center">
                <LinkedinIcon size={24} round />
              </div>
            </LinkedinShareButton>
          </div>
        </div>

        {/* Garis (Hanya ditampilkan di Desktop) */}
        <div className="hidden md:block">
          <hr className="border-t border-[#EAEEF3] mb-8 pb-8" style={{ maxWidth: '1400px', margin: '0 auto' }} />
        </div>

        {/* Bagian Tengah: Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Kolom 1 */}
          <div>
            <h3 className="font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>The Support Suite</li>
              <li>The Sales Suite</li>
              <li>Support</li>
              <li>Guide</li>
            </ul>
          </div>

          {/* Kolom 2 */}
          <div>
            <h3 className="font-semibold mb-4">Top Features</h3>
            <ul className="space-y-2">
              <li>Ticketing System</li>
              <li>Knowledge Base</li>
              <li>Community Forums</li>
              <li>Help Desk Software</li>
            </ul>
          </div>

          {/* Kolom 3 */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>Product Support</li>
              <li>Request Demo</li>
              <li>Library</li>
              <li>Peoplepower Blog</li>
            </ul>
          </div>

          {/* Kolom 4 */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Press</li>
              <li>Investors</li>
              <li>Events</li>
            </ul>
          </div>

          {/* Kolom 5 (Favourite Things) */}
          <div>
            <h3 className="font-semibold mb-4">Favourite Things</h3>
            <ul className="space-y-2">
              <li>For Enterprise</li>
              <li>For Startups</li>
              <li>For Benchmark</li>
              <li>For Small Business</li>
            </ul>
          </div>
        </div>

        {/* Bagian Bawah */}
        <div className="mt-8 text-center text-sm">
          &copy; NameBrand 2022 - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
