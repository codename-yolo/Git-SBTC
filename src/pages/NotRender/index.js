import React, { useCallback, useState } from 'react'
import ListPerson from './listPerson'
const persons = [
  {
    id: 1,
    name: 'Smith',
    age: 32,
    address: 'Hưng Yên'
  },
  {
    id: 2,
    name: 'Jones',
    age: 40,
    address: ' Yên Bái'
  },
  {
    id: 3,
    name: 'Anna',
    age: 92,
    address: 'Thái Nguyên'
  }
]

const MapRender = () => {
  const [listPerson, setListPerson] = useState(persons)

  console.log(listPerson)
  const handleClick = useCallback((id, value) => {
    setListPerson((prev) => {
      const result = prev.map((item) => {
        return item.id !== id ? item : { ...item, value: value }
      })
      return result
    })
  }, [])
  const hanleOnChage = useCallback((value) => {
    setListPerson((prev) => {
      return prev !== value ? prev : value
    })
  }, [])

  return (
    <div>
      {listPerson.map(({ id, name, age, address }) => {
        return (
          <ListPerson
            key={id}
            id={id}
            age={age}
            name={name}
            addres={address}
            onClick={handleClick}
            onChange={hanleOnChage}
          ></ListPerson>
        )
      })}
    </div>
  )
}

// const MapRender = () => {
//   const [items, setItems] = useState([
//     { id: 1, value: '' },
//     { id: 2, value: '' },
//     { id: 3, value: '' }
//   ])

//   console.log('parent', items)

//   const onChange = useCallback((id, value) => {
//     setItems((prev) => {
//       const result = prev.map((item) => {
//         return item.id !== id ? item : { ...item, value: value }
//       })
//       return result
//     })
//   }, [])
//   return (
//     <div>
//       {items.map((item) => {
//         return (
//           <ListPerson
//             key={item.id}
//             id={item.id}
//             value={item.value}
//             onChange={onChange}
//           ></ListPerson>
//         )
//       })}
//     </div>
//   )
// }

export default MapRender
