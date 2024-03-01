import React, {useEffect, useState} from 'react'
import wisdom from '../Interface/interface';
import getData from '../DataService/DataSevices';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePageComponent = () => {

  const [adviceInfo, setAdviceInfo] = useState<wisdom>();
  const [nextAd, setNextAd] = useState(true);

  useEffect(()=> {
    const adviceData = async ()=> {
      const fetchData = await getData();
      setAdviceInfo(fetchData);
    }
    
    adviceData();
  }, [nextAd])

  const newAdvice = () => {
    setNextAd(!nextAd);
  }

  return (
    <div className='background'>
      <Row>
        
        <Col className='mainContainer'>
            <h1 className='idText'>Advice #{adviceInfo && adviceInfo.id}</h1>
            <h1 className='adviceText'>"{adviceInfo && adviceInfo.advice}"</h1>
            <div></div>
            <Button className="nextBtn" variant="success" onClick={newAdvice}>next</Button>{' '}
        </Col>
       
      </Row>
    </div>
    


  )
}

export default HomePageComponent

