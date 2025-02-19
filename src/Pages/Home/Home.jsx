import Banner from "../../Components/Banner";
import Category from "../../Components/Category";
import DiscountCard from "../../Components/DiscountCard";
import Review from "../../Components/Review";
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
            <Review></Review>
        </div>
    );
};

export default Home;