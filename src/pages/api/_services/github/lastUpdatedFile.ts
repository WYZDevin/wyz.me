import { ACCESS_TOKEN, getSecret } from 'astro:env/server'

interface LastUpdatedTimeData {
  lastUpdatedTime: string
  latestCommitUrl: string
}

const getLastUpdatedTimeByFile = async (
  filePath: string
): Promise<LastUpdatedTimeData> => {
  const API_URL = `https://api.github.com/repos/WYZDevin/wyz.github.io/commits?`

  const params = new URLSearchParams({
    path: `src/content/${filePath}`,
    per_page: '1'
  }).toString()
  // console.log(getSecret('ACCESS_TOKEN'))
  const response = await fetch(API_URL + params, {
    headers: { Authorization: `Bearer ${getSecret('ACCESS_TOKEN')}` }
  })

  const [data] = await response.json()

  return {
    lastUpdatedTime: data.commit.committer.date,
    latestCommitUrl: data.html_url
  }
}

export default getLastUpdatedTimeByFile
