import Accordion from 'react-bootstrap/Accordion';

function Accordion1() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Vision & Mission</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>
              To foster research and technical advancement in astronomical science and to develop a community of passionate engineers to explore wonders of universe
            </li>
            <li>
              Our club strives to ignite an interest in astronomical research and its advancement while providing opportunities for socializing and networking among intelligent minds.We aim to foster curiosity amond students enabling hem to acquire knowledge,skills, and understanding in the study of astronomy , and to ignite a sense of passion within the community through a series of seminars , workshops and other events spread throughout the year.
            </li>
          </ul>
          
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default Accordion1;