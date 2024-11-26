import { Flex } from '@radix-ui/themes';
import './Companies.css';

const Companies = () => {

  return (
    <>
      <Flex className='companies-container'>
        <img src='/images/docusignLogo.png' alt='docusignLogo' className='company-logo-alt'/>
        <img src='/images/adpLogo.png' alt='adpLogo' className='company-logo'/>
        <img src='/images/salesforceLogo.svg.png' alt='salesforceLogo' className='company-logo'/>
        <img src='/images/zoomLogo.png' alt='zoomLogo' className='company-logo'/>
      </Flex>
    </>
  )
}

export default Companies;