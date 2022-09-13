import './Modal.css'

export default function Modal(props) {
  return (
    <div className="modal-backdrop">
      <div className="modal" style={{
        border: "4px solid",
        borderColor: props.isSalesModal ? "#ff4500" : "#555",
        textAlign:"center"
      }}>
        {props.children}
        <button 
            onClick={props.hideModal} 
            className={props.isSalesModal ? "sales.btn" : ""}>Close</button>
      </div>
    </div>
  )
}
