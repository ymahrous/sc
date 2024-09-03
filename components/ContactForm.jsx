import { useState } from "react";
export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div id="form" className="max-w-[1240px] m-auto p-4 h-screen">
            <h1 className="text-2xl font-bold text-center p-4">Let&apos;s talk</h1>
            <form className="max-w-[600px] m-auto p-4">
                <div className="grid grid-cols-2 gap-2">
                    <input onClick={e => setName(e.target.value)} className="border shadow-lg p-3" type="text" placeholder="Name" />
                    <input onClick={e => setEmail(e.target.value)} className="border shadow-lg p-3" type="email" placeholder="Email" />
                </div>
                <input onClick={e => setSubject(e.target.value)} className="w-full border shadow-lg p-3 my-2" type="text" placeholder="Subject" />
                <textarea onClick={e => setMessage(e.target.value)} className="w-full border shadow-lg p-3" cols="30" rows="10" placeholder="Message"></textarea>
                <button type="submit" className="w-full border shadow-lg p-3">Send</button>
            </form>
        </div>
    );
};