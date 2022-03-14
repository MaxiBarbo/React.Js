import React from 'react';
import { Icon } from '@iconify/react';
import './footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <span><Icon className='iconosFooter' icon="ant-design:instagram-outlined" /></span>
      <span><Icon className='iconosFooter' icon="fluent:mail-28-regular" /></span>
      <span><Icon className='iconosFooter' icon="akar-icons:github-fill" /></span>
    </div>
  )
}



