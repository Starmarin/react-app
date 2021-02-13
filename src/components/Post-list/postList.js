import React from 'react';
import Item from '../post-list-item';
import './post-list.css'
const List = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
    const elements = posts.map(i => {
        const { id, ...itemProps } = i;
        return (
            <li key={id} className="list-group-item">
                <Item {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />
            </li>
        )
    });
    return (

        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default List;