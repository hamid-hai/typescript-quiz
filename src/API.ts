
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {

    // API CONNECTION POINT, TAKING IN MULTIPLE PARAMETERS THAT CAN BE ADJUSTED 
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    
    const data = await (await fetch(endpoint)).json();
    console.log(data)
}