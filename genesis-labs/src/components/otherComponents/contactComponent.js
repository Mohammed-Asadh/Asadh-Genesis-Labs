import {useState} from 'react';

function Contact() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleNameChange = (e) => {
setName(e.target.value);
};

const handleEmailChange = (e) => {
setEmail(e.target.value);
};
const handleMessageChange = (e) => {
setMessage(e.target.value);
};
const handleSubmit= (e) => {
e.preventDefault();
alert("Message send successfully!");
setName("");
setEmail("");
setMessage("");

};

return(
<div>
<h2>Contact us</h2>
<form onSubmit={handleSubmit}>
<label htmlFor="user_name"> enter your name: </label>
<input type="text" id="user_name" value={name} onChange={handleNameChange} required />
<br />
<label htmlFor="user_email"> Enter your Email: </label>
<input type="email" id="user_email" value={email} onChange={handleEmailChange} required />
<br />
<label htmlFor="user_message"> enter your message here: </label>
<textarea id="user_message" value={message} onChange={handleMessageChange} required />
<br />
<button type="submit"> Submit </button>
</form>
</div>
);
}
export default Contact;
