import React from "react";

const NewsLetter = () => {
  
    const onSubmitHandler=(event)=>{
        event.preventDefault();

    }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-green-900">
        Subscribe now and get 20% off
      </p>
      <p className="text-green-700 mt-3">This is our website</p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          className="bg-green-950 text-white text-xs px-10 py-4"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
