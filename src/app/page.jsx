"use server";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/sina");
  const data = await res.json();
  console.log(data)
  
  return (
    <>
      <ul>
      hi
      </ul>
    </>
  );
}
