"use client";
import { Input } from "@/components/ui/input";
import { sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup  } from "firebase/auth";
import { auth, liteStore } from "@/firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore/lite";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaGoogle } from "react-icons/fa";
import { User } from "@/app/interfaces";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { GoogleAuthProvider } from "firebase/auth";

const Page = () => {
  const data = {
    lost:{
      lostPrompt:"Enter your Email",
lostAlet:"we send you an email to rest you password ,don't find it ? check spams",
 msg:"lost your password",
 fail:"somthing went wrong"
    },
    msg: {
      title: "welcom back to safwat colleage",
      message: "success comes with hardworking  ",
      error: "somthing went wrong",
      ok: "you Log in successfully",
      login: "don't you have account?",
      
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
    submit: "submit",
    google: "log in with Google",
   
    or: "or",
  };
  const isRight = false;
  const router = useRouter();
  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);

  const form = useFormik({
    initialValues: {
     

      email: "",
      password: "",
    
    },
    validationSchema: Yup.object({
     

      email: Yup.string().email().required(data.email.errors.required),

      password: Yup.string()
        .required(data.password.errors.required)
        .min(8, data.password.errors.min)
        .max(32, data.password.errors.max),

     
    }),
    onSubmit: async (values) => {
      try {
        await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        ).then(() => {
        

        

          
          setOk(true);
        });

        router.back();
      } catch (error) {
        setError(true);
        console.error(error);
      }
    },
  });
  const handleLostPassword = async ()=>{
    const email = prompt(data.lost.lostPrompt)
  
    if(!email?.includes("@") && !email?.includes(".")){
      alert(data.lost.fail)
      return
    }
    

    
    await sendPasswordResetEmail(auth, email)
  .then(() => {
   
    alert(data.lost.lostAlet)
  })
  .catch((error) => {
   setError(true)
   console.error(error);
   
    
  });
    
  }
  

  const handleGoogleSignUp = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider) .then(async () => {
        setOk(true)
        router.back()
       
     
      });;
  };

  return (
    <main
      className={`w-full sm:w-[90%] md:w-[70%] lg:w-[50%] max-w-3xl space-y-1.5 flex flex-col gap-4  p-4 justify-self-center items-center overflow-y-auto bg-white shadow-md pb-7 ${
        isRight && "text-right"
      }`}
    >
      <div
        className={`' flex  mx-auto flex-col gap-2 ${isRight && "text-right"} `}
      >
        <h3 className="header">{data.msg.title}</h3>
        <p className="para text-gray-600">{data.msg.message}</p>
        <Link href={"/sign-up"}>
          <span className=" text-[rgba(38,61,161,0.84)] h-full w-full ">
            {data.msg.login}
          </span>
        </Link>
        {error && <p className="para text-destructive">{data.msg.error}</p>}
        {ok && <p className="para text-green-800">{data.msg.ok}</p>}
      </div>
      <div className="flex flex-col gap-3">
        <button
          className="  mx-auto  p-3 bg-green-800 text-white rounded-md hover:bg-green-950 active:scale-103 para flex gap-3 items-center "
          onClick={handleGoogleSignUp}
        >
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
            name="email"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            autoComplete="User-email"
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
            autoComplete="new-password"
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

        <button type="button" className="text-blue-800 capitalize" onClick={handleLostPassword}>
              {data.lost.msg}
        </button>
        

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
