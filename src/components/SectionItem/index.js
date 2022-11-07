import './index.css'

const SectionItem = props => {
  const {sectionDetails} = props
  const {description} = sectionDetails

  return (
    <div className="sections">
      <p className="section">{description}</p>
    </div>
  )
}
export default SectionItem
