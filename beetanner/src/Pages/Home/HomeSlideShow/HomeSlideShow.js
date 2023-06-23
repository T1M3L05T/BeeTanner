import React from 'react';
import './HomeSlideShow.css'

const imgs = ['red', 'blue', 'yellow']
const delay = 5000;

function SlideShow() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {};
      }, [index]);

    return (
        <div>
            <div className="slideshow">
                <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {imgs.map((backgroundColor, index) => (
                        <div className="slide" key={index} style={{ backgroundColor }} />
                    ))}
                </div>
            </div>
            <div className="slideshowDots">
                {imgs.map((_, idx) => (
                    <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`}></div>
                ))}
            </div>
        </div>
    );
}

export default SlideShow