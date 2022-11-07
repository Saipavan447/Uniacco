import './index.css'

const CollectionItem = props => {
  const {collectionDetails} = props
  const {image, description} = collectionDetails

  return (
    <div className="image-container">
      <img src={image} alt="camel" className="collection-image" />
      <div className="inner-text">
        <p className="inner-text-p">Collection</p>
        <h1 className="inner-text-h">{description}</h1>
        <button type="button" className="inner-text-button">
          Show all
        </button>
      </div>
    </div>
  )
}
export default CollectionItem
