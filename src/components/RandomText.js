export default function RandomText(props){
    //Random REACT component with fragment instead of div
    return(

        <>
        <h3>I am a react component that uses a fragment instead of a div</h3>
        <h3>{props.text}</h3>
        </>
    )

}