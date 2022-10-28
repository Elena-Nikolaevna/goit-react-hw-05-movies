import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/api";
import { ReviewsText, ReviewsList, ReviewsListItem, ReviewsContent } from './Reviews.styled';

export const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getMovieReviews(movieId).then(setReviews)
    }, [movieId]);

    const isReviewsEmpty = reviews.length === 0;
    
    return (
        isReviewsEmpty ? 
        <ReviewsText>We don't have any reviews for this movie</ReviewsText>
        :
        <ReviewsList>
            {reviews.map(review => {
                const {id, content, author} = review;
                return (
                    <ReviewsListItem key={id}>
                        <ReviewsText><b>Author: {author}</b></ReviewsText>
                        <ReviewsContent>{content}</ReviewsContent>
                    </ReviewsListItem>
                )
            })}
        </ReviewsList>
    )
}