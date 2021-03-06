
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import GreetingCarouselContainer from './greeting_carousel_container'
import Slider from "react-slick";

class Greeting extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchCampaigns()
    this.props.requestCategories()
    window.scrollTo(0,0);

  }

  render() {
    if(!this.props.campaigns.length){return null}
    if(!this.props.categories.length){return null}

    const featured = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)"
    };
    return(
      <div className="home-page">
    
      
      <div className="featured-carousel">
        <Slider {...featured}>
          <div className="home-slide">
            <NavLink to={`/campaigns/${this.props.campaigns[6].id}`} className="featured-product">
              <div className="featured-image featured-image1"></div>
                <div className="slide-content">
                  <div className="move-content">
                    <div className="featured-tag">FEATURED</div>
                    <div className="slide-title">Drop x THX Panda Headphones</div>
                    <div className="slide-desc">The World’s highest fidelity wireless headphones.</div>
                    <div className="click-to-see">SEE CAMPAIGN <i class="fas fa-angle-right"></i></div>
                  </div>
                </div>
            </NavLink>
          </div>
          <div className="home-slide">
            <NavLink to={`/campaigns/${this.props.campaigns[7].id}`} className="featured-product">
              <div className="featured-image featured-image2"></div>
                <div className="slide-content">
                  <div className="move-content">
                    <div className="featured-tag">FEATURED</div>
                    <div className="slide-title">CIGA Design Z-Series Mechanical Titanium Watch</div>
                    <div className="slide-desc">Designed to highlight real men’s love of complexity with outstanding design and superb performance</div>
                    <div className="click-to-see">SEE CAMPAIGN <i class="fas fa-angle-right"></i></div>
                  </div>
                </div>
            </NavLink>
          </div>
          <div className="home-slide">
            <NavLink to={`/campaigns/${this.props.campaigns[5].id}`} className="featured-product">
              <div className="featured-image featured-image3"></div>
                <div className="slide-content">
                  <div className="move-content">
                    <div className="featured-tag">FEATURED</div>
                    <div className="slide-title">V-Tex: 12 Feature Nanotech Shoe for all Seasons</div>
                    <div className="slide-desc">A mix of a slipper & a boot in one 12 feature all-weather waterproof breathable nanotech knit shoe</div>
                    <div className="click-to-see">SEE CAMPAIGN <i class="fas fa-angle-right"></i></div>
                  </div>
                </div>
            </NavLink>
          </div>
        </Slider>
      </div>

      <div className="content-carousel">
          <div className="popular-projects">
            <h3>Popular Projects</h3>
            <div>
              <GreetingCarouselContainer /> 
            </div>
          </div>
        </div>

        <div className="search-icons">
          <div className="icon-container">
            <div className="create-image"></div>
            <h1>Which categories interest you?</h1>
            <h3>Discover projects just for you and get great recommendations when you select your interests.</h3>
            <div className="icons">
                <div className="inner-icon">
              <NavLink to={"/categories/0"}>
                  <i class="fas fa-home"></i>
              </NavLink>
                  <j>HOME</j>
                </div>
                <div className="inner-icon">
              <NavLink to={`/categories/${this.props.categories[2].id}`}>
                  <i class="fas fa-mobile-alt"></i>
              </NavLink>
                  <j>ACCESSORIES</j>
                </div>
                <div className="inner-icon">
              <NavLink to={`/categories/${this.props.categories[0].id}`}>
                  <i class="fas fa-hiking"></i>
              </NavLink>
                  <j>TRAVEL</j>
                </div>
                <div className="inner-icon">
              <NavLink to={`/categories/${this.props.categories[1].id}`}>
                  <i class="fas fa-heartbeat"></i>
              </NavLink>
                  <j>FITNESS</j>
                </div>
                <div className="inner-icon">
              <NavLink to={`/categories/${this.props.categories[3].id}`}>
                  <i class="fas fa-headphones"></i>
              </NavLink>
                  <j>AUDIO</j>
                </div>
                <div className="inner-icon">
              <NavLink to={`/categories/${this.props.categories[4].id}`}>
                  <i class="fas fa-video"></i>
              </NavLink>
                  <j>FILM</j>
                </div>
            </div>
          </div>
        </div>

   

        <div className="all-images">
          <div className="image-blocks">
                <div className="block-to-flex">
              <NavLink to={`/categories/${this.props.categories[2].id}`}>
                <div className="image-flex">
                  <div className="image1 squre"></div>
                  <div className="image-text">10 Cool & Clever Finds</div>
                </div>
                <div className="see-collection">SEE THE COLLECTION <i class="fas fa-angle-right"></i></div>
              </NavLink>
                </div>
              
              <div className="block-to-flex">
                <NavLink to={`/categories/${this.props.categories[2].id}`}>
                  <div className="image-flex">
                    <div className="image2 squre" ></div>
                    <div className="image-text">Team Favorites</div>
                  </div>
                  <div className="see-collection">SEE THE COLLECTION <i class="fas fa-angle-right"></i></div>
                </NavLink>
              </div>

              <div className="block-to-flex">
                <NavLink to={`/categories/${this.props.categories[2].id}`}>
                  <div className="image-flex">
                    <div className="image3 squre"></div>
                    <div className="image-text">InDemand Superstars</div>
                  </div>
                  <div className="see-collection">SEE THE COLLECTION <i class="fas fa-angle-right"></i></div>
                </NavLink>
              </div>

              <div className="block-to-flex">
                <NavLink to={`/categories/${this.props.categories[2].id}`}>
                  <div className="image-flex">
                    <div className="image4 squre"></div>
                    <div className="image-text">Production Ready</div>
                  </div>
                  <div className="see-collection">SEE THE COLLECTION <i class="fas fa-angle-right"></i></div>
                </NavLink>
              </div>
          </div>
        </div>

    
        
      </div>
    )
  }
};


export default Greeting;


