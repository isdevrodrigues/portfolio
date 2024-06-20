import React, { useState } from 'react';

// Your form component
const ContactForm: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch('https://formspree.io/f/xrbzzbgo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        })
            .then((response) => {
                if (response.ok) {
                    alert('Message sent successfully!');
                    setFormState({ name: '', email: '', message: '' });
                } else {
                    alert('Failed to send message.');
                }
            })
            .catch(() => {
                alert('There was an error sending your message.');
            });
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
                <input
                    className="w-full border rounded p-2"
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                />
                <input
                    className="w-full border rounded p-2"
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <textarea
                className="w-full border rounded p-2"
                placeholder="Message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-2">
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
