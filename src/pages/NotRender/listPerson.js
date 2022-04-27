import React, { memo, useState } from 'react'

const ListPerson = ({
  id,
  name,
  age,
  address,
  onClick,
  onChange,
  children,
  num
}) => {
  console.log('child re render')
  const [newName, setNewName] = useState('initialState')
  return (
    <>
      <ul
        onClick={() => {
          onClick(id, 'bb')
        }}
        style={{ background: 'red' }}
      >
        <li>{children}</li>
        <li>{name}</li>
        <li>{age}</li>
        <li>{address}</li>
        <li>{num}</li>
      </ul>
      <input
        type="text"
        onChange={(e) => {
          setNewName(e.target.value)
          onChange(newName)
        }}
      />
    </>
  )
}

// const ListPerson = ({ id, value, onChange }) => {
//   console.log('children', id, value)
//   return <input onChange={(e) => onChange(id, e.target.value)} value={value} />
// }

export default memo(ListPerson)
