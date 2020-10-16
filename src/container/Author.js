import React from 'react'

export const Author = ({ author }) => (
  <aside className="comment">
    <h2>{author.name}</h2>
    <h3>{author.bio}</h3>
  </aside>
)
