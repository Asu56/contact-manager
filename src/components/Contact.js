
const Contact = (props) => {
    const deleteContact = () => {
        props.onContactDeleted(props.data.id);
    };

    return (
        <>
            <div className="contact">

                <div className="contactDetails">
                    <div>{props.data.name}</div>

                    <div>{props.data.phone}</div>

                    <div> {props.data.address}</div>

                    <button className="delete" onClick={() => deleteContact(props.data.id)}>Delete</button>
                </div>
            </div>

            <br />
        </>
    )
}

export default Contact;