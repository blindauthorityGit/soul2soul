"use client";

import { useState } from "react";

export default function ContactForm({ onSuccess }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        company: "", // 🧠 honeypot
    });

    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("loading");
        setError("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.error || "Fehler beim Senden.");
            }

            setStatus("success");

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                company: "",
            });

            if (onSuccess) onSuccess();
        } catch (err) {
            setStatus("error");
            setError(err.message);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* 🧠 Honeypot */}
            <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="hidden"
                autoComplete="off"
            />

            <div className="grid gap-4 sm:grid-cols-2">
                <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name *"
                    className="w-full border border-black/10 px-4 py-3 text-[15px] outline-none focus:border-[#2f7c83]"
                />

                <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-Mail *"
                    className="w-full border border-black/10 px-4 py-3 text-[15px] outline-none focus:border-[#2f7c83]"
                />
            </div>

            <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon"
                className="w-full border border-black/10 px-4 py-3 text-[15px] outline-none focus:border-[#2f7c83]"
            />

            <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Nachricht *"
                className="w-full resize-none border border-black/10 px-4 py-3 text-[15px] outline-none focus:border-[#2f7c83]"
            />

            <div className="flex items-center gap-4 pt-2">
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-[#2f7c83] px-6 py-3 text-[13px] tracking-[0.1em] text-white hover:bg-[#286a70] disabled:opacity-70"
                >
                    {status === "loading" ? "Senden..." : "Nachricht senden"}
                </button>

                {status === "success" && <span className="text-sm text-[#2f7c83]">Gesendet ✓</span>}

                {status === "error" && <span className="text-sm text-red-600">{error}</span>}
            </div>
        </form>
    );
}
