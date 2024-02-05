import { Octokit } from "octokit"



export async function GET(req,res) {
    const octokit = new Octokit({
        auth: "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",
      });
      const response =  await octokit.request('GET /repos/{owner}/{repo}/issues', {
        owner: 'OWNER',
        repo: 'REPO',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      res.status(200).json(response)
  }
  
 