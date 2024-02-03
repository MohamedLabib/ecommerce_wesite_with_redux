import { FaStar, FaRegStar} from 'react-icons/fa'; 

export default function Ratings(rating){
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<span key={i} ><FaStar className="star filled" /></span>);
            } else {
                stars.push(<span key={i}><FaRegStar className="star" /></span>);
            }
        }

        return <div className="star-rating">{stars}</div>;
    };
