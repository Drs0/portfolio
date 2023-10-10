import { useState } from 'react';
import Button from './forms/butttons';
const EmailForm = () => {
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sentResult, setSentResult] = useState('');
    const [resultClass, setresultClass] = useState('');
    let result, sentresultClass;

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (recipient === "" || subject === "" || message === "") {
            setSentResult("Please fill all the fields!!");
            setresultClass("danger");
        } else {
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ recipient, subject, message }),
                });
                if (response.ok) {
                    setSentResult("Message Sent Succesfully!!");
                    setresultClass("success")
                } else {
                    console.log("error");
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };
    if ({ sentResult }) {
        sentresultClass = `result-${resultClass}`;
        result = <p className={sentresultClass}>{sentResult}</p>
    }
    return (
        <>
            <span className="title">Contact<span>Me</span></span>
            {result}
            <form className="form-contact" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Recipient"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className='form-contact-input'
                />
                <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className='form-contact-input'
                />
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className='form-contact-input'
                />
                <Button type='submit' isPrimary={true} send={true}>Send Email</Button>
            </form>
        </>
    );
};

export default EmailForm;
