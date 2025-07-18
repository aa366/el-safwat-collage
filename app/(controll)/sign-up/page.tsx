"use client";
import { Input } from "@/components/ui/input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "@/firebase/config"
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaGoogle } from "react-icons/fa";


const Page = () => {
  const data = {
    msg: {
      title: "welcom to safwat colleage",
      message: "this a good step into you career ",
    },

    name: {
      value: " Name",
      errors: {
        min: " Name Can't be less than 3 letters",
        max: " Name Can't be more than 15 letters",
        letters: " Name must be letters",
        required: "this field is requierd",
      },
    },
    email: {
      value: "email",
      errors: {
        valide: "Email Not Valide",

        required: "this field is requierd",
      },
    },
    password: {
      value: "password",
      errors: {
        min: "password Can't be less than 8 ",
        max: "password Can't be more than 32 ",

        required: "this field is requierd",
      },
    },
    rPassword: {
      value: "Repeat Password",
      errors: {
        typical: "Does Not matches with password",

        required: "this field is requierd",
      },
    },
    submit: "submit",
    google: "Sign up with Google",
    or: "or",
  };
  const isRight = false;

  const form = useFormik({
    initialValues: {
      name: "",

      email: "",
      password: "",
      rPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, data.name.errors.min)
        .max(15, data.name.errors.max)
        .required(data.name.errors.required),

      email: Yup.string().email().required(data.email.errors.required),

      password: Yup.string()
        .required(data.name.errors.required)
        .min(8, data.password.errors.min)
        .max(32, data.password.errors.max),

      rPassword: Yup.string()
        .required(data.name.errors.required)
        .oneOf([Yup.ref("password")], data.rPassword.errors.typical),
    }),
    onSubmit: async (values) => {
        try {
            await createUserWithEmailAndPassword(auth , )
            
        } catch (error) {
            
        }
    },
  });
  const handleGoogleSignUp = async () =>{
      
        
  }
  return (
    <main className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] max-w-3xl space-y-1.5 flex flex-col gap-4  p-4 justify-self-center items-center overflow-y-auto bg-white shadow-md pb-7">
      <div className={`' flex  mx-auto flex-col gap-2  `}>
        <h3 className="header">{data.msg.title}</h3>
        <p className="para text-gray-600">{data.msg.message}</p>
      </div>
      <div className="flex flex-col gap-3">
        <button className="  mx-auto  p-3 bg-green-800 text-white rounded-md hover:bg-green-950 active:scale-103 para flex gap-3 items-center " onClick={handleGoogleSignUp}>
          {" "}
          <FaGoogle className="" /> <span>{data.google}</span>
        </button>
      </div>
      <h4 className="header text-shadow-2xl ">{data.or}</h4>
      <form
        className="w-full space-y-1.5 flex flex-col gap-4 items-center"
        onSubmit={form.handleSubmit}
      >
        <div className="w-full max-w-md min-w-[150px] flex flex-col gap-2">
          <Input
            type="text"
            name="name"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.name}
            placeholder={data.name.value}
            className={` w-full focus-visible:ring-[3px] focus-visible:ring-green-800 focus-visible:border-green-800  ${
              isRight ? "text-right" : null
            } `}
          />
          {form.errors.name && form.touched.name ? (
            <p className="text-[0.8rem] font-medium capitalize text-destructive">
              {form.errors.name}
            </p>
          ) : null}
        </div>

        <div className="w-full max-w-md min-w-[150px] flex flex-col gap-2">
          <Input
            type="text"
            name="email"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.email}
            placeholder={data.email.value}
            className={` w-full focus-visible:ring-[3px] focus-visible:ring-green-800 focus-visible:border-green-800  ${
              isRight ? "text-right" : null
            } `}
          />
          {form.errors.email && form.touched.email ? (
            <p className="text-[0.8rem] font-medium capitalize text-destructive">
              {form.errors.email}
            </p>
          ) : null}
        </div>

        <div className="w-full max-w-md min-w-[150px] flex flex-col gap-2">
          <Input
            type="password"
            name="password"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.password}
            placeholder={data.password.value}
            className={` w-full focus-visible:ring-[3px] focus-visible:ring-green-800 focus-visible:border-green-800  ${
              isRight ? "text-right" : null
            } `}
          />
          {form.errors.password && form.touched.password ? (
            <p className="text-[0.8rem] font-medium capitalize text-destructive">
              {form.errors.password}
            </p>
          ) : null}
        </div>
        <div className="w-full max-w-md min-w-[150px] flex flex-col gap-2">
          <Input
            type="password"
            name="rPassword"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.rPassword}
            placeholder={data.rPassword.value}
            className={` w-full focus-visible:ring-[3px] focus-visible:ring-green-800 focus-visible:border-green-800  ${
              isRight ? "text-right" : null
            } `}
          />
          {form.errors.rPassword && form.touched.rPassword ? (
            <p className="text-[0.8rem] font-medium capitalize text-destructive">
              {form.errors.rPassword}
            </p>
          ) : null}
        </div>

        <button
          className=" max-w-sm mx-auto w-[40%] p-2 bg-green-800 text-white rounded-md hover:bg-green-950 active:scale-103 para "
          type="submit"
        >
          {data.submit}
        </button>
      </form>
    </main>
  );
};

export default Page;
