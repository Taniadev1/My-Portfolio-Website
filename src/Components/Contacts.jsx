import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contacts() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/paoxvwpb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <hr />
      <div
        name="Contacts"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // Method="POST"          action="https://getform.io/f/paoxvwpb"

            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4"> Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-grey-700">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow appearance-none border rounded-lg py-2 px-3 text-grey-700 leading-tight focus:shadow-outline "
                type="text"
                name="name"
                placeholder="Enter Your fullname"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-grey-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow appearance-none border rounded-lg py-2 px-3 text-grey-700 leading-tight focus:shadow-outline "
                type="text"
                name="email"
                placeholder="Enter Your email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-grey-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow appearance-none border rounded-lg py-2 px-3 text-grey-700 leading-tight focus:shadow-outline "
                type="text"
                name="message"
                placeholder="Enter Your Query message"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacts;
