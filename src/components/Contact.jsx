const Contact = () => {
  return (
    <div className="py-8 px-4 text-gray-900">
      <h1 className="text-2xl font-bold py-2">Contact Us:</h1>
      <form className="flex flex-col items-start">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 m-2 rounded-sm"
        />
        <input
          type="text"
          placeholder="Email"
          className="border p-2 m-2 rounded-sm"
        />
        <input
          type="text"
          placeholder="Message"
          className="border p-2 m-2 rounded-sm"
        />
        <button className="border p-2 m-2 rounded-sm bg-green-300 w-1/10">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
