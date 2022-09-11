export type FetchReposProps = {
  id: number
  name: string
  description: string
  language: string
  html_url: string
}

export async function fetchRepos(): Promise<FetchReposProps[]> {
  const response = await fetch('https://api.github.com/users/luis-grizzo/repos')
    .then((res) => res.json())
    .catch((err) => console.error(err))

  return response
}
