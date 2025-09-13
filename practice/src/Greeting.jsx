function Greeting(person){
    console.log(typeof(person));
    
    return(
        <div>
            <p>hi {person.receivedName},{person.age} </p>
        </div>
    )
}
export default Greeting