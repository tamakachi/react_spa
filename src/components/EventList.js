import styles from './EventList.module.css'

export default function EventList({list, deleteClick}) {

  
    return (
    <>{list.map((item)=>(
        <div className={styles.card} key={item.id}>
          <h2>{item.title}, {item.date}</h2>
          <p>{item.location}</p>
          <button onClick={()=>{deleteClick(item.id)}}>Delete</button>
        </div>))}</>
  )
}