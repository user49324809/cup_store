import React, { useState, useEffect } from 'react';

const initialReviews = [
    {
        id: 1,
        name: "Наталья",
        rating: 5,
        comment: "Хороший товар",
        avatar: "avatar.png"
    },
];

const Reviews = () => {
    const [reviewText, setReviewText] = useState('');
    const [name, setName] = useState('');                  
    const [rating, setRating] = useState(5);               
    const [reviews, setReviews] = useState(() => {
        // Загрузка отзывов из localStorage при инициализации
        const savedReviews = localStorage.getItem('reviews');
        return savedReviews ? JSON.parse(savedReviews) : initialReviews;
    });
    const [feedbackMessage, setFeedbackMessage] = useState('');

    // Сохранение отзывов в localStorage при обновлении состояния
    useEffect(() => {
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }, [reviews]);

    const handleChangeComment = (event) => {
        setReviewText(event.target.value);
    };

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeRating = (event) => {
        setRating(Number(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (reviewText.trim() === '' || name.trim() === '') {
            setFeedbackMessage('Пожалуйста, заполните все поля.');
            return;
        }

        const newReview = {
            id: Date.now(),
            name: name,
            rating: rating,
            comment: reviewText,
            avatar: "default-avatar.png"
        };

        setReviews([...reviews, newReview]);
        setReviewText('');
        setName('');
        setFeedbackMessage('Спасибо за ваш отзыв!');
    };

    return (
        <section className="reviews">
            <h2>Отзывы покупателей</h2>
            <p>Здесь вы можете оставлять свой отзыв:</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={handleChangeName}
                />
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={handleChangeRating}
                />
                <textarea
                    placeholder="Ваш отзыв"
                    value={reviewText}
                    onChange={handleChangeComment}
                />
                <button type="submit">Отправить отзыв</button>
            </form>
            {feedbackMessage && <p>{feedbackMessage}</p>}
            <h3>Все отзывы:</h3>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <img src={review.avatar} alt={`${review.name}'s Avatar`} />
                        <p><strong>{review.name}</strong> (Рейтинг: {review.rating})</p>
                        <p>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Reviews;