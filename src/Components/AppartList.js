import '../Styles/Card.css';
import { list } from '../Datas/List';
import Card from './Card';

function AppartList() {
    return (
        <div className='content-cards'>
            {list.map((appart) => (
                <Card key={appart.id} appart={appart}/>            
            ))}
        </div>
    )
}
        
export default AppartList;