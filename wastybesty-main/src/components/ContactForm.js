const ContactForm = () => {
  return (
    <div className="bg-[#fff7e6] p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">📬 Suggest a Plant</h2>
      <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <input
          type="text"
          name="plant"
          placeholder="Apna plant ka naam likhiye"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Aapka email (optional)"
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
