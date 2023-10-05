import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImageSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
        
    return (
        <>
            <div>
                
                <Slider
                style={{width: '300px', height: '300px', borderRadius: '5px', objectFit: 'cover' }}
                 {...settings}>
                    <div>
                        <img style={{ width: '300px', height: '300px', borderRadius: '5px', objectFit: 'cover' }} src='https://s.alicdn.com/@sc04/kf/H6d9b6040abaa4b69a72d8db053a8ab4cj.jpeg_250x250.jpeg' alt="img" />
                    </div>
                    <div>
                        <img style={{ width: '300px', height: '300px', borderRadius: '5px', objectFit: 'cover' }} src='https://s.alicdn.com/@sc04/kf/H18cb3f45de8a40b689bf7b8ba45b5bb8p.jpeg_250x250.jpeg' alt="img" />
                    </div>
                    <div>
                        <img style={{ width: '300px', height: '300px', borderRadius: '5px', objectFit: 'cover' }} src='https://s.alicdn.com/@sc04/kf/H33b6e62be3314d8db7d0775534873dc3V.jpeg_250x250.jpeg' alt="img" />
                    </div>
                    <div>
                        <img style={{ width: '300px', height: '300px', borderRadius: '5px', objectFit: 'cover' }} src='https://s.alicdn.com/@sc04/kf/H322e28a9b2514490bc2228763aa8db3fx.jpeg_250x250.jpeg' alt="img" />
                    </div>
                </Slider>
            </div>
        </>
    )
}
export default ImageSlider;