import React, { useState, type FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
}

const UserForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: "", email: "" });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name , value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log('From submitted with data:' , formData)
        setFormData({name:'', email: ''});
    };


    const handleClear = () => {
        setFormData({ name: "", email: "" });
    };

    return (
        <div
            style={{
                padding: "20px",
                maxWidth: "400px",
                margin: "0 auto",
            }}
        >
            <h2>User Form Exercise - Solution</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                        width: "100%",
                        padding: "8px",
                        marginTop: "5px",
                        }}
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                        width: "100%",
                        padding: "8px",
                        marginTop: "5px",
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "8px 16px",
                        marginRight: "10px",
                        border: "none",
                        borderRadius: "5px",
                    }}
                >
                    Submit
                </button>

                <button
                    type="button"
                    onClick={handleClear}
                    style={{
                        backgroundColor: "red",
                        color: "white",
                        padding: "8px 16px",
                        border: "none",
                        borderRadius: "5px",
                    }}
                >
                    Clear
                </button>
            </form>
            <div
                style={{
                    background: "#f4f4f4",
                    marginTop: "20px",
                    padding: "10px",
                    borderRadius: "5px",
                }}
            >
                <h4>Current information:</h4>
                <p>Name: {formData.name || "Not yet filled out"}</p>
                <p>Email: {formData.email || "Not yet filled out"}</p>
            </div>
        </div>
    );
};

export default UserForm;
