import { useState, useEffect } from "react";
import Card from "./Card";
import api from "../utils/Api";
import defaultAvatar from "../images/avatar.jpg";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const [userAvatar, setUserAvatar] = useState(defaultAvatar);
    const [userName, setUserName] = useState("Жак-Ив Кусто");
    const [userDescription, setUserDescription] = useState("Исследователь океана"); 

    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getCurrentUser()
            .then(res => {
                setUserName(res.name)
                setUserDescription(res.about)
                setUserAvatar(res.avatar)
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        api.getCards()
            .then(res => setCards(res))
            .catch(err => console.log(err))
    }, []);

    return (
        <main>
            <section className="profile">
                <div className="profile__container-info">
                    <div className="profile__container-avatar">
                        <img src={userAvatar} className="profile__avatar" alt="Аватар профиля." />
                        <button onClick={onEditAvatar} className="profile__avatar-edit-button"
                            aria-label="открыть форму редактирования аватара"></button>
                    </div>
                    <div className="profile__user">
                        <div className="profile__info">
                            <h1 className="profile__name">{userName}</h1>
                            <p className="profile__caption">{userDescription}</p>
                        </div>
                        <button onClick={onEditProfile} type="button" className="profile__edit-button" aria-label="редактировать профиль">
                        </button>
                    </div>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-button" aria-label="добавить фото"></button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {cards.map(card => {
                        return (
                            <Card
                                key={card._id}
                                card={card}
                                onCardClick={onCardClick}
                            />)
                    })}
                </ul>
            </section>
        </main>
    );
};

export default Main;