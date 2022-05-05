import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { data } from './books'
import Book from './Book'
// setUp vars

function BookList() {
  return (
    <section className='bookList'>
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
