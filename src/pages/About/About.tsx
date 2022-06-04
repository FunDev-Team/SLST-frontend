import Footer from '../../components/Footer';
import Introduce from './Introduce';
import Information from './Information'
import Members from './Members';
import Header from '../../components/Header';

function About() {

  return (
    // chỉnh sửa font-size và color 
    <div >
      
      <Header />
      <div className="font-inter">
        <Introduce />
        <Information />
        <Members />
        <Footer />
      </div>
     
    </div>
  );
}

export default About;
