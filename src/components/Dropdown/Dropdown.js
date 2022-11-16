import React from 'react'
import BSDropdown from 'react-bootstrap/Dropdown';
import BSDropdownButton from 'react-bootstrap/DropdownButton';

const Dropdown =  ({title,list,onClick})  => {
  return (
    <BSDropdownButton  title={title}>
        {
            list.map((item, key) => {
                return (
                    <BSDropdown.Item key={key} href={item.href || '#'} onClick={onClick} >{item.name}</BSDropdown.Item>
                )
            })
        }
    </BSDropdownButton>
  )
}

export default Dropdown;
