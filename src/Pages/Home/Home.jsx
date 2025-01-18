import Banner from "../../Components/Banner";
import Category from "../../Components/Category";
import DiscountCard from "../../Components/DiscountCard";
import SpecialForYou from "../../Components/SpecialForYou";
import TopBrands from "../../Components/TopBrands";
import TopSelling from "../../Components/TopSelling";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <DiscountCard></DiscountCard>
            <SpecialForYou></SpecialForYou>
            <TopSelling></TopSelling>
            <TopBrands></TopBrands>
        </div>
    );
};

export default Home;