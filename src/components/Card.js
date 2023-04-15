import React from 'react'

function Card({ card, onCardClick }) {
    return (
        <li className="element">
            <button className="element__delete-button" aria-label="удалить фото" />
            <img className="element__image" src={card.link} alt={card.name} onClick={onCardClick} />
            <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-container">
                    <button className="element__like-button" aria-label="поставить лайк" type="button" />
                    <p className="element__like-quantity">{card.likes.length}</p>
                </div>
            </div>
        </li>);
};

export default Card;