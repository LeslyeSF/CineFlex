import FooterBox from "./style";

export default function Footer(props){
    const [title, src, day] = props.children;
    
    return(
        <FooterBox>
            <div>
                <img src={src} alt="movie"/>
            </div>
            <div>
                <p>{title}</p>
                {day === undefined ? "" : <p>{day}</p>}
            </div>
            
        </FooterBox>
    );
}

