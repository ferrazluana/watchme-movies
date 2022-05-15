import '../styles/header.scss';
import { GenreResponseProps } from '../utils/types';

interface HeaderProps {
    selectedGenre: GenreResponseProps;
}

export function Header(props: HeaderProps) {
    const { selectedGenre } = props;
    return (
        <header>
            <span className="category">Category:<span> {selectedGenre.title}</span></span>
        </header>
    )
}