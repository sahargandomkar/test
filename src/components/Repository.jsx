// export async function Repository() {
//   const res = await fetch("https://api.github.com/orgs/ORG/repos", {
//     headers: { Authorization: `Bearer ${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}` }});
//   const repo = await res.json();
//   console.log(repo)
//   return { props: { repo } };
// }

// export default function Page({ repo }) {
//   return (
//     <main>
//       <p>{repo.stargazers_count}</p>
//     </main>
//   );
// }
