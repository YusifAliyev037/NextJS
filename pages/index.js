import Image from "next/image";
import { Inter,Poppins } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

// const poppins = Poppins({ subsets: ["latin"], weight:[300,400,600] });

export default function Home({data}) {

  // console.log(props);

//? ClientSideRequest
  // useEffect(() =>{
  //   (async()=>{
  //     const res = await fetch("https://blog-api-t6u0.onrender.com/");
  //     const data = await res.json();
  //     console.log(data);
  //   })()
  // },[])


  const { push} = useRouter()
  return <div>
    <Head>
      <meta />
      <title>Home</title>
    </Head>
    <h1>Home</h1>
    <Image alt="#" width={300} height={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpLuBPIk4MpO9ZgG8jxtngD9yecxYYpd21Cj8QTznKQ&s" />
    <Image alt="#" width={300} height={300} src="/images.jpeg"  />
    <ul>
      {data.map((item) =>(
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  </div>
}



export async function getServerSideProps(context){
  const res = await fetch("https://blog-api-t6u0.onrender.com/posts");
      const articles = await res.json();
      console.log("-----------------");
      console.log(articles);
      console.log("-----------------");

      return {
        props:{
          data: articles
        }
}
}
