import { useState } from "react";
import { useMainContext } from "../context";
import { SlClose, SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Slides = () => {
  const {
    show_large_image,
    showLargeImage,
    hideLargeImage,
    active_NO,
    setActiveNO,
    slideItems,
    showNextImage,
    showPrevImage,
  } = useMainContext();
  const arrayIndex = Array.from({ length: slideItems.length }, (_, i) => i + 1);
  const [largeImgFlip, setLargeImgFlip] = useState(false);
  return (
    <>
      <section id="strength" className="slide-section-container">
        <div>
          <h1>our strength</h1>
        </div>

        <div
          className={
            show_large_image
              ? "slide-container small-imgs-hidden"
              : "slide-container"
          }
        >
          {/* small images */}
          <div className="small-imgs-container">
            {slideItems.map((item) => {
              const { img, id, title } = item;
              return (
                <div key={id} className="small-img-container">
                  <img
                    src={img}
                    className="small-img"
                    onClick={() => {
                      showLargeImage();
                      setActiveNO(id);
                    }}
                    alt={title}
                  />
                  <div>{title}</div>
                </div>
              );
            })}
          </div>
          {/* end of small images */}

          {/* large images */}
          <div
            className={
              show_large_image
                ? "large-img-layer-container show-large-image"
                : "large-img-layer-container"
            }
          >
            {slideItems.map((item) => {
              const { img, id, title, desc } = item;
              return (
                <div
                  key={id}
                  className={
                    active_NO === id
                      ? largeImgFlip
                        ? "large-img-card-container active-large-img-card large-img-flip"
                        : "large-img-card-container active-large-img-card "
                      : "large-img-card-container"
                  }
                >
                  <div
                    className={
                      active_NO === id
                        ? "large-image active-large-img"
                        : "large-image"
                    }
                  >
                    <img src={img} alt={title} />
                  </div>
                  <div
                    className={
                      active_NO === id
                        ? "backside-desc active-backside-desc"
                        : "backside-desc"
                    }
                  >
                    <div className="backside-desc-content">
                      <h2>{title}</h2>
                      <p>{desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="slide-controls-container">
              <SlArrowLeft
                className={
                  show_large_image
                    ? "slide-prev show-large-image"
                    : "slide-prev"
                }
                onClick={showPrevImage}
              />
              <div className="large-img-flip-button-container">
                <div
                  className="large-img-flip-button"
                  onClick={() => {
                    setLargeImgFlip(!largeImgFlip);
                  }}
                >
                  Flip
                </div>
              </div>
              <SlArrowRight
                className={
                  show_large_image
                    ? "slide-next show-large-image"
                    : "slide-next"
                }
                onClick={showNextImage}
              />

              <div className="slide-index-container">
                {arrayIndex.map((num) => {
                  return (
                    <div
                      key={num}
                      className={
                        active_NO === num
                          ? "slide-index-number active-index-number"
                          : "slide-index-number"
                      }
                      onClick={() => setActiveNO(num)}
                    >
                      {num}
                    </div>
                  );
                })}
              </div>
              <SlClose
                className={
                  show_large_image
                    ? "slide-close show-large-image"
                    : " slide-close"
                }
                onClick={() => {
                  hideLargeImage();
                  setLargeImgFlip(false);
                }}
              />
            </div>
          </div>
          {/* end of large images */}
        </div>
      </section>
    </>
  );
};
export default Slides;
