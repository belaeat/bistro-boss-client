import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="mt-12">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mb-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 text-black">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;