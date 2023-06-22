import { useState } from "react";

// import { Dave, John, Ram } from "./Persons";

const ContactAdder = (props) => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [location, setLocation] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        // setName("Dave");
        const contactData = { id: Math.random(), name, phone: mobile, address: location };

        if (name.length < 1 || mobile.length < 1 || location.length < 1) {
            alert("Please fill all the fields.")
        } else {
            props.onContactAdded(contactData);
            setName("");
            setMobile("");
            setLocation("");
        }
        // console.log(contactData);
    };


    // let resultCard;

    // if (name === "Dave") {
    //     resultCard = <Dave></Dave>;
    // } else if (name === "Ram") {
    //     resultCard = <Ram></Ram>;
    // } else if (name === "John") {
    //     resultCard = <John></John>
    // }

    return <>
        <div className="simpleAdder">
            <h3>New Contact</h3>
            <form onSubmit={onFormSubmit}>
                <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
                <input type="text" value={mobile} placeholder="Mobile Number" onChange={(e) => setMobile(e.target.value)}></input>
                <input type="location" value={location} placeholder="Address" onChange={(e) => setLocation(e.target.value)}></input>
                <br />
                <button>Add Contact</button>
            </form>
        </div >

    </>


}

export default ContactAdder;
