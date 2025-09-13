function Id(props) {
    const Idstyle = {
        border: '2px solid black',
        borderRadius: '10%',
    textAlign: 'center',
    padding: '50px'
}
return (
    <div style={Idstyle}>
        <img src="./pic.jpg" alt="" className="img" />
        <div className="details">
            <h2>V.Tharaka Ram</h2>
            <p>Course:{props.course}</p>
            <p>Rollnumber:{props.rollnumber}</p>
            <p>BloodGroup:B+</p>
            <p>DOB:03/11/2005</p>
        </div>
    </div>
)
}
export default Id;