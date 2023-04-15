import { useState } from "react"
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from '../components/PopupWithForm';
import ImagePopup from '../components/ImagePopup';


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  };

  function handleCardClick(evt) {
    if (evt.target.classList.contains("element__image")) {
      setSelectedCard({ name: evt.target.alt, link: evt.target.src })
    };
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  };

  return (
    <>
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        title={"Обновить аватар"}
        name={"update-avatar"}
        isOpen={isEditAvatarPopupOpen && "popup_opened"}
        onClose={closeAllPopups}
        buttonText={"Сохранить"}
      >
        <input
          className="form__input form__input_type_avatar-url"
          id="avatar-input"
          name="avatar"
          type="url"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="avatar-input-error form__input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title={"Редактировать профиль"}
        name={"profile"}
        isOpen={isEditProfilePopupOpen && "popup_opened"}
        onClose={closeAllPopups}
        buttonText={"Сохранить"}
      >
        <input
          className="form__input form__input_type_name"
          id="name-input"
          name="name"
          type="text"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="name-input-error form__input-error"></span>
        <input
          className="form__input form__input_type_about"
          id="about-input"
          name="about"
          type="text"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="about-input-error form__input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title={"Новое место"}
        name={"add-card"}
        isOpen={isAddPlacePopupOpen && "popup_opened"}
        onClose={closeAllPopups}
        buttonText={"Создать"}
      >
        <input
          className="form__input form__input_type_image-title"
          id="place-input"
          name="name"
          type="text"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="place-input-error form__input-error"></span>
        <input
          className="form__input form__input_type_image-url"
          id="link-input"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="link-input-error form__input-error"></span>
      </PopupWithForm>

      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
      />
    </>
  );
};

export default App;
