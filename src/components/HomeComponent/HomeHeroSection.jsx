import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiMouse } from "react-icons/gi";

const HomeHeroSection = () => {
    // const slidesImage=[
    //     "https://i.ibb.co.com/74mgdjV/hero-Image1.jpg",
    //     "https://i.ibb.co.com/SPZ1Gkw/hero-Image2.jpg",
    //     "https://i.ibb.co.com/mHnBXTP/hero-Image3.jpg"
    
    // ]
    const slideContent=[
        {
            title:"Explore the Best Games of All Time!",
            subtext:"Dive into our highest-rated reviews and find your next adventure.",
        },
        {
            title:"Write and Share Game Reviews!",
            subtext:"Tell the world what makes your favorite game truly unforgettable",
        },
        {
            title:"Create Your Ultimate Game Watchlist!",
            subtext:"Save your must-play titles and never miss out on the action.",
        },
    ]

    const slideSettings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };
    return (
        <section className="">
            {/* <div className={`sm:container relative`}>
                <Slider {...slideSettings}>
                    {
                    slidesImage.map((slide,index)=>(
                        <img key={index} src={slide} alt={`slide ${index}`} className="w-full sm:rounded-md aspect-video xs:aspect-auto" />
                    ))
                    }
                </Slider>
            </div> */}
            
            <div className="mx-auto max-w-[1504px] bg-[url('https://i.ibb.co.com/3swRzjw/hero-Image.png')] bg-cover bg-no-repeat bg-center relative">

                    <Slider {...slideSettings}>
                        {
                        slideContent.map((slide,index)=>(
                        <div key={index} className=" h-[50svh] sm:h-[65svh] lg:h-[85svh] hero-overlay bg-opacity-15">
                            <div className="sectionHeaderWidth text-center h-[100%] flex flex-col justify-center items-center gap-2 text-white">
                                <h1 className="">{slide.title}</h1>
                                <h5 className="px-6 sectionHeaderSubtextWidth">{slide.subtext}</h5>
                                <div className="hidden lg:grid justify-items-center mt-20">
                                    <GiMouse className="text-4xl"/>
                                    <p className="text-xs">Scroll Down</p>
                                </div>
                            </div>
                        </div>
                        ))
                        }
                    </Slider>

            </div>
        </section>
    );
};

export default HomeHeroSection;