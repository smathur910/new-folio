import '../Button/Button.css';
import Link from 'next/link'

export default function Button(prop: ButtonProps){ 
    return (
        <>
          <Link className="btn btn-primary pf-button" href={prop.link}>{prop.title}</Link>
        </>
    );
}


