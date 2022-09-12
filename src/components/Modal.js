export default function Modal(props) {
  return (
    <>{props.children}
    <button onClick={props.hideModal}>Close</button>
    </>
  )
}
