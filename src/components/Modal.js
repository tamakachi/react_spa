import './Modal.css'

export default function Modal(props) {
  return (
    <div className="modal-backdrop">
      <div className="modal" style={{
        border: "4px solid",
        borderColor: "#ff4500",
        tectAlign:"center"
      }}>
        {props.children}
        <button onClick={props.hideModal}>Close</button>
      </div>
    </div>
  )
}
