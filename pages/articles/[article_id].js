import { useRouter } from 'next/router'
import React from 'react'

export default function ArticleId() {

    const {query,push,back,forward} = useRouter()
  return (
    <div>ArticleId: {query.article_id}
    <br/>
    <button onClick={() => push("/about")}>About</button>
    <button onClick={() => push("/faq/questions")}>Questions</button>
    </div>
  )
}
