import "./Services.css"
function Services(props) {
  return (
  <>
            <div className="col-lg-6">
                <div className="service-item">
                <i className={`fa-solid ${props.logo}`}></i>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            </div>
                </div>
  </>
  )
}
export default Services;