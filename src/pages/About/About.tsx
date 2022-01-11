import Footer from '../../components/Footer';
import Introduce from './Introduce';
import  Information from './Information'
import Members from './Members';

function About() {

  return (
    // chỉnh sửa font-size và color 
    <div className='font-inter'>
      <Introduce />
      <Information />
      <Members />
      <Footer />
    </div>
  );
}

export default About;
