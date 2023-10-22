

const RatingStars = () => {
    const GRADES = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];

    return (
        <div className="container">
            <h1 className="result"></h1>
            <div className="stars">
                {
                    GRADES.map((grade, index) => (
                        <Star 
                            index={index} 
                            key={grade}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default RatingStars;