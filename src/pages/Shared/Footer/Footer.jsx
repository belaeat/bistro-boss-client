import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-neutral-content">
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='bg-[#1F2937] text-center py-36'>
                    <h3 className='text-xl font-semibold mb-6'>Contact Us</h3>
                    <p>123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00</p>
                   
                </div>
                <div className='bg-[#111827] text-center py-36'>
                    <h3 className='text-xl font-semibold'>Follow Us</h3>
                    <p className=" mb-8">Join us on social media</p>
                    <div className="flex gap-4 justify-center text-xl">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
            </div>
            <div className="footer footer-center text-white p-4 bg-[#151515]">
                <div>
                    <p>Copyright © 2023 - Bistro Boss Restaurant Ltd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;