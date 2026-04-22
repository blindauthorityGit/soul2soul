"use client";

import { useState } from "react";

export default function ContactForm({ onSuccess }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
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
                throw new Error(data?.error || "Nachricht konnte nicht gesendet werden.");
            }

            setStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });

            if (onSuccess) onSuccess();
        } catch (err) {
            setStatus("error");
            setError(err.message || "Es ist ein Fehler aufgetreten.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#4e8b92]">
                        Name *
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-black/10 bg-transparent px-4 py-3 text-[15px] text-black outline-none transition placeholder:text-black/35 focus:border-[#4e8b92]"
                        placeholder="Dein Name"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#4e8b92]"
                    >
                        E-Mail *
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-black/10 bg-transparent px-4 py-3 text-[15px] text-black outline-none transition placeholder:text-black/35 focus:border-[#4e8b92]"
                        placeholder="mail@beispiel.at"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#4e8b92]">
                    Telefon
                </label>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-black/10 bg-transparent px-4 py-3 text-[15px] text-black outline-none transition placeholder:text-black/35 focus:border-[#4e8b92]"
                    placeholder="+43 ..."
                />
            </div>

            <div>
                <label htmlFor="message" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#4e8b92]">
                    Nachricht *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none border border-black/10 bg-transparent px-4 py-3 text-[15px] text-black outline-none transition placeholder:text-black/35 focus:border-[#4e8b92]"
                    placeholder="Erzähl uns kurz, worum es geht."
                />
            </div>

            <div className="flex items-center gap-4 pt-2">
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex min-w-[180px] items-center justify-center bg-[#2f7d85] px-6 py-3 text-[13px] font-medium tracking-[0.12em] text-white transition hover:bg-[#276b72] disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {status === "loading" ? "Wird gesendet ..." : "Nachricht senden"}
                </button>

                {status === "success" && (
                    <p className="text-sm text-[#2f7d85]">Danke — deine Nachricht wurde gesendet.</p>
                )}

                {status === "error" && <p className="text-sm text-red-600">{error}</p>}
            </div>
        </form>
    );
}
