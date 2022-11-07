import Slider from 'react-slick'
import CollectionItem from '../CollectionItem'
import SectionItem from '../SectionItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const Collection = props => {
  const {collection} = props
  const {secondSection} = props

  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    className: 'slider-width-one',
  }

  const settings2 = {
    className: 'slider-width',
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    variableWidth: true,
  }

  return (
    <div className="first-container" testid="collection">
      <h1>New this week</h1>
      <Slider {...settings1}>
        {collection.map(eachCollection => (
          <CollectionItem
            key={eachCollection.id}
            collectionDetails={eachCollection}
          />
        ))}
      </Slider>
      <div className="bottom">
        <div className="filter">
          <p className="filters">Dates</p>
          <p className="filters">Group Size</p>
          <p className="filters">More Filters</p>
        </div>
        <div className="vl">|</div>
        <Slider {...settings2}>
          {secondSection.map(eachSection => (
            <SectionItem key={eachSection.id} sectionDetails={eachSection} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Collection
