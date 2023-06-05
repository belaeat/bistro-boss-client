import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white my-20">
            <div className="pt-12 text-black">
                <SectionTitle
                    subHeading='Check it Out'
                    heading='Featured Item'
                ></SectionTitle>
            </div>
            <div className="md:flex justify-center items-center py-20 px-36">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eligendi ab reprehenderit cupiditate quidem accusantium illo ipsam inventore eos fugit, expedita dolores eveniet amet ipsum sequi voluptatibus nostrum harum distinctio odit delectus. Atque labore, mollitia assumenda ducimus voluptatibus aliquam animi optio ipsum facere dolorum magni, est, quibusdam enim non quae!</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;