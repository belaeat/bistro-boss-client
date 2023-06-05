import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBg from '../../../assets/menu/banner3.jpg'
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === "offered")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const dessert = menu.filter(item => item.category === "dessert")
    return (
        <div className='mb-20'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuBg} title={'Our Menu'}></Cover>
            {/* Main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* Offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert menu items */}
            <MenuCategory
                items={dessert}
                title="dessert"
                img={dessertBg}
            ></MenuCategory>
            {/* Pizza menu items */}
            <MenuCategory
                items={pizza}
                title="pizza"
                img={pizzaBg}
            ></MenuCategory>
            {/* Salad menu items */}
            <MenuCategory
                items={salad}
                title="salad"
                img={saladBg}
            ></MenuCategory>
            {/* Soup menu items */}
            <MenuCategory
                items={soup}
                title="soup"
                img={soupBg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;