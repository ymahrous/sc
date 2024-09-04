import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [state, handleSubmit] = useForm("xqazjqgg");
    
    if (state.succeeded) {
        return(<div id="form" className="max-w-[1240px] m-auto p-4 h-screen">
            <form className="max-w-[600px] m-auto p-4">
                <h1 className="text-2xl font-bold text-center p-4">Sent successfully!</h1>
            </form>
    </div>)}
    return(
        <div id="form" className="max-w-[1240px] m-auto p-4 h-screen">
            <h1 className="text-2xl font-bold text-center p-4">Let&apos;s talk</h1>
            <form onSubmit={handleSubmit} method="POST" className="max-w-[600px] m-auto p-4">
                <div className="grid grid-cols-2 gap-2">
                    <input onClick={e=>setName(e.target.value)} className="border shadow-lg p-3" id="name" type="text" name="name" placeholder="Name" />
                    <input onClick={e=>setEmail(e.target.value)} className="border shadow-lg p-3" id="email" type="email" name="email" placeholder="Email" />
                </div>
                <input onClick={e=>setSubject(e.target.value)} className="w-full border shadow-lg p-3 my-2" id="subject" type="text" name="subject" placeholder="Subject" />
                <textarea id="message" name="message" onClick={e=>setMessage(e.target.value)} className="w-full border shadow-lg p-3" cols="30" rows="10" placeholder="Message"></textarea>
                <button type="submit" disabled={state.submitting} className="w-full border shadow-lg p-3">Send</button>
            </form>
        </div>
    );
};