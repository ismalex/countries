import { useNavigate } from "react-router-dom";
// Interfaces
import { CountryItemComponent } from "../../interfaces";

export default function CountryListItem(props: CountryItemComponent) {
    const navigate = useNavigate();

    const handleItemClick = (event: any) => {
        props.onSelect(event.target.dataset.user)
        navigate('/country-details')
    }

    return (
        <div style={{ borderBottom: 'grey 1px solid', padding: 24, cursor: 'pointer' }} data-user={props.code} onClick={handleItemClick}>{props.name}</div>
    )
}
