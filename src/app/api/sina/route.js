const data = [
  {
    name: "Sina",
    family: "Kamjoo",
    friend: "sahar",
    job: "Business Developer",
  },
  {
    name: "Sahar",
    family: "gandomkar",
    friend: "sina",
    job: "NextJS Developer",
  },
];

export async function GET() {
  return Response.json(data);
}
