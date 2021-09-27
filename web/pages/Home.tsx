import useSwr from 'swr'

type a=number

const fetcher = async (url: string) => {
  let res = await fetch(url)
  return await res.text()
}

const Home = () => {
  let { data, error } = useSwr('/api/greeter/hello', fetcher)
  return <div>
    <h1>首页</h1>
    <p>/api/greeter/hello 的结果为： {error
      ? '加载出错'
      : data
        ? JSON.stringify(data)
        : '加载中...'}</p>
  </div>
}
export default Home