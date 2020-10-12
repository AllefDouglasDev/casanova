import Router from "next/router"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    Router.replace("/items")
  })
  return <></>
}
